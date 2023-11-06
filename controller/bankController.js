const bankService=require('../services/bankServices')
const getBank=(req,res)=>{
    let getBank=bankService.getBank(); 
    res.send(getBank);
    };
        
    const getBankLogin =(req,res)=>{
    let getBankLogin=bankService.getBankLogin();
    res.send(getBankLogin);
    };  
    const postBankLogin =(req,res)=>{
    let postBankLogin=bankService.postBankLogin(req.body);
    res.send(postBankLogin);
    };
    const deleteBankLoginUser =(req,res)=>{
    let deleteBankLoginUser=bankService.deleteBankLoginUser(req.body) 
    res.send(deleteBankLoginUser );
    };
            
    const getBankLoginFrwdPassword =(req,res)=>{
    let getBankLoginFrwdPassword=bankService.getBankLoginFrwdPassword();
    res.send(getBankLoginFrwdPassword);
    };
    const postBankLoginFrwdPassword =(req,res)=>{
    let  postBankLoginFrwdPassword=bankService.postBankLoginFrwdPassword(req.body);
    res.send( postBankLoginFrwdPassword);
    };
        
    const getBankLoginChangePassword =(req,res)=>{
    let getBankLoginChangePassword =bankService.getBankLoginChangePassword();
    res.send(getBankLoginChangePassword );
    };
    const postBankLoginChangePassword =(req,res)=>{
    let postBankLoginChangePassword=bankService.postBankLoginChangePassword(req.body);
    res.send(postBankLoginChangePassword);
    };
        
    const getBankRegisters=(req,res)=>{
    let getBankRegisters=bankService.getBankRegisters();
    res.send(getBankRegisters);
    };
    const postBankRegisters=(req,res)=>{
    let  postBankRegisters=bankService.postBankRegisters(req.body);
    res.send( postBankRegisters);
    };
    
    const getBankDonor=(req,res)=>{
    let getBankDonor=bankService.getBankDonor();
    res.send(getBankDonor);
    };
    const postBankDonor=(req,res)=>{
    let postBankDonor=bankService.postBankDonor(req.body);
    res.send(postBankDonor);
    };
    const getBankReceiver=(req,res)=>{
    let getBankReceiver=bankService.getBankReceiver();
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