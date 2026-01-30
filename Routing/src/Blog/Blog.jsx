import "../App.css"
import Latest from "./Latest"
import Recent from "./Recent"
import Top from "./Top"
function Blog() {
    return(
        <>
        <div className="min-h-[88.9%] w-full bg-slate-900" >
            <Top/>
            <div className="flex flex-wrap">
            <Latest/>
            <Recent/>
            </div>
        </div>
        </>
    )
}
export default Blog