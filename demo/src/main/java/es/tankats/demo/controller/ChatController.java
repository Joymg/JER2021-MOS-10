package es.tankats.demo.controller;

import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import es.tankats.demo.model.Chat;

@RestController
@RequestMapping("/chat")
@CrossOrigin
public class ChatController {
    
    Map<Long, Chat> chatMessages = new ConcurrentHashMap<>();
    AtomicLong nextId = new AtomicLong(0);

    /*
    @GetMapping
    public Collection<Chat> getMessages() {
        return chatMessages.values();
    }
    */

    @GetMapping
    public Collection<Chat> getLastMessage(){
        return chatMessages.values();
    }

    /*
    @GetMapping("/last")
    public ResponseEntity<Chat> getLastMessage(@PathVariable long last){
        last = nextId.get();
        Chat lastMessage = chatMessages.get(last);
        if (lastMessage != null) {
			return new ResponseEntity<>(lastMessage, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
    }
    */

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Chat addMessage(@RequestBody Chat chatMessage){
        long order = nextId.getAndIncrement();
        chatMessages.put(order, chatMessage);
        return chatMessage;
    }

    /*
    @GetMapping("/{nick}")
	public ResponseEntity<Chat> getPlayerMessage(@PathVariable String nick) {

		Chat postedMessage = chatMessages.get(nick);

		if (postedMessage != null) {
			return new ResponseEntity<>(postedMessage, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
    }
    */
}
