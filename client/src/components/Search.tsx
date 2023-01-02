import { useState } from 'react';
import axios from 'axios';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
// import { Search } from '@mui/icons-material';

const Search = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState({
        prompt: '',
        data: ''
    });

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:8000/chat', { prompt });
        console.log(res.data);
        setResponse({
            prompt: prompt,
            data: res.data
        });
        setPrompt('');
    }
    return (
        <Grid container direction='column' justifyContent='center' alignItems='center' width='auto' maxWidth={500} minHeight='100vh' spacing={2} style={{ margin: 'auto'}}>
            <Box sx={{ width: 'auto', height: 'auto', padding: 10, justifyContent:'center', alignItems:'center', boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' }}>
                <Grid item style={{ textAlign: 'center' }}>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Ask your question"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            sx={{ width: 300, maxWidth: 'auto' }}
                            style={{ fontFamily: 'CustomFont', paddingBottom: 10 }}
                        />
                        <Button style={{ fontFamily: 'CustomFont' }} type="submit" variant='outlined'>Submit</Button>
                    </form>
                </Grid>
                <Grid item>
                    <Typography variant='h6' style={{ paddingTop: 10, textAlign: 'center', fontFamily: 'CustomFont' }}>{response.prompt}</Typography>
                    <Typography variant='subtitle2' style={{ whiteSpace: 'pre-wrap', fontFamily: 'CustomFont' }}>{response.data}</Typography>
                </Grid>
            </Box>
        </Grid>
    )
}

export default Search;
