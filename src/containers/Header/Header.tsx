import React from "react";
import Link from "../../components/Link/Link";
import styled from 'styled-components'
import { IHader } from "./IHeader";
import { flex } from '../../constants/constants'

const StyledHeader = styled.header`
${flex()};
gap: 10vw;

`

function Header(props: IHader) {
  return (
    <StyledHeader>
      <Link href={props.hrefHome} title="Home" />
      <Link href={props.hrefFavorites} title="Favorites" />
    </StyledHeader>
  );
}

export default Header;
