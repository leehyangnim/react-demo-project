import React from 'react'
import { Button } from '@btag/bt-ui-library/';
import '../Index.css';

const ArrowButton = ({onClick, children}) => {
  return (
    <Button type="solid" onClick={ () => onClick() }>
    {children} </Button>
  )
}


export default ArrowButton
