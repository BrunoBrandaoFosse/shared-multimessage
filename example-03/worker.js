async function getUsers() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => resolve(response.json()))
            .then(json => reject(json));
    });
}

onconnect = function (e) {
    console.log("onconnect -> e", e)
    var port = e.ports[0];

    port.onmessage = async function (e) {
        const response = await getUsers();
        port.postMessage({ type: "GET_USERS", data: response, input: e.data });
    }

}