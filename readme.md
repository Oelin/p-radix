# xch

A strange library that uses port numbers to transfer data. It's only real use is in XSS exploit writing.


Server

```js
const listen = require('xch')()

listen(data => {
  console.log(`recieved ${data}`)
})
```


Client

```html
<script src='/xch.js'>
<script>
  const send = xch()
  
  client.send('Hello world!', 'server.com')
</script>
```
