import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Alert, Card } from 'react-bootstrap';
import axios from 'axios';
import moment from 'moment';
import Loader from '../components/Loader';

function MovieDetails() {
    const { movieId } = useParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [details, setDetails] = useState({});

    useEffect(() => {
        fetchMovieDetails();
    }, [])

    const fetchMovieDetails = async () => {
        try {
            setLoading(true);
            const response = await axios({
                method: 'get',
                url: `http://localhost:4000/api/movies/${movieId}`
            });
            setLoading(false);
            setDetails(response.data.movie);
        }
        catch (e) {
            setError(e.message);
        }
    }

    return (
        <Card bg="dark" text="white" style={{width:"18rem"}} className="mx-auto">
            {error && <Alert variant='danger'>{error}</Alert>}
            {loading ?
                <Loader />
                :
                <>
                    <Card.Header as="h1" className="text-center">{details.title}</Card.Header>
                    <Card.Body>
                        <center><Card.Img variant="top" src={details.poster}/></center>
                        <p>Year of Release : {details.year_of_release} </p>
                        <p>Rating: {details.rating}</p>
                        <p>Genre : {details.genre}</p>
                        <p>Created At: {moment(details.createdAt).format('DD-MMM-YYYY')}</p>
                        <p>Updated At: {moment(details.updatedAt).format('DD-MMM-YYYY')}</p>
                    </Card.Body>
                </>
            }
        </Card>
    )
}

export default MovieDetails;