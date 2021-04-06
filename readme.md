# xch

A weird library that uses port numbers to transfer data. It's probably helpful for XSS exploit development.


server-side

```js
const server = require('xch')()

server.when(data => {
  console.log(`recieved ${data}`)
})
```

client-side

```html
<script src='/xch/client.js'></script>
<script>
  client = xch()
  client.send('Hello world!', 'server.com')
</script>
```


## Method

Let's say we wanted to send the binary string `01000001` (ASCII letter A). We can create a TCP server that 
listens on two ports, e.g. 7000 and 7001. We recieve a `0` when someone connects to the first port, and a 
`1` for the second port. Hence, we can transfer arbitrary binary data.

The same idea works for other bases, such as hexadicmal (16 ports) or base64 (64 ports). With 256 ports, 
we can reliably send about 16 bytes per second. Cool!
