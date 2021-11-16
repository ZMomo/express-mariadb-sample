const pool = require('../config/database');

module.exports = {
    example: (req, res, next) => {
        console.log("Exemple de controlleur");

        if (true) { // changer en false pour tester le second cas de figure
            return res.status(400).send("erreur example1")
        }
        return next()
    },
    example2: (req, res) => {
        console.log('Exemple de controlleur 2')
        if (true) { // changer en false pour tester le second cas de figure
            return res.status(400).send("erreur example2")
        }
        return res.status(200).send('ok')
    }
}