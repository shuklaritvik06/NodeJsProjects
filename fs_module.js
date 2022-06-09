const fs = require('fs');

// Read File (Sync)
fs.readFileSync("fileName","utf8",(err,data)=>{
   console.log(data);
   fs.writeFileSync("fileName",data);
})


// Read File (Async)

fs.readFile('relativePath',(err,data)=>{
  if(err){
    console.log(err);
  }
  console.log(data);  // Returns the Buffer, we can convert it to string using toString() method.
});

// Write To File

fs.writeFile('relativePath','data',(err)=>{
  if(err){
    console.log(err);
  }
  console.log("successfully wrote");
});

// Make Directory & Delete Directory

if(!fs.existSync('relativePath')){
  fs.mkdir('relativePath',(err)=>{
    if(err){
      console.log(err);
    }
    console.log("Successfully created directory");
  });
}
else{
  fs.rmdir('relativePath',(err)=>{
    if(err){
      console.log(err);
    }
    console.log("Successfully deleted directory");
  });
}

// Delete a File


if(fs.existSync('relativeFilePath')){
  fs.unlink('relativePath',(err)=>{
    if(err){
      console.log(err);
    }
    console.log("Successfully deleted ");
  });
}

// Rename a File


if(fs.existSync('relativeFilePath')){
  fs.rename('oldPath','newPath',(err)=>{
    if(err){
      console.log(err);
    }
    console.log("Successfully renamed ");
  });
}
