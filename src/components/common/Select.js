import React from 'react'
import styled from 'styled-components'
import { default as ReactSelect } from 'react-select'

const Select = ({ name, label, value, options, onChange, defaultOption = options[0] }) => {
  return (
    <Container className="d-flex align-items-center">
      <span className="mr-2 fs-2 text-light-gray">{label}</span>
      <SelectBox
        className="p-1"
        name={name}
        value={value}
        onChange={onChange}
        options={options}
        defaultOption={defaultOption}
      />
    </Container>
  )
}

export default Select

const Container = styled.div``

const SelectBox = styled(ReactSelect)`
  border-radius: 4px;
  width: 200px;
`
