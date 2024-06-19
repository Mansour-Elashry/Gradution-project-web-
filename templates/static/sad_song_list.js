//song list
let All_song = [
   {
     name: "night-embrace",
     path: "/static/sad_music/1.mp3",
     img: "/static/sad_images/1.jpg",
     singer: "NoCopyrightSounds"
   },
   {
    name: "wander",
    path: "/static/sad_music/2.mp3",
    img: "/static/sad_images/2.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "cinematic-piano",
    path: "/static/sad_music/3.mp3",
    img: "/static/sad_images/3.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "sky-dive",
    path: "/static/sad_music/4.mp3",
    img: "/static/sad_images/4.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "waves-and-tears-sad-piano",
    path: "/static/sad_music/5.mp3",
    img: "/static/sad_images/5.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "wings-of-hope",
    path: "/static/sad_music/6.mp3",
    img: "/static/sad_images/6.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "the-world-is-not-enough",
    path: "/static/sad_music/7.mp3",
    img: "/static/sad_images/7.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "memories-remain",
    path: "/static/sad_music/8.mp3",
    img: "/static/sad_images/8.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "last-second",
    path: "/static/sad_music/9.mp3",
    img: "/static/sad_images/9.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "take-up-your-cross",
    path: "/static/sad_music/10.mp3",
    img: "/static/sad_images/10.jpg",
    singer: "NoCopyrightSounds"
   },
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