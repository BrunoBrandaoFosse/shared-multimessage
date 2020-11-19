var myWorker = new SharedWorker("worker.js");
var input = document.querySelector("input");

document.querySelector("button").addEventListener("click", saveMessage);

// Recebe as mensagens
myWorker.port.onmessage = function (event) {
    console.log("%c----------------", "font-weight:bold;color:yellow;");
    // console.log("%c@message:", "font-weight:bold;color:yellow;", event);
    console.log(event.data);
    // console.log(event.data.data);
    console.log("%c----------------", "font-weight:bold;color:yellow;");
}

myWorker.port.start();

myWorker.port.postMessage({ type: "GET_USERS" });

function saveMessage(event) {
    event.preventDefault();
    console.log("saveMessage -> event", input.value)
    myWorker.port.postMessage({ type: "GET_USERS", data: input.value });
}
