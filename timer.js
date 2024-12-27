const countdown = () => {
    const countDate = new Date('Dec 27, 2024 17:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    if (isNaN(gap)) {
        console.error("Некорректная дата обратного отсчета!");
        clearInterval(timerInterval);
        return;
    }

    const floatingImagejs = document.getElementById('floatingImage');
    const floatingVideojs = document.getElementById('floatingVideo');
    const videoFramejs = document.getElementById('videoFrame');
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    if (gap < 0) {
        clearInterval(timerInterval);
        console.log("Таймер остановлен.");

        const titleElement = document.querySelector('.title');
        if (titleElement) {
            titleElement.innerText = 'Трансляция';
            console.log("Текст заголовка изменён.");
            floatingImagejs.style.backgroundImage = "url(/neonparty/assets/images/broadcast.png)";
            console.log(floatingImagejs);
            // Открыть видео
            floatingImagejs.addEventListener('click', () => {
                floatingVideojs.style.display = 'block';
                videoFramejs.src = videoSrc;
                
             });
        } else {
            console.error("Элемент с классом 'title' не найден.");
        }

        const itemsBlock = document.querySelector('.items');
        if (itemsBlock) {
            itemsBlock.remove();
            console.log("Блок с классом 'items' удалён.");
        } else {
            console.error("Блок с классом 'items' не найден.");
        }
    }

};

const timerInterval = setInterval(countdown, 1000);