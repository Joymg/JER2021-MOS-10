package es.tankats.demo.controller;

import java.sql.Date;
import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import es.tankats.demo.model.Game;
import es.tankats.demo.model.Player;

@RestController
@RequestMapping("/players")
@CrossOrigin
public class PlayerController {
    
    Map<Long, Player> players = new ConcurrentHashMap<>(); 
    AtomicLong nextId = new AtomicLong(0);

    @GetMapping
	public Collection<Player> getPlayers() {
		return players.values();
	}
    
    @PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Player addPlayer(@RequestBody Player player) {


		long id = nextId.getAndIncrement();
		player.setId(id);
        players.put(id, player);
		
        /* if(players.size()>=2){
			Player player1 =players.remove((long)1);
			Player player2 =players.remove((long)2);
			Date d = new Date(System.currentTimeMillis());
			GameController.addGame(new Game(id, player1,player2,d));
        } */

		return player;
    }
    
    @PutMapping("/{id}")
	public ResponseEntity<Player> updatePlayer(@PathVariable long id, @RequestBody Player updatedPlayer) {

		Player savedPlayer = players.get(id);
		updatedPlayer.setId(id);

		if (savedPlayer != null) {

			players.put(id, updatedPlayer);

			return new ResponseEntity<>(updatedPlayer, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
    }
    
    @GetMapping("/{id}")
	public ResponseEntity<Player> getPlayer(@PathVariable long id) {

		Player savedPlayer = players.get(id);

		if (savedPlayer != null) {
			return new ResponseEntity<>(savedPlayer, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Player> deletePlayer(@PathVariable long id) {

		Player savedPlayer = players.get(id);

		if (savedPlayer != null) {
			players.remove(savedPlayer.getId());
			return new ResponseEntity<>(savedPlayer, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
    

}
