import React from 'react';
import { Box,Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const FAQ = () => {
   return (
        <Box 
          sx={{
            backgroundColor: '#000', 
            color: '#fff', 
            padding: '20px',
            minHeight: '100vh'
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            FAQs
          </Typography>
    
          {/* First FAQ */}
          <Accordion sx={{border:"white 1px solid"}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: '#0f0' }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                backgroundColor:"black",
                color:"white"
              }}
            >
              <Typography>Is QTiFy free to use?</Typography>
            </AccordionSummary>
            <AccordionDetails 
             sx={{
                backgroundColor:"white",
                color:"black"
              }}>
              <Typography>
                Yes, QTiFy is free to use for all users.
              </Typography>
            </AccordionDetails>
          </Accordion>
    
          {/* Second FAQ */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: '#0f0' }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"  sx={{
                backgroundColor:"black",
                color:"white",
                 
                padding:"20px"
              }}
            >
              <Typography>Can I download and listen to songs offline?</Typography>
            </AccordionSummary>
            <AccordionDetails 
             sx={{
                backgroundColor:"white",
                color:"black"
              }}>
              <Typography>
                Sorry, unfortunately we don't provide the service to download any songs.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      );
};

export default FAQ;