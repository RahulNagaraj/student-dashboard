import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
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
import { studentDetails } from '../../actions/index' 

class StudentDetails extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(studentDetails.fetchStudentDataIfNeeded())
  }

  render () {
    const { studentDetails } = this.props;
    console.log('studentDetails: ', studentDetails);
    return (
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
  }
}

StudentDetails.propTypes = {
  studentDetails: PropTypes.shape({}).isRequired,
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
    studentDetails,
    isFetching
  }
}

export default connect(mapStateToProps)(StudentDetails)