const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['6285776961725'] //ganti nomer lu
global.ownername = "TegarDev" //ganti nama lu
global.developer = "TegarDev" //nama lu
global.ytname = "YT: Tproducion" //ur yt chanel name
global.socialm = "https://instagram.com/tegardevsja?igshid=YmMyMTA2M2Y=" //taroh sosialmedia lu kalo ga punya biarin aja
global.sgc = "https://chat.whatsapp.com/DV6BuxjWQSV1mPw9Mi9j4c" //ganti group lu
global.location = "Jakarta" //ganti lokasi lu

//bot bomdy 
global.owner = ['6285776961725'] //ur number
global.ownernomer = "6285776961725" //ur number
global.ownertag = '6285776961725' //ur tag number
global.premium = ['6285776961725'] //ur premium number
global.botname = 'RAKUBOTz' //ur bot name
global.ownername = "ðð°ðĩ ðĻðĒr"
global.linkz = "https://youtube.com/@Tproduction" //your theme url which will be displayed on whatsapp
global.dana = "628516189652"
global.pulsa = "6285161389652"
global.websitex = "https://tegarkurniawansaja.000webhostapp.com/#" //ur website to be displayed
global.websitex1 = "https://websitetegarone.blogspot.com/?m=1"
global.botscript = 'Tegar kurniawan' //script link
global.themeemoji = "ðĶ" //ur theme emoji
global.packname = "Sticker By" //ur sticker watermark packname
global.author = "noname" //ur sticker watermark author
global.wm = "tegardv" //ur watermark

// Other
global.sessionName = 'Session'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Doneâ',
    admin: 'ððĒðŊðšðĒ ððŠðīðĒ ðĨðŠ ððķðŊðĒðŽðĒðŊ ðð­ðĶðĐ ððĨðŪðŠðŊ ðð°ðĨ!!',
    botAdmin: 'ðð°ðĩ ððķðŽðĒðŊ ððĨðŪðŠðŊ ðĪð°ðŽ',
    premime: 'ððĒðŊðšðĒ ððŠðīðĒ ðĨðŠ ððķðŊðĒðŽðĒðŊ ððīðĶðģ ððģðĶðŪðŠðķðŪ!',
    owner: 'ððĒðŊðšðĒ ððŠðīðĒ ðĨðŠ ððķðŊðĒðŽðĒðŊ ð°ð­ðĶðĐ ððļðŊðĶðģ!',
    group: 'ððĒðŊðšðĒ ððŠðīðĒ ððŠ ðĻðķðŊðĒðŽðĒðŊ ððŠ ððģð°ðķðą',
    private: 'ððĒðŊðšðĒ ððŠðīðĒ ðĨðŠ ððķðŊðĒðŽðĒðŊ ððŠ ððĐðĒðĩ ððģðŠð·ðĒðĩðĶ!',
    bot: 'ðð°ðĩ ððŊð­ðš!',
    wait: 'ððĒðŠðĩ ððĶðĨðĒðŊðĻ ððŠ ððģð°ðīðĶðī....',    linkm: 'Where is the link?',
    endLimit: 'ððŠðŪðŠðĩ ððŽðĒðŊ ððŠ ðģðĶðīðĶðĩ 12 ððĒðģðŠ',
    nsfw: 'ððŠðĩðķðģ ððīð§ðļ ððĶð­ðķðŪ ððŠ ðĒðŽðĩðŠð§ðŽðĒðŊ ðð­ðĶðĐ ððĨðŪðŠðŊ',
}
global.limitawal = {
    premium: "Infinity",
    free: 25
}
global.thum = fs.readFileSync("./Media/theme/jarot.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./Media/theme/jarot.jpg") //ur logo pic
global.err4r = fs.readFileSync("./Media/theme/jarot.jpg") //ur error pic
global.thumb = fs.readFileSync("./Media/theme/jarot.jpg") //ur thumb pic
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//module api
module.exports = {
api:{
     removebg: ['zNKnayDFH1nugtA81fkPMzXn','5CyygkXiT5vrki2Z6ZsUCE8u','Mz4yJkagrCLotdgsr4Ms39ud','vEeWnzQws9kJoYNMYKhbT1s6','2arViktax9HUdMqy9U7wFLKT','sfZpRHNwVPAG57nZVHijYZ9v','oqVVyQ2rBDYdUrxThg4GdjhA','rGp4axHpQ56Y5tRLX7J789QC','NfPx6NgTkpVYLnKUZHCAM1P3'],//https://remove.bg/api
     unscreen: ['N6J4Bjbyh2V4eqhAPTWYtFER','fcKJkPstNXp4pjntYt3bR38E'],
     upscaling: '1255173112',
     imgsuper: ['198f69d4b2msh0021bb0690669a6p1f3a80jsn9cab1ae485cc','85731a45bbmshf7bd86f09b300c2p14e544jsncd18a8d5dba2'],//https://super-image1.p.rapidapi.com/
     speechtotext: ['897beebb3ac74ceeaa6f8d0903b2297a']
   }
   }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
