import dayjs from 'dayjs'

const closedSundaysDates = [
    '2018-05-13',
    '2018-05-20',
    '2018-06-10',
    '2018-06-17',
    '2018-07-8',
    '2018-07-15',
    '2018-07-22',
    '2018-08-12',
    '2018-08-19',
    '2018-09-9',
    '2018-09-16',
    '2018-09-23',
    '2018-10-14',
    '2018-10-21',
    '2018-11-11',
    '2018-11-18',
    '2018-12-9',
];

const closedSundays = closedSundaysDates.map(day => dayjs(day));

const today = dayjs();

const isSameDay = (date1, date2) => {
    const d1 = date1.toObject();
    const d2 = date2.toObject();

    return (d1.date === d2.date) && (d1.years === d2.years) && (d1.months === d2.months);
};

const isClosed = (today, days) => {
    const daysMatch = days.filter(freeDay => isSameDay(today, freeDay)).map(d => d.toObject());

    return daysMatch.length > 0;
};

const messages = {
    canTrade: 'TAK!',
    noTrading: 'NIE',
    notSunday: 'DZISIAJ NIE MA NIEDZIELI'
};

const messageHTML = document.getElementsByClassName('msg')[0];

(function init() {
    if (!today.day() == 0) {
        messageHTML.innerText = messages.notSunday;

    } else {
        if (isClosed(today, closedSundays)) {
            messageHTML.innerText = messages.noTrading;
        } else {
            messageHTML.innerText = messages.canTrade;
        }
    }

    console.log('%c jebać PiS', 'color: #ff0000');
})();