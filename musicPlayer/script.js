let song = [
    { songName: `Ae dil hai mushkil`, url: `songData/Ae_Dil_Hai_Mushkil(256k).mp3`, img: `songBanner/101292.png` },
    { songName: `Banjaara`, url: `songData/Banjaara(256k).mp3`, img: `songBanner/102894.png` },
    { songName: `Kooch_Na_Karin`, url: `songData/Kooch_Na_Karin(256k).mp3`, img: `songBanner/103666.png` },
    { songName: `Wakh_Ho_Jana`, url: `songData/Wakh_Ho_Jana(256k).mp3`, img: `songBanner/108147.png` },
    { songName: `Zaroor`, url: `songData/Zaroor(256k).mp3`, img: `songBanner/102584.png` },
    { songName: `Qismat`, url: `songData/Qismat(256k).mp3`, img: `songBanner/100373.png` },
]
let audio = new Audio();


let collection = document.querySelector("#collection");
let banner = document.querySelector("#banner");
let play = document.querySelector("#play");

let selectedSong = 0;

function mainfn(){

    let clutter = "";
    
    song.forEach(function (elem, index) {
        clutter += ` <li id="${index}">
            <img class="image" src="${elem.img}">
                <P>${elem.songName}</P> 
            </li>`;

        })
        collection.innerHTML = clutter;
        audio.src = song[selectedSong].url;

        banner.style.backgroundImage = `url(${song[selectedSong].img})`
}
mainfn();

collection.addEventListener("click",(det)=>{
    selectedSong = det.target.id;
    play.innerHTML = `<i class="fa-solid fa-pause">`
    mainfn();
    ppbtn = 1;
    audio.play();
    console.log(selectedSong)
})

let ppbtn = 0;


play.addEventListener("click", ()=>{
    if(ppbtn == 0){
        play.innerHTML = `<i class="fa-solid fa-pause">`
        audio.play();
        ppbtn = 1;
    }else{
        play.innerHTML = `<i class="fa-solid fa-play">`
        audio.pause();
        ppbtn = 0;
    }
})

let backward = document.querySelector("#backward");
let forward = document.querySelector("#forward");

forward.addEventListener("click", ()=>{
    if(selectedSong < song.length-1){
        selectedSong++;
        mainfn();
        audio.play();
        play.innerHTML = `<i class="fa-solid fa-pause">`;
    }
    else{
        selectedSong = -1;
        mainfn();
        audio.play();
        play.innerHTML = `<i class="fa-solid fa-pause">`;
    }
})
backward.addEventListener("click", ()=>{
    if(selectedSong >= 0){
        selectedSong--;
        mainfn();
        audio.play();
    }
    else{
        selectedSong = song.length-1;
        mainfn();
        audio.play();
        play.innerHTML = `<i class="fa-solid fa-pause">`;

    }
})