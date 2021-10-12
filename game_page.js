Player_1_name = localStorage.getItem("Player1_Name_input");
Player_2_name = localStorage.getItem("Player2_Name_input");

Player1_score = 0;
Player2_score = 0;

document.getElementById("Player_1_name").innerHTML=Player_1_name+ " : ";
document.getElementById("player_1_score").innerHTML=Player1_score;

document.getElementById("Player_2_name").innerHTML=Player_2_name+ " : ";
document.getElementById("player_2_score").innerHTML=Player2_score;

document.getElementById("Player_Question").innerHTML="Question Turn- "+ Player_1_name;
document.getElementById("Player_Answer").innerHTML="Answer Turn- "+ Player_2_name;


function send(){

 number_1 =  document.getElementById("number1").value;
 number_2 =  document.getElementById("number2").value;

localStorage.setItem("number1",number_1)
localStorage.setItem("number2",number_2)


    Question_word="<h4 id='word_display'> Q: 6 X 6 </h4>";
    input_box="<br> Answer: <input id='input_check_box' type='text'>";
    check_button=" <br> <button class='btn btn-info' onclick='check()'> Check </button>";
    row=Question_word+input_box+check_button;


}