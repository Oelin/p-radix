let net = require('net')
let binary = require('./binary')
let port, base
let space
let user
let string = ''
let byte = ''


// handle connections for a particular port

function peer(n) {

  return socket => {
    socket.end()
    binary(n, space).forEach(add)
  }
}


function add(bit) {
  byte += bit

  // if we're at the end of a byte, update `byte` and `string`

  if (lsb()) update()
}


function lsb() {
  return !(byte.length % 8)
}


// convert the current byte into a character

function letter() {
  return String.fromCharCode(parseInt(byte, 2))
}



// add the current character to `string` and flush byte

function flush() {
  string += letter()
  byte = ''
}


// return `string` to user and then flush it

function finish() {
  user(string)
  string = ''
}


// finish or flush depending on whether we recieve a null byte

function update() {
  return +byte ? flush() : finish()
}



// create peers for each port

function when(func) {
  let n = 0
  user = func

  while (n < base) {
    net.createServer(peer(n)).listen(port + n++)
  }
}




module.exports = function(p=5000, b=256) {
  space = Math.ceil(Math.log2(b))
  port = p
  base = b

  return { when }
}
