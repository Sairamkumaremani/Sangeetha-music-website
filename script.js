console.log("Welcome to sangeetha");
let audioelement = new Audio('songs/0.mp3');
let mastersongname = document.getElementById('mastersongname');
let songitems = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    {songname:" Adire Hrudayam",filepath:'D:\Spotify clone\songs\0.mp3'},
    {songname:" Oka Maru",filepath:'D:\Spotify clone\songs\1.mp3'},
    {songname:" Badhulu Thochani",filepath:'D:\Spotify clone\songs\2.mp3'},
    {songname:" Oh My friend ",filepath:'D:\Spotify clone\songs\3.mp3'},
    {songname:" Kallu Moosi",filepath:'D:\Spotify clone\songs\4.mp3'},
    {songname:" Arey Rey",filepath:'D:\Spotify clone\songs\5.mp3'},
    {songname:"Beautiful Girl",filepath:'D:\Spotify clone\songs\6.mp3'},
    {songname:"Nijamga Nenena",filepath:'D:\Spotify clone\songs\7.mp3'},
]
songitems.forEach((element) => {
    
});
let songindex =0;
let masterplay = document.getElementById('masterplay');
let myprogessbar=document.getElementById('MyprogressBar');
let Gif = document.getElementById('gif');
// audioelement.play();
//first creating play and pause control
masterplay.addEventListener('click',()=>{
    if((audioelement.paused)||(audioelement.currentTime<=0)){
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause'); 
        Gif.style.opacity=1;  
    }else{
        audioelement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play'); 
        Gif.style.opacity=0; 
    }
})
audioelement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioelement.currentTime/audioelement.duration)*100);
    myprogessbar.value = progress;
})
myprogessbar.addEventListener('change',()=>{
    audioelement.currentTime = (myprogessbar.value*audioelement.duration)/100;
})
const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    })

}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        mastersongname.innerText = songs[songindex].songname;
        audioelement.src =`songs/${songindex}.mp3`;
        audioelement.currentTime=0;
        audioelement.play();
        Gif.style.opacity=1; 
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause'); 
        

        
    });
})
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=7){
        songindex=0;

    }else{
        songindex+=1;
    }
    audioelement.src =`songs/${songindex}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause'); 
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=7;

    }else{
        songindex-=1;
    }
    audioelement.src =`songs/${songindex}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause'); 
})


