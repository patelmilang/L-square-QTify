import {Box} from '@mui/material'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
const Songs=()=>{
    return (<Box>
     <Tabs
   
  variant="scrollable"
  scrollButtons={false}
  aria-label="scrollable prevent tabs example"
>
  <Tab label="Item One" />
  <Tab label="Item Two" />
  <Tab label="Item Three" />
  <Tab label="Item Four" />
  <Tab label="Item Five" />
  <Tab label="Item Six" />
  <Tab label="Item Seven" />
</Tabs>
    </Box>);
};

export default Songs;