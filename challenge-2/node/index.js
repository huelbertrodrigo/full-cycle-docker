const express = require('express')
const app = express()
const port = 3000

const config = {
  host: 'db',
  port: 3306,
  database: 'nodedb',
  user: 'root',
  password: 'root'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sqlCreate = `create table if not exists people (id int not null auto_increment, name varchar(255), primary key(id));`
connection.query(sqlCreate)

const sqlInsert = `insert into people(name) values('Huelbert Rodrigo');`
connection.query(sqlInsert)

var html = '<h1>Full Cycle Rocks</h1>'
const sqlSelect = `select * from people;`
connection.query(sqlSelect, function (err, res) {
  if (err) throw err
  res.map(person => (html = html + '<p>' + person.name + '</p>'))
})

connection.end()

app.get('/', (req, res) => {
  res.send(html)
})

app.listen(port, () => {
  console.log('Running on port ' + port)
})
