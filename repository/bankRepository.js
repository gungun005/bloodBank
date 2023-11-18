if(process.env.NODE_ENV !== 'production'){
    const dotenv = require('dotenv').config({path : `${__dirname}/../.env`});
}

const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
//const { resolve } = require('promise');

const client = new MongoClient(process.env.DATABASE_URL, {
    useNewUrlParser: true, useUnifiedTopology: true 
});

const getBank=()=>{
    return("I m here!");
};


const getBankLogin =async(body)=>{
    console.log("I m  get login here!");
    try{
        await client.connect()
        const db = client.db("bloodbank");
        const coll = db.collection("bloodbank");
        const data = await coll.find().toArray()
        console.log(data)
        return data
    }
    catch(err){
        console.log("Error occurred")
        return err;
    }
    finally{
        await client.close()
    } 
};  

    const postBankLogin =async(body)=>{
    console.log("I m post login here!");
    var item = {
        name: body.name,
        // number: body.number,
        password:body.password,
    };
    try{
        await client.connect()
        const db = client.db("bloodbank");
        const coll = db.collection("bloodbank");
        const data = await coll.insertOne(item);
        // const data2 = await coll.find().toArray();
        console.log(data)
        return data.acknowledged == true
    }
    catch(err){
        console.log(err)
        console.log("Error occurred")
        return err;
    }
    finally{
        await client.close()
    } 
    };

    const deleteBankLoginUser =async(body)=>{
    console.log("I m deleted Bank user !");
    let searchOptions = {};
    if(body.name!= null && body.name !== ""){
        searchOptions.name= body.name;
    }
    try{
        await client.connect()
        const db = client.db("bloodbank");
        const coll = db.collection("bloodbank");
        const data = await coll.deleteOne(searchOptions)
        console.log(data)
    }
    catch(err){
        console.log(err)
        console.log("Error occurred")
        return err;
    }
    finally{
        await client.close()
    } 
    };
        
    
    const getBankLoginFrwdPassword =()=>{
    return("I m  get login forgot password here!");
    };
    const postBankLoginFrwdPassword =(body)=>{
    console.log("I m post login forgot password  here!");

    };
    
    const getBankLoginChangePassword =()=>{
    return("I m  get login change password here!");
    };
    const postBankLoginChangePassword =(body)=>{
    return("I m post login change password here!");
    };
    
    const getBankRegisters=async(body)=>{
        console.log(body);
    console.log("I m get bank users!");
    try{
        await client.connect()
        const db = client.db("bloodbank");
        const coll = db.collection("bloodbank");
        const data = await coll.find().toArray()
        console.log(data)
        return data
    }
    catch(err){
        console.log("Error occurred")
        return err;
    }
    finally{
        await client.close()
    } 
    };
    const postBankRegisters=async(body)=>{
    console.log("I m post bank users!");
    var item = {
        name: body.name,
        number: body.number,
        password:body.password,
        email:body.email,
    };
    try{
        await client.connect()
        const db = client.db("bloodbank");
        const coll = db.collection("bloodbank");
        const data = await coll.insertOne(item);
        // const data2 = await coll.find().toArray();
        console.log(data)
        return data.acknowledged == true
    }
    catch(err){
        console.log(err)
        console.log("Error occurred")
        return err;
    }
    finally{
        await client.close()
    } 
    };
    
    const getBankDonor=(body)=>{
    console.log(body);
    return("I m get bank user donor!");
    };
    const postBankDonor=(body)=>{
        console.log(body);
    return("I m post bank users receiver!");
    };
    const getBankReceiver=(body)=>{
        console.log(body);
    return("I m get bank user donor!");
    };  
    
    module.exports={
        getBank ,  
        getBankLogin,
        postBankLogin,
        deleteBankLoginUser,
        getBankLoginFrwdPassword,
        postBankLoginFrwdPassword,
        getBankLoginChangePassword,
        postBankLoginChangePassword,
        getBankRegisters,
        postBankRegisters,
        getBankDonor,
        postBankDonor,
        getBankReceiver
    }