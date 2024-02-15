const timestampDiv = document.getElementById("timestamp");
let unixTimestamp = Date.now() / 1000 | 0;
let fungiTimestamp = unixTimestamp - 1707992306;

setInterval(() => {
    unixTimestamp = Date.now() / 1000 | 0;
    fungiTimestamp = unixTimestamp - 1707992306;
    timestampDiv.innerHTML = fungiTimestamp;
}, 1000);

timestampDiv.innerHTML = fungiTimestamp;