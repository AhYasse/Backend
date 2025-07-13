const forecast = require("./forecast");
const geocode = require("./geocode");

const country = process.argv[2];

geocode(country, (error , data) =>{
    console.log("Error:" , error)
    console.log("Data:" , data)

            forecast(data.lat, data.long, (error, data) =>{
            console.log('Error:', error)
            console.log('Data:', data)
        })
})
