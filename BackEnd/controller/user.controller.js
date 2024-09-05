import User from "../model/user.model.js";
import bcryptjs from "bcryptjs"

export const signup=async (req,res)=>{
    try{
        const{ name,email, password }=req.body;
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json ({message : "User already exists"});
        }
       const hashPassword= await bcryptjs.hash(password, 10);
        const createduser=  new User ({
            name,
            email,
            password: hashPassword,
        });
        await createduser.save();
        res.status(201).json({message : "User created successfully",
            user: {
            _id:createduser._id,
            name:createduser.name,
            email:createduser.email
        },
    });
    } catch(error){
        console.log("Error :" + error.message);
        res.status(500).json({message: "Internal server error"})
    }
};

export const login= async (req,res)=>{
    try{
        const {email, password}=req.body;
        const user=await User.findOne({email});

        const isMatch = await bcryptjs.compare(password, user.password)

        if(!user || !isMatch) {
            return res.status(400).json({message:"Invalid username or Password"});
        }
        else{
            res.status(200).json({message: "Login Successful",user:{
                _id: user._id,
                name:user.name,
                email:user.email
            }})
        }
    }
    catch(error){
  console.log("Error :"+error.message)
  res.status(500).json({message:"Internal server error"})
    }
}