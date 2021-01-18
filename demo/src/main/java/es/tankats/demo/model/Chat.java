package es.tankats.demo.model;

public class Chat {

    private String name;
    private String message;

    public Chat(String message, String name){
        this.name = name;
        this.message = message;
    }

    public String getMessage(){
        return this.message;
    }

    public void setMessage(String message){
        this.message = message;
    }

    public String getName(){
        return this.name;
    }

    public void setName(String name){
        this.name = name;
    }
}
