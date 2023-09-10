const moment = require('moment');

// Get the current day of the week
const currentDay = moment().format('dddd');

// Get the current UTC time with validation of +/-2 minutes
const currentTime = moment().utc().format();

// Get the GitHub file URL and GitHub repo URL
const githubFileUrl = 'https://github.com/oranucarl/API-hngstage1/blob/main/README.md';
const githubRepoUrl = 'https://github.com/oranucarl/API-hngstage1.git';

module.exports = {   
        slack_name: 'Carlson',
        current_day: currentDay,
        utc_time: currentTime,
        track: "BacKend",
        github_file_url: githubFileUrl,
        github_repo_url: githubRepoUrl,
        status_code: 200,
    }
