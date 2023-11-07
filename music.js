// document.addEventListener('DOMContentLoaded', function loadTrack(track_index) {
//     // Your code here
    
// let details = document.querySelector(".details");
let pic = document.querySelector(".pic");
let playing_no = document.querySelector(".PLAYING-NO");
let track_artist = document.querySelector(".Artist");
let music_name = document.querySelector(".Music-name");

let prvbtn = document.querySelector(".prv-button")
let playbtn = document.querySelector(".play-button");
let frwdbtn = document.querySelector(".forward-button");

let slider = document.querySelector(".slider");
let current_time = document.querySelector(".current-time");
// let time_slider = document.querySelector(".time_slider");
let time_slider = document.querySelector(".time-slider");
let vol_slider = document.querySelector(".volume-slider");
let total_time = document.querySelector(".total-duration")

let track_index = 0;
let isPlaying = false;
let updateTimer;

let curr_track = document.createElement('audio');

let track_list = [
    {
        name: "VILLAGE SUFI",
        artist: "Ustad Puran Chand",
        image: "https://ia600703.us.archive.org/30/items/Field_Recordings_from_India-9888/Field_Recordings_from_India-9888.jpg?cnt=0",
        path: "https://ia600703.us.archive.org/30/items/Field_Recordings_from_India-9888/Broos_-_41_-_village_sufi.mp3"

    },

    {
        name: " A BIRD CAME FLYING",
        artist: "ANNE ",
        image: " https://ia600702.us.archive.org/17/items/American_Trilogy-8707/American_Trilogy-8707.jpg?cnt=0 ",
        path: "https://ia600704.us.archive.org/3/items/Aarden-6335/Anne_van_Schothorst_-_07_-_A_Bird_Came_Flying.mp3 "
    },

    {
        name: " Guillotine",
        artist: "Death Grips ",
        image: "https://ia802802.us.archive.org/11/items/Ex_Military-9086/Ex_Military-9086.jpg?cnt=0 ",
        path: "https://ia802802.us.archive.org/11/items/Ex_Military-9086/Death_Grips_-_02_-_Guillotine.mp3 "
    },

    {
        name: " Cherry Cobbs",
        artist: " Transient",
        image: "https://ia600703.us.archive.org/9/items/Chiquesalunga-18977/Chiquesalunga-18977_itemimage.jpg?cnt=0 ",
        path: " https://ia600703.us.archive.org/9/items/Chiquesalunga-18977/Transient_-_07_-_Cherry_Cobbs.mp3"
    },

    {
        name: "Night Owl ",
        artist: " Broke For Free",
        image: "https://images.pexels.com/photos/2264753/pexels-photo-2264753.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250 ",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3 "
    },

    {
        name: "Shipping Lanes",
        artist: "Chad Crouch",
        image: "https://images.pexels.com/photos/1717969/pexels-photo-1717969.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Shipping_Lanes.mp3"
    },

    {
        name: "Enthusiast",
        artist: "Tours",
        image: "https://images.pexels.com/photos/3100835/pexels-photo-3100835.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3"
    },

]

function random_bg_color() {
    let yellow = Math.floor(Math.random() * 256) + 64;
    let blue = Math.floor(Math.random() * 256) + 64;
    let purple = Math.floor(Math.random() * 256) + 64;

    let bgColor = "rgb(" + yellow + "  " + blue + " " + purple + ")";

    document.body.style.background = bgColor;
}


// function loadTrack(track_index) {
//     clearInterval(updateTimer);
//     resetValues();
//     curr_track.src = track_list[track_index].path;
//     curr_track.load();


//     pic.style.background = "url(" + track_list[track_index].image + ")"
//     music_name.textContent = track_list[track_index].name;
//     track_artist.textContent = track_list[track_index].artist;
//     playing_no.textContent = "Playing" + (track_index + 1) + "OF" + track_index.length;

//     updateTimer = setInterval(timeUpdate, 1000);
//     curr_track.addEventListener("ended", frwdbutton);
//     random_bg_color();
// }

function loadTrack(track_index) {
    clearInterval(updateTimer);
    resetValues();
    curr_track.src = track_list[track_index].path;
    curr_track.load();

    pic.style.background = "url(" + track_list[track_index].image + ")";
    music_name.textContent = track_list[track_index].name;
    track_artist.textContent = track_list[track_index].artist;
    playing_no.textContent = "Playing " + (track_index + 1) + " OF " + track_list.length;

    updateTimer = setInterval(timeUpdate, 1000);
    curr_track.addEventListener("ended", frwdbutton);
    random_bg_color();
}




// function resetValues() {
//     current_time.textContent = "00:00";
//     total_time.textContent = "00:00";
//     time_slider.value = 0;
//   }
  function resetValues() {
    current_time.textContent = "00:00";
    total_time.textContent = "00:00";
    time_slider.value = 0;
} 

loadTrack(track_index);

// ***//  

// function prvbutton() {
//     if (track_index > 0) {
//         track_index = track_index - 1;
//     }
//     else {
//         track_index = track_list.length;
//     }
//     loadTrack(track_index);
//     playTrack();

// }

function prvbutton() {
    if (track_index > 0) {
        track_index = track_index - 1;
    }
    else {
        track_index = track_list.length - 1;
    }
    loadTrack(track_index);
    playTrack();
}


function play_pausebutton() {
    if (!isPlaying) {
        playTrack();
    }
    else {
        pauseTrack();
    }
}

function playTrack() {
    curr_track.play();
    isPlaying = true;
    playbtn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';

}


function pauseTrack() {
    curr_track.pause();
    isPlaying = false;
    playbtn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;

}



function frwdbutton() {
    if (track_index < (track_list.length - 1)) {
        track_index+=1;
    }
    else {
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();

}

function timing_slider() {
    let timeslide = curr_track.duration * (time_slider.value / 100);
    curr_track.currentTime = timeslide;
}

function volume_slider() {
    curr_track.volume = vol_slider.value / 100;
}

function timeUpdate() {

    let timePosition = 0;

    if (!isNaN(curr_track.duration)) {
        timePosition = curr_track.currentTime * (100 / curr_track.duration);

        time_slider.value = timePosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        current_time.textContent = currentMinutes + ":" + currentSeconds;
        total_time.textContent = durationMinutes + ":" + durationSeconds;
    }


}



//   });
  


