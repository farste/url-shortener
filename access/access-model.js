const db = require("../data/dbconfig")

const access = (id) => {
    return db("urls")
    .where({id})
}

module.exports = {
    access,
}