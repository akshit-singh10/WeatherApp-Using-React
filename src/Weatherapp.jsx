import Searchbox from './Searchbox'
import Infobox from './InfoBox'
import { useEffect, useState } from 'react'

export default function Weatherapp() {

    let [info,setInfo] = useState({});

    let newInfo = (newInfom)=>
    {
        setInfo(newInfom);
    }

    useEffect(()=>
    {
        setInfo({msg : 1});
    },[])

    return (
        <div>
            <h1 style={{textAlign : "center", textDecoration : "underline", marginBottom : "5rem"}}>Weather App</h1>
            <Searchbox newInfo = {newInfo}/>
            <Infobox info = {info}/>
        </div>
    )
}