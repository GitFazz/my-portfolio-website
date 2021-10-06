import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export default function Home() {
    
    return (
       
        <Stack direction="column" spacing={10}>
            <Avatar
                alt="Hasan Arif's Photo"
                src="./src/assets/pp.jpeg"
                sx={{ width: 200, height: 200 }}
            />

             <Box sx={{ width: '100%', maxWidth: 500 }}>
                <Typography variant="h3" component="div" gutterBottom>
                    Hasan Ibn Arif
                </Typography>
                <Typography variant="h6" color="gray" component="div" gutterBottom>
                    Software Engineer and Undergraduate Researcher
                </Typography>
             </Box>

        </Stack>    

    );
    
}
