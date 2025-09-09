const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~ZVpGwTiI#ADm4v0eudFt5ljvezv2jHDvXxzFNm2h7F9x2BRuqlqY'
};
