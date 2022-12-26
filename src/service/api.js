import axios from 'axios';

export const getNews= async()=>{
    const URL='';

    try{
        return await axios.get(URL);

    }catch(err){
        console.log(`The error is ${err}`);
    }
}