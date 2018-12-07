import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { 
  Jumbotron,
  Card,
  CardTitle,
  CardText,
  Container,
  Row,
  Col,
  CardHeader,
  CardFooter,
  CardBody
 } from 'reactstrap';
 import * as utils from '../../utils'

export default class StudentInformation extends PureComponent {
  renderMarks = (marks) => {
    return (
      Object.values(marks).map((item, i) => {
        return (
          <CardText key={`${item}_${i}`}>Subject {i+1}: {item} </CardText>
        )
      })
    )
  }

  render() {
    const studentData = this.props.location.state
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Welcome {studentData.name}!</h1>
        </Jumbotron>
        <Container>
          <Row>
            <Col>
              <Card className="text-center">
                <CardHeader>Name: {studentData.name}</CardHeader>
                <CardBody>
                  <CardTitle>Roll No: {studentData.rollNo}</CardTitle>
                  <CardText>Class: {studentData.class}</CardText>
                  {
                    this.renderMarks(studentData.marks)
                  }
                </CardBody>
                <CardFooter>Total Marks: {utils.findTotalMarks(studentData.marks)}</CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

StudentInformation.propTypes = {
  location: PropTypes.shape({}).isRequired,
}