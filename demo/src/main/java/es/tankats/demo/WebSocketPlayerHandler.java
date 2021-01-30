package es.tankats.demo;

import java.io.IOException;
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
		sessions.remove(session.getId());
	}

	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {

		System.out.println("Message received: " + message.getPayload());
		JsonNode node = mapper.readTree(message.getPayload());

		//sendToOtherPlayerInGame(session,node);

		sendOtherParticipants(session, node);
	}

	private void sendToOtherPlayerInGame(WebSocketSession session, JsonNode node) throws IOException {

		long groupId = node.get("gameId").asLong();
		var sessionArray = games.get(groupId);
		if (!sessionArray[0].getId().equals(session.getId())) {
			sessionArray[0].sendMessage(new TextMessage(node.toString()));
		}
		else{
			sessionArray[1].sendMessage(new TextMessage(node.toString()));
		}
	}

	private void sendOtherParticipants(WebSocketSession session, JsonNode node) throws IOException {

		long groupId = node.get("gameId").asLong();

		for (WebSocketSession participant : games.get(groupId)) {
			if (!participant.getId().equals(session.getId())) {
				participant.sendMessage(new TextMessage(node.toString()));
			}
		}
	}

}
