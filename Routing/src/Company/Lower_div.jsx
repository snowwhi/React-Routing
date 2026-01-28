import Card from "./Card"
import '../App.css'
import first from '../assets/1.jpg' 
import Second from '../assets/2.jpg' 
import third from '../assets/3.jpg' 
import fourth from '../assets/4.jpg' 
function Lower_div() {
    return(
        <>
        <div className="absolute bottom-0 h-1/2 w-full flex flex-wrap justify-around items-start">
        <Card image ={first} text='Weapon Detection System'/>
        <Card image={Second}  text='Ai Camera Vision & thread detection'/>
        <Card image={third} text ='X-Ray Imaging System'/>
        <Card image={fourth} text='It InfraStructure'/>
        </div>
        </>
    )
}
export default Lower_div