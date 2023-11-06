const express = require('express');
const router = express.Router();
const bankController = require('../controller/bankController');

router.route('/')
      .get(bankController.getBank)
      .post((req,res) => {res.send("Got you..!!");})
    
router.route('/login')
        .get(bankController.getBankLogin)
        .post(bankController.postBankLogin)
        .delete(bankController.deleteBankLoginUser)

router.route('/login/forgotpassword')
        .get(bankController.getBankLoginFrwdPassword)
        .post(bankController.postBankLoginFrwdPassword)


router.route('/login/changepassword')
        .get(bankController.getBankLoginChangePassword)
        .post(bankController.postBankLoginChangePassword)
        

    
router.route('/register')
    .get(bankController.getBankRegisters)
    .post(bankController.postBankRegisters)

router.route('/donate')
    .get(bankController.getBankDonor)
    .post(bankController.postBankDonor)

router.route('/receive')
    .get(bankController.getBankReceiver)
    
// router.route('/register')
    // .get(flipController.getFlipProductAllOrders)

    module.exports = router;