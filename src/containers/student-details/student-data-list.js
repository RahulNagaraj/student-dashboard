import React from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  CardText, 
  CardBody,
  CardTitle,
} from 'reactstrap';

const getTotalMarks = (marks) => {
  return Object.values(marks).reduce((a,b) => a + b, 0)
}

const StudentDataList = (props) => (
  <Card>
    <CardBody>
      <CardTitle>{props.studentData.name}</CardTitle>
      <CardText>Roll No: {props.studentData.rollNo}</CardText>
      <CardText>Total Marks: {getTotalMarks(props.studentData.marks)}</CardText>
    </CardBody>
  </Card>
)

StudentDataList.propTypes = {
  studentData: PropTypes.shape({}).isRequired
}

export default StudentDataList