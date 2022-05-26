const fs = require('fs')
const path = require('path')

const helper = {}

helper.read = fileName => fs.readFileSync(path.join(__dirname, `../data/${fileName}`), 'utf-8')

helper.write = (fileName, data) => fs.writeFileSync(
  path.join(__dirname, `../data/${fileName}`),
  JSON.stringify(data, null, 2),
  'utf-8'
)

const getUsuarios = () => JSON.parse(helper.read('users.json'))

const getUsuarioPorId = id => getUsuarios().find(usuario => usuario.id == id)


const controller = {}

// GET
controller.index = async (req, res) => {
  const usuarios = await getUsuarios()
  res.render(`usuarios`, {
    title: 'UsersController.index',
    usuarios
  })
}

controller.add = (req, res) => {
  const usuario = getUsuarioPorId(req.params.id)
  res.json(usuario)
}

controller.edit = (req, res) => {
  const usuario = getUsuarioPorId(req.params.id)
  res.json(usuario)
}

controller.exclude = (req, res) => {
  const usuario = getUsuarioPorId(req.params.id)
  res.json(usuario)
}
controller.show = (req, res) => {
  const usuario = getUsuarioPorId(req.params.id)
  res.json(usuario)
}

// POST / PUT / DELETE

module.exports = controller