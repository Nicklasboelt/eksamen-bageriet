import React, { useState } from "react";
import styled from "styled-components";
import NavbarLeft from "./NavbarLeft";

const StyledBurger = styled.div`
  width: 45px;
  height: 30px;
  position: fixed;
  top: 10px;
  right: 20px;

  z-index: 20;
  display: none;

  @media ${({ theme }) => theme.mediaQueries.bellow1200} {
    display: flex;
    justify-content: space-between;
    flex-flow: column nowrap;
  }

  div {
    width: 40px;
    height: 4px;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    background-color: ${(props) => props.theme.colors.white};

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <NavbarLeft open={open} />
    </>
  );
};

export default Burger;
