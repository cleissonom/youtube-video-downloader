const express = require('express');
const cors = require('cors');
const fs = require('fs');
const ytdl = require('ytdl-core');

const app = express();

app.use(cors())

app.listen(4000, () => {
   console.log('Server Works !!! At port 4000');
});

app.get('/download', (req, res) => {
   let URL = req.query.URL;

   res.json({ url: URL });

   ytdl(URL).pipe(fs.createWriteStream(`/Users/${MAC_USERNAME}}/Downloads/video.mp4`));
});