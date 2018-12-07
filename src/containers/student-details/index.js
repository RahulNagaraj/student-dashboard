import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Container,
  Row,
  Col,
  Card,
  CardText, 
  CardBody,
  CardTitle, 
  CardSubtitle
} from 'reactstrap'
import Loader from '../../common/loader'
import StudentDataList from './student-data-list'
import { studentDetails } from '../../actions/index'

class StudentDetails extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(studentDetails.fetchStudentDataIfNeeded())
  }

  renderLoader() {
    return (
      <div>
        <Loader loaderMessage='Fetching Data...' />
      </div>
    )
  }

  renderDataList() {
    return (
      <Card>
        <CardBody>
          <CardTitle>hi</CardTitle>
          <CardSubtitle>{'studentData.rollNo'}</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>
    )
  }

  renderStudentDetails() {
    const { studentDetails } = this.props
    return (
      <div>
        <Container fluid>
          <Row>
            {
              studentDetails.map(studentData => (
                <StudentDataList 
                  key={studentData.rollNo}
                  studentData={studentData}
                />
              ))
            }
          </Row>
        </Container>
      </div>
    )
  }

  render () {
    const { studentDetails, isFetching } = this.props;
    console.log('studentDetails: ', studentDetails);
    if (isFetching) {
      return this.renderLoader()
    } else {
      return this.renderStudentDetails()
    }
  }
}

StudentDetails.propTypes = {
  studentDetails: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { studentDetails } = state
  const { isFetching } = studentDetails || {
    isFetching: true,
    data: []
  }
  return {
    studentDetails: studentDetails.data,
    isFetching
  }
}

export default connect(mapStateToProps)(StudentDetails)