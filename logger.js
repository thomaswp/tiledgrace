var eventLog = [];
var eventEpoch = new Date();
var lastEventLogged = -1;
var userID = null;

function setUserID(id) {
    userID = id;
}

function logEvent(type, data, table) {
    var date = new Date();
    if (!table) {
        table = type.indexOf("drag") == 0 ? "drag_logs" : "grace_logs";
    }
    //var table = type == "drag-continue" ? "drag_logs" : "grace_logs";
    eventLog.push({
        type: type,
        data: data,
        time: Math.round(date.getTime() / 1000),
        timestamp: date - eventEpoch,
        table: table,
    });
}
logEvent("loaded");

var postLogs = function() {
    if (!userID) {
        alert("Oops, something went wrong. Please contat the instructor!");
        return;
    }
    var newlog = eventLog.slice(lastEventLogged + 1);
    lastEventLogged = eventLog.length - 1;
    if (newlog.length == 0) return;
    var log = JSON.stringify(newlog);
    var xhr = new XMLHttpRequest();
    // xhr.onload = function() {
    //     console.log(this.responseText);
    // };
    xhr.open("POST", "log.php?userID=" + userID);
    xhr.send(log);
}

setInterval(postLogs, 5000);

window.onbeforeunload = function() {
    logEvent("unloaded");
    postLogs();
}
