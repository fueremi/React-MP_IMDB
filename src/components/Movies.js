import { Button, Card, Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Movies = ({ movies, onClick }) => {
  return (
    <Container className="mt-4">
      <Row>
        {movies.map((movie) => {
          return (
            <Col md="4" key={movie.imdbID}>
              <Card className="mb-4">
                <Card.Img variant="top" src={movie.Poster}/>
                <Card.Body>
                  <Card.Title>{ movie.Title }</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{movie.Year}</Card.Subtitle>
                  <Button block className="mt-3" variant="primary" onClick={onClick}>See Detail</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Movies;
