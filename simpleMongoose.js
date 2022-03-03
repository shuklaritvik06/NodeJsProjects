const mongoose = require('mongoose');
mongoose.connect("uri").then(()=>{
  console.log("Connected to DB successfully!");
}).catch((err)=>{
  console.error(err);
})

const Schema = mongoose.Schema;
const schema = new Schema({
  title:{
    type: String,
    required: true
  },
  body:{
    type: String,
    required: true    
  },
  author:{
    type: String,
    required: true    
  }
});

const modal = mongoose.model('singularModalname',schema);
const myDoc = new modal({
  title: "my title",
  body: "my body",
  author:"I am a author"
});

myDoc.save().then(()=>{
  console.log("Saved to DB");
}).catch((err)=>{
  console.error(err);
})
