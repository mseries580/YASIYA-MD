import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.join(__dirname, '..', 'config.env');

if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
} else {
    dotenv.config();
}

function convertToBool(text, fault = 'true') {
    return text === fault;
}

const config = {
    SESSION_ID: process.env.SESSION_ID || '',
    PORT: Number(process.env.PORT) || 8000,
    SESSION_NAME: process.env.SESSION_NAME || 'auth_info_baileys'
};

export { convertToBool };
export default config;
