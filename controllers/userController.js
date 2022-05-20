const userLogin = (req,res) => {
    console.log(req.body);
    try{
        const {username,password} = req.body;
        if(username == "" || password == ""){
            res.status(400).send({error: 'Please fill the fields'});
        }
        else if(username == "Amjad" && password == "123456abc"){
            res.status(200).send({message: "user successfull login"});
        }
        else{
            res.status(202).send({error: "Wrong Credentials"});   
        }
    }catch(e){
        console.log(e.message);
    }
}
const picUpload = async (req,res) => {
    try{
        const files = req.files;
        let uploadedFiles = [];
        files.forEach(element => {
            uploadedFiles.push(element.filename);
        });
        if(uploadedFiles){
            res.status(200).send({ msg: "Uploaded ", data: uploadedFiles });
        }else{
            res.status(202).send({ msg: "Failed " });
        }
    }catch(e){
        console.log(e.message);
    }
} 
module.exports = {
    userLogin,
    picUpload
}