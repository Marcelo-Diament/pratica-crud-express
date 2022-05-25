const fs = require('fs')
const path = require('path')

const helper = {}

helper.read = fileName => fs.readFileSync(path.join(__dirname, `../data/${fileName}`), 'utf-8')

helper.write = (fileName, data) => fs.writeFileSync(
  path.join(__dirname, `../data/${fileName}`),
  JSON.stringify(data, null, 2),
  'utf-8'
)


const controller = {}

// GET
controller.index = (req, res) => res.send(`USUÁRIOS`)
controller.add = (req, res) => res.send(`CADASTRAR USUÁRIO`)
controller.edit = (req, res) => res.send(`ATUALIZAR USUÁRIO`)
controller.exclude = (req, res) => res.send(`EXCLUIR USUÁRIO`)
controller.show = (req, res) => res.send(`USUÁRIO ${req.params.id}`)

// POST / PUT / DELETE

module.exports = controller