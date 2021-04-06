# xch

A weird library that uses port numbers to transfer data. It's only use is probably in XSS exploit writing.


Server

```js
const xch = require('xch')()

xch.when(data => {
  console.log(`recieved ${data}`)
})
```


Client

```html
<script>
  
  const xch = require('xch')()
  xch.send('Hello world!', 'server.com')

</script>
```
