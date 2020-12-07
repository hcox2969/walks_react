import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const materialsOptions = [
  {
    key: 'Stakes',
    value: 'Stakes',
    text: 'Stakes'
  },
  {
    key: 'Sand',
    value: 'Sand',
    text: 'Sand'
  },
  {
    key: 'Garden rake',
    value: 'Garden rake',
    text: 'Garden rake'
  },
  {
    key: 'Landscape fabric',
    value: 'Landscape fabric',
    text: 'Landscape fabric'
  },
  {
    key: 'Gravel',
    value: 'Gravel',
    text: 'Gravel'
  },
  {
    key: 'Mulch',
    value: 'Mulch',
    text: 'Mulch'
  },
  {
    key: '12-inch spikes',
    value: '12-inch spikes',
    text: '12-inch spikes'
  },
  {
    key: '3-pound sledgehammer',
    value: '3-pound sledgehammer',
    text: '3-pound sledgehammer'
  }
]

const DropDownMaterials = () => (
  <Dropdown
    placeholder='Select Materials from the list'
    fluid
    multiple
    selection
    options={materialsOptions}
  />
)
export default DropDownMaterials
