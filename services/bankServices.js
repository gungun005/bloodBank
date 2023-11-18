const bankRepository=require('../repository/bankRepository');
const getBank=(body)=>{
let getBank=bankRepository.getBank(body); 
return(getBank);
};
    
const getBankLogin =(body)=>{
let getBankLogin=bankRepository.getBankLogin(body);
return(getBankLogin);
};  
const postBankLogin =(body)=>{
let postBankLogin=bankRepository.postBankLogin(body);
return(postBankLogin);
};
const deleteBankLoginUser =(body)=>{
let deleteBankLoginUser=bankRepository.deleteBankLoginUser(body) 
return(deleteBankLoginUser );
};
        
const getBankLoginFrwdPassword =(body)=>{
let getBankLoginFrwdPassword=bankRepository.getBankLoginFrwdPassword(body);
return(getBankLoginFrwdPassword);
};
const postBankLoginFrwdPassword =(body)=>{
let  postBankLoginFrwdPassword=bankRepository.postBankLoginFrwdPassword(body);
return( postBankLoginFrwdPassword);
};
    
const getBankLoginChangePassword =(body)=>{
let getBankLoginChangePassword =bankRepository.getBankLoginChangePassword(body);
return(getBankLoginChangePassword );
};
const postBankLoginChangePassword =(body)=>{
let postBankLoginChangePassword=bankRepository.postBankLoginChangePassword(body);
return(postBankLoginChangePassword);
};
    
const getBankRegisters=(body)=>{
let getBankRegisters=bankRepository.getBankRegisters(body);
return(getBankRegisters);
};
const postBankRegisters=(body)=>{
let  postBankRegisters=bankRepository.postBankRegisters(body);
return( postBankRegisters);
};

const getBankDonor=(body)=>{
let getBankDonor=bankRepository.getBankDonor(body);
return(getBankDonor);
};
const postBankDonor=(body)=>{
let postBankDonor=bankRepository.postBankDonor(body);
return(postBankDonor);
};
const getBankReceiver=(body)=>{
let getBankReceiver=bankRepository.getBankReceiver(body);
return (getBankReceiver);
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