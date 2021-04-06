# xchp

A strange library that uses port numbers to transfer data. It's only real use is in XSS exploit writing.


Server

```js
const xchp = require('xchp')()

xchp.when(data => {
  console.log(`recieved ${data}`)
})
```


Client

```html
<script src='/xchp.js'>
  
  xchp = xchp()
  xchp.send('Hello world!', 'server.com')
  
</script>
```
