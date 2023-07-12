


// Intialize Variable

let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let playBtn = document.getElementById("playBtn")
let myProgressBar = document.getElementById("Range")
let gif = document.getElementById("gif")
let song=[
    {songName:"Slama ma Isqa",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Slama ma Isqa",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Slama ma Isqa",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Slama ma Isqa",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"Slama ma Isqa",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"Slama ma Isqa",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"Slama ma Isqa",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"Slama ma Isqa",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName:"Slama ma Isqa",filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
    {songName:"Slama ma Isqa",filePath:"songs/10.mp3",coverPath:"covers/10.jpg"},
   
    
]
//Handel Play And  Pause
playBtn.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        playBtn.classList.remove("fa-circle-play")
        playBtn.classList.add("fa-circle-pause")
        gif.style.opacity = 1;
      

    }
    else{
        audioElement.pause();
        playBtn.classList.remove("fa-circle-pause")
        playBtn.classList.add("fa-circle-play")
        gif.style.opacity = 0;

        
        
    }
})



//Listen Event
audioElement.addEventListener('timeupdate',()=>{
    
    // console.log("timeUpdate")
     progress = parseInt(audioElement.currentTime/audioElement.duration*100 );
     
     myProgressBar.value = progress;
   

}) 
//MUscic Change sering Progres Bar

myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

//Play Pause  to ALl Song

const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-circle-pause")
        element.classList.add("fa-circle-play")
       
       })

}



Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
 element.addEventListener("click",(e)=>{

    songIndex=parseInt(e.target.id)

    



    makeAllPlay();
    element.classList.remove("fa-circle-play");
    element.classList.add("fa-circle-pause");
    audioElement.currentTime = 0;
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.play();
    playBtn.classList.remove("fa-circle-play")
    playBtn.classList.add("fa-circle-pause")
  


    
 })
})


// Previous And Next
document.getElementById("next").addEventListener("click",()=>{
if(songIndex >=9){
songIndex=0

}
else{
    songIndex +=1
    
}
audioElement.currentTime = 0;
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.play();
    playBtn.classList.remove("fa-circle-play")
    playBtn.classList.add("fa-circle-pause")
  
})


document.getElementById("Previous").addEventListener("click",()=>{
    if(songIndex<=0){
    songIndex=0
    
    }
    else{
        songIndex -=1
        
    }
    audioElement.currentTime = 0;
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.play();
        playBtn.classList.remove("fa-circle-play")
        playBtn.classList.add("fa-circle-pause")
      
    })
    
