const fs = require('fs');
const geturls = require('./geturls');


// Promesa que lee archivo ingresado

    const readfile = new Promise ((resolve, reject) => {
        if (geturls != null) {
            
            fs.readFile(process.argv[2], (err, data) => {
                let urls = [];
                urls =  geturls(err, data)
                const urlsM = urls.map((x)=>{
                    return `${x.file} ${x.href}  ${x.text}`;
                })
                resolve(urlsM) 
                })
        }else{
            let error = new Error('Error de lectura');
            reject(error)
        }
    })

    
    

    

module.exports = readfile;