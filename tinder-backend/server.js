import express  from 'express'
import  mongoose  from 'mongoose'
import cards from './Models/dbCards.js'
import Cors from 'cors'

const app = express()
var port = process.env.PORT || 8080;

const connection_url=`mongodb+srv://MatthiasAdmin:o8E0IlQmHk9HjQVF@cluster0.iquon.mongodb.net/tinderdb?retryWrites=true&w=majority`

mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})

app.use(express.json());
app.use(Cors());

app.post('/tinder/card',(req,res)=>{
    const dbCard = req.body;

    cards.create(dbCard,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else
        {
            res.status(201).send(data);
        }
    })

})

app.get('/tinder/card',(req,res)=>{
    cards.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else
        {
            res.status(200).send(data);
        }
    })
})




app.get('/', (req, res) => res.status(200).send('Hello World!'))
app.listen(port)