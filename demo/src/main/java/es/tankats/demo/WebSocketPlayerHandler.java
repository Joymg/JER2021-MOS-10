package es.tankats.demo;

import java.io.IOException;
import java.util.Iterator;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

public class WebSocketPlayerHandler extends TextWebSocketHandler {

	private Map<String, WebSocketSession> sessions = new ConcurrentHashMap<>();
	private Map<Long, WebSocketSession[]> games = new ConcurrentHashMap<>();
	AtomicLong gameId = new AtomicLong();
	AtomicLong numPlayers = new AtomicLong();
	private ObjectMapper mapper = new ObjectMapper();

	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		System.out.println("New user: " + session.getId());
		sessions.put(session.getId(), session);
		long playerInGame = numPlayers.incrementAndGet();
		if (playerInGame % 2 == 1) {
			var gameSlots = new WebSocketSession[2];
			gameSlots[0] = session;
			games.put(gameId.get(), gameSlots);
			session.sendMessage(new TextMessage("{\"id\":0,\"gameId\":" + gameId.get() + ",\"character\":1}"));
		} else {
			var gameSlots = games.get(gameId.get());
			gameSlots[1] = session;
			games.remove(gameId.get());
			games.put(gameId.get(), gameSlots);
			session.sendMessage(
					new TextMessage("{\"id\":0,\"gameId\":" + gameId.getAndIncrement() + ",\"character\":2}"));
		}
	}

	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		System.out.println("Session closed: " + session.getId());

		long iter =0 ;

		for (WebSocketSession[] participants : games.values()) {
			if (participants[1] != null &&  participants[1].getId().equals(session.getId())) {
				if (participants[0] != null) {
					participants[0].sendMessage(new TextMessage("{\"id\":2}"));
					sessions.remove(participants[1].getId());
					participants[1]= null;
				} else
					sessions.remove(participants[1].getId());
					games.remove(iter);
				break;
			} else if (participants[0] != null && participants[0].getId().equals(session.getId())) {
				if (participants[1] != null) {
					participants[1].sendMessage(new TextMessage("{\"id\":2}"));
					sessions.remove(participants[0].getId());
					participants[0] = null;
				} else
					sessions.remove(participants[0].getId());
					games.remove(iter);
				break;
			}
			iter ++;
		}
	}

	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {

		System.out.println("Message received: " + message.getPayload());
		JsonNode node = mapper.readTree(message.getPayload());

		// sendToOtherPlayerInGame(session,node);

		sendOtherParticipants(session, node);
	}


	private void sendOtherParticipants(WebSocketSession session, JsonNode node) throws IOException {

		long groupId = node.get("gameId").asLong();

		if (!games.isEmpty()) {
			for (WebSocketSession participant : games.get(groupId)) {
				if (participant != null && !participant.getId().equals(session.getId())) {
					participant.sendMessage(new TextMessage(node.toString()));
				}
			}
		}
	}

}
