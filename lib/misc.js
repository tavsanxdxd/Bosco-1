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

const { fetchJson, fetchText } = require('../lib/fetcher')
const fetch = require('node-fetch')


const asupan = () => new Promise((resolve, reject) => {
    console.log('Fetching video...')
    fetchText('http://sansekai.my.id/sansekai.txt')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Random dadu for group game xD
 * @returns {String}
 */
const dadu = () => new Promise((resolve, reject) => {
    console.log('Get sticker....')
    fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/Dadu')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

module.exports = {
	dadu,
	asupan
}
