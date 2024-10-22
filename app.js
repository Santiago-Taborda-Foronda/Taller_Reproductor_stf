import { playList } from "./playList.js";

let trackId = 0;

window.addEventListener('DOMContentLoaded', () => {
    show(trackId);
});

function show(index) {
    const player = document.querySelector('.container-album');
    player.innerHTML = '';

    const track = playList[index];
    
    const card = document.createElement('div');
    card.id = 'container-album';
    card.classList.add('container-album');

    const cover = document.createElement('img');
    cover.src = track.img;

    const title = document.createElement('h2');
    title.textContent = track.titleMusic;

    const artist = document.createElement('h3');
    artist.textContent = track.singersMusic;

    card.appendChild(cover);
    card.appendChild(title);
    card.appendChild(artist);

    player.appendChild(card);

    const audio = document.getElementById('audio');
    audio.src = track.song;
}

function next() {
    trackId = (trackId + 1) % playList.length;
    show(trackId);
}

function prev() {
    trackId = (trackId - 1 + playList.length) % playList.length;
    show(trackId);
}

const audio = document.getElementById('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const forward = document.getElementById('forward');
const rewind = document.getElementById('rewind');
const stop = document.getElementById('stop');

play.addEventListener('click', () => audio.play());
pause.addEventListener('click', () => audio.pause());
forward.addEventListener('click', next);
rewind.addEventListener('click', prev);
stop.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
});