// PLAYLIST FORM
const plName = document.querySelector('#pl-name');
const plDescription = document.querySelector('#pl-description');
const plForm = document.querySelector('#playlistForm');

function plFormSubmitHandler(e) {
  e.preventDefault();
  const name = plName.value ?? '';
  const description = plDescription.value ?? '';
  const playlistData = { name, description };
  // console the data
  console.log(playlistData);
  // resets form
  plForm.reset();
}

plForm.addEventListener('submit', plFormSubmitHandler);

// MUSIC FORM
const mName = document.querySelector('#m-name');
const mArtist = document.querySelector('#m-artist');
const mLink = document.querySelector('#m-link');
const mForm = document.querySelector('#musicForm');

function musicFormSubmitHandler(e) {
  e.preventDefault();
  const name = mName.value ?? '';
  const artist = mArtist.value ?? '';
  const link = mLink.value ?? '';
  const musicData = { name, artist, link };
  // console the data
  console.log(musicData);
  // resets form
  mForm.reset();
}

mForm.addEventListener('submit', musicFormSubmitHandler);
