__path = process.cwd()

// Jan asal ubah ngab
var express = require('express');
var db = require(__path + '/database/db');
try {
var zahirr = db.get("zahirr");
} catch (e) {
	console.log('')
}

var creatorList = ['x-Ziyy', 'ALDI FAUZI'];
var creator = creatorList[Math.floor(Math.random() * creatorList.length)];


var key = ['nayla','ziykey','FreeApikey','xZiyy']; // Apikey Lu Ngab

var ffmpeg = require('fluent-ffmpeg');
var brainly = require('brainly-scraper-v2');
var imageToBase64 = require('image-to-base64');
var upload = require(__path + '/lib/upload.js');
var axios = require('axios');
var FormData = require('form-data');
var ytdl = require('ytdl-core');
var ytpl = require('ytpl');
var qrcode = require('qrcode');
var secure = require('ssl-express-www');
var cors = require('cors');
var scrapeYt = require('scrape-yt');
var kc = require('knights-canvas');
var ch = require('canvas-hikki');
var gtts = require('node-gtts');
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var TikTokScraper = require('tiktok-scraper');
var yts = require('yt-search');
var fs = require('fs');
var util = require('util');
var router  = express.Router();

var { tts, wait, simih, getBuffer, h2k, banner, getRandom, start, info, success, close, pickRandom } = require(__path + '/lib/functions.js');
var { RemoveBg } = require('remove.bg');
var { tahta } = require(__path + '/lib/tahta.js');
var { createHash } = require('crypto')
var { spawn, exec } = require('child_process');
var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js')
var { recognize } = require(__path + '/lib/ocr.js')
var options = require(__path + '/lib/options.js');
var { Vokal, Base, Searchnabi, Gempa } = require('./../lib');
var cookie = "HSID=A7EDzLn3kae2B1Njb;SSID=AheuwUjMojTWvA5GN;APISID=cgfXh13rQbb4zbLP/AlvlPJ2xBJBsykmS_;SAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;__Secure-3PAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;VISITOR_INFO1_LIVE=RgZLnZtCoPU;LOGIN_INFO=AFmmF2swRQIhAOXIXsKVou2azuz-kTsCKpbM9szRExAMUD-OwHYiuB6eAiAyPm4Ag3O9rbma7umBK-AG1zoGqyJinh4ia03csp5Nkw:QUQ3MjNmeXJ0UHFRS3dzaTNGRmlWR2FfMDRxa2NRYTFiN3lfTEdOVTc4QUlwbUI4S2dlVngxSG10N3ZqcHZwTHBKano5SkN2dDlPSkhRMUtReE42TkhYeUVWS3kyUE1jY2I1QzA1MDZBaktwd1llWU9lOWE4NWhoZV92aDkxeE9vMTNlcG1uMU9rYjhOaDZWdno2ZzN3TXl5TVNhSjNBRnJaMExrQXpoa2xzRVUteFNWZDI5S0Fn;PREF=app=desktop&f4=4000000&al=id;SID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1njBpLTOpxSfN-EaYCRSiDg.;YSC=HCowA1fmvzo;__Secure-3PSID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1dajgWzlBh9TgKapGOwuXfA.;SIDCC=AJi4QfFK0ri9fSfMjMQ4tOJNp6vOb9emETXB_nf2S05mvr2jBlmeEvlSsQSzPMuJl_V0wcbL1r8;__Secure-3PSIDCC=AJi4QfGeWHx-c4uTpU1rXCciO1p0s2fJWU07KrkZhWyD1Tqi8LyR-kHuBwHY9mViVYu1fRh2PA";

loghandler = {
    notparam: {
        status: false,
        creator: `${creator}`,
        code: 406,
        result: {
        message: 'masukan parameter apikey'
        }
    },
    notkey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter key'
    },
    keyinvalid: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Apikey Invalid'
    },
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter url'
    },
    notkata: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter kata'
    },
    nottext: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text'
    },
    nottext2: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text2'
    },
    notnabi: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter nabi'
    },
    nottext3: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text3'
    },
    nottheme: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter theme'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter username'
    },
    notvalue: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter value'
    },
    notheme: {
    	status: false,
        creator: `${creator}`,
        code: 406,
        message: 'theme tidak tersedia silahkan masukkan texmaker/list atau baca documentasi'
     },
    invalidKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Akses Apikey Tidak Di izin Kan'
    },
    invalidlink: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin link anda tidak valid.'
    },
    invalidkata: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin kata tidak ada dalam api.'
    },
    notAddApiKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter status, apikey, email, nomorhp, name, age, country, exp'
    },
    error: {
        status: false,
        creator: `${creator}`,
        message: 'mungkin sedang dilakukan perbaikan'
    }
}


var error = __path + '/views/error.html' // Error

//var invalidKey = __path + '/views/invalidKey.html' // Apikey Invalid
var len = 15
        var arr = '123456789abcdefghijklmnopqrstuvwxyz'
        var random = '';

        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }

        var lenn = 5
        var randomlagi = '';

        for (var i = lenn; i > 0; i--) {
            randomlagi += arr[Math.floor(Math.random() * arr.length)];
        }

        var randomTextNumber = random+randomlagi+'---------Aldi'+'AldiFauzi';

router.get('/canvas/goodbye', async (req, res) => {
            pp = req.query.pp,
            
            nama = req.query.nama,
            
            bg = req.query.bg,    
	    
            namagc = req.query.namagc,
            
            member = req.query.member
    
            if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    
            if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    
            if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    
            if (!namagc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter namagc"})
    
            if (!member) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter member"})
    
    

            let Welcome = await new ch.Welcome2()

            .setAvatar(pp)

            .setUsername(nama)

            .setBg(bg)

            .setGroupname(namagc)

            .setMember(member)

            .toAttachment()
    
 
            data = Welcome.toBuffer();
            await fs.writeFileSync(__path +'/database/welcome.png', data)
  
            res.sendFile(__path+'/database/welcome.png')
  
            .catch(e => {
         	
            res.json(loghandler.error)

            })

            })
router.get('/canvas/welcome1', async (req, res) => {
            pp = req.query.pp,
            nama = req.query.nama,
	        namagc = req.query.namagc,
	        ppgc = req.query.ppgc,
            bg = req.query.bg,
            member = req.query.member
            if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
            if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
            if (!namagc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter namagc"})
            if (!ppgc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ppgc"})
            if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
            if (!member) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter member"})
            const Welcome1 = await new kc.Welcome()
            .setAvatar(pp)
            .setUsername(nama)
            .setGuildName(namagc)
            .setGuildIcon(ppgc)
            .setBackground(bg)
            .setMemberCount(member)
            .toAttachment();
            data = Welcome1.toBuffer();
            await fs.writeFileSync(__path +'/database/welcome1.png', data)
            res.sendFile(__path+'/database/welcome1.png')
            .catch(e => {
         	res.json(loghandler.error)
            })
            })
// goodbye 1
 router.get('/canvas/goodbye1', async (req, res) => {
            pp = req.query.pp,
            nama = req.query.nama,
      	    namagc = req.query.namagc,
    	    ppgc = req.query.ppgc,
            bg = req.query.bg,
            member = req.query.member
            if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
            if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
            if (!namagc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter namagc"})
            if (!ppgc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ppgc"})
            if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
            if (!member) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter member"})
            const Goodbye1 = await new kc.Goodbye()
            .setAvatar(pp)
            .setUsername(nama)
            .setGuildName(namagc)
            .setGuildIcon(ppgc)
            .setBackground(bg)
            .setMemberCount(member)
            .toAttachment();
            data = Goodbye1.toBuffer();
            await fs.writeFileSync(__path +'/database/goodbye1.png', data)
            res.sendFile(__path+'/database/goodbye1.png')
            .catch(e => {
         	res.json(loghandler.error)
            })
            })

router.use(function (req, res) {
     
res.status(404)
    
.set("Content-Type", "text/html")
    
.sendFile(__path + '/views/error.html');

});

module.exports = router