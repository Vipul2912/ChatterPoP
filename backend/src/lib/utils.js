import jwt from "jsonwebtoken";

export const generateToken = (userId,res) =>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"7d"
    })
    res.cookie("jwt",token,{
        maxAge: 7*24*60*60*1000,
        httpOnly:true, // This will prevent XXS (Cross Site Scripting attacks)
        sameSite: "lax",
        secure: false //process.env.NODE_ENV !=="development" 
    });
    return token;
};