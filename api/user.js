const bcrypt = require('bcrypt-nodejs') // criptografa a senha do usuario

module.exports = app => {
    const obterHash = (pasword, callback) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(pasword, salt, null, (err, hash) => callback(hash))
        })
    }
    const save = (req, res) => {
        obterHash(req.body.pasword, hash => {
            const pasword = hash

            app.db('user')
                .insert({ name: req.body.name, email: req.body.email, pasword })
                .then(_=> res.status(204).send())
                .catch(err => res.status(400).json(err))
        })
    }

    return { save }
}