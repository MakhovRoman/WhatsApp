import express, { static as stat } from 'express';
import path from 'path';
import fs from 'fs';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const inexPage = fs.readFileSync(path.resolve(__dirname, 'dist', 'index.html'));

app.use(stat('dist'));

app.get('*', (req, res) => res.set('Content-Type', 'text/html').send(inexPage));

app.listen(PORT, () => {
  console.log(`Server running  http://localhost:${PORT}`);
});
