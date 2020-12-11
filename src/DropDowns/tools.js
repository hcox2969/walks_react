import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const toolsOptions = [
  {
    name: "Shovel",
    key: 'Shovel',
    value: 'Shovel',
    text: 'Shovel'
  },
  {
    key: 'Garden hose',
    value: 'Garden hose',
    text: 'Garden hose'
  },
  {
    key: 'Garden rake',
    value: 'Garden rake',
    text: 'Garden rake'
  },
  {
    key: 'Drum roller',
    value: 'Drum roller',
    text: 'Drum roller'
  },
  {
    key: 'Hand tamper',
    value: 'Hand tamper',
    text: 'Hand tamper'
  },
  {
    key: 'Electric drill',
    value: 'Electric drill',
    text: 'Electric drill'
  },
  {
    key: 'Saw',
    value: 'Saw',
    text: 'Saw'
  },
  {
    key: '3-pound sledgehammer',
    value: '3-pound sledgehammer',
    text: '3-pound sledgehammer'
  },
  {
    key: 'Rubber mallet',
    value: 'Rubber mallet',
    text: 'Rubber mallet'
  },
  {
    key: 'Wheelbarrow',
    value: 'Wheelbarrow',
    text: 'Wheelbarrow'
  },
  {
    key: 'Safety goggles',
    value: 'Safety goggles',
    text: 'Safety goggles'
  },
  {
    key: 'Work gloves',
    value: 'Work gloves',
    text: 'Work gloves'
  }
]

const DropDownTools = () => (
  <Dropdown
    placeholder='Select Tools from the list'
    fluid
    multiple
    selection
    options={toolsOptions}
    name='tools'
  />
)
export default DropDownTools
