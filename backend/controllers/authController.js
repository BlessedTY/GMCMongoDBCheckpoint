const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Contact = require('../models/contactModel');

// const login = async(req, res) => {
//     const {username, password} = rey.body;
//     const user = await Contact.findOne({username});

//     if(!user){
//         return res.status(400).send('invalid username or password');
//     }

//     const passwordMatch = await bcrypt.compare(password, user.password);
//     if(passwordMatch){
//         const accessToken = jwt.sign({username: user.username, role: user.role}, process.env.ACCESS_TOKEN_SECRET);
//         if(user.role === 'Admin'){
//             return res.json({message: 'Welcome User', accessToken});
//         }else{
//             return res.json({message: 'Welcome username or password'});
//             }
//     } else{
//         return res.status(400).send('invalid username or password');
//     }
// }


// const verifyToken = (req, res, next) =>{
//     const token = req.headers ['authorization']
//     if(!token) return res.status(401).send('Access Denied');

//     try {
//         const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
//         req.user = decoded;
//         next();
//     }catch (error) {
//         return res.status(403).send('Invalid token')
//     }
// }

module.exports = {
    login, verifyToken
}