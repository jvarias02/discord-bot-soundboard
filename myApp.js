const express = require('express');
const bodyParser = require('body-parser'); //Convert base of incoming applications into js objects
const cors = require('cors'); //Configure express 
const helmet = require('helmet') //Establish HTTP headers to safeguard express APIs
const morgan = require('morgan'); //Extend Express

class myApp {
    constructor(client) {
        this.app = express();
        this.app.use(helmet());
        this.app.use(bodyParser.json());
        this.app.use(cors());
        this.app.use(morgan('combined'));

        this.client = client;
    }

    start_listen() {
        this.app.listen(8080, ()=> {
            console.log('listening on port 8080');
    })};
    
    get_request() {
        this.app.get('/song', (req, res) => {
            this.client.establish_voice(req.query.name);
        });
    }
}

module.exports = myApp;