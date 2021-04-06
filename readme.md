# xch

A strange library that uses port numbers to transfer data. It's only real use is in XSS exploit writing.


Server

```js
const xch = require('xch')()

xch.when(data => {
  console.log(`recieved ${data}`)
})
```


Client

```html
<script src='/xch.js'>
  xch = xch()
  
  xch.send('Hello world!', 'server.com')
</script>
```
