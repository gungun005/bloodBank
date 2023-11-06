const getBank=()=>{
    return("I m here!");
    };
    
    const getBankLogin =()=>{
    return("I m  get login here!");
    };  
    const postBankLogin =(body)=>{
    return("I m post login here!");
    };
    const deleteBankLoginUser =(body)=>{
    return("I m deleted Bank user !");
     };
        
    
    const getBankLoginFrwdPassword =()=>{
    return("I m  get login forgot password here!");
    };
    const postBankLoginFrwdPassword =(body)=>{
    return("I m post login forgot password  here!");
    };
    
    const getBankLoginChangePassword =()=>{
    return("I m  get login change password here!");
    };
    const postBankLoginChangePassword =(body)=>{
    return("I m post login change password here!");
    };
    
    const getBankRegisters=()=>{
    return("I m get bank users!");
    };
    const postBankRegisters=(body)=>{
    return("I m post bank users!");
    };
    
    const getBankDonor=()=>{
    return("I m get bank user donor!");
    };
    const postBankDonor=(body)=>{
    return("I m post bank users receiver!");
    };
    const getBankReceiver=()=>{
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