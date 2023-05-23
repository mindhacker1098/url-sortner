const mongoose = require('mongoose');
const express=require('express');
const app=express();
app.set('trust proxy',true);
var cors=require('cors')
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));
mongoose.set('strictQuery', true);
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
mongoose.connect(process.env.m_url).then(()=>{console.log("sucessful")}).catch((err)=>{console.log(err)});










const UserSchema = mongoose.Schema({
    mainurl: {
        type: String,
        required: true
    },
    sorturl: {
        type: String,
        required: true
    }
   
   

  

})
var model=mongoose.model('urls',UserSchema)
app.use("/",express.static("view"))
app.post('/', async (req, res) => {
   
    

count=await model.count({})


var obj={

    mainurl:req.body.name,
    sorturl:`https://sort.onrender.com/${count+1}`

    
    }
    


    const o_url = new model(obj)
    const ans= await o_url.save()


       if(ans){
        
            res.send(obj.sorturl)}
            else{
                res.send("error");
            }
            
        


    
    




  


})

app.get('/:name',async (req,res)=>{

var surl;

let item = await model.find({sorturl:"https://sort.onrender.com/"+req.params.name})
    try{

surl=item[0].mainurl;
res.redirect(surl);}
catch(exp){
    res.status(408);
    res.send("page not found")
}



})


var port=process.env.PORT || 8000
app.listen(port,()=>{

    console.log("server started")
})

