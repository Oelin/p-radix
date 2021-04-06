const net = require('net')


function binary(n, size) {
  return n.toString(2).padStart(size, '0')
}



function xch(base=256, port=5000) {

  let message = ''
  let byte = ''
  let space = Math.ceil(Math.log2(base))
  
  
  function check(cb) {
    if (byte.length % 8) return
    
    byte = parseInt(byte, 2)
    
    if (! byte) return cb(message)
    message += String.fromCharCode(byte)
  }

  
  function add(n, cb) {
    binary(n, space).forEach(bit => {
      byte += bit
      check(cb)
    })
  }

  
  function on(cb) {
    let n = 0
    
    while (n < base) {
      net.createServer(socket => {
        socket.end()
        add(n, cb)
      })
      .listen(base + n++)
    }
  }
}

/*
  this.on = function(cb) {
    for (let i=0; i < base; i++) {

      let char
      let bits = i.toString(2).padStart(block, '0').split('')

      net.createServer(socket => {
        socket.end()

        bits.forEach(bit => {
          byte += bit

          if (byte.length % 8 == 0) {
            char = String.fromCharCode(parseInt(byte, 2))
            byte = ''

            if (char == '\0') {
              cb(message)
              message = ''
            } else {
              message += char
            }
          }
        })
      }).listen(port + i)
    }
  }
}


module.exports = (...a) => new xch(...a)

*/

//
// const xch = require('portxch')
//
//
// xch.on(message => {
//   console.log(message)
// })


// const xch = require('portxch')(255)
//
// xch.send('hello', 'test.com')
//
//
// xch.on(data => {
//
// })
//
//
//
// xch.send('hello world', 'test.com', [8000, 8255])
