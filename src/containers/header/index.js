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
import { 
  sort,
  sortMarks
} from '../../actions/'

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

  handleOnNameBtnClick = (event) => {
    const { sortNames } = this.props
    if (sortNames.sortBy === 'asc') {
      this.props.sortAsc()
    } else {
      this.props.sortDesc()
    }
  }

  handleOnTMBtnClick = (event) => {
    const { sortMarks } = this.props
    if (sortMarks.sortBy === 'asc') {
      this.props.sortTMAsc()
    } else {
      this.props.sortTMDesc()
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
              <NavItem
                className="mr-2"
              >
                <Button
                  outline
                  color="info"
                  onClick={this.handleOnNameBtnClick}
                >
                Sort By Name</Button>
              </NavItem>
              <NavItem>
                <Button
                  outline
                  color="info"
                  onClick={this.handleOnTMBtnClick}
                >
                Sort By Total Marks</Button>
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
    sortTMAsc: () => dispatch(sortMarks.sortTotalMarksAscending()),
    sortTMDesc: () => dispatch(sortMarks.sortTotalMarksDescending())
  }
}

function mapStateToProps(state) {
  const { sortNames, sortMarks } = state;
  return {
    sortNames,
    sortMarks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)