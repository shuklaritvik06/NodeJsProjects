const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://ritvik:@cluster0.5mnc8sn.mongodb.net/?retryWrites=true&w=majority").then(()=>console.log("Connected")).catch(err=>console.log(err));

const Schema = mongoose.Schema({
    fileName: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true
    }
});

const File = mongoose.model("File", Schema);

module.exports = File;
