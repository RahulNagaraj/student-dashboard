import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import Search from '../search';
import { sort } from '../../actions/'

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleOnClick = (event) => {
    console.log(this.props.sortNames)
    const { sortNames } = this.props
    if (sortNames.sortBy === 'asc') {
      this.props.sortAsc()
    } else {
      this.props.sortDesc()
    }
    
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Student Dashboard</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Search />
              </NavItem>
              <NavItem>
                <Button 
                  color="info"
                  onClick={this.handleOnClick}
                >Sort By</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sortAsc: () => dispatch(sort.sortNamesAlphabetically()),
    sortDesc: () => dispatch(sort.sortNamesReverseAlphabetically()),
  }
}

function mapStateToProps(state) {
  const { sortNames } = state;
  return {
    sortNames
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)