const connection = require('../database/connection')
const crypto = require('crypto')

const index = async (req, res) => {
  const ongs = await connection('ongs').select('*')

  return res.json(ongs)
}

const create = async (req, res) => {
  const { name, email, whatsapp, city, uf } = req.body

  const id = crypto.randomBytes(4).toString('HEX')

  await connection('ongs').insert({
    id,
    name,
    email,
    whatsapp,
    city,
    uf
  })

  return res.json({ id })
}

module.exports = {
  index,
  create
}