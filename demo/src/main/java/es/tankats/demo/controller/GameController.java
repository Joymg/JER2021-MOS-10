package es.tankats.demo.controller;

import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

@RestController
@RequestMapping("/games")
public class GameController {

	static Map<Long, Game> games = new ConcurrentHashMap<>();
	static AtomicLong gameId = new AtomicLong(0);

	@GetMapping
	public Collection<Game> getGames() {
		return games.values();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public static Game addGame(@RequestBody Game game) {

		long id = gameId.incrementAndGet();
		games.put(id, game);
		return game;
	}

	/* @PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Game createGame(@RequestBody Game game) {

		long mapId = nextId.incrementAndGet();
		games.put(mapId, game);
		return game;
	} */

	@PutMapping("/{id}")
	public ResponseEntity<Game> updateGame(@PathVariable long id, @RequestBody Game updatedGame) {

		Game savedGame = games.get(updatedGame.getId());

		if (savedGame != null) {

			games.put(id, updatedGame);

			return new ResponseEntity<>(updatedGame, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/{id}")
	public ResponseEntity<Game> getGame(@PathVariable long id) {

		Game savedGame = games.get(id);

		if (savedGame != null) {
			return new ResponseEntity<>(savedGame, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Game> deleteGame(@PathVariable long id) {

		Game savedGame = games.get(id);

		if (savedGame != null) {
			games.remove(savedGame.getId());
			return new ResponseEntity<>(savedGame, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
