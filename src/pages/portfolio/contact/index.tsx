import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <div>
      <div className="py-6 max-w-screen-xl mx-auto" id="what I Do">
        <div className="text-center relative ">
          <span className="text-7xl lg:text-9xl font-bold text-gray-900 opacity-10">
            CONTACT
          </span>
          <p className="absolute inset-0 flex flex-col items-center justify-center text-2xl lg:text-3xl">
            <p className="w-fit mt-3">
              Contact
              <hr className="w-16 mt-3 mx-auto text-violet-900 border-[1px]" />
            </p>
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-4 px-10 py-10 gap-5">
            <div className="flex flex-col col-span-2">
              <label className="text-violet-900 font-semibold">Name</label>
              <input
                type="text"
                {...register("Name")}
                className="border border-blue-300 rounded-xl p-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col col-span-2">
              <label className="text-violet-900 font-semibold">Email</label>
              <input
                type="email"
                {...register("Email")}
                className="border border-blue-300 rounded-xl p-2 focus:outline-none"
              />
            </div>
            <div id="contact" className="flex flex-col col-span-2">
              <label className="text-violet-900 font-semibold">
                Contact Number
              </label>
              <input
                type="text"
                {...register("Number")}
                className="border border-blue-300 rounded-xl p-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col col-span-2">
              <label className="text-violet-900 font-semibold">Subject</label>
              <select
                {...register("Work")}
                className="border border-blue-300 rounded-xl p-2 focus:outline-none"
              >
                <option value="Freelance">Freelance Work Enquiry</option>
                <option value="Support">Support From My Side</option>
                <option value="other">other</option>
              </select>
            </div>
            <div className="flex flex-col col-span-4">
              <label className="text-violet-900 font-semibold">Message</label>
              <textarea
                {...register("message", { required: "Message is required" })}
                rows={3}
                placeholder="Write your message here..."
                className="border border-blue-300 rounded-xl p-2 focus:outline-none"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
