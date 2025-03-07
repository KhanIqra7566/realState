import React from 'react'
import { toast } from 'react-toastify';

const Contact = () => {
 const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "18ca5e7c-7b98-43a2-8097-2f8c69111d69");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
  
    const data = await response.json();
    console.log(data)

    if (data.success) {
      toast.success("Form Submitted Successfully")
      event.target.reset();
      setResult("");
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };
  return (
    <div
     className='container mx-auto overflow-hidden w-full lg:px-32 text-center' id='Contact'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'> Contact <span className='underline underline-offset-4 decoration-1 font-light'>With Us</span></h1>
      <p className='text-center text-gray-500 mb-12 max-w-2xl mx-auto'>Ready to Make a Move? Let’s Build Your <br /> Future Together</p>
      <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-grey-600 pt-8'>
         <div className='flex flex-wrap'>
         <div className='w-full md:w-1/2 text-left'>
            <div>Your Name<input className='w-full border border-grey-300 rounded py-3 px-4 mt-2' type="text" name="Name" placeholder='Your Name' required /></div>
         </div>
         <div className='w-full md:w-1/2 text-left md:pl-4'>
            <div>Your Email<input className='w-full border border-grey-300 rounded py-3 px-4 mt-2' type="email" name='Email' placeholder='Your Email' required /></div>
         </div>
         </div>

         <div className='my-6 text-left'>
            Message
        <textarea  className='w-full border border-grey-300 rounded py-3 px-4 mt-2 h-48 resize-none' name="Message" id="" placeholder='Message' required></textarea>
         </div>
         <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded'>{result ? result : "Submit"}</button>
      </form>
    </div>
  )
}

export default Contact
