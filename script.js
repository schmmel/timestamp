const timestampDiv = document.getElementById("timestamp");
let startUnixTimestamp = Date.now() / 1000 | 0;
let startFungiTimestamp = startUnixTimestamp - 1707992306;
let fungiTimestamp = startFungiTimestamp

setInterval(() => {
    fungiTimestamp++;
    timestampDiv.innerHTML = fungiTimestamp;
}, 1000);

timestampDiv.innerHTML = fungiTimestamp;