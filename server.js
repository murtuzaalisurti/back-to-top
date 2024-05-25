import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express();

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.resolve(__dirname) })
})

app.listen('3000', () => console.log("listening..."))