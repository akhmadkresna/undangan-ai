const countdown = () => {
    const countDate = new Date("2024-04-29").getTime(); // Ganti "YYYY-MM-DD" dengan tanggal pernikahan
    const now = new Date().getTime();
    const gap = countDate - now;

    // Bagaimana waktu bekerja?
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Hitung
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    // Update HTML
    document.getElementById("days").innerText = textDay;
    document.getElementById("hours").innerText = textHour;
    document.getElementById("minutes").innerText = textMinute;
    document.getElementById("seconds").innerText = textSecond;

    // Ketika countdown selesai
    if(gap < 0){
        document.getElementById("countdown").innerHTML = "<h4>Waktu telah tiba!</h4>";
    }
};

// Update setiap detik
setInterval(countdown, 1000);

document.getElementById('rsvpButton').addEventListener('mouseover', function(e) {
    const container = document.querySelector('.container');
    const maxX = container.clientWidth - this.offsetWidth;
    const maxY = container.clientHeight - this.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    this.style.position = 'absolute';
    this.style.left = randomX + 'px';
    this.style.top = randomY + 'px';
});