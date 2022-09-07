const jwt=require("jsonwebtoken")
const authorModel=require("../Models/authorModel")


//-------------------------------authentication-----------------------------//

const authentication=async function(req,res){
    
     try{
          let token = req.headers["x-api-key"];
          if(!token)token=req.headers[x-Api-key]
        
        if (!token) return res.status(401).send({ status:false,msg: "token must be present" });    
        console.log(token);
        
        let decodedToken = jwt.verify(token, "this is my privet key")
            
        if (!decodedToken) 
        return res.status(400).send({status:false,msg:"token is invalid"})  
        req.loginAuthorId=decodedToken._id                                   
         
        
            next()
      }catch(err){
      return res.status(500).send({msg: "Servor error " })
      }
      }

//---------------------------------authorization--------------------------------------//


const authorisation = async function (req, res, next) {

  try {
     

    let authorToBeModified = req.params.blogId
    console.log(authorToBeModified)

    let blog = await blogModel.findById({ _id: authorToBeModified })    
  
    console.log(blog)
    console.log(req.loggedInAuthorId)
    if (blog.authorId != req.loggedInAuthorId) {    
      return res.status(403).send({ status: false, msg: 'Author logged is not allowed to modify the requested data' })
    }
    next()
  } catch (err) {
    return res.status(500).send({ status: false, msg: err.message })
  }


}



  //--------------------------------------/////---------------------------------//
  module.exports.authentication = authentication
  module.exports.authorisation = authorisation
  