const express = require('express')
const app = express();
const path = require('path')

const pubDir = path.join(__dirname,'..','public')
const port = process.env.PORT || 4000;

app.use(express.static(pubDir));

app.get('*', (req,res) =>{
    res.sendFile(path.join(pubDir, 'index.html'))
})

app.listen(port, () => {
    console.log(`Server is listening to port ${port}`)
})