import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import SunnyIcon from '@mui/icons-material/Sunny';4

import './infoBox.css';

export default function Infobox({info}) {

    let hot_weather = "https://tse2.mm.bing.net/th/id/OIP.zQpn-aQs77oO-eQAnv1Z1AHaEK?r=0&pid=Api&h=220&P=0";
    let rainy = "https://wallpaperaccess.com/full/674201.jpg";
    let winter = "https://static.vecteezy.com/system/resources/thumbnails/044/155/303/small_2x/beautiful-winter-nature-landscape-amazing-mountain-free-photo.jpg";
    let spring = "https://png.pngtree.com/thumb_back/fw800/background/20220313/pngtree-spring-natural-scenery-park-greening-image_1002695.jpg";

    if (Object.keys(info).length === 0 || info.msg == 0) {
        return(
            <div className="infocontainer">
                <Alert severity="error">Enter a valid City!</Alert>
            </div>
        );
    }else if(info.msg == 1)
    {
        return;
    }

    let image_address = "https://static.vecteezy.com/system/resources/previews/012/494/384/original/types-of-weather-conditions-with-sunny-cloudy-windy-rainy-snow-and-stormy-in-template-hand-drawn-cartoon-flat-illustration-vector.jpg";
    return (
        <div className='infocontainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image = {info.humidity >80 ? rainy : info.temp <15 ? winter : (info.temp>=15 && info.temp<35) ? spring : hot_weather    }
                    title="weather forecasting"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                       {info.humidity >80 ? <CloudySnowingIcon/>
                        : info.temp <15 ?<AcUnitIcon />
                        : (info.temp>=15 && info.temp<35) ? <EmojiNatureIcon/>
                        : <SunnyIcon/>    }
                        &nbsp;
                         {info.name}
                    </Typography>
                    <Typography variant="body2"  component="div" sx={{ color: 'text.secondary' }}>
                        <p>Temperature : {info.temp}</p>
                        <p>Weather : {info.description}</p>
                        <p>Maximum Temperature : {info.temp_max}</p>
                        <p>Minimum temoerature : {info.temp_min}</p>
                        <p>Feels like : {info.feelsLike}</p>

                    </Typography>
                </CardContent>
                
            </Card>
        </div>
    )
}