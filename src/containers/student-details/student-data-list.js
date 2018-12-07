import React from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  CardFooter,
  CardText
} from 'reactstrap';
import * as utils from '../../utils'

const StudentDataList = (props) => (
  <Card
    className="text-center"
    onClick={() => props.onClickHandler(props.studentData)}
    >
    <CardHeader>Name: {props.studentData.name}</CardHeader>
    <CardBody>
      <CardTitle>Roll No: {props.studentData.rollNo}</CardTitle>
      <CardText>Class: {props.studentData.class}</CardText>
    </CardBody>
    <CardFooter>Total Marks: {utils.findTotalMarks(props.studentData.marks)}</CardFooter>
  </Card>
)

StudentDataList.propTypes = {
  studentData: PropTypes.shape({}).isRequired,
  onClickHandler: PropTypes.func.isRequired
}

export default StudentDataList