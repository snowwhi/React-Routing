import '../App.css'
function Recentcard({title,text,image}) {
    return(
        <>
        <div className="flex flex-wrap items-center gap-6"> 
    <div className="shrink-0 group overflow-hidden rounded-lg">
        <img 
            src={image} 
            className="w-48 h-32 object-cover shadow-sm transition-transform duration-500 group-hover:scale-110" 
        />
    </div>
    <div className="flex-1">
        <h2 className="text-white  text-xl lg:text-3xl font-bold mb-1">{title}</h2>
        <h3 className="text-gray-300 leading-snug">{text}</h3>
    </div>        
</div>
        </>
    )
}
export default Recentcard