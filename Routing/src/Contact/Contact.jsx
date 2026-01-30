import '../App.css'
import ContactForm from './ContactForm'
import C1 from '../assets/C1.jpg'
function Contact() {
    return(<>
    <section className="relative w-full min-h-[88.9%] flex items-center justify-center lg:justify-end py-20 px-4 md:px-10 lg:px-20">
      <div className="absolute inset-0 z-0">
        <img 
          src={C1} 
          alt="Security Camera" 
          className=" w-full h-full object-top-right  bg-white"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      <div className="relative z-10 w-full lg:w-auto">
        <ContactForm />
      </div>

    </section>
    </>)

}
export default Contact