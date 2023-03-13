"use client";

import {FaBars} from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Button, Stack,Navbar } from 'react-bootstrap'
import React from 'react'
import { Montserrat } from '@next/font/google'
const montserrat = Montserrat({ subsets: ['latin'] })

export default function NavBar({ show }) {
  const user = localStorage.getItem("user");
  const logOut = () => {
    localStorage.removeItem("user");
  };

  if (user == null) {
    return (
      <Navbar style={{ backgroundColor: "rgba(16, 16, 16, 1)" }} expand="lg">
        <Container>
          <Button id = "menuButton" onClick={show} >
            <FaBars/>
          </Button>
          <Stack direction="horizontal" gap={3}>
            <button className="btn btn-outline-dark">
              <a href="/Signup" className={montserrat.className}>
                Sign up
              </a>
            </button>
            <button className="btn btn-success ">
              <a href="/Login" className={montserrat.className}>
                Log in
              </a>
            </button>
          </Stack>
        </Container>
      </Navbar>
    );
  } else {
    return (
      <Navbar style={{ backgroundColor: "rgba(16, 16, 16, 1)" }} expand="lg">
        <Container>
          <Button id="menuButton" onClick={show}>
            <FaBars />
          </Button>
          <button className="btn btn-success" onClick={logOut}>
            <a href="/" className={montserrat.className}>
              Log out
            </a>
          </button>
        </Container>
      </Navbar>
    );
  }
}
