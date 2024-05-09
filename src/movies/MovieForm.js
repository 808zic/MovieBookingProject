import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const MovieForm = ({ onAddMovie, setShowForm }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onAddMovie({ title, description, price, imageSet: { verticalPoster: { w360: image } }, releaseYear: new Date(Date.now()).getFullYear() });
      setTitle('');
      setDescription('');
      setPrice('');
      setImage('');
      setShowForm(false);
    };
  
    return (
      <div className="d-flex justify-content-center">
        <Form onSubmit={handleSubmit} className="">
        <Form.Group controlId="movieTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter movie title"
            value={title}
            style={{ width: '300px' }}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>
  
        <Form.Group controlId="movieDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter movie description"
            value={description}
            style={{ width: '300px' }}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>
  
        <Form.Group controlId="moviePrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter movie price"
            value={price}
            style={{ width: '300px' }}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </Form.Group>
  
        <Form.Group controlId="movieImage">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter movie image URL"
            value={image}
            style={{ width: '300px' }}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </Form.Group>
  
        <Button variant="primary" type="submit" className="mt-3 green-bg">
          Add Movie
        </Button>
      </Form>
      </div>
    );
  };
  
  export default MovieForm;