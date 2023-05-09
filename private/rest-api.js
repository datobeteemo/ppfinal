const express = require('express')
const router = express.Router()
const crypto = require('crypto')
const fs = require('fs')

	// const birdsong = fs.readdirSync('/www/soundobject')
	// console.log(birdsong)

function updateDB (gps) {
	const db = require('./sonicEnv.json')
	db.push(gps)
	const data = JSON.stringify(db, null, 2)
	fs.writeFile(`${__dirname}/sonicEnv.json`, data, (err) => {
		if (err) console.log('something went wrong', err)
		else console.log('database was updated!')
	})
}

// router.get('/www/soundobject', (req, res) => {
// 	const ran = Math.floor(Math.random() * birdsong.length)
// 	res.json({message: `string`})
// })

router.post('/api/save-gps', (req, res) => {
	console.log(req.body)

	updateDB(req.body)

	res.json({message: 'got it!'})

})

module.exports = router