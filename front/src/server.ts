import express from 'express'
import {join, dirname} from "path";
import {fileURLToPath} from 'url';

const app = express()
const PORT = 3001

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const publicPath = join(__dirname, '../client');

app.use('/', express.static(publicPath));
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
