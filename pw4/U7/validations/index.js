const express = require('express');
const cors = require('cors');
const connectDataBase = require('./database/index')

const app = express();


app.use(express.json());
app.use(cors()); 


//Loggers;
app.use(logger);

//  app.use(userRouter);
 

function logger(req, res, next) {
    console.info(new Date(), req.method, req.path);
    next();
}


connectDataBase().then(() => {
    app.listen(3001, () => {
        console.log("Server running at http://localhost:3001")
    })
});