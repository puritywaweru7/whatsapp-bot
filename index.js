const qrcode = require('qrcode-terminal')
const {Client,LocalAuth} = require ('whatsapp-web.js')

const whatsapp = new Client({
    authStrategy: new LocalAuth()
})

//Event listener

whatsapp.on('qr', qr => {
    qrcode.generate(qr, {
        small:true
    })
})

whatsapp.on('message', async message => {
        if (message.body === "Hello" || message.body === "hello" || message.body === "HELLO"){
            message.reply("Hello and welcome to our consultation services")
        }
             
})
whatsapp.on('ready', () => {
    console.log("Client is ready");
})

whatsapp.initialize()
