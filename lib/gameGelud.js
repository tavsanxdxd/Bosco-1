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

const fs = require('fs')

function geludSave(db, obj, session) {
	mine = db
	const dbdir = `./media/${session}.json`
	fs.writeFileSync(dbdir, JSON.stringify(obj, null, 2))
}

function setGelud(session) {
	const dbdir = `./media/${session}.json`
	if (!fs.existsSync(dbdir)) {
		const objtic = {
			status: true,
			session: session,
			Z: null,
			Y: null
		}
		geludSave(dbdir, objtic, session)
		return objtic
	} else {
		const read = JSON.parse(fs.readFileSync(dbdir))
		return read
	}
}

module.exports = setGelud
