import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const AddMovie = () => {
    const [formValues, setFormValues] = useState({});
    const history = useHistory();

    const onChangeFormField = (event) => {
        const { value, name, type } = event.target;

        setFormValues({
            ...formValues,
            [name]: type === "number" ? Number(value) : value
        });
    }

    const onClickSubmit = async () => {
        try {
            await axios({
                url: 'http://localhost:4000/api/movies',
                method: 'POST',
                data: formValues
            });
            history.push('/');
        }
        catch (e) {
            alert("Add Movie Failed!")
        }
    }

    return (
        <Card>
            <Card.Header>
                <h3>Form to Add a New Movie</h3>
            </Card.Header>
            <Card.Body>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Enter the Movie Title</Form.Label>
                    <Form.Control type="text" name="title" onChange={onChangeFormField} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="year_of_release">
                    <Form.Label>Enter the Year of Release</Form.Label>
                    <Form.Control type="text" name="year_of_release" onChange={onChangeFormField} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="rating">
                    <Form.Label>Enter the Movie Rating</Form.Label>
                    <Form.Control type="number" name="rating" onChange={onChangeFormField} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="poster">
                    <Form.Label>Enter the Movie Poster</Form.Label>
                    <Form.Control type="text" name="poster" onChange={onChangeFormField} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="genre">
                    <Form.Label>Enter the Movie Genre</Form.Label>
                    <Form.Control type="text" name="genre" onChange={onChangeFormField} />
                </Form.Group>
                <Button variant="success" type="button" onClick={onClickSubmit} className="m-2">
                    Submit
                </Button>
                <Button variant="success" type="button" href="http://localhost:3000/home">
                    Go back to Home
            </Button>
            </Card.Body>
        </Card>
    )
}

export default AddMovie;