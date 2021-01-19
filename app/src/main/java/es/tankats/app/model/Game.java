package es.tankats.app.model;

import java.sql.Date;

public class Game {
    
	private long id;
    private Player player1;
    private Player player2;
    private Date timeStamp;

    
    public Game(long id, Player player1, Player player2, Date timeStamp) {
        this.id = id;
        this.player1 = player1;
        this.player2 = player2;
        this.timeStamp = timeStamp;
    }
    
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Player getPlayer1() {
        return player1;
    }

    public void setPlayer1(Player player1) {
        this.player1 = player1;
    }

    public Player getPlayer2() {
        return player2;
    }

    public void setPlayer2(Player player2) {
        this.player2 = player2;
    }

    public Date getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(Date timeStamp) {
        this.timeStamp = timeStamp;
    }
    
    
}
