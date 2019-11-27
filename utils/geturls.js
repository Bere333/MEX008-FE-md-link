//Requerimientos
const marked = require('marked');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


//Función para obtener html
const geturls = (err, data) => {
    const str = data.toString()
    const html = marked(str);
    const dom = new JSDOM(html);
    const etiquetasLi = dom.window.document.querySelectorAll('a');
    
        
    const arrayOflinks = Array.from(etiquetasLi).map(element => {
        const link = {
            href: element.getAttribute('href'),
            text: element.textContent,
            file: process.argv[2],
        };
        return link
    });
    return arrayOflinks;
    
}


module.exports = geturls;

   






