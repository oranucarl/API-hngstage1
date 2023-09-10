const moment = require('moment');
const express = require('express');
const app = express();

const slackName = req.query.slack_name;
const track = req.query.track;


// Get the current day of the week
const currentDay = moment().format('dddd');

// Get the current UTC time with validation of +/-2 minutes
const currentTime = moment().utc().format();

// Get the GitHub file URL and GitHub repo URL
const githubFileUrl = 'https://github.com/oranucarl/API-hngstage1/blob/main/index.js';
const githubRepoUrl = 'https://github.com/oranucarl/API-hngstage1.git';

module.exports = {   
        slack_name: slackName,
        current_day: currentDay,
        utc_time: currentTime,
        track: track,
        github_file_url: githubFileUrl,
        github_repo_url: githubRepoUrl,
        status_code: 200,
    }




    const express = require('express')
    const data = require('./template')
    
    const api = express()
    
    const HOST = 'localhost'
    const PORT = 8888
    
    
    //api.get('/', (req,res) => {
    //res.send('Welcome to this my API!')
    //})
    
    api.get('/', (req,res) => {
        res.status(200).json(data)
    })
    
    
    api.listen(PORT, () => console.log(`API running at ${HOST}:${PORT}!`))