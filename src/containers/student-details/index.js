import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Container,
  Alert,
  Row
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

  navigate = (data) => {
    this.props.history.push(`/${data.rollNo}`, data)
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
                  onClickHandler={this.navigate}
                />
              ))
            }
          </Row>
        </Container>
      </div>
    )
  }

  renderStudentDetails() {
    const { 
      studentDetails, 
      isFiltered, 
      filteredList, 
      isSorted, 
      sortedList, 
      sortedTMList, 
      isTMSorted 
    } = this.props
    let studentList = []
    if (isFiltered && isSorted) {
      studentList = sortedList.filter(o => !!filteredList.find(o2 => o.rollNo === o2.rollNo))
    } else if (isFiltered) {
      studentList = filteredList.map(a => a)
    } else if (isSorted){
      studentList = sortedList.map(a => a)
    } else if (isTMSorted){
      studentList = sortedTMList.map(a => a)
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

StudentDetails.defaultProps = {
  filteredList: [],
  sortedList: [],
  sortedTMList: [],
  isSorted: false,
  isFiltered: false,
  isTMSorted: false,
}

StudentDetails.propTypes = {
  studentDetails: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  filteredList: PropTypes.array,
  isFiltered: PropTypes.bool,
  isSorted: PropTypes.bool,
  isTMSorted: PropTypes.bool,
  sortedList: PropTypes.array,
  sortedTMList: PropTypes.array
}

function mapStateToProps(state) {
  const { studentDetails, filterNames, sortNames, sortMarks } = state
  const { isFetching } = studentDetails || {
    isFetching: true,
    data: []
  }
  const { isFiltered, filteredList } = filterNames
  const { isSorted, sortedList } = sortNames
  const { isTMSorted, sortedTMList } = sortMarks
  return {
    studentDetails: studentDetails.data,
    filteredList,
    isFiltered,
    isFetching,
    sortedList,
    isSorted,
    isTMSorted,
    sortedTMList
  }
}

export default connect(mapStateToProps)(withRouter(StudentDetails))
