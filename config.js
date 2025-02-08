const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VVa4+qSBD9L/1VZ+UpaDLJ8kYRRQUd3Ww2DbS85CE0IN743zfonTs3uY+d5VOnoU6dqjqn+AKyPKqQgTow/QKKMmogRv0RdwUCUyDWpxMqwRD4EEMwBYzK5mOHHDnYtYh4PLnoNCFruc4v2Zg3Tnq4i+1DXNryuX0F9yEoavcceb8BFLa6QVx3Tm4cxA7LmjfnGovwInmQBnh/YyfqzDQ888JEPWCPCKMyygKlCFGKSng2UGfBqPwc/YHR5O2aDXV+n2IN6VibkwF9mV29K9rRly63TXEzWKoz3fwc/e6sD5pcW+VKxLHrogwRxcWoThNhtE2OfBNHY1Y2svNCnD3pV1GQIX/mowxHuPt03xWJMCzGmSm5IXCbRaG+2dejW/rtaTZ/yzR32WkWYhtI7oPPEa/HCd/KmodircmW+I1DA0mL/ZBsqGanwoVihTk1mLjMA/Abcat810ryf/p+Eb1bhUdJK8Tc5ijh7O3ANnqw2qeo3Z8YO0w7ytnl7GTPf47+IpK5SkT89RC6A/2gKRuODaJgNhoLrW9N1rdtXMzOfCBT+Qd9iOvydyyXmTFbwT3riy3jUAmxWb3dlp03Uup9Sa0iXlJbdFAVO2Fvrq5yll0zTkUGo6Ib7VzvEjuhD1Oho2I+rK8DX0yLypGF10dFCepmPpiS9yEoURBVuIQ4yrPHHT0eAug3W+SVCD/aC+YjleJnh0WTLzu0zVbmfG0MSJ0xUaPgFX07LJo2KNY513mvYAiKMvdQVSFfjyqcl52JqgoGqALTvx6T6osuUZpjNI98MAUUy3AMzTAswZB/Vn+0IcQVLIo/MoTBEJzKPDURmOKyRkPwDBBkUZBEkWZJRSZ5WpQEWeUIlSfGHDMmpL7E9JnUjlJUYZgWYEpy9IQgeJZj738PQYau+KmfvmqaHIJTVFbYyerinEP/XVzvL6Hn5XWGt13mSf0BlWBKfFwjjKMsqPrK6gyWXhg1SOrrANMTPFfoPgQ+aiIP9Xjg7R8hDTh5a3uRoXHoxbQmu9u671yYZ89PeEh4PmL8F5ZivBcG+uSLS1HUi++50Of9CUVyFOjb8bRuH/NLJTlxIeGQV7rF5bhxZZPpMns0MFyvdR5qeEoAlch/77ILvaQu7DxB2e9wL9tM06+r9arU450Zz21pjX2VMWnmO9yntMD0y8e6lHK/x9P2wnK90HTQT6vP84MapuwPgrh/a3of4SMMo3MFpkCaZ1KF1qpi0E62IDRNUAJBCgTwMaR30z1FLctIFXe0pHLLZOaJ6yVjZ7VBxqubs5MxcVA5bAdLa9U6/OtPQMAUGAncXiaeL7f8m7Uf3/SV49xcSj8blb6dm1IiFKelYY5cQmRP8tJeUfR4MOY4KmY3Qm0Srq4f1cWiOzHqZJQn5uIihXL72md7iuX7ZGV8mC8kq8r1ozKyd4UlS6YiUsFJLC7NmaLJjI33ru22NRmyrKYR5wO52HfSdi6neLnkk6KzD1dddo4CF6ozbmforNA+18FjHZ2//gair0Z9SusUocdWzWA/ov8azvcqJ+7D7zC+7ulfKElct3S43vltiG5HSRccGSksF+HDrSLVNedrIuIcRrZvlWqBe2/f4gzxKS9TMAUw88s88sEQnGGFhQ+j/sz7xBCknVAUWwzxu7+B0D+GugH3fwEh2cPogggAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " 254743445041",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    CHATBOT1 : process.env.AUDIO_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE_MESSAGES || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  ANTILINK_GROUP : process.env.ANTILINK_GROUP || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});





