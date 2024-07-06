import axios from "axios"


const TOKEN = '6946315288:AAHgKNlT71LZTxY1zqc1YpjUIJnRg1AINeA'
const ID = '6687405657'

export const TelegramApi = {
 url: `https://api.telegram.org/bot${TOKEN}/`,
 async sendMessage(message: string){
  console.log(1);
  
  const data = await axios.post(`${this.url}sendMessage`, {
   chat_id: ID,
   parse_mode: 'html',
   text: message
  })
  return data
 }
}

