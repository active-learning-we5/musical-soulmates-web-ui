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