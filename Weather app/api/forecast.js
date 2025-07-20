const request = require("request")

const forecast = (lat, long, callback) => {

    const url = "http://api.weatherapi.com/v1/current.json?key=95f579eef5574d9bb97130751250907&q=" + lat + " , "+ long

    request({url,  json: true}, (error, response) => {

        if(error){
            callback("Unable to connect weather api service!", undefined)
        }else if(response.body.error){
            callback("Error: " + response.body.error.message, undefined)
        }else {
            callback(undefined, "Weather in " + response.body.location.name + " it's " + response.body.current.condition.text)
        }
    })
}

module.exports = forecast