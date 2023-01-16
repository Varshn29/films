import { Card, CardMedia, Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ReusableDetails = ({ title }) => {
    return (
        <Container>
            <Link to={`/film-list/`}>
                <Card sx={{ width: '200px', my: '30px', height: '200px', textAlign: 'center', bgcolor: '#11374d', color: 'white' }} >
                    {title}
                    <CardMedia component="img"
                        sx={{ mt: '20px' }}
                        image={"https://i.gifer.com/8V9H.gif"}></CardMedia>

                </Card>
            </Link>
        </Container>
    )
}

export default ReusableDetails