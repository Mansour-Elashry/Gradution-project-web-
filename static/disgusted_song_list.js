//song list
let All_song = [
   {
     name: "warrior",
     path: "/static/disgusted_music/1.mp3",
     img: "/static/disgusted_images/1.jpg",
     singer: "NoCopyrightSounds"
   },
   {
    name: "follow-the-leader",
    path: "/static/disgusted_music/2.mp3",
    img: "/static/disgusted_images/2.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "clockwork-chaos-dark",
    path: "/static/disgusted_music/3.mp3",
    img: "/static/disgusted_images/3.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "dark-action-aggressive",
    path: "/static/disgusted_music/4.mp3",
    img: "/static/disgusted_images/4.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "lost-soul_medium",
    path: "/static/disgusted_music/5.mp3",
    img: "/static/disgusted_images/5.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "gloomy",
    path: "/static/disgusted_music/6.mp3",
    img: "/static/disgusted_images/6.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "cinematic",
    path: "/static/disgusted_music/7.mp3",
    img: "/static/disgusted_images/7.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "theres-something-about-this-room",
    path: "/static/disgusted_music/8.mp3",
    img: "/static/disgusted_images/8.jpg",
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