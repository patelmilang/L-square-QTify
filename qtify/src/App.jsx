import { Box } from '@mui/material';
import './App.css';
import Header from './component/Header/Header';
import HeroSection from './component/Hero/HeroSection'
import AlbumList from './component/Album/AlbumsList';
import FAQ from './component/FAQ/FAQ';
import Songs from './component/Album/Songs';
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
