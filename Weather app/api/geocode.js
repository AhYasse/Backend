const request = require("request")

const geocode = (country, callback) =>{

 const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + country +  ".json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"


 request({url, json: true}, (error, response) => {

    if(error) {
        callback("Unable to connect to Geocode!", undefined)
    }else if(response.body.message){
        callback("Error:" + response.body.message, undefined)
    }else if (response.body.features.length == 0){
        callback("No matching location", undefined)
    } else {
        callback(undefined, {
            long : response.body.features[0].center[0],

            lat : response.body.features[0].center[1]
        })
    }
 })
}

module.exports = geocode