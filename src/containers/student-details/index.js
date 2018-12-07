import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Container,
  Row,
  Alert
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

  renderStudentList(studentList) {
    return (
      <div>
        <Container fluid>
          <Row>
            {
              studentList.map(studentData => (
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

  renderStudentDetails() {
    const { studentDetails, isFiltered, filteredList, isSorted, sortedList } = this.props
    let studentList = []
    if (isFiltered) {
      if (isSorted) {
        studentList = sortedList.map(a => a)
      } else {
        studentList = filteredList.map(a => a)
      }
    } else if (isSorted) {
      if (isFiltered) {
        studentList = filteredList.map(a => a)
      } else {
        studentList = sortedList.map(a => a)
      }
    } else {
      studentList = studentDetails.map(a => a)
    }
    if (studentList && studentList.length > 0) {
      return this.renderStudentList(studentList)
    }
    return (
      <Container fluid>
        <Alert color="info">
          No Student Found
        </Alert>
      </Container>
    )
  }

  render () {
    const { isFetching } = this.props;
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
  const { studentDetails, filterNames, sortNames } = state
  const { isFetching } = studentDetails || {
    isFetching: true,
    data: []
  }
  const { isFiltered, filteredList } = filterNames
  const { isSorted, sortedList } = sortNames
  return {
    studentDetails: studentDetails.data,
    filteredList,
    isFiltered,
    isFetching,
    sortedList,
    isSorted
  }
}

export default connect(mapStateToProps)(StudentDetails)