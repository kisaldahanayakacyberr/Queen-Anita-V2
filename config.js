//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "94701222478";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0tDY0U0OW9nRjNOY2ZGakxZRTNBV2dZUWZEeEVoQ3plaEdXeEUyUTdWUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVmxEeUQvZ1dkeUI1cWVidGE4eGdQQkpOUkhvZktONFlBMURJemV3SkVBUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4QVRtNmtQMU5TVEZLQkhybys3cmdPdkJIaC9OQUJMOGZmbUZaVm5VbW5RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4aWhGT0c0SU1zRUkwRjNqSXJOZ0ZLOXZlb0N3dXdVamRDNW9SYUZQUGc0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhNU0ZiVm8wU3Btc2dNWm4yR1RRaHdlb28vRXE0TGNSc0l2MzN1TWFrM3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkV6ZndBRU1IcjVMdFZnVnc2TzBKY2JQRW5WWTdpRVl1dzN3VnduUlYvMEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUtOUE1zcU9NVjBlTXp2a01kUS9nZGx5WnZIWGFKT1FWbHB2ampVTzdsZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK292SzhUMk9iSVA1MjFTcjBJb09Hc2tQWjNrdnlOUEhyQU9VQW1yUDZSaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im82M2ErNGhMWEUvUEJmbkV0d0lQekpPM1NORXgrbVYwREZWQlUzNFpuVXdyc0U2WmhTZHBzQThWdWg3dlhvQVczdXZIS3VyVlJXSnJ3R25ZOTlPVUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI4LCJhZHZTZWNyZXRLZXkiOiJMdmhndHR5VVdCSktyVFVKNEk0dFV4U1I1cGtBZzJLeUVQTFFPS0lBd0JjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJaQnY2N1l6bVFYU3pfMGNtWUlJYmR3IiwicGhvbmVJZCI6IjZmNjYxNmNhLWIwYWItNGIyNS1iYzhiLTg0MmFkNTk4NTEyMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqM1c0eHlTZm5wanA5dW5VVlFaL1VVR0JXR1E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibDA4bjJZTzRYR2RPN0N1RmxNWDVYTEVOTVBBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjQ5NVkzWDRTIiwibWUiOnsiaWQiOiI5NDcwMTIyMjQ3ODoyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuKAolxu4oCiXG7igKJcbuKAolxu4oCiXG7igKJcbuKAolxu4oCiXG7igKJcbuKAolxu4oCiXG7igKJcbuKAolxu4oCiXG7igKJcbuKAolxu4oCiXG7igKJcbuKAolxu4oCiXG7igKJcbuKAolxu4oCiXG7igKJcbuKAolxu4oCiXG7igKJcbuKAolxu4oCiXG7igKJcbvCdkILwnZCY8J2QgfCdkITwnZCRIPCdkJHwnZCO8J2QlvCdkIPwnZCYIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPbUc2OUVDRU5icTY3WUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIrZDI3ZUlPVnpFelhESU5OVzN6TEVQek1pZVA2dkJ1SGhON0hQcUx6THcwPSIsImFjY291bnRTaWduYXR1cmUiOiJJK1BmOFNxR2RuWW5mbkFqZ1Iya0d6ZzVwQUpMSGg2SDZtUi8zb1NRWlZMNFk0ZFRpc3JVTnhiZ1ZBNmdtNlErY21VWEhLdWRzT1ZkcklTOWUzVTFDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWndYSU0vMnF2QnY3QUhuVVNBYmVlN1dYZFUwZEhvQW5ObTVmaDBEQ0o4ODFFYnJDMXQ5Sk5hdDZ0dHNEQ0dCQVlTU3ZTSkhXamROQW8wTWFBK1VnQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcwMTIyMjQ3ODoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZuZHUzaURsY3hNMXd5RFRWdDh5eEQ4ekluaityd2JoNFRleHo2aTh5OE4ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjU2MjU3MDEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSlU1In0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "kisaldahanayaka",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
