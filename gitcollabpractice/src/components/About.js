import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function About() {
  return (
    <div id="about" className="py-5 bg-light">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2>About Us</h2>
            <p>
              This project is built as a collaborative practice platform using
              Git and React.
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={4} className="mb-3">
            <Card className="p-3 shadow-sm">
              <h5>Collaboration</h5>
              <p>
                Each member works in separate branches and merges through pull requests.
              </p>
            </Card>
          </Col>

          <Col md={4} className="mb-3">
            <Card className="p-3 shadow-sm">
              <h5>Frontend</h5>
              <p>
                Built using React and React-Bootstrap for responsive design.
              </p>
            </Card>
          </Col>

          <Col md={4} className="mb-3">
            <Card className="p-3 shadow-sm">
              <h5>Version Control</h5>
              <p>
                Managed using GitHub with proper branch management workflow.
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
