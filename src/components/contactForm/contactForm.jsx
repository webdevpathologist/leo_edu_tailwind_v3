import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

export default function ContactForm(props) {
  const [txtmsg, setTxtMsg] = useState("");

  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      fullName: "",
      mobileNumber: "",
      email: "",
    },
  });

  const onSubmit = (data) => {
    // console.log(data);
    const msg = `Name:${
      data.fullName && data.fullName !== "" ? data.fullName : "N/A"
    }\nPhone:${
      data.mobileNumber && data.mobileNumber !== "" ? data.mobileNumber : "N/A"
    }\nEmail:${data.email ? data.email : "N/A"}`;
    resetField("fullName");
    resetField("mobileNumber");
    resetField("email");

    setTxtMsg(msg);
  };

  // console.log(errors);

  useEffect(() => {
    // console.log(txtmsg);
    if (txtmsg && txtmsg !== "") {
      
      const url='/.netlify/functions/sendToTelegram';
      const sendingMsg = Axios.post(url,{text: txtmsg}).then(res=>{
        console.log(res.data.data.ok);
        if (res.data.data.ok === true) {
          toast.success("We will call you soon..👍👍", {
            options: {
              duration: 8000,
              icon: "",
            },
          });
        }
      });

      toast.promise(
        sendingMsg,
        {
          loading: "Connecting to Our Instructor...",
          success: "Relayed Your Details..🖖🖖",
          error: "Something went wrong, try later..",
        },
        {
          success: {
            duration: 500,
            icon: "🔃",
          },
          error: {
            duration: 4000,
          },
        }
      );
    }
  }, [txtmsg]);


  const form_head_text = "text-slate-800"
  const form_head_text_dark = "text-green-500/95"

  const form_label_text_dark = "text-indigo-400/95"
  const form_input_dark = "bg-gray-700"

  const labelStyle = `text-sm leading-7 font-thin dark:${form_label_text_dark}`;

  const inputStyle =
    `mt-1 mb-4 block w-full rounded-lg dark:borderfocus:border-green-300 dark:focus:ring dark:focus:ring-green-200 focus:ring-opacity-50 dark:${form_input_dark} outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`;

  return (
    <div className={`relative z-20 mt-10 flex w-full flex-col rounded-lg bg-indigo-200 p-4 shadow-md dark:bg-slate-800/95 ${form_head_text} dark:${form_head_text_dark} md:ml-auto md:mt-0 md:w-1/2 lg:w-1/3`}>
      <form className="px-8 py-4" onSubmit={handleSubmit(onSubmit)}>
        <h1 className={`${form_head_text} dark:${form_head_text_dark} title-font mb-1 text-center text-2xl font-black uppercase leading-loose`}>
          Get in Touch with Us
        </h1>
        <br />
        <label htmlFor="name" className={labelStyle}>
          Full Name
        </label>
        <input
          id="name"
          type="text"
          className={inputStyle} //placeholder="Full name"
          {...register("fullName", {
            required: {
              value: true,
              message: "🤷‍♂️ Enter Your Name 🤷‍♀️",
            },
            maxLength: {
              value: 32,
              message: "🙆 Name is above 32 characters 🙆‍♂️",
            },
          })}
        />
        {errors.fullName && errors.fullName.type === "maxLength" ? (
          <p className="mt-2 mb-2">{errors.fullName.message}</p>
        ) : (
          <></>
        )}
        {errors.fullName && errors.fullName.type === "required" ? (
          <p className="mt-2 mb-2">{errors.fullName.message}</p>
        ) : (
          <></>
        )}
        <label htmlFor="mobile" className={labelStyle}>
          Mobile Number
        </label>
        <input
          id="mobile"
          type="tel"
          className={inputStyle} //placeholder="Mobile number"
          {...register("mobileNumber", {
            required: {
              value: true,
              message: "🤷‍♂️ Enter Your Number 🤷‍♀️",
            },
            maxLength: {
              value: 10,
              message: "🙆 Ph.Number will be 10 digits only 🙆‍♂️",
            },
            pattern: {
              value: /^[6-9]\d{9}$/i,
              message: "🤷‍♂️ Invalid Number 🤷‍♀️",
            },
          })}
        />
        {errors.mobileNumber && errors.mobileNumber.type === "pattern" ? (
          <p className="mt-2 mb-2">{errors.mobileNumber.message}</p>
        ) : (
          <></>
        )}
        {errors.mobileNumber && errors.mobileNumber.type === "maxLength" ? (
          <p className="mt-2 mb-2">{errors.mobileNumber.message}</p>
        ) : (
          <></>
        )}
        {errors.mobileNumber && errors.mobileNumber.type === "required" ? (
          <p className="mt-2 mb-2">{errors.mobileNumber.message}</p>
        ) : (
          <></>
        )}
        <label htmlFor="email" className={labelStyle}>
          Email Address
        </label>
        <input
        id="email"
          type="text"
          className={inputStyle} //placeholder="Email"
          {...register("email", {
            pattern: {
              value: /^\S+@\S+$/i,
              message: "🤷‍♀️ Invalid Email ID 🤷‍♂️",
            },
          })}
        />
        {errors.email && errors.email.type === "pattern" ? (
          <p className="mt-2 mb-2">{errors.email.message}</p>
        ) : (
          <></>
        )}
        <button
          className="mt-4 mb-4 w-full rounded-full border-2 border-indigo-500 dark:border-green-500 bg-transparent px-1 py-1 text-sm uppercase transition-colors duration-200 hover:bg-indigo-500 hover:text-gray-100 dark:hover:bg-green-500 dark:hover:text-gray-100 focus:border-4 focus:border-green-300"
          type="submit"
        >
          Submit
        </button>
      </form>
      <Toaster position="top-right" className="z-40"/>
    </div>
  );
}
