/* coded by raashii
*/

 const Asena = require('../events');
 const { MessageType, Mimetype } = require('@adiwajshing/baileys');
 const fs = require('fs');
 const ffmpeg = require('fluent-ffmpeg');
 const { execFile } = require('child_process');
 const Config = require('../config');

          var mode = ''
if (Config.BOT == 'default') mode = 'ᴅᴇᴠᴇʟᴏᴘᴇʀ : ʀᴀᴀsʜɪɪ'

else mode = 'ғᴏʀᴡᴀʀᴅᴇᴅ ʙʏ ' + Config.BOT

            const raashi = {

                  key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "Ꮋʏᴘᴇʀ Տɪʀ Ғᴀᴍ★", "caption": mode , 'jpegThumbnail': fs.readFileSync('botsir.jpg')}}
             
             
            }

Asena.addCommand({pattern: 'mforward ?(.*)', fromMe: true, desc: 'its foraward replied audio'}, (async (message, match) => {    
    if (message.reply_message === false);
    
    if(message.reply_message.video ||
      message.reply_message.sticker ||
      message.reply_message.pdf
    )
      return message.sendMessage("*Not supported!*\n\n   only support audio files🌚");
      
        if (match == "") return await message.sendMessage("*Give me a jid*\nExample .mforward jid1 jid2 jid3 jid4 ...");
       
    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });
let id = match[1];
    ffmpeg(location)
        .format('mp3')
        .save('output.mp3')
        .on('end', async () => {
            await message.client.sendMessage(id, fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true, quoted: raashi,contextInfo: { forwardingScore: 2, isForwarded: true}});
});
}));
