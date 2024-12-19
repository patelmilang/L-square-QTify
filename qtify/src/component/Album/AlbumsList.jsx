import React from "react";
import { Box,Card,CardMedia,CardContent, Typography,Button } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const AlbumList = () => {
    const albums = [
        { title: 'New Bollywood', image: '/path-to-bollywood.jpg', follows: '100 Follows' },
        { title: 'New English Songs', image: '/path-to-english.jpg', follows: '100 Follows' },
        { title: 'New English Songs', image: '/path-to-english.jpg', follows: '100 Follows' },
        { title: 'New English Songs', image: '/path-to-english.jpg', follows: '100 Follows' },
        { title: 'New English Songs', image: '/path-to-english.jpg', follows: '100 Follows' },
      ];
  return (
    <Box sx={{ padding: '20px' }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6" fontWeight="bold">Top Albums</Typography>
          <Button endIcon={<ArrowForwardIosIcon />} sx={{ color: 'green', textTransform: 'none' }}>
            Show all
          </Button>
        </Box>

        <Box
          sx={{
            display: 'flex',
            overflowX: 'auto',
            gap: '20px',
          }}
        >
          {albums.map((album, index) => (
            <Card key={index} sx={{ minWidth: '160px', boxShadow: 2 }}>
              <CardMedia
                component="img"
                height="140"
                image={album.image}
                alt={album.title}
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="body2" fontWeight="bold">
                  {album.follows}
                </Typography>
                <Typography variant="body1">{album.title}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
     
  
  );
};

export default AlbumList;
