const sql = require('../service/db.js')

function getUser() {
  return new Promise((resolve, reject) => {
    sql.execute('select * from [dbo].[Client]')
      .then(function(data) {
        resolve(data);
      })
      .catch(function(err) {
        reject(err);
      })
  })
}

module.exports.getUser = getUser
