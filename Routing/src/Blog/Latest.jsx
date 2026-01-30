import "../App.css"
import B1 from '../assets/B1.jpg'
function Latest() {
    return(
        <>
       <div className="w-full lg:w-1/2 h-auto  p-4">
  <div className="w-full p-8 rounded-2xl group flex flex-col justify-center items-start">
    <img src={B1} alt="image" className="h-64 w-full max-w-md object-cover rounded-3xl" />
    
    <h1 className="text-white text-2xl font-bold mt-4">
      Lorem ipsum : Lorem ipsum dolor sit amet.
    </h1>
    
    <h3 className="text-white text-xl font-medium"> 
      Lorem ipsum 
    </h3>
    
    <p className="text-xs text-gray-300">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, molestias.
    </p>
    
  </div>
</div>
        </>
    )
}
export default Latest