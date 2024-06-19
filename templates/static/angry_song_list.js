//song list
let All_song = [
   {
     name: "Make Me Move",
     path: "/static/angry_music/1.mp3",
     img: "/static/angry_images/1.jpg",
     singer: "NoCopyrightSounds"
   },
   {
     name: "Beauz & Jvna - Crazy",
     path: "/static/angry_music/2.mp3",
     img: "/static/angry_images/2.jpg",
     singer: "NoCopyrightSounds"
   },
   {
     name: "Skydive -Loxbeats",
     path: "/static/angry_music/3.mp3",
     img: "/static/angry_images/3.jpg",
     singer: "NoCopyrightSounds"
   },
   {
     name: "Shahed -Indian Fusion",
     path: "/static/angry_music/4.mp3",
     img: "/static/angry_images/4.jpg",
     singer: "NoCopyrightSounds"
   },
   {
     name: "Syn Cole - Feel Good",
     path: "/static/angry_music/5.mp3",
     img: "/static/angry_images/5.jpg",
     singer: "NoCopyrightSounds"
   },
   {
    name: "Yusuf Alev - Yoros",
    path: "/static/angry_music/6.mp3",
    img: "/static/angry_images/6.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "Yusuf Alev - Yoros",
    path: "/static/angry_music/7.mp3",
    img: "/static/angry_images/7.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "Yusuf Alev - Yoros",
    path: "/static/angry_music/8.mp3",
    img: "/static/angry_images/8.jpg",
    singer: "NoCopyrightSounds"
   }
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/