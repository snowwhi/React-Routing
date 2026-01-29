import '../App.css'

function Upper_div() {
  return (
    <>  
      <div className='absolute top-10 w-full min-h-[50vh] flex flex-col lg:flex-row justify-around items-center gap-6 px-4 sm:px-6 lg:px-8 py-8 '>
        <div className='w-full lg:w-1/2 p-4 sm:p-6 lg:p-10'>
          <h2 className='text-white text-lg sm:text-xl mb-2'> 
            Welcome to
          </h2>
          <h1 className='text-xl sm:text-4xl md:text-4xl lg:text-3xl font-bold mb-4 drop-shadow-lg text-white leading-tight'> 
            CMS Technology Partners,<br/>
            Offering best-of-breed<br/>
            technology Solutions.
          </h1>
        </div>

        {/* Description Section */}
        <div className='w-full lg:w-1/2 p-4 sm:p-6 lg:p-10'>
          <p className='text-white font-medium text-sm sm:text-base leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aut odit est qui dolore quis commodi praesentium tempore impedit necessitatibus!
            <br/><br/>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum magni impedit necessitatibus possimus temporibus nesciunt ea, odit saepe quia eaque?
          </p>
        </div>

      </div>
    </>
  )
}

export default Upper_div