import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>GitCollab</h5>
            <p className="small">
              A simple collaboration platform built for learning and teamwork.
            </p>
          </Col>

          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <p className="small mb-1"><a href="#home" className="text-light text-decoration-none">Home</a></p>
            <p className="small mb-1"><a href="#contact" className="text-light text-decoration-none">Contact</a></p>
          </Col>

          <Col md={4} className="mb-3">
            <h5>Contact Info</h5>
            <p className="small mb-1">Email: support@gitcollab.com</p>
            <p className="small">Phone: +91 98765 43210</p>
          </Col>
        </Row>

        <hr className="border-light" />

        <div className="text-center small">
          © {new Date().getFullYear()} GitCollab. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
