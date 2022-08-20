function switchText(){
var text = ["Abyzls", "Code enthusiast", "Copywriter"]
var index = 0;
var time = 4000; // in ms

function changeText(){

index++;

 if(index > text.length - 1){

    index = 0;
    

}

document.getElementById("abyzlstext").innerHTML = text[index];



}

setInterval(changeText, time);
}

export default switchText;

