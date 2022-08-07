var http = require('http')

var fs = require('fs')

http
.createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8)
    //res.end(text)

    const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
})

.listen(5000)