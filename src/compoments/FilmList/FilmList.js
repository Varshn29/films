import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchfilmDetails } from '../../redux/action/filmDetailsAction';
import { fetchListOfFilms } from '../../redux/action/filmListAction';


const FilmList = () => {

    const dispatch = useDispatch();
    const { isLoading, filmListData, error } = useSelector(state => state.filmList);
    const { results } = filmListData;

    useEffect(() => {
        dispatch(fetchListOfFilms())
    }, [])

    function handleClick(url) {
        return dispatch(fetchfilmDetails(url))
    }

    return (

        <Box sx={{ color: 'white' }}>
            <Typography sx={{ textAlign: 'center', fontSize: '40px', p: '50px'}} ><strong>List of movie names</strong></Typography>
            <Grid container spacing={2} sx={{ ml: '80px', mt: '50px' }} >
                {results?.map((item, i) => <Grid item xs={4} key={i}>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to={'/flim-details'} onClick={() => handleClick(item.url)}>
                        <ul><li><strong>Movie:</strong> {item.title} <p><strong>Director:</strong> {item.director}</p>
                            <p><strong>Release Date:</strong> {item.release_date}</p>
                        </li></ul>
                    </Link>
                </Grid>)}
            </Grid>
        </Box>
    )
}

export default FilmList