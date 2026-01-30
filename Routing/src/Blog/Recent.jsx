import "../App.css"
import Recentcard from "./Recentcard"
import B1 from '../assets/B1.jpg'
function Recent() {
    return(
        <>
        <div className=" w-full lg:w-1/2 h-auto  flex flex-col justify-between gap-2" >
        <Recentcard title='Lorem, ipsum dolor sit amet consectetur'text='Lorem, ipsum dolor'image = {B1} />
        <Recentcard title='Lorem, ipsum dolor sit amet consectetur'text='Lorem, ipsum dolor'image = {B1} />
        <Recentcard title='Lorem, ipsum dolor sit amet consectetur'text='Lorem, ipsum dolor'image = {B1} />
        </div>
        </>
    )
}
export default Recent