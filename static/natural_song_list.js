//song list
let All_song = [
   {
     name: "black-hawk-dramatic",
     path: "/static/natural_music/1.mp3",
     img: "/static/natural_images/1.jpg",
     singer: "NoCopyrightSounds"
   },
   {
    name: "da-vinci",
    path: "/static/natural_music/2.mp3",
    img: "/static/natural_images/2.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "black-hawk-light",
    path: "/static/natural_music/3.mp3",
    img: "/static/natural_images/3.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "winter-legacy",
    path: "/static/natural_music/4.mp3",
    img: "/static/natural_images/4.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "dramatic-music",
    path: "/static/natural_music/5.mp3",
    img: "/static/natural_images/5.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "four-seasons-antonio",
    path: "/static/natural_music/6.mp3",
    img: "/static/natural_images/6.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "fall-of-the-roman-empire",
    path: "/static/natural_music/7.mp3",
    img: "/static/natural_images/7.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "era-of-cyborgs-orchestral-slap-house",
    path: "/static/natural_music/8.mp3",
    img: "/static/natural_images/8.jpg",
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