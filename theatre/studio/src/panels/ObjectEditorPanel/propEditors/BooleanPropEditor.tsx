import type {PropTypeConfig_Boolean} from '@theatre/core/propTypes'
import type SheetObject from '@theatre/core/sheetObjects/SheetObject'
import React, {useCallback} from 'react'
import {useEditingToolsForPrimitiveProp} from './utils/useEditingToolsForPrimitiveProp'
import {SingleRowPropEditor} from './utils/SingleRowPropEditor'
import styled from 'styled-components'

const Input = styled.input`
  margin-left: 6px;
`

const BooleanPropEditor: React.FC<{
  propConfig: PropTypeConfig_Boolean
  pointerToProp: SheetObject['propsP']
  obj: SheetObject
}> = ({propConfig, pointerToProp, obj}) => {
  const stuff = useEditingToolsForPrimitiveProp<boolean>(pointerToProp, obj)

  const onChange = useCallback(
    (el: React.ChangeEvent<HTMLInputElement>) => {
      stuff.permenantlySetValue(Boolean(el.target.checked))
    },
    [propConfig, pointerToProp, obj],
  )

  return (
    <SingleRowPropEditor {...{stuff, propConfig, pointerToProp}}>
      <Input type="checkbox" checked={stuff.value} onChange={onChange} />
    </SingleRowPropEditor>
  )
}

export default BooleanPropEditor