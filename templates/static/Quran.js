//song list
let All_song = [
   {
     name: "الفاتحه",
     path: "/static/Quran_sound/1.mp3",
     img: "/static/Quran_image/1.jpg",
     singer: "NoCopyrightSounds"
   },
   {
    name: "البقره",
    path: "/static/Quran_sound/2.mp3",
     img: "/static/Quran_image/1.jpg",
     singer: "NoCopyrightSounds"
   },
   {
    name: "ال عمران",
    path: "/static/Quran_sound/3.mp3",
     img: "/static/Quran_image/1.jpg",
     singer: "NoCopyrightSounds"
   },
   {
    name: "النساء",
    path: "/static/Quran_sound/4.mp3",
     img: "/static/Quran_image/1.jpg",
     singer: "NoCopyrightSounds"
   },
   {
    name: "المائده",
    path: "/static/Quran_sound/5.mp3",
     img: "/static/Quran_image/1.jpg",
    singer: "NoCopyrightSounds"
   },
   {
    name: "الانعام",
    path: "/static/Quran_sound/6.mp3",
     img: "/static/Quran_image/1.jpg",
     singer: "NoCopyrightSounds"
   },
   {
    name: "الاعراف",
    path: "/static/Quran_sound/7.mp3",
     img: "/static/Quran_image/1.jpg",
     singer: "NoCopyrightSounds"
   },
   {
    name: "الانفال",
    path: "/static/Quran_sound/8.mp3",
    img: "/static/Quran_image/1.jpg",
     singer: "NoCopyrightSounds"
   },
   {
    name: "التوبه",
    path: "/static/Quran_sound/9.mp3",
     img: "/static/Quran_image/1.jpg",
     singer: "NoCopyrightSounds"
   },
   {
    name: "يونس",
    path: "/static/Quran_sound/10.mp3",
     img: "/static/Quran_image/1.jpg",
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