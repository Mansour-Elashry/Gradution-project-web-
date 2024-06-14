//song list
let All_song = [
   {
     name: "best-time",
     path: "/static/surprised_music/1.mp3",
     img: "/static/surprised_images/1.jpg",
     singer: "NoCopyrightSounds"
   },
   {
    name: "legacy-of-grieg",
    path: "/static/surprised_music/2.mp3",
    img: "/static/surprised_images/2.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "last-night-in-march",
    path: "/static/surprised_music/3.mp3",
    img: "/static/surprised_images/3.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "funk-upbeat",
    path: "/static/surprised_music/4.mp3",
    img: "/static/surprised_images/4.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "lo-fi-midnight",
    path: "/static/surprised_music/5.mp3",
    img: "/static/surprised_images/5.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "ciudades",
    path: "/static/surprised_music/6.mp3",
    img: "/static/surprised_images/6.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "aesthetics",
    path: "/static/surprised_music/7.mp3",
    img: "/static/surprised_images/7.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "legacy-of-brahms",
    path: "/static/surprised_music/8.mp3",
    img: "/static/surprised_images/8.jpg",
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