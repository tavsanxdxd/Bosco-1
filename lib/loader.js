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

const fs = require('fs-extra')
const { color } = require('./color')

function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

function nocache(module, cb = () => { }) {
    console.log(color('object', 'green'), color(`'${module} Now Watching Chaneges '`, 'green'))
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

module.exports = {
    uncache,
    nocache
}
