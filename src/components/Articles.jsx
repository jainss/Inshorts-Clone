import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getNews } from "../service/api";


const Articles =()=>{
    const [oldNews,NewNews]=useState([]);
    
    useEffect(()=>{
        getDailyNews();
    },[])
    
    const getDailyNews=async()=>{
        let response= await getNews();
    }
  
    return (
        <Box>

        </Box>
    );
}

export default Articles;