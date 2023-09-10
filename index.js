const express = require('express');
const app = express();
const port = process.env.PORT || 8888; // Use the PORT environment variable provided by Render

app.get('/', (req, res) => {
  const slackName = req.query.slack_name;
  const track = req.query.track;

  // Get the current day of the week
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDate = new Date();
  const currentDay = daysOfWeek[currentDate.getUTCDay()];

  // Get the current UTC time with validation of +/-2 minutes
  const currentUtcTime = new Date().toISOString();

  // Construct the JSON response
  const jsonResponse = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: currentUtcTime,
    track: track,
    github_file_url: 'https://github.com/oranucarl/API-hngstage1/blob/main/index.js',
    github_repo_url: 'https://github.com/oranucarl/API-hngstage1.git',
    status_code: 200,
  };

  res.json(jsonResponse);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});