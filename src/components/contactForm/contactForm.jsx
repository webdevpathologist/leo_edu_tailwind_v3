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
      const url =
        "https://api.telegram.org/bot" +
        process.env.REACT_APP_BOT_TOKEN +
        "/sendMessage";
      // console.log(url);
      const sendingMsg = Axios.post(url, {
        chat_id: process.env.REACT_APP_CHAT_ID,
        text: txtmsg,
      })
        .then((response) => {
          // console.log(response.data);
          if (response.data.ok === true) {
            toast.success("We will call you soon..👍👍", {
              options: {
                duration: 8000,
                icon: "",
              },
            });
          }
        })
        .catch((error) => {
          // console.log(error);
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

  const labelStyle = "text-sm leading-7 font-thin dark:text-green-400/95";

  const inputStyle =
    "mt-1 mb-4 block w-full rounded-lg borderfocus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 dark:bg-gray-700 outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out";

  return (
    <div className="relative z-30 mt-10 flex w-full flex-col rounded-lg bg-green-100 p-4 shadow-md dark:bg-slate-900/95 dark:text-green-500/95 md:ml-auto md:mt-0 md:w-1/2 lg:w-1/3">
      <form className="px-8 py-4" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="title-font mb-1 text-center text-2xl font-black uppercase leading-loose">
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
          className="mt-4 mb-4 w-full rounded-full border-2 border-green-500 bg-transparent px-1 py-1 text-sm uppercase transition-colors duration-200 hover:bg-green-500 hover:text-gray-100 focus:border-4 focus:border-green-300"
          type="submit"
        >
          Submit
        </button>
      </form>
      <Toaster position="top-right" className="z-40"/>
    </div>
  );
}
