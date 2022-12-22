
let audioEle = new Audio("./Songs/Khuda Jaane (Bachna Ae Haseeno) - K.K - 320Kbps.mp3");
let songIndex = 0;
let plays = document.getElementById("play");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"))

let songs = [
    { songName: "Khuda Jaane", filePath: "./Songs/0.mp3", coverPath: "./Pics/download.jfif" },
    { songName: "Abhi Abhi", filePath: "./Songs/1.mp3", coverPath: "./Pics/abhi.jpg" },
    { songName: "Ajab Si", filePath: "./Songs/2.mp3", coverPath: "./Pics/ajab.jfif" },
    { songName: "Tu Hi Meri Shab", filePath: "./Songs/3.mp3", coverPath: "./Pics/tuhimeri.jfif" },
    { songName: "Tujhe Sochta", filePath: "./Songs/4.mp3", coverPath: "./Pics/tujhe.jfif" },
    { songName: "Labon Ko", filePath: "./Songs/5.mp3", coverPath: "./Pics/labon.jfif" },
]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName
})


plays.addEventListener("click", () => {
    if (audioEle.paused || audioEle.currentTime <= 0) {
        audioEle.play();
        plays.classList.remove("fa-play-circle");
        plays.classList.add("fa-pause-circle");
        gif.style.opacity = 1
    } else {
        audioEle.pause()
        plays.classList.remove("fa-pause-circle");
        plays.classList.add("fa-play-circle");
        gif.style.opacity = 0
    }
})

audioEle.addEventListener("timeupdate",()=>{

    //updating seekbar
    let progress = parseInt((audioEle.currentTime / audioEle.duration) * 100)
    myProgressBar.value = progress
})


myProgressBar.addEventListener("change",()=>{
    audioEle.currentTime = myProgressBar.value * audioEle.duration / 100
})


const playsAll = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-pause-circle")
        element.classList.add("fa-play-circle")
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        playsAll();
        songIndex = parseInt(e.target.id)
        gif.style.opacity = 1
        e.target.classList.remove("fa-play-circle")
        e.target.classList.add("fa-pause-circle");
        audioEle.src = `Songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex].songName
        audioEle.currentTime = 0
        audioEle.play()
        plays.classList.remove("fa-play-circle");
        plays.classList.add("fa-pause-circle");
    })
})



document.getElementById("previous").addEventListener("click",()=>{
    if(songIndex <= 0){
        songIndex = 0
    }else{
        songIndex --
    }
    audioEle.src = `Songs/${songIndex}.mp3`;
    audioEle.currentTime = 0
    audioEle.play()
    plays.classList.remove("fa-play-circle");
    plays.classList.add("fa-pause-circle");
    masterSongName.innerText = songs[songIndex].songName
    gif.style.opacity = 1
})


document.getElementById("next").addEventListener("click",()=>{
    if(songIndex >= 5){
        songIndex = 0
        masterSongName.innerText = songs[songIndex].songName
    }else{
        songIndex++
    }
    audioEle.src = `Songs/${songIndex}.mp3`;
    audioEle.currentTime = 0
    audioEle.play()
    plays.classList.remove("fa-play-circle");
    plays.classList.add("fa-pause-circle");
    masterSongName.innerText = songs[songIndex].songName
    gif.style.opacity = 1
})

