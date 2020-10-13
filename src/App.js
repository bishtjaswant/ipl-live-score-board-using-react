import { Button, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import './App.css';
import MyCard from './components/MyCard';
import NavBar from './components/NavBar';
import {getMatches} from './api/config';
function App() {

  const [matches,setMatches] = useState([]);

  useEffect(() => {
    getMatches()
           .then(data=>setMatches(data.matches))
           .catch(err=>console.log(err))
  },[])
  return (
       <>
             <NavBar/>
             
               <Typography    variant="h3"> welcokme to IPL live score app</Typography>

                <Grid container justify="center">
                  <Grid item sm={6}>
                        
             {
               matches.map(match=>{
                return <>
                   {(match.type=="Twenty20")?
                     <MyCard key={match['unique_id']} match={match}/>
                   :("")}
                 </>
               })
             }
      
                  </Grid>
                </Grid>        
           
       </>
  );
}

export default App;
