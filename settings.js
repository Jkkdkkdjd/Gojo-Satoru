//═══════════════════════════════════════════════════════//
//
//                              𝙶𝙾𝙹𝙾-𝚂𝙰𝚃𝙾𝚁𝚄 𝓫𝔂 𝓷𝓮𝔁𝓾𝓼𝓝𝔀
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['01501575120']
global.premium = ['01501575120']
global.ownernomer = '01501575120'
global.ownername = '𝑫𝑹𝑨𝑲𝑬𝑵🐼🍷'
global.botname = '𝑩𝑶𝑻 𝑫𝑹𝑨𝑲𝑬𝑵🐼🍷'
global.footer = ' 𝑩𝑶𝑻 𝑫𝑹𝑨𝑲𝑬𝑵🐼🍷'
global.ig = 'https://github.usNw'
global.region = 'Egypt, South Africa, Cairo'
global.sc = 'https://chat.whatsapp.com/FRu7Ogowi8V3ugTQQ5Y06H'
global.myweb = 'https://youtube.com/channel/UCxVaIay8BccgBtsofagA6_g'
global.packname = '★دراكن يروحي★'
global.author = '★01016865749★'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'تم يروحي✓',
    admin: '*「 هـذا الامـر فـقـط لـ المـشـرفـيـن 」◣*',
    botAdmin: '*「 ارفعني مشرف لـتـفـعـيـل  الامـر 」◣*',
    owner: '*「 هـذا الامـر فـقـط لـ الـمـالـك 」◣*',
    group: '*「 هـذا الامـر فـي الـمـجـمـوعـات فـقـط 」◣*',
    private: '*「 هـذا الامـر فـي الـخـاص فـقـط 」◣*',
    bot: '*「 هـذا الامـر مـخـصـص لـ الـبـوت 」◣*',
    wait: '*「 اسـتـني شـويـه... 」◣*',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 1000 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
