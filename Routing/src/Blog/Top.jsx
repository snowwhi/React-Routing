import "../App.css"
function Top() {
    return(
        <>
        <div className="relative p-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
  <div>
    <h3 className="uppercase text-white font-bold text-xl">Blog</h3>
    <h1 className="uppercase text-white font-bold text-3xl">Latest Article</h1>
  </div>
  
  <button className="mr-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 font-bold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none">
    All Posts
  </button>
</div>
        </>
    )
}
export default Top