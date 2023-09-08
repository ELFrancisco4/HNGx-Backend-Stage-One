const express = require('express')
const app = express()

app.get('/api', (req, res) => {
    const slackName = req.query.slack_name
    const track = req.query.track
    const dayOfWeekName = new Date().toLocaleString('default', {
        weekday: 'long'
    });
    const now = new Date();
    const utcOffset = now.getTimezoneOffset();
    now.setUTCHours(now.getUTCHours() - (utcOffset / 60));
    const utcTime = now.toISOString();

    res.json({
        "slack_name": slackName,
        "current_day": dayOfWeekName,
        "utc_time": utcTime,
        "track": track,
        "github_file_url": "https://github.com/ELFrancisco4/HNGx-Backend-Stage-One/blob/Klaus/index.js",
        "github_repo_url": "https://github.com/ELFrancisco4/HNGx-Backend-Stage-One",
        "status_code": 200
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})