const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "BWM-XMD;;;H4sIAAAAAAAAA5VU246qSBT9l3qVHhFB0KST4aKCooKCFybnoYACS7nJRYSO/3DOeZi3znzGvMzHzCf0J0zQ7nQ/zDnTQ0JSKYq1V+219noCUYwzNEUVGDyBJMVnmKNmmVcJAgMgFJ6HUkAAF+YQDMBK2KtOyQojxjivYKTUsTqznGymXvaCPhsyIy7uzQWjc4mUR3AlQFLYAXZ+Aii3lUAJA9m1auEyYRJ5yF7woRX27PVhPNqb9TktreVIyU3nEVwbRIhTHPnDZI9ClMJgiioN4vRz9P2JpsSnQok2xWJ/UZ1hQCGVG1uXZL85LinJKC8MnDJ6Gew+R3/rlEZhaZvlUOLkyXZdYZY3TIMOFmutduYbJEk4TuQNb87u9DPsR8hVXBTlOK8+3ffdTBAl37KC7VzqUeTMnB51K52sepyniNMDt4iEvDNfxDblfI64Yklx2W/10vYqqqamcSy7W1Usp7E/FuxhYbWnO1aTQ6pa7z4S19I3rxz/V9+1SrA0rj/R1qx/dqw4SJlz2++eC3LPQWbDdB3PkvlNtjE/ST9njPYZjU2mK81UyB8CKvUpv9XyNia7DvlgJVSuIk60KHunD/Mi/RnLVumaukqLZbRkOlGPEvE+sNFptCjH0x63R+3T2KQk+hiQ9pzDYsCa8tiWFVXqT7p0uPEpxjtPZG85lfElYWZt1mdJqXy83eiIKsUFg86VACnycZanMMdxdNujOwSA7nmFnBTlt/YCfSWVRbhi5gWNlmHb8UdLRNp9ykmnlF6Vi42p9/REYbhe+QgIkKSxg7IMuTLO8jitZijLoI8yMPjtCwEidMnvwjXluh0CeDjNcjMqkiCG7puqbx+h48RFlK+qyBGbBUrBgHzfRnmOIz9r+lhEMHX2+IzEPcwzMPBgkKErAVx0xg5q8ECYTutZua6WRuhnh11MUrWi8w3lfRzdjzioS/U41ntwHMg+0BzXe7AZFj7YkKQR60HaRhQgAH6dmeafH0pYIXO26qtkzo9Vituik+B4EUNPrfBurHvvUYpcMMjTAhHAhs6xSIz4iKKf+S041K0eJ226pqjGcWp0W+ddqnW0YPYB964pGDy955QYuzc8TV7LI4MFBAhvFsTNzSmGZrtchyR7VHfQIX/NfimbRsIk+SVCOSBABJvT4OX5658vz9++vzx/++P1/f3l+dvXv//63hR/VaaBdVEOcZCBARDVmu6tab1P28GZ3+14zPNTnm/c8qbk20jcLccEUreQ9qV7FlXku060PxjwgoSM1GYjL/FGm23pYB6vSPrfQMAAWLJI1tN0YSNDWkWsdd7Ot+vdVsvXO/2gG0UF2YwyZkfN3ey5MR1w2LBaK4nn5GGtx/3wRJP1iEW7U0daRBmSJgU7EfjHptrdUR+LbZPW0BuS6ikk98M6V2LR32gS5/G0GR6XS56uYYnNWJ/25ydVbsNQ98etuppV7skaxbu1qLbp2ufyQ9cPvFDfof7Ylfj7sN7CIngNaXwbo6dX/3kY3TLvVZn/VPB9FMgr8QHjNUV/YDcBWXqf9WlHtkvcjeXthN6RVLb17blUC9ve9rIOOFnxlWO+ANfrFwIkAcy9OA3BAGShDQEBApjl/PsoGzhEWQ7DBAw6bJcj+yxDUwQIKz5JVjnM3xIA8M0jSwm4/gNnQ3XVHQgAAA==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*🤍*",
// set the auto reply massage on status reply  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "SUBZERO-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "SUBZERO-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "254738100623",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "Mr Frank",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ MR DERRIC*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "",
// add img for alive msg
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "private",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
DEV: process.env.DEV || "254738100623",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", // change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
