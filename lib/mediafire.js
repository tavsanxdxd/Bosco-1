/* 
██████╗░░█████╗░██████╗░██╗░░██╗░██╗░░░░░░░██╗██╗███╗░░██╗███████╗░█████╗░
██╔══██╗██╔══██╗██╔══██╗██║░██╔╝░██║░░██╗░░██║██║████╗░██║╚════██║██╔══██╗
██║░░██║███████║██████╔╝█████═╝░░╚██╗████╗██╔╝██║██╔██╗██║░░███╔═╝██║░░██║
██║░░██║██╔══██║██╔══██╗██╔═██╗░░░████╔═████║░██║██║╚████║██╔══╝░░██║░░██║
██████╔╝██║░░██║██║░░██║██║░╚██╗░░╚██╔╝░╚██╔╝░██║██║░╚███║███████╗╚█████╔╝
╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░╚══╝╚══════╝░╚════╝░
Codded by @DarkWinzo
Telegram: t.me/DarkWinzo
Whatsapp: https://Wa.me/+94775200935
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Whats bot - Isuru Lakshan
*/

const axios = require('axios')
const cheerio = require('cheerio')

const mediafireDl = async (url) => {
const res = await axios.get(url) 
const $ = cheerio.load(res.data)
const hasil = []
const link = $('a#downloadButton').attr('href')
const size = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '')
const seplit = link.split('/')
const nama = seplit[5]
mime = nama.split('.')
mime = mime[1]
hasil.push({ nama, mime, size, link })
return hasil
}


module.exports = { mediafireDl }
