const timestampDiv = document.getElementById("timestamp");
let unixTimestamp = Date.now() / 1000 | 0;
let schimmelTimestamp = unixTimestamp - 1707992306;

setInterval(() => {
    unixTimestamp = Date.now() / 1000 | 0;
    schimmelTimestamp = unixTimestamp - 1707992306;
    timestampDiv.innerHTML = schimmelTimestamp;
}, 1000);

timestampDiv.innerHTML = schimmelTimestamp;