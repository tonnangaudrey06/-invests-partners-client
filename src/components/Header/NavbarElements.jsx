import { FaBars,FaTimes } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  /*height: 80px;
  display: flex;*/
  /*justify-content: space-between;*/
  /*padding: 0.5rem  ;
  z-index: 10;*/
  

  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  /*color: #fff!important;
  display: flex;
  align-items: center;
  justify-content: flex-start; 
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  position:relative;
 
  transition: color .2s ease-in-out, background-color .2s ease-in-out,border-color .2s ease-in-out;*/
  
/*
  &.active::after {
    content: '';
    width: 80%!important;
    height: 1.5px!important;
    background-color: white!important;
    position: absolute!important;
    bottom: 15px!important;
    left: 50%!important;
    transform: translateX(-50%)!important;
  }*/
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 1084.99px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export const FTime = styled(FaTimes)`
  display: none;
  color: #fff;

  @media screen and (max-width: 1084.99px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
 display:flex;

  @media screen and (max-width: 998px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 91vh;
    position: absolute;
    top:60px;
    left: ${({click}) => (click ?  0 : '-100%' )};
    opacity:1;
    transition: all .5s ease-in-out;
    background: #c34839;

  }
`;

export const NavBtn = styled.nav`
 /* display: flex;
  align-items: center;
  margin-right: 24px;

   Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */

  @media screen and (max-width: 998px) {
    display: none;
  }
`;
export const NavBtn2 = styled.nav`
 /* display: flex;
  align-items: center;
  margin-right: 24px;

   Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  display:none;
  @media screen and (max-width: 998px) {
    display: block;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  margin-left: 24px;

 /* &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }*/
`;
export const Logocontainer = styled.span`

 /* 
  height: 100%;
  display: flex;
  align-items: center;
  
  box-sizing:border-box;
  overflow:hidden;
  margin-right: 100px;
  margin-left: 5vw;*/

`;

export const MobileIcone= styled.div`
  display: none;
  @media screen and (max-width: 1084.99px){
    display: block;
    position absolute;
    top:0;
    right: 0;
    transform: translate(-100%, 60);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;