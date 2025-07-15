import { useState } from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (contactData: any) => {
    setIsSubmitting(true);
    setError("");
    setResponse(null);
    try {
      const res = await fetch(
        "https://node-mail-f0ob.onrender.com/enquiry/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactData),
        }
      );

      if (!res.ok) throw new Error("Failed to send Mail");

      const data = await res.json();
      setIsSubmitting(false);
      setResponse(data);
      reset();
    } catch (err) {
      setError(err.message);
      setIsSubmitting(false);
      reset();
    }
  };

  return (
    <div>
      <div className="pt-8 max-w-screen-xl mx-auto px-3" id="what I Do">
        <div className="text-center relative ">
          <span className="text-5xl sm:text-7xl lg:text-9xl font-bold text-white opacity-20">
            CONTACT
          </span>
          <p className="absolute inset-0 flex flex-col items-center justify-center text-xl sm:text-2xl lg:text-3xl text-green-500 dancing-script-medium tracking-widest">
            <p className="w-fit mt-3">
              Contact
              <hr className="w-16 mt-3 mx-auto text-white border-[1px]" />
            </p>
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center py-10">
          <div className="py-3 text-center bg-gray-500 h-full flex flex-col items-center justify-center rounded-md sm:rounded-tl-md rounded-bl-md">
            <h2 className="text-white font-semibold text-xl md:text-3xl">
              Get In Touch
            </h2>

            <p className="text-center text-white text-lg md:text-2xl py-2 dancing-script-regular tracking-widest ">
              so we can create creative projects together
            </p>
            <div className="flex flex-col text-white text-center">
              <h2 className="text-white poppins-light text-sm md:text-md px-3 tracking-widest">
                kavyavijayan6713@gmail.com | Ernakulam, Kerala
              </h2>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-900 rounded-tr-md rounded-br-md"
          >
            <div className="grid grid-cols-2 px-10 py-10 gap-5">
              <div className="flex flex-col col-span-2 sm:col-span-1">
                <label className="text-white font-semibold">Name</label>
                <input
                  type="text"
                  {...register("Name")}
                  className="border border-blue-300 rounded-xl p-2 focus:outline-none text-green-500"
                />
              </div>
              <div className="flex flex-col col-span-2 sm:col-span-1">
                <label className="text-white font-semibold">Email</label>
                <input
                  type="email"
                  {...register("Email")}
                  className="border border-blue-300 rounded-xl p-2 focus:outline-none text-green-500"
                />
              </div>
              <div
                id="contact"
                className="flex flex-col col-span-2 sm:col-span-1"
              >
                <label className="text-white font-semibold">
                  Contact Number
                </label>
                <input
                  type="text"
                  {...register("Number")}
                  className="border border-blue-300 rounded-xl p-2 focus:outline-none text-green-500"
                />
              </div>
              <div className="flex flex-col col-span-2 sm:col-span-1">
                <label className="text-white font-semibold">Subject</label>
                <select
                  {...register("Subject")}
                  className="border border-blue-300 rounded-xl p-2 focus:outline-none text-green-500"
                >
                  <option value="Freelance">Freelance Work Enquiry</option>
                  <option value="Support">Support From My Side</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex flex-col col-span-2">
                <label className="text-white font-semibold">Message</label>
                <textarea
                  {...register("Message", { required: "Message is required" })}
                  rows={3}
                  placeholder="Write your message here..."
                  className="border border-blue-300 rounded-xl p-2 focus:outline-none text-green-500"
                />
              </div>
            </div>

            <div className="w-full text-center pb-2">
              <button
                type="submit"
                className="cursor-pointer border border-white focus:outline-none text-white px-10 py-1 rounded-full bg-transparent hover:bg-green-600"
              >
                {isSubmitting ? "Submitting" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
