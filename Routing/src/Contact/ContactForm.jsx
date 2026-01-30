import '../App.css'
const ContactForm = () => {
  return (
    <div className="bg-white p-8  rounded-xl shadow-2xl w-full max-w-2xl">
      <h3 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">
        Contact Us
      </h3>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
        Find A Solution <br /> You Need
      </h2>
      
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input type="text" placeholder="Name" className="border-b border-gray-300 py-2 focus:border-green-600 outline-none transition-colors" />
        <input type="text" placeholder="Phone" className="border-b border-gray-300 py-2 focus:border-green-600 outline-none transition-colors" />
        <input type="email" placeholder="Email" className="border-b border-gray-300 py-2 focus:border-green-600 outline-none transition-colors" />
        <input type="text" placeholder="Company" className="border-b border-gray-300 py-2 focus:border-green-600 outline-none transition-colors" />
        <input type="text" placeholder="Job Title" className="md:col-span-2 border-b border-gray-300 py-2 focus:border-green-600 outline-none transition-colors" />
        <textarea placeholder="Message" className="md:col-span-2 border-b border-gray-300 py-2 focus:border-green-600 outline-none transition-colors h-24" />
        
        <div className="md:col-span-2 mt-4">
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-md transition-all uppercase text-sm">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default ContactForm