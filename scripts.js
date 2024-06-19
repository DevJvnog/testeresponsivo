document.addEventListener('DOMContentLoaded', () => {
  // Inicializar AOS
  AOS.init({
      duration: 1200, // duração da animação em milissegundos
      once: false, // animação ao rolar para cima
  });


  // Timer
  function startTimer(duration, display) {
      let timer = duration, hours, minutes, seconds;
      setInterval(function () {
          hours = parseInt(timer / 3600, 10);
          minutes = parseInt((timer % 3600) / 60, 10);
          seconds = parseInt(timer % 60, 10);

          hours = hours < 10 ? "0" + hours : hours;
          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;

          display.textContent = hours + ":" + minutes + ":" + seconds;

          if (--timer < 0) {
              timer = duration;
          }
      }, 1000);
  }

  let startTime = 18 * 3600 + 45 * 60 + 30, // 18:45:30 in seconds
      display = document.querySelector('#timer');
  startTimer(startTime, display);

});
