# portxch

A strange library that uses port numbers to transfer data. It's only real use is in XSS exploit writing.


Server

```js
const xch = require('portxch')()

xch.when(data => {
  console.log(`recieved ${data}`)
})
```


Client

```html
<script src='/portxch.js'>
  
  xch = xch()
  xch.send('Hello world!', 'server.com')
  
</script>
```
