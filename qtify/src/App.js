import { Box } from '@mui/material';
import './App.css';
import Header from './component/Header';
import HeroSection from './component/HeroSection'
import AlbumList from './component/AlbumsList';
import FAQ from './component/FAQ';
import Songs from './component/Songs';
function App() {
  return (
    <Box>
       <Header/>
       <HeroSection />
       <AlbumList />
       <Songs />
       <FAQ />
    </Box>
  );
}

export default App;
