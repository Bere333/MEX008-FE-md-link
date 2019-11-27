const https = require('https');
const fs = require('fs');
// const readfile = require('./utils/readfile');
const geturls = require('./utils/geturls')

          

            const geturl= ()=>{
              return new Promise((resolve, reject) => {
                
                
                
                  fs.readFile(process.argv[2], (err, data) => {

                    if (err) {
                      return reject(err)
                    }else{
                      let urls = [];
                      urls =  geturls(err, data)
                      const urlMap = urls.map((x) => {
                        return x.href
                      })
                      return resolve(urlMap)
                    }
                      
                      
                      
                     
                      
                     
                      //   const urlsM = urls.map((x)=>{
                      //     return x.href
                        
                      //   })
                      //   // console.log(urlsM);
                        
                      //   return(urlsM);

                  })
                  
                
              
                
                
                })
              

                
      
              
              }
              //  const arrayGetUrls = geturl()
              // console.log(arrayGetUrls);
              

         
          


          // async function readLinks(){
          //   const validateLinks = await geturl()
          //   const arrayLinks = validateLinks.map(x=> {return x.href})
          //   return(arrayLinks);
            
          // }

          

          // async function validate(){
          //   const links = await readLinks()
          //   const linksA = links.map((x)=>{
          //     https.get(x, (res) => {
          //             const { statusCode } = res;
                      
          //               if (statusCode == 200) {
          //                 return(`${x} ok ${statusCode}`)
          //               }
          //             })

          //   })
          //           return(linksA)
            
          // }
         
          

          // geturl.then(urls => { 
          //   // urls.map((x)=>{

          //   //   https.get(x, (res) => {
          //   //     const { statusCode } = res;
                
          //   //       if (statusCode == 200) {
          //   //         return`${x} ok ${statusCode}`
          //   //       }
          //   //     })
          //   //   })
          //   console.log(urls);
            
          
            
          // })
          // .catch(console.log('hay un error'))
          





            // const getStatus = new Promise((resolve, reject) => {
            //   fs.readFile(process.argv[2], (err, data) => {
            //     let urls = [];
            //     urls =  geturls(err, data)
            //     
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
             
            
            
              const validate = Promise.all([geturl()])
              .then(results=>{return results
              })
              .catch(err=> {return err} );

               module.exports = validate;
            
          
        


