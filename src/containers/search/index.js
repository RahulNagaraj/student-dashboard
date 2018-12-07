import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Form, FormGroup, Input } from 'reactstrap'
import { filterNames } from '../../actions'

class Search extends PureComponent {
  handleOnKeyUp = (event) => {
    this.props.filterNames(event.target.value)
  }

  render () {
    return (
      <div>
        <Form inline>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input 
              type="text" 
              name="search" 
              id="exampleEmail" 
              placeholder="Search"
              onKeyUp={this.handleOnKeyUp}
            />
          </FormGroup>
          </Form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    filterNames: (inputString) => dispatch(filterNames.filterByName(inputString))
  }
}

export default connect(null, mapDispatchToProps)(Search)
