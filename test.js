const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Home Page')
    }
    if(req.url === '/about'){
        //Blocking Code
        for (let i = 0; i < 1000; i++){
            for(let j = 0; j < 1000; j++)
            console.log(`${i}  ${j}`)
        }
        res.end('About Page')
    } //blocking code ends here
    res.end('Error Page')
})

server.listen(5000, () => {
    console.log('Server Listening on Port 5000')
})

////////////////////////////////////////////////////////////

const { readFile } = require('fs')


const getText = (path) => {
    return new Promise((resolve, reject) => {
        
readFile(path, 'utf8', (err, data) => {
    if(err){
        reject(err)
    }
    else{
        resolve(data)
    }
})

    })
}

getText('/content/first.txt')
.then((result) => console.log(result))
.catch((err) => console.log(err))



const { readFile } = require('fs')


const getTexx = (path) => {
    return new Promise((resolve, reject) =>{
        readFile(path, 'utf8', (err, data) =>{
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}

//getTexx('/content/first.txt')
//.then((result) => console.log(result))
//.catch((err) => console.log(err))

const start = async() => {
    try{
        const first = await getTexx('/content/first.txt')
        console.log(first)

    }
    catch(error){
        console.log(error)
    }
}
start()