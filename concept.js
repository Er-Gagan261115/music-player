let prev = document.getElementById("prev")
let name_music = document.getElementById("name_music")
let img = document.getElementById("img_music")
let play = document.getElementById("play")
let pause = document.getElementById("pause")
let next = document.getElementById("next")
let audio = document.getElementById("audio")
let showlist = document.getElementById("all_list")

console.log(name_music.text)
const arr = [{
    name:"creative-minds",
    music:"bensound-creativeminds.mp3",
    imgsrc:"https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
},{
    name:"energy",
    music:"bensound-energy.mp3",
    imgsrc:"https://i1.sndcdn.com/artworks-000340497561-i2zpyx-t500x500.jpg"
},{
    name:"sunny",
    music:"bensound-sunny.mp3",
    imgsrc:"https://wallpaperaccess.com/full/3085632.jpg"
}]

arr.forEach(e =>{
    let li = document.createElement("li");
    li.className = "music_name_li";
    li.appendChild(document.createElement("p").appendChild(document.createTextNode(e.name)));
    li.setAttribute("onclick","playthis(this.textContent)");
    showlist.appendChild(li)
})
play.addEventListener("click",() => {
     audio.play();
     play.style.display = "none"
     pause.style.display = "block"
})
pause.addEventListener("click",() => {
    audio.pause();
    pause.style.display ="none";
    play.style.display = "block";
})
let i = 0;
next.addEventListener("click",() => {
    if(i<=1)
    {
name_music.textContent = arr[i+1].name;
audio.src = "music/"+arr[i+1].music;
img.src = arr[i+1].imgsrc;
i++
if(pause.style.display =="block")
audio.play()
}
else{
    i=0;
    name_music.textContent = arr[i].name;
    audio.src = "music/"+arr[i].music;
    img.src = arr[i].imgsrc;
    if(pause.style.display =="block")
    audio.play();
} 
})
prev.addEventListener("click",() => {
    if(i>=1)
    {
        name_music.textContent = arr[i-1].name;
        img.src = arr[i-1].imgsrc;
        audio.src = "music/"+arr[i-1].music;
        i--
        if(pause.style.display =="block")
        audio.play()
    }
    else{
        i=2;
        name_music.textContent = arr[i].name;
        img.src = arr[i].imgsrc;
        audio.src = "music/"+arr[i].music;
        if(pause.style.display =="block")
    audio.play();
} 
})

 function playthis(e){
 for(let pos=0;pos<arr.length;pos++)
 if(arr[pos].name==e)
 { 
     i=pos;
    name_music.textContent = arr[i].name;
    img.src = arr[i].imgsrc;
    audio.src = "music/"+arr[i].music;
    audio.play();
    play.style.display  = "none";
    pause.style.display  = "block";
    break;
 }
    
 }
 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    