const express = require("express")
const mongoose = require("mongoose");
// const Customer = require("./models/Customer");
// const customerRoute = require("./routes/customer")
// const verifyPhone = require("./routes/verifyphone")
// const verifyEmail = require("./routes/verifyemail")
// const cors = require("cors")
const app=express();
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));
// app.use(cors());

// const path = require('path');
// const {PythonShell}= require("python-shell")
// const {spawn}=require("child_process")



// const multer= require("multer");

// // // const childPython = spawn('python',['--version'])
// // // const childPython = spawn('python',['test.py'])
// // const childPython = spawn('python',['test.py','link'])


// // childPython.stdout.on('data',(data)=>{
// //     console.log(`stdout:${data}`);
// // })

// // childPython.stderr.on('data',(data)=>{
// //     console.log(`stderr:${data}`);
// // })

// // childPython.on('close',(code)=>{
// //     console.log(`child process exicited with code : ${code}`)
// // })



// // const storage=multer({
// //     destination:'./uploads/images',
// //     filename:(req,file,cb)=>{
// //         return cb(null,`${req.filename}_${Date.now()${path.extname(req.file.originalname)}}`)
// //     };
// // })
// // const storage=multer({
// //     destination:'./uploads/images',
// //     filename:(req,file,cb)=>{
// //         return cb(null,`${file.filename}_${Date.now()}${path.extname(file.originalname)}}`)
// //     }
// // })

//  const storage= multer.diskStorage({
//       destination:'./uploads/images',
//       filename: function (req, file, cb) {
//         return cb(null,`${file.filename}_${Date.now()}${path.extname(file.originalname)}`)
//         }
//     })

// const upload=multer({
//     storage:storage
// })

// app.use(express.json());
// app.use('/profile',express.static('uploads/images'));






// const dummycustomer=new Customer({
//     firstName:"Kaustubh",
//     lastName:"Gharat",
//     email:"kaustubhgharat06@gmail.com",
//     phone:"8766998642",
//     address:"Kalamb, Vasai",
//     city:"Mumbai",
//     state:"Maharashtra",
//     country:"India",
//     postalCode:"401304",
//     idType:"pancard",
//     idNumber:"abcde1234566fgf",
//     idIssueDate:"2016-05-18",
//     idExpiryDate:"2016-05-18",
//     selfieImage:"firbase link to the image",
//     idFrontImage:"firbase link to the image",
//     idBackImage:"firbase link to the image",
// });
mongoose.connect(
    "mongodb+srv://Kaustubh15:Kaustubh15@cluster0.ngvpj.mongodb.net/KYC?retryWrites=true&w=majority",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(()=>{
    console.log("DB connection successfull")
}).catch((err)=>{
    console.log(err);
})

// // dummycustomer.save();
// // app.post("/upload",upload.single('profile'),(req,res)=>{
// //     console.log(req.file);
// //     // res.status(201).json(req.file.filename);
// //     console.log(req.file.filename);
// //     // res.status(201).json(req.file); 
// //     res.json({
// //         sucess:1,
// //         profile_url:`http://localhost:3000/profile/${req.file.filename}`,
// //     })
// // })
// app.post("/upload",upload.array('profile',2),(req,res)=>{

//     // console.log(req.files);
//     // res.status(201).json(req.files);
//     // res.stauts(201).json(req.files);
    
//     try{
//         const urls=req.files.map(item=>{
//             return{
//                 profile_url:`http://localhost:3000/profile/${item.filename}`,
//             }
//         })

//         // console.log(urls);
//         res.status(201).json(urls);
//     }catch(error){
//         console.log(error);
//     }
    
//     // console.log(req.file);
//     // res.status(201).json(req.file.filename);
//     // console.log(req.file.filename);
//     // res.status(201).json(req.file); 
//     // res.json({
//     //     sucess:1,
//     //     profile_url:`http://localhost:3000/profile/${req.file.filename}`,
//     // })
// })
// app.use("/api/customer",customerRoute);
// app.use("/api/auth/",verifyPhone);
// app.use("/api/auth/email",verifyEmail);

// let options ={
//      scriptPath:"C:/Users/ASUS/Desktop/customer onboarding/api",
//      args:["john",45],
// }


// app.get("/",(req,res)=>{
//         res.status(201).json("HELLO!!!");
        
       
// })

app.listen(8000,()=>{
    console.log("server is running...");
})
