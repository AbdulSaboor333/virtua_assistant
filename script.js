let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.volume = 1
    text_speak.pitch = 1
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day = new Date()
    let hours = day.getHours()

    if (hours >= 0 && hours<12){
        speak("Good Morning Sir")
    }
    else if (hours >= 12 && hours < 16){
        speak("Good afternoon Sir")
    }
    else {
        speak("Good Evening Sir")
    }
    
} 

window.addEventListener('load', ()=>{
    wishMe()
})

let speechrecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechrecognition()
recognition.onresult= (event)=>{
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    takecommand(transcript.toLowerCase())
} 

btn.addEventListener("click", () =>{
    recognition.start()
    btn.style.display = "none"
    voice.style.display = "block"
})

function takecommand(message){
    btn.style.display = "flex"
    voice.style.display = "none"
    if (message.includes("hello") || message.includes("Hey")){
        speak("Hello sir, How can I help You")
    }
    
    else if (message.includes("who are you") || message.includes("who created you")){
        speak("I am virtual assistant, Created by Mr. Abdul Saboor")
    }

    else if (message.includes("how are you") || message.includes("how's it going")) {
        speak("I'm here and ready to help you! How can I assist?")
    }
    
    else if (message.includes("what can you do") || message.includes("your capabilities")) {
        speak("I can help you with tasks, answer questions, and make your experience smooth. Just let me know how I can assist!")
    }
    
    else if (message.includes("tell me a joke") || message.includes("make me laugh")) {
        speak("Why don't scientists trust atoms? Because they make up everything!")
    }
    
    else if (message.includes("what's the time") || message.includes("current time") || message.includes("what about time") || message.includes("what's time") || message.includes("tell me time") || message.includes("show me time"))  {
        let currentTime = new Date().toLocaleTimeString();
        speak(`The current time is ${currentTime}`);
    }
    
    else if (message.includes("what's the date") || message.includes("today's date")) {
        let currentDate = new Date().toLocaleDateString();
        speak(`Today's date is ${currentDate}`);
    }
    
    else if (message.includes("what's the weather") || message.includes("weather update")) {
        speak("I'm unable to fetch live data, but you can check your local weather online or in a weather app.")
    }
    
    else if (message.includes("tell me about yourself") || message.includes("introduce yourself")) {
        speak("I'm a virtual assistant created by Mr. Abdul Saboor to make things easier and more interactive for you.")
    }
    
    else if (message.includes("thank you") || message.includes("thanks")) {
        speak("You're very welcome! Happy to help.")
    }
    
    else if (message.includes("goodbye") || message.includes("see you later")) {
        speak("Goodbye! Feel free to reach out anytime.")
    }
    
    else if (message.includes("what is your name")) {
        speak("my name is jarvis");
    }
    
    else if (message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://www.youtube.com/")
    }

    else if (message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://www.facebook.com/")
    }

    else if (message.includes("open linkedin")){
        speak("opening linkedin...")
        window.open("https://www.linkedin.com/")
    }

    
    else if (message.includes("open instagram")){
        speak("opening insta...")
        window.open("https://www.instagram.com/")
    }

    else if (message.includes("open google")){
        speak("opening google...")
        window.open("https://www.google.com/")
    }

    else if (message.includes("open calculator")){
        speak("opening calculator...")
        window.open("calculator://")
    }

    else if (message.includes("open whatsapp")){
        speak("opening whatsapp...")
        window.open("whatsapp://")
    }
    
    else { 
        let finaltext = "this is what i found on internet regarding" + message.replace("jarvis","")
        speak(finaltext)
        window.open(`https://google.com/search?q=${message.replace("jarvis", "")}`)
    }

}