const { readFile, writeFile } = require('fs');
console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    //console.log(result)
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-sync.txt',
        `Here is the result: ${first}, ${second}`
        , (err, result) => {
            if(err){
                console.log(err);
                return;
            }
            console.log('done with this task')
        }
        )
    })
})
console.log('starting next task')









//npm - global command comes with node
//npm --version

//local dependency - use it only in the particular project
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)

//package.json - manifest file(stores important info about project/package)
//manual approach(create package.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)

/*const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems)
console.log('hello people')

*/

const http = require('http')

const server = http.createServer((req, res) => {
  if(req.url === '/'){
  res.end('Home Page')
  }
  if(req.url === '/about'){
    //Blocking Code
    for(let i=0; i<1000; i++){
        for(let j=0; j<1000; j++){
            console.log(`${i} ${j}`)
        }

    }
    res.end('About Page')
    }
    res.end('Error Page')
})

server.listen(5000, () => {
  console.log('Server listening on port : 5000....')
})
