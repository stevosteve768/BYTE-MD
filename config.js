
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "stevosteve768@gnail.com";
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
global.owner = process.env.OWNER_NUMBER || "254795959937";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 1;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/d3acffd3ff710f519d5c3.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU5lTGNtM3BrNEV1bElicWp0TlJlbmdFWTF4dnhkM3RQWHRiSDdmZDMxST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWWlXZGpWTzZFdE5FNjJVN1pMQjRSczlOWjBxQmhETFQ4Mi9YcnZmOHhEdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQ0hJaUE1T0JYS3VFSnRKWWdhU1hSRDBpczhTN3FIVkM3ZWNpbUwwNFdVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkendoZTNXQ01NWjVWVkFhRmRTZzFRNC9RQUhrZWZyV2xDRHlySW5vNERJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNGNHBaRjdPNUFsRWFuazRTcnNKZEdnTUlyMTZ0WlQ4eTZZSUNRTGIwRzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJ3eTdjcVptUUg5TzZqak1WZXdIVU9PcHM0alp1WDdkTkdpK2VxcG1iUVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkE4bzR3Tm15Umxvdjc0NU9kN2FiSkpLaHYvZnRTRjZ6NWFLWFBON2JtND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVlyYzdGTGx3S0JuYUxZTjVHMWdkc1JqVDhRM3VyUFZxcEZMekxQVEkyRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBIUnRDc29BY3FFWEozNGNiV29vb0FRZWQ4bGVaZ2JZQVhoWHVpOTR4TloyMlJVZzJKV0VJSUZTTUxIQ1hkYzhSeEZZbDFPcGE5UElBdkZnTzZpWmlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUwLCJhZHZTZWNyZXRLZXkiOiJZNVREZklpbkRoMUN4RjFwLzNMRUVteTN6eVVDbEp2YmdZcEIrRUQ1dlRnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc5NTk1OTkzN0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwNjE3MkY3NUZERkM0QjUxRDM2MTc4QzgwMjBDM0M5OCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxOTE5NjQ4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3OTU5NTk5MzdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNjU1MkRGRkI4Qjk2MTZERjU3NzFDOUZBRDU3OTg3MTkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTkxOTY0OX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoicl95SzF0QUpTQWF1NnNaNTZJTW4xZyIsInBob25lSWQiOiIyZTBlNDY2YS00ODg2LTQ1NDctYmFhYy1mODgwMTNhNGM3MDMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiem9ad2d2aGYyQUJWemwvUDBHWDgrY3NncFVJPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxJZlpMaUwzNkNmMExGV3dpRnJzWGZtNmNQdz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI4WjdEMTVTViIsIm1lIjp7ImlkIjoiMjU0Nzk1OTU5OTM3Ojc1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlRJR0VS8J+UpfCflKUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0wzcTVKVUZFSkxSaWJVR0dCNGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ijhpd0kyZ3NhcHBHUDQxbWY4UzZYNjc1MHhESS92RVFXYWZLRWRiTFJjbkU9IiwiYWNjb3VudFNpZ25hdHVyZSI6InVENE1LSUlBMEM5Y2k3TGtDcGlFQ0Qvd1FmY2EzTy8xSkVkR0JoSEZQTnR2dithazN2UUhQd3RjZWZGMmZIYmJwazIybTZnMC8rN2tzWUJnSlhCcENBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ1UTlDQ1MzVGZtV1dwRWpJSTV0ZlpmNGhPQlByc3NKMlNYcXcrRHNmK2kxVm1ydlpoeXNyTDFYZXNkWDF6eTRPVDFoazJ5eWZweDNOblpyR3dwUmZpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc5NTk1OTkzNzo3NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmSXNDTm9MR3FhUmorTlpuL0V1bCt1K2RNUXlQN3hFRm1ueWhIV3kwWEp4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxOTE5NjQ2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9iZSJ9" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TIGER🔥🔥",
  packname: process.env.PACK_NAME || "Tiger🔥🔥",
  botname: process.env.BOT_NAME || "TIGER🔥🔥-MD",
  ownername: process.env.OWNER_NAME || "TIGER🔥🔥",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "Tiger🔥🔥",
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
