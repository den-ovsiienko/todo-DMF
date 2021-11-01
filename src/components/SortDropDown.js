import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'

const sortOptions = [
  {
    label: 'ID (1-9)',
    func: (a, b) => a.id - b.id,
  },
  {
    label: 'ID (9-1)',
    func: (a, b) => b.id - a.id,
  },
  {
    label: 'Title (A-Z)',
    func: (a, b) => ('' + a.title).localeCompare(b.title)
  },
  {
    label: 'Title (Z-A)',
    func: (a, b) => ('' + b.title).localeCompare(a.title)
  },
  {
    label: 'Date (past - future)',
    func: (a, b) => Date.parse(a.dueDate) - Date.parse(b.dueDate)
  },
  {
    label: 'Date (future - past)',
    func: (a, b) => Date.parse(b.dueDate) - Date.parse(a.dueDate)
  }
]

const SortDropDown = ({onSort, index}) => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => setOpen(!open)

  return (
    <Dropdown toggle={toggleOpen} isOpen={open} size='sm' className='d-inline-block me-2'>
      <DropdownToggle color='secondary' className='rounded rounded-circle mt-1' onClick={toggleOpen}>
        <i className="bi bi-filter"></i>
      </DropdownToggle>
      <DropdownMenu container="body">
        {sortOptions.map((option) => (
          <DropdownItem key={option.label} onClick={() => onSort({
            index: index,
            func: option.func,
            sortLabel: option.label
          })}>
            {option.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}

export default SortDropDown
