const app=require("./app");
const dotenv=require("dotenv");
const connectDatabase=require("./Config/database");
//Handling uncaught exception

process.on("UncaughetException",(err)=>{
    console.log(`ERRor: ${err.message}`);
    console.log("Server down due to Uncaught Exception");
process.exit(1);
})

dotenv.config({path:"backend/config/config.env"});



//Db Connection
connectDatabase();
const server=app.listen(process.env.PORT,()=>{
    console.log(`server is running on http://:${process.env.PORT}`);
})



//unhandled rejection
process.on("unhandledRejection ",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log("server down");
server.close(()=>{
    process.exit(1);
});
});