var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
document.getElementById("box").innerHTML="";
recognition.start();
}

recognition.onresult=function(event){

    console.log (event);
    var Orangutans=event.results[0][0].transcript;
    document.getElementById("box").innerHTML=Orangutans;
    console.log (Orangutans);
   speak(); 


}
function speak(){
var monkey=window.speechSynthesis;
speak_data=document.getElementById ("box").value;
var speak_this=new SpeechSynthesisUtterance(speak_data);
monkey.speak(speak_this);
Webcam.attach(camera);





}

Webcam.set  ({
width:400,height:300,image_format:'PNG',png_quality:90
});
camera=document.getElementById("camera");




