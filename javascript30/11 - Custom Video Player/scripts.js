// 엘레멘트 선택
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// 함수 설정
function togglePlaye(){
    /* if(video.paused){
        video.play();
    }else{
        video.pause();
    } */
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    
}


function updateButton(){
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}


// 이벤트

video.addEventListener('click',togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);


toggle.addEventListener('click',togglePlay);    ``