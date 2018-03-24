const express = require('express')
const app = express()
express.json([{type:"application/json"}])
var router = express.Router();

app.get('/api/login', (req, res) => {

    if(req.query.name=='张聪'&&req.query.password=='123'){
        res.send({rs:true})
    }else{

        res.send({rs:false});
    }
} )

app.listen(3000, () => console.log('Example app listening on port 3000!'))