import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const edgingOptions = [
  {
    key: 'Plastic edging',
    value: 'Plastic edging',
    text: 'Plastic edging'
  },
  {
    key: 'Benderboard',
    value: 'Benderboard',
    text: 'Benderboard'
  },
  {
    key: '6x6 timber edging',
    value: '6x6 timber edging',
    text: '6x6 timber edging'
  },
  {
    key: 'Paver bricks',
    value: 'Paver bricks',
    text: 'Paver bricks'
  },
  {
    key: 'Precast concrete pavers',
    value: 'Precast concrete pavers',
    text: 'Precast concrete pavers'
  }
]

const DropDownEdging= () => (
  <Dropdown
    placeholder='Select Edging from the list'
    fluid
    search
    selection
    options={edgingOptions}
  />
)
export default DropDownEdging
