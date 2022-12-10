const playSound = (sound) => {
    document.querySelector(`#s_${sound}`).cloneNode(true).play();
};

const playComposition = (songArray) => {
    let wait = 0;

    for(let songItem of songArray) {
        setTimeout(()=> {
            playSound(`key${songItem}`);
        }, wait);

        wait += 250;
    }
}

//play with keyboard

document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase());
});

document.querySelectorAll('[data-key]').forEach((element) => {
    element.onclick= () => {
        playSound(element.dataset.key);

        element.classList.add('active');

        setTimeout(()=> {
            element.classList.remove('active');
        }, 300);
    };
});

document.querySelector('.music button').addEventListener('click',() => {
    let song = document.querySelector('#input').value;

    if(song !== '') {
        let songArray = song.split('');
        playComposition(songArray);
    }
});