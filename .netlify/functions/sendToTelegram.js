import Axios from "axios";
require("dotenv").config();


exports.handler=async(event,context)=>{

  try {
    const bodyParsed = JSON.parse((event.body))

    // console.log(bodyParsed.text);
    // return{
    //     statusCode:200,
    //     body: JSON.stringify({ message: "Hello World" }),
    // }
    const url =
    "https://api.telegram.org/bot" +
    process.env.REACT_APP_BOT_TOKEN +
    "/sendMessage";

    const send2Telegram = await Axios.post(url, {
      chat_id: process.env.REACT_APP_CHAT_ID,
      text: bodyParsed.text,
    });
    if (send2Telegram.data.ok === true) {
      return {
          statusCode: 200,
          body:JSON.stringify({error:false,
          data:{ok: true}})
        };
    }

  }catch(error){
      return {
        statusCode: 500,
        body:JSON.stringify({error:true,
        message:`${error.message}, Please try again later"`,
        data:null})
      }
  }

}