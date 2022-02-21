import './home.css';
import {useState,useEffect} from "react"

    





export const Home = ()=>{
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
    return <div className="home_div">

<div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"></img>
</div>
        <input className="search-box" placeholder="Search"/>
    </div>
}