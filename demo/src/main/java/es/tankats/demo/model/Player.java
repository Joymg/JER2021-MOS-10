package es.tankats.demo.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Player {

    private long id;
    private String nickName;
    private int wonGames;
    private int lostGames;
    public Player(long id, String nickName, int wonGames, int lostGames) {
        this.id = id;
        this.nickName = nickName;
        this.wonGames = wonGames;
        this.lostGames = lostGames;
    }

    
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public int getWonGames() {
        return wonGames;
    }

    public void setWonGames(int wonGames) {
        this.wonGames = wonGames;
    }

    public int getLostGames() {
        return lostGames;
    }

    public void setLostGames(int lostGames) {
        this.lostGames = lostGames;
    }

    
}
