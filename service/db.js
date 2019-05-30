const sql = require("mssql");
const config = require("../constant/config").db

// connect to your database
sql.connect(config, (err) => {
  if (err) console.log('error in connection ' + err);
  console.log('db connected..')
});

function execute(query) {
  return new Promise((resolve, reject) => {
    try {
      var request = new sql.Request();
      // query to the database and get the records
      request.query(query, (err, recordset) => {
        if (err) console.log('error in select ' + err)
        return resolve(recordset.recordsets[0])
      });
    } catch (err) {

    }
  })
}
module.exports.execute = execute;
