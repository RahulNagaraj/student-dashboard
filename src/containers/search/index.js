import React from 'react'

import { Form, FormGroup, Input } from 'reactstrap'

const Search = () => (
  <div>
    <Form inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Input type="text" name="search" id="exampleEmail" placeholder="Search" />
      </FormGroup>
      </Form>
  </div>
)

export default Search