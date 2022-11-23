function getBotResponse(input) {
    //rock paper scissors
    
    if ((input == "aditi") || (input == "eti") || (input == "garima") || (input == "ayush") || (input == "aryan")) {
        return "Nice to meet you ^^ <br> how old are you";
    } 
    else if(input == "hi"){
        return "hi :)";
    }
    else if (input == "hello") {
        return "Hello how are you!";
    }
    else if((input == "i am fine thank you")||(input == "fine")||(input=="good")){
        return "what's your name?";   
    }
    else if((input>=14)&&(input<=25)){              // what is your age?
        return "In which grade you are?";
    }
    /*
    else if((input<14)||(input >25 )){              // not for this age group..
        return "counselling not recommendable for this age group people ^^";
    } 
    */
    else if((input >= 9) &&(input <=12)) //two integer values...problem!!
    {
        return "Which Stream or courses you have chosen?";
    }
    else if(input == "science" ){
        return "Medical <br>or<br>Non-Medical?"
    }
    else if((input == "Non-Medical" )||(input == "nonmedical")||(input == "non-medical"))
    {
        return "CS/IT <br>or<br>Without CS/IT?";
    } 
    else if((input == "CS")||(input=="IT")||(input=="it")||(input=="cs")){
        return "Oh, great!! then you should learn some basic languages that will be of great help in your carrer <br> like <br>C++ <br>Python <br>C ";
    }
    
    else if(input == "commerce"){
        return "Maths <br>or<br>Without Maths?";
    }
    else if(input == "maths")
    {
        return "Are you planning to be <br>CA <br>or<br>Accountant <br>or<br>Banking ";
    }
    else if(input == "arts")
    {
        return "Hindi <br>or<br>English?";
    }
    else if((input == "hindi")||(input == "english"))
    {
        return "ohh great";
    }
    else if ((input == "goodbye") ||(input =="bye")) {
        return "okay,Talk to you later!";
    } else {
        return "Ask Something else!";
    }

}