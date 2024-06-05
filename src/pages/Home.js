import React, { useEffect, useState } from "react";

import { Container, TextField, AppBar, Toolbar, Typography, Box, Grid, Card, CardMedia, CardContent, CircularProgress } from '@mui/material';
import theme from '../theme';
import axios from "axios";
import { ThemeProvider } from "@emotion/react";
import Footer from "../components/Footer";


const Home = () => {

  // set datas //

  const [datas, setDatas] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [loading, setLoading] = useState(true);


  /// Featch Api Using useEffect  ///

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        setDatas(response.data);
        setFilteredPhotos(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  //// 

  useEffect(() => {
    setFilteredPhotos(
      datas.filter(photo =>
        photo.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, datas]);

  /////

  return (
    <ThemeProvider theme={theme}>

      {/* /// Menu  */}

      <AppBar position="static" >
        <Toolbar>
          <Typography variant="h5" >GoBananas Assignment - Using Photo Gallery Api </Typography>
        </Toolbar>
      </AppBar>

      {/* ///End  Menu  */}


      <Container>
        <Box mt={4}>
          <TextField
            label="Search"
            variant="outlined"
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {
            loading ? (
              <Box display="flex" justifyContent="center" mt={4}>
                <CircularProgress mb={4} />
              </Box>
            ) :
              (
                <Grid container spacing={3} mt={2}>
                  {filteredPhotos.map(photo => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={photo.id}>
                      <Card>
                        <CardMedia
                          component="img"
                          height="200"
                          image={photo.thumbnailUrl}
                          alt={photo.title}
                        />
                        <CardContent>
                          <Typography variant="h6">{photo.title.substr(0, 50)}</Typography>
                          <Typography variant="subtitle1" color="#dc004e" gutterBottom>Album id: {photo.albumId}</Typography>
                          <Typography variant="subtitle1" color="#dc004e" gutterBottom>ID: {photo.id}</Typography>

                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              )}
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>

  );
};

export default Home;
