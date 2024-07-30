
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "923072380380";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________
Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0RKc3JVUFgvK3JMdVpNa04yUzlRbWo0ZHNGckFXRkllWFBXS3h1SWpWST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMitnMmFDYTBQQUduZkZ6aEloeGpHditGTGl4RmNrRXdkVUZjdyt6bUNEbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQS9XOFl0R2tSODZhYTBYK1hEaS9WVElMOWtScXRwemJxT3E0MTR1a0dZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtVEFmZmZCZUpDL2NyUkIwRk03YkpTcldXUW1WOG9ZZmNwTlJhMVNIMjJnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdGejR0aWFDMEVxMDE3U1grcGVtWCttb3F5NmlFMnBGckhJaW1kQlhtSFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRCbEdTeXF4ZDZEZFV6Y2xpQUo1eTIvT0pHbTEvY2FQZ29ZbDVwRlBEM3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JUMzhHQ3dJUndBbzhGcXdOTXlXSytHUjlJMGVqcFVmTE1FZElsQUdIYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVXU2cDJmYWN3aWQydEVkOTFHQTRwUnFCR3Y4MDZYYjcvSDgxS2w3SWt6cz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVDa1p6NEhrcGJTU0VYTDVCQkxFUjNEbzU2UlFNcGlJM3ZIdGVxaHZQWUNZN2tla2M0citmeFN3M2F3bXIxd0hzeDIvYnJ1QUFTMXpyeEIrR2JnZGp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAwLCJhZHZTZWNyZXRLZXkiOiJLbHhrT0FGOWk1aU44NEMwZ1JCaEVNakZ2SmdBWjJpOGdyM3d5aXAwVzRnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc5NTk1OTkzN0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3NkUwQ0JGQTM2OUI3ODFERDk3NTgwMkI3MDU4NDBEMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyMzEzMTExfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3OTU5NTk5MzdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTJGQzA2MkQ2RTJFMUFBMzA2NTk3MzZDNjMzMzI3MDkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjMxMzExMX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoicWoxMWFFeDZRUlN5UGNQdWZVN2pOZyIsInBob25lSWQiOiJkNTc5M2MyZC0yOWU2LTQ3ZWMtYTlhYy1iZDIwNjhiMGI3YmEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXNqMCtIY29jaGZqS0VVMlU3VVAvNThkckxrPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9lMk1iSjF1OGN3eGdtUUVhV0ozK2NVa2liYz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJXSjZLUFg2RSIsIm1lIjp7ImlkIjoiMjU0Nzk1OTU5OTM3Ojc3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlRJR0VS8J+UpfCflKUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0wzcTVKVUZFSWpUb2JVR0dDQWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ijhpd0kyZ3NhcHBHUDQxbWY4UzZYNjc1MHhESS92RVFXYWZLRWRiTFJjbkU9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImxJTFpVcjZERHAyRlExZVFKbnhwUEY1MzVjdS9NQ25UbXYwdDJJY2d1bnNOVzVhNzhCVm95WnFjVHpBb1ArV0Z6dFExM1pJTlVSbHVMM201b3Q3bUN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJPOVFQd3FOUTdnazBRblJpR05BZmF4eHBXbndOTEFwa2pjQ0ErZUplejhJam5Od0ZFZmtBSm9yRjZtTFk4M0xqaFhJTjdmK2xsYW84WUk0azluNUZqZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc5NTk1OTkzNzo3N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmSXNDTm9MR3FhUmorTlpuL0V1bCt1K2RNUXlQN3hFRm1ueWhIV3kwWEp4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMzEzMTA4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9iZSJ9

  
  "Your session ID" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "TalkDrove",
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
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
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
