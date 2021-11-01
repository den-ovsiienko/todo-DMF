import React, { useState } from 'react'
import {Navbar, NavbarBrand, Nav, NavItem, Input, InputGroup, Dropdown, DropdownToggle, DropdownItem, DropdownMenu} from 'reactstrap';

const filterOptions = [
  {
    label: 'None',
    filterType: '',
    disabled: true,
    isActive: false
  },
  {
    label: 'Table',
    filterType: 'state',
    disabled: false,
    isActive: false
  },
  {
    label: 'Title',
    filterType: 'title',
    disabled: false,
    isActive: false
  },
  {
    label: 'ID',
    filterType: 'id',
    disabled: false,
    isActive: false
  },
  {
    label: 'Due Date',
    filterType: 'dueDate',
    disabled: false,
    isActive: false
  },
]

const TodoNavbar = ({filters, onChange}) => {
  const [filterOptionsOpen, setFilterOptionsOpen] = useState(false);
  const [activeFiltersOpen, setActiveFiltersOpen] = useState(false)
  const [option, setOption] = useState(filterOptions[0])

  const toggleFilterOptionsOpen = () => setFilterOptionsOpen(!filterOptionsOpen);
  const toggleActiveFiltersOpen = () => setActiveFiltersOpen(!activeFiltersOpen);

  const getActiveFiltersNum = () => {
    var counter = 0;
    for(var key in filters) {
      if(filters[key] !== '') {
        counter++
      }
    }
    return counter;
  }

  const onInputChange = (filterType, value) => {
    option.isActive = value === '' ? false : true;
    onChange(filterType, value)
  }

  return (
    <Navbar
        color='light'
        fixed='top'
        sticky='true'
        light
        className='mb-xs-3'
      >
        <NavbarBrand>
          <i className="bi bi-check2-square me-2"></i>
          Your TODO's
        </NavbarBrand>
        <Nav>
          <NavItem>
            <InputGroup>
              <Dropdown toggle={toggleFilterOptionsOpen} isOpen={filterOptionsOpen}>
                <DropdownToggle className='rounded-end-0' caret>
                  {option.label}
                </DropdownToggle>
                <DropdownMenu>
                  {filterOptions.map((option) => (
                    <DropdownItem key={option.label} onClick={() => setOption(option)}>
                      {option.label}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown> 
              <Input 
                id='filter'
                name='filter'
                type='search'
                value={filters[option.filterType]}
                disabled={option.disabled}
                onChange={(e) => onInputChange(option.filterType, e.target.value)}
              />
              <Dropdown toggle={toggleActiveFiltersOpen} isOpen={activeFiltersOpen}>
                <DropdownToggle color='warning' caret>
                  {getActiveFiltersNum()}
                </DropdownToggle>
                <DropdownMenu>
                  {filterOptions.map((filter) => {
                    if(!filter.isActive) return null;
                    return <DropdownItem key={filter.filterType}>
                      {`${filter.label}`}
                    </DropdownItem>
                  })}
                </DropdownMenu>
              </Dropdown> 
            </InputGroup>
          </NavItem>
        </Nav>
      </Navbar>
  )
}

export default TodoNavbar
