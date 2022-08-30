const express = require('express')
const app = express()
const port = 3000
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sqlCreate = `create table if not exists people (id int not null auto_increment, name varchar(255), primary key(id));`
connection.query(sqlCreate)

const sqlInsert = `insert into people(name) values('John Joe');`
connection.query(sqlInsert)

connection.end()

app.get('/', (req, res) => {
  res.send('<h1>Full Cycle</h1>')
})

app.listen(port, () => {
  console.log('Running on port ' + port)
})
