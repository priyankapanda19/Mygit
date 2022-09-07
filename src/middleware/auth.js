const jwt=require("jsonwebtoken")
const userModel=require("../Models/authorModel")


//-------------------------------authentication-----------------------------//

const authentication=async function(req,res){
    
     try{
          let token = req.headers["x-auth-token"];
        
        if (!token) return res.status(404).send({ msg: "token must be present" });    
        console.log(token);
        
        let decodedToken = jwt.verify(token, "this is my privet key");   
        if (!decodedToken) 
        return res.status(400).send({status:false,msg:"token is invalid"})  
        req.token=decodedToken                                   
         
        
            next()
      }catch(err){
      return res.status(500).send({msg: "Servor error " })
      }
      }

//---------------------------------authorization--------------------------------------//

const authorisation = async function(req, res, next){
    try{
      let token = req.headers["x-auth-token"];
          
      let decodedToken = jwt.verify(token, "this is my privet key");
      
      let authorId = req.params.authorId;
      let authorDetails =  await authorModel.findById(authorId);
      if (!authorDetails)
        return res.send({ status: false, msg: "No such author exists" });
  
      let userToBeModified = req.params.authorId;
      let userLoggedIn = decodedToken.authorId
    
      if(userToBeModified != userLoggedIn) 
      return res.status(403).send({status: false, msg: 'Author logged is not allowed to modify the requested author data'});
  
     
  
    next()
    }catch(error){
    res.send({ status: true, data: authorDetails });
  }
  }
  
  //--------------------------------------/////---------------------------------//
  module.exports.authentication = authentication
  module.exports.authorisation = authorisation
  