package es.tankats.demo;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import es.tankats.demo.controller.PlayerController;
import es.tankats.demo.model.Player;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);

		/* Player p = new Player(0,"","",0,0);
		/* JSONObject jsonObject = fileToJSONObject(new File("C:/Users/Josem/Desktop/mytextfile.json"));
		System.out.println(jsonObject);
		long id = (long) jsonObject.get("id");
		String nickName = (String) jsonObject.get("nickName");
		String password = (String) jsonObject.get("password");
		int wonGames = (int) jsonObject.get("wonGames");
		int lostGames = (int) jsonObject.get("lostGames");

		Player p = new Player(id, nickName, password, wonGames, lostGames); 
		pc.addPlayertoMap(p); */

	}

	/* public static JSONObject fileToJSONObject(File file) {
		JSONParser parser = new JSONParser();
		JSONObject jsonObject = null;
		try (Reader reader = new FileReader(file.getPath())) {
			jsonObject = (JSONObject) parser.parse(reader);
			
		} catch (IOException | ParseException e) {
			e.printStackTrace();
		}
		return jsonObject;
	} */

}
