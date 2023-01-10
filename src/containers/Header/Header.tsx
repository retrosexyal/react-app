import React, { useEffect } from "react";
import Link from "../../components/Link/Link";
import styled from 'styled-components'
import { IHader } from "./IHeader";
import { flex } from '../../constants/constants'
import { Route, Routes } from "react-router-dom";

const StyledHeader = styled.header`
${flex()};
gap: 10vw;

`

function Header(props: IHader) {


  return (
    <StyledHeader>
      <>{console.log(window.location.href)}</>
      <Link href={props.hrefHome}  bgColor={window.location.href.endsWith('/')? 'red' : 'blue'} title="Home" />
      <Link href={props.hrefFavorites}  bgColor={window.location.href.endsWith('rites')? 'red' : 'blue'}  title="Favorites" />
      <Link href={props.hrefTest} bgColor={window.location.href.endsWith('test')? 'red' : 'blue'}  title="Test" />
    </StyledHeader>
  );
}

export default Header;
