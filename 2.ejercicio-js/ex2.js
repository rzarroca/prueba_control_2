console.log('programa iniciado');

let time = 206120;

setInterval(() => {
    time++;
    if (time % 5 === 0) {
        const days = Math.floor(time / 86400);
        const hours = Math.floor((time % 86400) / 3600);
        const mins = Math.floor((time % 3600) / 60);
        const secs = Math.floor(time % 60);
        console.log(
            `It's been ${days} days ${hours} hours, ${mins} minutes and ${secs} seconds since this program started`
        );
    }
}, 1000);
