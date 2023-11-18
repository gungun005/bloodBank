const bankService=require('../services/bankServices')

const getBank=async(req,res)=>{
    let getBank=await bankService.getBank(req.body); 
    res.send(getBank);
};
        
const getBankLogin =async(req,res)=>{
    let getBankLogin=await bankService.getBankLogin(req.body);
    res.send(getBankLogin);
};  

const postBankLogin =async(req,res)=>{
    let postBankLogin= await bankService.postBankLogin(req.body);
    res.send(postBankLogin);
};

const deleteBankLoginUser =async(req,res)=>{
    let deleteBankLoginUser=await bankService.deleteBankLoginUser(req.body) 
    res.send(deleteBankLoginUser );
};
            
const getBankLoginFrwdPassword =async(req,res)=>{
    let getBankLoginFrwdPassword=await bankService.getBankLoginFrwdPassword(req.body);
    res.send(getBankLoginFrwdPassword);
};

const postBankLoginFrwdPassword =async(req,res)=>{
    let  postBankLoginFrwdPassword=await bankService.postBankLoginFrwdPassword(req.body);
    res.send( postBankLoginFrwdPassword);
};
        
const getBankLoginChangePassword =async(req,res)=>{
    let getBankLoginChangePassword =await bankService.getBankLoginChangePassword(req.body);
    res.send(getBankLoginChangePassword );
};

const postBankLoginChangePassword =async(req,res)=>{
    let postBankLoginChangePassword=await bankService.postBankLoginChangePassword(req.body);
    res.send(postBankLoginChangePassword);
};
        
const getBankRegisters=async(req,res)=>{
    let getBankRegisters=await bankService.getBankRegisters(req.body);
    res.send(getBankRegisters);
};

const postBankRegisters=async(req,res)=>{
    let  postBankRegisters=await bankService.postBankRegisters(req.body);
    res.send( postBankRegisters);
};
    
const getBankDonor=async(req,res)=>{
    let getBankDonor=await bankService.getBankDonor(req.body);
    res.send(getBankDonor);
};

const postBankDonor=async(req,res)=>{
    let postBankDonor=await bankService.postBankDonor(req.body);
    res.send(postBankDonor);
};

const getBankReceiver=async(req,res)=>{
    let getBankReceiver=await bankService.getBankReceiver(req.body);
    res.send (getBankReceiver);
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