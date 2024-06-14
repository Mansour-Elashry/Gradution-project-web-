//song list
let All_song = [
   {
     name: "happy-day",
     path: "/static/happy_music/1.mp3",
     img: "/static/happy_images/1.jpg",
     singer: "NoCopyrightSounds"
   },
   {
    name: "catch-it",
    path: "/static/happy_music/2.mp3",
    img: "/static/happy_images/2.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "playing-in-color",
    path: "/static/happy_music/3.mp3",
    img: "/static/happy_images/3.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "corporate-climb",
    path: "/static/happy_music/4.mp3",
    img: "/static/happy_images/4.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "positive-travel",
    path: "/static/happy_music/5.mp3",
    img: "/static/happy_images/5.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "island-pulse",
    path: "/static/happy_music/6.mp3",
    img: "/static/happy_images/6.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "upbeat-acoustic",
    path: "/static/happy_music/7.mp3",
    img: "/static/happy_images/7.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "playful",
    path: "/static/happy_music/8.mp3",
    img: "/static/happy_images/8.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "fancy-day",
    path: "/static/happy_music/9.mp3",
    img: "/static/happy_images/9.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "the-first-days-of-spring",
    path: "/static/happy_music/10.mp3",
    img: "/static/happy_images/10.jpg",
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

