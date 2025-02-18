const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    //Enter Your PRINCESS OLYA session id
    SESSION_ID: process.env.SESSION_ID || 'undefinedm3p3kCbQ#zSelZdmqRP3NvKeQGqFZZKRg3GMzQyLjUIk7Wrfhhco',
    //ENTER YOUR MONGO DB URL
    MONGODB: process.env.MONGODB || "mongodb+srv://Queen-Aurora:Pasanhansaka2007@cluster0.x2ktu.mongodb.net/",
    // Settings
    AUTO_READ: process.env.AUTO_READ || "false",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    OWNER_REACT: process.env.OWNER_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "true",
    MODE: process.env.MODE || "public",
    ALWAYS_OFFLINE: process.env.ALWAYS_OFFLINE || "true",
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    ANTI_BAD_WORDS: process.env.ANTI_BAD_WORDS || "false",
    ANTI_BOT: process.env.ANTI_BOT || "false",
    ANTI_LINK: process.env.ANTI_LINK || "false",
    ALWAYS_RECORDING: process.env.ALWAYS_RECORDING || "false",
    ALWAYS_TYPING: process.env.ALWAYS_TYPING || "true",
    AUTO_BIO: process.env.AUTO_BIO || "false",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
    OWNER_NUM: process.env.OWNER_NUM || "0723311384"
};


