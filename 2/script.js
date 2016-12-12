const secondHand = document.querySelector('.clock__hand--second');
const minuteHand = document.querySelector('.clock__hand--minute');
const hourHand = document.querySelector('.clock__hand--hour');

function setTransform(elem, degrees) {
  elem.style.transform = `rotate(${degrees}deg)`;
}

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsDegrees = (seconds / 60 * 360) + 90;
  const minutesDegrees = (minutes / 60 * 360) + 90;
  const hoursDegrees = (hours / 12 * 360) + 90;

  setTransform(secondHand, secondsDegrees);
  setTransform(minuteHand, minutesDegrees);
  setTransform(hourHand, hoursDegrees);

  const initialClass = 'clock__hand--initial';
  if (secondHand.classList.contains(initialClass)) {
    setTimeout(() => {
      secondHand.classList.remove(initialClass);
      minuteHand.classList.remove(initialClass);
      hourHand.classList.remove(initialClass);
    }, 100);
  }
}

setInterval(setDate, 1000);
setDate();
