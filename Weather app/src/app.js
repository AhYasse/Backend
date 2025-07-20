///////////////////////////////////////
const express = require('express')

const app = express()

const port = process.env.PORT || 3000


//
const hbs = require('hbs')
const path = require('path')
app.set('view engine', 'hbs')
//api
const forecast = require('../api/forecast')
const geocode = require('../api/geocode')
///////////////////////////////////////
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Wellcome to Weather App',
        des : 'This is a weather app built with Node.js and Express',
        inst : 'Enter a location!',
    })
})
//
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Us',
        des: 'This is a weather app that provides weather information for any location.',
        inst: 'Learn more about us here.',
    })
})
//
const header = path.join(__dirname, '../partials/')
hbs.registerPartials(header);
//hbs.registerPartials(path.join(__dirname, '../partials'));
app.use(express.static(path.join(__dirname, '../public')));//public folder for static files

//

//
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }
    geocode(req.query.address, (error, { lat, long, location } = {}) => {
        if (error) {
            return res.send({ error });
        }

        forecast(lat, long, (error, forecastData) => {
            if (error) {
                return res.send({ error });
            }
            res.send({
                location,
                forecast: forecastData,
                address: req.query.address
            });
        });
    });
})


//
app.get('/status', (req, res) => {
    res.render('weatherStatus', {
        title: 'Wellcome to Weather App',
    })
})
//

// app.get('*', (req, res) => {
//     res.send('<h1>404 Page Not Found</h1>')
// })

//
app.use((req, res) => {
    res.status(404).send('<h1>404 Page Not Found</h1>');
});
//

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
})