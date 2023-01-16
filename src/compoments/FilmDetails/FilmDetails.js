import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchfilmDetails } from '../../redux/action/filmDetailsAction';

const FilmDetails = () => {

    const { filmDetailsData } = useSelector(state => state.filmDetails);
    const dispatch = useDispatch();
    const {url} = filmDetailsData;

    useEffect(() => {
        dispatch(fetchfilmDetails(url))
    }, [url])

    return (
        <Box sx={{textAlign: 'center', color: 'white', p: '40px'}}>
            <Typography sx={{fontSize: '30px'}}>{filmDetailsData.title}</Typography>
            <Typography sx={{my: '20px'}}><strong>About:</strong> {filmDetailsData.opening_crawl}</Typography>
            <Typography><strong>About:</strong> {filmDetailsData.director}</Typography>
            <Typography sx={{my: '20px'}}><strong>About:</strong> {filmDetailsData.producer}</Typography>
            <Typography><strong>About:</strong> {filmDetailsData.release_date}</Typography>
        <img src="https://seeklogo.com/images/S/Star_Wars-logo-2B2C24F703-seeklogo.com.png" height= '300px'/>
        </Box>
    );
}

export default FilmDetails