package es.tankats.demo.model;

import java.util.Date;

public class Player {

    private long id = 0;
    private String nickName;

    private int wonGames= 0;
    private int lostGames = 0 ;
    private Date date= new Date();
    
    private int characterIndex = -1;
    

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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
    
    public void setCharacterIndex(int index) {
    	this.characterIndex = index;
    }
    
    public int getCharacterIndex() {
    	return this.characterIndex;
    }

    
}
