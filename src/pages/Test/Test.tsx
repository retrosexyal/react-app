import React from 'react';
import styled from 'styled-components';

const StyledTest = styled.div`
background: ${props=> props.color || 'green'};
`

function Test({bgColor}:{bgColor:string}) {
  return (
    <StyledTest color={bgColor}>Test</StyledTest>
  )
}

export default Test;