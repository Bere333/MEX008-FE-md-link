const https = require('https');
const fs = require('fs');
// const readfile = require('/home/berenice/Documentos/MEX008-FE-md-link/MEX008-FE-md-link/readfile.js');
const geturls = require('/home/berenice/Documentos/MEX008-FE-md-link/MEX008-FE-md-link/gethtml.js')
            const geturl = new Promise((resolve, reject) => {
              fs.readFile(process.argv[2], (err, data) => {
                let urls = [];
                urls =  geturls(err, data)
                resolve(urls)
                reject(err)
            })
            })
          

          geturl.then(urls => {
           const urlsM = urls.map((x)=>{
             
             return x.href
           })
           console.log(urlsM);
           
           
            
          })
          .catch(console.log('hay un error'))
          





            // const getStatus = new Promise((resolve, reject) => {
            //   fs.readFile(process.argv[2], (err, data) => {
            //     let urls = [];
            //     urls =  geturls(err, data)
            //     // const href =urls[20]
            //     // href.map((x)=>{
            //       //console.log(href.href);
            //      const urlsM = urls.map((x)=>{
                  
            //         https.get(x.href, (res) => {
            //           const { statusCode } = res;
            //           // if (statusCode == 200) {
            //             if (statusCode == 200) {
                          
            //               return(`${x.file} ${x.href} ok ${statusCode} ${x.text}`)
            //             }
            //             else if(statusCode == 404){
            //               return(`${x.file} ${x.href} fail ${statusCode} ${x.text}`)
                          
            //             }else{
            //               let error = new Error('No es un link https o es un error diferente')
            //               // reject(error)
            //               return(error) 
            //             }
                        
            //           })//Se cierra el readfile
            //         })//se cierra el map
            //     resolve(urlsM)
              
            //   })
            // })
             
            
            
              const validate = Promise.all([geturl])
              .then(results=>{console.log(results);
              })
              .catch(console.log('No ha recibido arreglo'));

               module.exports = validate;
            
          
        


