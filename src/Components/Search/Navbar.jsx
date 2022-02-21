import {useState,useEffect} from "react"
import {NavbarButtons} from "../Button/NavbarButtons"
import "./Navbar.css"
export const Navbar = ()=>{
    let [data,setData] = useState("");
    async function handleOnClick(){
    let response = await fetch("https://fast-reef-22226.herokuapp.com/data")
    let apidata = await response.json();
    setData(apidata)
   console.log(data)
    }

    useEffect(()=>{
        handleOnClick()
    },[])

    return (<div  id="navbar">
        <img className="Navbar-Img-Google" src="https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg" />
        <input className="Second-input" type="text" />
        <button className="search" onClick={()=> {handleOnClick()}}>Search</button>
        <NavbarButtons/>
        {/* <div>
            <p>{data.map((e)=>{{<p>{e.key}</p>}})}</p>
        </div> */}
        </div>

    )
}