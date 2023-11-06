const bankRepository=require('../repository/bankRepository');
const getBank=()=>{
let getBank=bankRepository.getBank(); 
return(getBank);
};
    
const getBankLogin =()=>{
let getBankLogin=bankRepository.getBankLogin();
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
        
const getBankLoginFrwdPassword =()=>{
let getBankLoginFrwdPassword=bankRepository.getBankLoginFrwdPassword();
return(getBankLoginFrwdPassword);
};
const postBankLoginFrwdPassword =(body)=>{
let  postBankLoginFrwdPassword=bankRepository.postBankLoginFrwdPassword(body);
return( postBankLoginFrwdPassword);
};
    
const getBankLoginChangePassword =()=>{
let getBankLoginChangePassword =bankRepository.getBankLoginChangePassword();
return(getBankLoginChangePassword );
};
const postBankLoginChangePassword =(body)=>{
let postBankLoginChangePassword=bankRepository.postBankLoginChangePassword(body);
return(postBankLoginChangePassword);
};
    
const getBankRegisters=()=>{
let getBankRegisters=bankRepository.getBankRegisters();
return(getBankRegisters);
};
const postBankRegisters=(body)=>{
let  postBankRegisters=bankRepository.postBankRegisters(body);
return( postBankRegisters);
};

const getBankDonor=()=>{
let getBankDonor=bankRepository.getBankDonor();
return(getBankDonor);
};
const postBankDonor=(body)=>{
let postBankDonor=bankRepository.postBankDonor(body);
return(postBankDonor);
};
const getBankReceiver=()=>{
let getBankReceiver=bankRepository.getBankReceiver();
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