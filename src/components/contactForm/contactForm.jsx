import React,{useEffect,useState} from "react";
import Axios from 'axios';
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';

let renderCount = 0;

export default function ContactForm(props) {

    

    const [txtmsg,setTxtMsg] = useState('');

    const { register,resetField, handleSubmit, formState: { errors } } = useForm({mode: "onChange",
    defaultValues: {
        fullName: "",
        mobileNumber:"",
        email:""
    }});

    const onSubmit = (data) => {
        // console.log(data);
        const msg=`Name:${(data.fullName && data.fullName!=='')?data.fullName:'N/A'}\nPhone:${(data.mobileNumber && data.mobileNumber!=='')?data.mobileNumber:'N/A'}\nEmail:${data.email?data.email:'N/A'}`;
        resetField("fullName");
        resetField("mobileNumber");
        resetField("email");

        setTxtMsg(msg);

    }

    console.log(errors);

    useEffect(()=>{
        console.log(txtmsg);
        if (txtmsg && txtmsg!==''){
            const url="https://api.telegram.org/bot"+process.env.REACT_APP_BOT_TOKEN+"/sendMessage";
            // console.log(url);
            const sendingMsg=Axios.post(url, {chat_id: process.env.REACT_APP_CHAT_ID,text: txtmsg})
            .then(response => {
                // console.log(response.data);
                if(response.data.ok===true){
                    toast.success("We will call you soon..👍👍",{
                        options:{
                            duration:8000,
                            icon:''
                        }
                    })
                }
                                
            })
            .catch(error =>{
                console.log(error);
            });

            toast.promise(sendingMsg,
                {
                    loading:"Connecting to Our Instructor...",
                    success:"Relayed Your Details..🖖🖖",
                    error:"Something went wrong, try later..",
                },
                {
                    success: {
                      duration: 500,
                      icon: '🔃',
                    },
                    error: {
                        duration: 4000,
                    },
                  }
            );

        }
    },[txtmsg]);

    const inputStyle="mt-3 block w-full rounded-md border-green-300 shadow-sm focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50"
    
    renderCount++;
    console.log(renderCount);

    return(
        <div className="flex items-center justify-center justify-items-center py-6 ">
            <form className="shadow-lg rounded px-8 py-4 mb-2 bg-green-50" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="block font-bold text-xl text-center"> Get in Touch with Us </h1>
                <br/>
                <input type="text" className={inputStyle} placeholder="Full name" 
                {...register("fullName", 
                    {
                        required: {
                            value:true,
                            message:"🤷‍♂️ Enter Your Name 🤷‍♀️"
                        }, 
                        maxLength: {
                            value:32,
                            message:"🙆 Name is above 32 characters 🙆‍♂️"
                        },
                    })
                } />
                {(errors.fullName && errors.fullName.type==="maxLength")?(<p className="mt-2 mb-2">{errors.fullName.message}</p>):<></>}
                {(errors.fullName && errors.fullName.type==="required")?(<p className="mt-2 mb-2">{errors.fullName.message}</p>):<></>}
                <input type="tel" className={inputStyle} placeholder="Mobile number" 
                {...register("mobileNumber", 
                    {
                        required: {
                            value:true,
                            message:"🤷‍♂️ Enter Your Number 🤷‍♀️"
                        },  
                        maxLength: {
                            value:10,
                            message:"🙆 Ph.Number will be 10 digits only 🙆‍♂️"
                        }, 
                        pattern: {
                            value:/^[6-9]\d{9}$/i,
                            message:"🤷‍♂️ Invalid Number 🤷‍♀️"
                        }
                    })
                } />
                {(errors.mobileNumber && errors.mobileNumber.type==="pattern")?(<p className="mt-2 mb-2">{errors.mobileNumber.message}</p>):<></>}
                {(errors.mobileNumber && errors.mobileNumber.type==="maxLength")?(<p className="mt-2 mb-2">{errors.mobileNumber.message}</p>):<></>}
                {(errors.mobileNumber && errors.mobileNumber.type==="required")?(<p className="mt-2 mb-2">{errors.mobileNumber.message}</p>):<></>}
                <input type="text" className={inputStyle} placeholder="Email" 
                {...register("email", 
                    { 
                        pattern: {
                            value:/^\S+@\S+$/i,
                            message:"🤷‍♀️ Invalid Email ID 🤷‍♂️"
                        },
                    })
                } />
                {(errors.email && errors.email.type==="pattern")?(<p className="mt-2 mb-2">{errors.email.message}</p>):<></>}
                <button className="uppercase px-1 py-1 mt-4 mb-4 bg-transparent border-2 border-green-500 text-sm rounded-lg transition-colors duration-200 transform hover:bg-green-500 hover:text-gray-100 focus:border-4 focus:border-green-300" type='submit'>Submit</button>
            </form>
            <Toaster position="top-right"/>
        </div>
    )
    
}