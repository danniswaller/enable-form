const express = require('express')
const app = express()
express.json([{type:"application/json"}])
var router = express.Router();

app.get('/api/login', (req, res) => {
    // req.param();
    console.log(req.query.name);
    console.log(req.query.password );
    console.log(req.query.name===""+'张聪');
    if(req.query.name=='张聪'&&req.query.password=='cg'){
        res.send({rs:true})
    }else{

        res.send({rs:false});
    }
} )

app.listen(3000, () => console.log('Example app listening on port 3000!'))