import './App.css';
import { ProductComponents } from './Components/ProductComponents';
import { Grid,Box } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const [data,setData]=useState([]);
  useEffect(()=>{
   
   const getData = async () => {
    const res=await axios.get("https://jsonplaceholder.typicode.com/users");
    setData(res.data);
  };
  getData();
  },[]);
  const removeData = (id) => {
    setData((current) =>
      current.filter((data) => data.id !== id)
    );
  };
  const updateData=(updatedata)=>{
   setData(data.map((obj)=>{
      if(obj.id===updatedata.id){
        return updatedata;
      }
      return obj;
    }));
  }

  return (
    <Box sx={{ flexGrow: 1}}>
    <Grid container spacing={2} sx={{padding:2}}>
      {data.map((items)=>{
        return(
    <Grid item  xs={12} sm={4} md={3} key={items.id}>
   <ProductComponents product={items} removeFun={removeData} updateUser={updateData}/>
  </Grid>
        )
      })}
  
</Grid>
</Box>
  );
}

export default App;
