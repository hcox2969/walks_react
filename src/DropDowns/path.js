import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const pathOptions = [
  {
    key: 'Flat stones and fine gravel to fill in joints',
    value: 'Flat stones and fine gravel to fill in joints',
    text: 'Flat stones and fine gravel to fill in joints'
  },
  {
    key: 'Brick pavers and gravel or mulch',
    value: 'Brick pavers and gravel or mulch',
    text: 'Brick pavers and gravel or mulch'
  },
  {
    key: 'Concrete pavers mixed with gravel or mulch',
    value: 'Concrete pavers mixed with gravel or mulch',
    text: 'Concrete pavers mixed with gravel or mulch'
  }
]

const DropDownPath = () => (
  <Dropdown
    placeholder='Select Tools from the list'
    fluid
    search
    selection
    options={pathOptions}
  />
)
export default DropDownPath
