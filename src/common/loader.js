import React from 'react'
import PropTypes from 'prop-types'

const Loader = (props) => (
  <div>
    <div className="loader-container">
      <div className="loader"></div>
    </div>
    <h1 className="loader-body">{props.loaderMessage}</h1>
  </div>
)

Loader.defaultProps = {
  loaderMessage: 'Loading'
}

Loader.propTypes = {
  loaderMessage: PropTypes.string
}

export default Loader