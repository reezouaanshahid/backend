const http = require('http');

http.createServer(function (req, res) {
    let data = [1, 2, 3, 4, 5, 6, 7];
    let out = ``;
    for (let i = 0; i < data.length; i++) {
        const item = data[i];

        out += `
        <h1>${item}</h1>
        <img src='/pic.jpg'/>
        `;
    }
    res.end(out);
}).listen(8080);
