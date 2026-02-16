import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Row, Col, Card } from "react-bootstrap";

function Home() {

  const cards = [
    { id: 1, title: "Dharshan", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSitSfDbqQrESDvVrfseQs_kSHbNyVyYjBEOQ&s" },
    { id: 2, title: "Divyadharshini", img: "https://t4.ftcdn.net/jpg/09/61/69/75/360_F_961697523_EFd1m8P4tdcwB0TYvlQAagqKR1xHSuwk.jpg" },
    { id: 3, title: "Kavya", img: "https://t4.ftcdn.net/jpg/06/43/68/65/360_F_643686558_Efl6HB1ITw98bx1PdAd1wy56QpUTMh47.jpg" },
    { id: 4, title: "Priyanka", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKAQUY2PdYWrY_ZHwnpp-HCgvmScWME2xNQg&s" }
  ];

  return (
    <>
      {/* -------- Banner -------- */}
      <div id="home" className="bg-primary text-white py-5">
        <Container className="text-center">
          <h1>Welcome to Our GitCollab</h1>
          <p>This is a practice platform for collaboration.</p>
          <Button variant="light">Get Started</Button>
        </Container>
      </div>

      {/* -------- Cards -------- */}
      <Container className="my-5">
        <Row>
          {cards.map((item) => (
            <Col md={3} key={item.id} className="mb-4">
              <Card>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title className="text-center">
                    {item.title}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;