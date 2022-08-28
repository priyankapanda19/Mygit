const jwt = require("jsonwebtoken");
const userModule = require("../models/userModule");


////creatr user//////
const createUser = async function (req, res) {
 
  let data = req.body;
  let savedData = await userModule.create(data);
  console.log(req.newAtribute);
  res.send({ msg: savedData });
};

////////login user////////////

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModule.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not correct",
    });

   
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "Plutonium",
      organisation: "FunctionUp",
    },
    "functionup-plutonium-very-very-secret-key"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
};


///////get user data////////


const getUserData = async function (req, res) {
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  
  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token);

  let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await userModule.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
  
};


/////////update user data/////////////

const updateUser = async function (req, res) {
  
  let userId = req.params.userId;
  let user = await userModule.findById(userId);
  
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModule.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: updatedUser, data: updatedUser });
};


/////////////delete user data////////


const deleteUser=async function(req,res){
    let uId=req.params.userId
    let u=await userModule.findById(uId)
    if(!u){
        return res.send("user not exists")
    }
    let uData=req.body
    let deleteUser=await userModule.findByIdAndDelete({_id:uId},uData)
    res.send({status:true,data:deleteUser})
}





module.exports.deleteUser=deleteUser;
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
