const db = require('../context');

class Call_Schedule {

    async GetAllCallSchedule(req, res) {
        db.query(`SELECT * FROM Сall_Schedule`, (error, result, fields) => res.json(result))
    }
}

module.exports = new Call_Schedule();