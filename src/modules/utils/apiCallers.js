const baseUrl = "/api";

function apiGet (endpoint, payload, onSucces, onError) {
    var payloadString = getPayload(payload);
    fetch(baseUrl + endpoint + payloadString)
        .then(res => res.json())
        .then(data => typeof onSucces == "function" && onSucces(data))
        .catch(err => {
            console.error(err);
            typeof onError == "function" && onError(err);
        })
}

function getPayload (payload) {
    return "?"; // TODO implement the function
}



// sample usage
/*
var data = apiGet("/users/list", null, function(data) {
    console.log("data received from server: ", data);
}, function(err) {
    console.error(err);
});
*/

function apiPost(endpoint, payload, onSuccess, onError) {
    fetch(baseUrl + endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => typeof onSuccess == "function" && onSuccess(data))
    .catch(err => {
        console.error(err);
        typeof onError == "function" && onError(err);
    });
}

function getPayload(payload) {
    return "?" + new URLSearchParams(payload).toString();
}


function apiPut(endpoint, payload, onSuccess, onError) {
    fetch(baseUrl + endpoint, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => typeof onSuccess == "function" && onSuccess(data))
    .catch(err => {
        console.error(err);
        typeof onError == "function" && onError(err);
    });
}

function getPayload(payload) {
    return "?" + new URLSearchParams(payload).toString();
}

function apiDelete(endpoint, payload, onSuccess, onError) {
    var payloadString = getPayload(payload);
    fetch(baseUrl + endpoint + payloadString, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => typeof onSuccess == "function" && onSuccess(data))
    .catch(err => {
        console.error(err);
        typeof onError == "function" && onError(err);
    });
}

function getPayload(payload) {
    return "?" + new URLSearchParams(payload).toString();
}

