import express from 'express'
var router = express.Router();
import whatsappMsg from '../whatsapp/message.js'

router.get('/', (req, res) => {
  var data = {
    messaging_product: "whatsapp",
    to: 972584870582, // 972 "number" change the number to customer one 
    type: "template",
    template: {
      name: "hello_world",//content body! 
      language: {
        code: "en_US" //change to hebrew if needed 
      }
    }
  }
  var version = API_VERSION //16.0v
  var accId = WHATSAPP_BUSINESS_ACCOUNT_ID // 115086404939168
  //testing number basic id - 118796201233197
  var token = TOKEN //  webhook token 
  //my token EAANZBkPsUudMBACPnlOQ46T0x3bHJAYZBdznDqVnlJW93zpqBtoasZCkWVmYiI5227YhZCxxf8BMriCZASEwp3F6QGXlyZA4cSYUQEdsfE7lIk89J3TNKh5v0RMnlF3mFzG6ms5qPke6OF5gLnzMMzurMRhhQrxp8O4ZCGSL4Y95Yr6g66hozoU
  whatsappMsg(token,data,version,accId).then((data)=>{
    console.log(data)
  }).catch((err)=>{
    console.log(err)
  })
})

export default router;
