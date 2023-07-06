const http = require("http");

const app = http.createServer((req,res)=>{
  
    
   
console.log(req.url && req.method=="GET")
if(req.url=="/"){
    res.write("<h1>node</h1> <br> <h5>Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.</h5>  ")
    res.end
}

else if (req.url=="/about"){

 const data= {
    Node:"is an open source server environment ",
    features:"Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.",

}
const obj1=JSON.stringify(data);

    res.end(obj1);
    console.log(obj2)
}

else{
    res.write("page does not exists")
    res.end
}


    
})

app.listen(4000,()=>{
    console.log("server is running on port 4000");
})