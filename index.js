class CountdownTimer {
    constructor({ selector, targetDate }) {
      this.targetDate = targetDate;
      this.selector = document.querySelector(`${selector}`);
      this.timerStart();
    }

timerStart() {
        setInterval(() => {
            const curentDate = new Date();
            const countdownDate = this.targetDate - curentDate;
            this.dataNew(countdownDate);
        }, 100);
    }
dataNew(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    this.timerJoin(days, hours, mins, secs);
}
timerJoin(days, hours, mins, secs) {
    this.selector.querySelector('[data-value="days"]').textContent = days;
    this.selector.querySelector('[data-value="hours"]').textContent = hours;
    this.selector.querySelector('[data-value="mins"]').textContent = mins;
    this.selector.querySelector('[data-value="secs"]').textContent = secs;

}
pud(value) {
    return String(value).padStart(2, "0");
}
}
const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 31 , 2021'),
});
