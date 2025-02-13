document.getElementById('playPauseBtn').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    var playPauseBtn = document.getElementById('playPauseBtn');
    
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = 'หยุด';
    } else {
        audio.pause();
        playPauseBtn.textContent = 'เล่น';
    }
});