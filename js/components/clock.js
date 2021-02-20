export const clock = {
    getTime: function () {
        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const meridian = hours <= 11 ? "am" : "pm";
        let time;

        if (hours > 12) {
            hours = hours - 12;
        }

        if (hours < 10) {
            hours = "0" + hours;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return (time = {
            hours: hours,
            minutes: minutes,
            meridian: meridian,
        });
    },

    displayTime: function () {
        const hoursContainer = document.querySelector("[data-hours]");
        const minutesContainer = document.querySelector("[data-minutes]");
        const meridianContainer = document.querySelector("[data-meridian]");
        const time = this.getTime();

        hoursContainer.innerText = time.hours;
        minutesContainer.innerText = time.minutes;
        meridianContainer.innerText = time.meridian;
    },

    updateTime: function () {
        setInterval(() => {
            this.displayTime();
        }, 500);
    },
};
