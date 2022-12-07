import React from "react";
import "./nav.css";

const Nav = () => {
  const navBar = document.getElementById("navBar");
  const barOne = document.getElementById("barOne");
  const barTwo = document.getElementById("barTwo");
  const barThree = document.getElementById("barThree");
  const navLinkOne = document.getElementById("navLinkOne");
  const navLinkTwo = document.getElementById("navLinkTwo");
  const navLinkThree = document.getElementById("navLinkThree");
  const navBarFooter = document.getElementById("navBarFooter");

  // navOpen animation

  const open = () => {
    navBar.classList.add("nav-bar-open");
    navBar.classList.add("visible");
    barOne.classList.add("bar-one-transition");
    barTwo.classList.add("bar-two-transition");
    barThree.classList.add("bar-three-transition");
    setTimeout(() => {
      navLinkOne.classList.add("nav-link-fade-in");
      setTimeout(() => {
        navLinkTwo.classList.add("nav-link-fade-in");
        setTimeout(() => {
          navLinkThree.classList.add("nav-link-fade-in");
          setTimeout(() => {
            navBarFooter.classList.add("nav-link-fade-in");
          }, 200);
        }, 200);
      }, 200);
      navBar.classList.remove("nav-bar-open");
      barOne.classList.remove("bar-one-transition");
      barOne.classList.add("bar-one-hold");
      barTwo.classList.remove("bar-two-transition");
      barTwo.classList.add("bar-two-hold");
      barThree.classList.add("bar-three-hold");
      barThree.classList.remove("bar-three-transition");
    }, 300);
  };

  //navClose animation
  const close = () => {
    navLinkOne.classList.remove("nav-link-fade-in");
    navLinkTwo.classList.remove("nav-link-fade-in");
    navLinkThree.classList.remove("nav-link-fade-in");
    navBarFooter.classList.remove("nav-link-fade-in");
    navLinkOne.classList.add("nav-link-fade-out");
    navLinkTwo.classList.add("nav-link-fade-out");
    navLinkThree.classList.add("nav-link-fade-out");
    navBarFooter.classList.add("nav-link-fade-out");
    setTimeout(() => {
      navBar.classList.add("nav-bar-close");
      navBar.classList.remove("nav-bar-open");
      barOne.classList.add("bar-one-transition-out");
      barOne.classList.remove("bar-one-hold");
      barTwo.classList.add("bar-two-transition-out");
      barTwo.classList.remove("bar-two-hold");
      barThree.classList.add("bar-three-transition-out");
      barThree.classList.remove("bar-three-hold");
      setTimeout(() => {
        navBar.classList.remove("nav-bar-open");
        navBar.classList.remove("nav-bar-close");
        navBar.classList.remove("visible");
        barOne.classList.remove("bar-one-transition-out");
        barTwo.classList.remove("bar-two-transition-out");
        barThree.classList.remove("bar-three-transition-out");
        navBarFooter.classList.remove("nav-link-fade-out");
        navLinkOne.classList.remove("nav-link-fade-out");
        navLinkTwo.classList.remove("nav-link-fade-out");
        navLinkThree.classList.remove("nav-link-fade-out");
      }, 300);
    }, 250);
  };

  //nav event listener
  const navToggleClick = () => {
    if (navBar.classList.contains("visible")) {
      close();
    } else {
      open();
    }
  };
  return (
    <div>
      <div id="navToggle" onClick={() => navToggleClick()}>
        <div id="barContainer">
          <div id="barOne"></div>
          <div id="barTwo"></div>
          <div id="barThree"></div>
        </div>
      </div>
      <nav id="navBar">
        <div className="nav-link-container">
          <div id="navLinkOne" className="nav-link">
            <a href="/">home</a>
          </div>
          <div id="navLinkTwo" className="nav-link">
            <a href="/about">about</a>
          </div>
          <div id="navLinkThree" className="nav-link">
            <a href="/contact">contact</a>
          </div>
        </div>
        
        <div id="navBarFooter" className="nav-bar-footer">
          <a
            href="https://www.linkedin.com/in/blueshiftwebdev"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.github.com/blueshiftwebdev"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.twitter.com/blueshiftwebdev"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
