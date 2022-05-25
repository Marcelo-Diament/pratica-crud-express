const controller = {}

// GET
controller.index = (req, res) => res.send(`USUÁRIOS`)
controller.add = (req, res) => res.send(`CADASTRAR USUÁRIO`)
controller.edit = (req, res) => res.send(`ATUALIZAR USUÁRIO`)
controller.exclude = (req, res) => res.send(`EXCLUIR USUÁRIO`)
controller.show = (req, res) => res.send(`USUÁRIO ${req.params.id}`)

// POST / PUT / DELETE

module.exports = controller