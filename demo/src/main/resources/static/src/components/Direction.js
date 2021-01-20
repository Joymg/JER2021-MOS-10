class Directions{
    static Right = 2;
    static Up = 5;
    static Left = 11;
    static Down = 17;

    static toAngle(value) {
        switch (value) {
          case 2:
            return 0;
          case 7:
            return 45;
          case 5:
            return 90;
          case 16:
            return 135;
          case 11:
            return 180;
          case 28:
            return -135;
          case 17:
            return -90;
          case 19:
            return -45;
        }
      }

      static UpAnd(value){
        if(value == 0){
            return 90;
        }
        else if(value >0){
            return 135;
        }
        else if(value < 0){
            return 45;
        }
      }

      static DownAnd(value){
        if(value == 0){
            return -90;
        }
        else if(value >0){
            return -135;
        }
        else if(value < 0){
            return -45;
        }
      }

      static RightAnd(value,actualAngle){
        if(value == 0){
            return -180;
        }
        else if(value >0){
            return -45;
        }
        else if(value < 0){
            return 45;
        }
      }

      static LeftAnd(value){
        if(value == 0){
            return 0;
        }
        else if(value >0){
            return -135;
        }
        else if(value < 0){
            return 135;
        }
      }

      
}



