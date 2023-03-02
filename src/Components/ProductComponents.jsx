import React, { useEffect, useState } from 'react'
import {Card,Box,CardContent,Typography,Divider,Paper,Stack, IconButton, Grid, Modal, Button, TextField} from '@mui/material'
import { styled } from '@mui/material/styles';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import LanguageIcon from '@mui/icons-material/Language';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const StyledProductImg = styled('img')({
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
  });
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
export const ProductComponents = ({product,updateUser,removeFun}) => {
    const cover=`https://avatars.dicebear.com/v2/avataaars/${product?.username}+.svg?options[mood][]=happy`;
    const [like,setLike]=useState(false);
    const [open, setOpen] = React.useState(false);
    const [formData,setFormData]=React.useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(()=>{
    setFormData(product);
  },[product]);
  const handleUpdate=(event)=>{
    event.preventDefault();
    updateUser(formData);
  }
  const handleChange=(event)=>{
    const { name, value } = event.target;
  setFormData({ ...formData, [name]: value });
  }
  return (
    <Card>
        <Box sx={{ pt: '100%', position: 'relative' }}>
        <StyledProductImg alt={"PANKAJ"} src={cover} />
        </Box>
        <CardContent>
        <Typography variant="h6">
       {product?.name}
        </Typography>
        <Stack spacing={1}>
            <Grid container>
                <Grid item> <MailOutlineIcon/></Grid>
                <Grid item sx={{marginLeft:1}}><Typography variant="subtitle">
          {product?.email}
        </Typography></Grid>
            </Grid>
            
            <Grid container>
                <Grid item> <PhoneEnabledIcon/></Grid>
                <Grid item sx={{marginLeft:1}}><Typography variant="subtitle">
          {product?.phone}
        </Typography></Grid>
            </Grid>
            <Grid container>
                <Grid item> <LanguageIcon/></Grid>
                <Grid item sx={{marginLeft:1}}><Typography variant="subtitle">
          {product?.website}
        </Typography></Grid>
            </Grid>
        </Stack>
      </CardContent>
      <Divider/>
      <Stack
      m={1}
  direction="row"
  justifyContent='space-between'
  divider={<Divider orientation="vertical" flexItem />}
  alignItems="center"
  spacing={2}
>
  <IconButton aria-label="upload picture" component="label" onClick={()=>{setLike(!like)}}>
  {!like?(<FavoriteBorderOutlinedIcon sx={{color:"Red"}}/>):(<FavoriteOutlinedIcon sx={{color:"Red"}}/>)}
</IconButton>
 
  <IconButton aria-label="upload picture" component="label" onClick={handleOpen}>
  <BorderColorIcon/>
</IconButton>
 
  <IconButton aria-label="upload picture" component="label" onClick={()=>(removeFun(product.id))}>
  <DeleteIcon/>
</IconButton>
</Stack>
<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Button onClick={handleClose}>Close</Button>
          <TextField
          required
          id="outlined-required"
          label="Name"
          onChange={handleChange}
          defaultValue={formData.name}
        /><TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue={formData.email}
        /><TextField
          required
          id="outlined-required"
          onChange={handleChange}
          label="Phone"
          defaultValue={formData.phone}
        /><TextField
          required
          id="outlined-required"
          label="Website"
          onChange={handleChange}
          defaultValue={formData.website}
        />
        <Button onClick={handleUpdate}>Submit</Button>
        </Box>
      </Modal>
    </Card>
  )
}
