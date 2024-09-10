import { Box, Button, Flex, Image, NavLink } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Flex bg={"whitesmoke"} justify="space-between" p={20}>
        <Box>
          <Image
            style={{ mixBlendMode: "multiply" }}
            w={100}
            src="img/carrentlogo.png"
          />
        </Box>
        <Flex gap={50} align="center">
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            Home
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/services"
          >
            Services
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }} to="/about">
            About
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/vehicles"
          >
            Vehicles
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }} to="/faq">
            Faq
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }} to="/signin">
            Login
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
