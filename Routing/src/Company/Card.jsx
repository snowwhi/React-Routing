import '../App.css'

function Card({image,text}) {
  return (
<>
<div className="relative w-56 h-70 group overflow-hidden rounded-2xl shadow-xl">
      <img 
        src={image} 
        alt="Product" 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      <div className="absolute inset-0 p-3 flex flex-col justify-end">
        <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold p-2 rounded-lg flex items-start justify-center gap-2 transition-all active:scale-95">
          <span>{text}</span>
        </button>
      </div>
    </div>
</>
  )
}

export default Card
