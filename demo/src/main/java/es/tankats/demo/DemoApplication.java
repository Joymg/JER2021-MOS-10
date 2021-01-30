package es.tankats.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;


@SpringBootApplication
@EnableWebSocket
public class DemoApplication implements WebSocketConfigurer {


	@Override
	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
		registry.addHandler(playerHandler(), "/player").setAllowedOrigins("*");
	}

	@Bean
	public WebSocketPlayerHandler playerHandler() {
		return new WebSocketPlayerHandler();
	}
	
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);

		/*
		 * Player p = new Player(0,"","",0,0); /* JSONObject jsonObject =
		 * fileToJSONObject(new File("C:/Users/Josem/Desktop/mytextfile.json"));
		 * System.out.println(jsonObject); long id = (long) jsonObject.get("id"); String
		 * nickName = (String) jsonObject.get("nickName"); String password = (String)
		 * jsonObject.get("password"); int wonGames = (int) jsonObject.get("wonGames");
		 * int lostGames = (int) jsonObject.get("lostGames");
		 * 
		 * Player p = new Player(id, nickName, password, wonGames, lostGames);
		 * pc.addPlayertoMap(p);
		 */

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
