import React from 'react'
import { 
  Card,
  CardText, 
  CardBody,
  CardTitle, 
  CardSubtitle,
  Container,
  Col,
  Row
} from 'reactstrap';

const StudentDetails = () => (
  <div>
    <Container>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>Student 1</CardTitle>
              <CardSubtitle>Student ID</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
)

export default StudentDetails