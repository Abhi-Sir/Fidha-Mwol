const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'download', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var r_text = new Array ();


    var respotext = await axios.get(`${r_text[]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(respotype.data), MessageType.text, {mimetype: Mimetype.text, caption: `🎥 ᴅᴏᴡɴʟᴏᴅ ᴄᴏᴍᴍᴀɴᴅs🎥
┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
┣𝕾⃝🎥ᴠɪᴅᴇᴏ
┣𝕾⃝🎥 sᴏɴɢ
┣𝕾⃝🎥 ᴠɪᴅᴇᴏ
┣𝕾⃝🎥 ɪɴsᴛᴀ
┣𝕾⃝🎥 sᴛᴏʀʏ
┣𝕾⃝🎥 ғʙ
┣𝕾⃝🎥 ɪᴍɢ
┣𝕾⃝🎥 ᴡɪᴋɪ
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
`}) 

})); 
