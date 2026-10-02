import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
const API_KEY = import.meta.env.VITE_API_KEY;

export default function Searchbox({newInfo}) {

    let [cityname,setCityname] = useState("");

    let api_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${API_KEY}`;

    let getweatherInfo = async ()=>
    {
        let res = await fetch(api_url);
        if (!res.ok) 
        {
            // alert("Enter the city name correctly!");
            newInfo({msg : 0});
            throw new Error("City not found");
        }
        let info = await res.json();
        // console.log(info);


        let result = {
            name : info.name,
            temp : info.main.temp,
            temp_min : info.main.temp_min,
            temp_max : info.main.temp_max,
            feelsLike : info.main.feels_like,
            description : info.weather[0].description,
            humidity : info.main.humidity
        }
        console.log(result);
        newInfo(result);
    }


    let handleChange = (e)=>
    {
        if(e.target.value == " ")
        {
            setCityname(e.target.value.trim());
        }
        else
        {
            setCityname(e.target.value);
        }
    }

    let handleSubmit = (e)=>
    {
        e.preventDefault();
        console.log(cityname);
        getweatherInfo();
        setCityname("");
    }

    return (
        <div>
            <h3>Search the place</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={cityname} onChange={handleChange}/>
                <br />
                <br />
                <Button variant="contained" type="submit" >
                    Search
                </Button>
            </form>
        </div>
    )
}