import { Box, Button, Flex, Image, NavLink } from "@mantine/core";
import React from "react";

const Navbar = () => {
  return (
    <>
      <Flex bg={"whitesmoke"}  justify="space-between">
        <Box>
          <Image style={{mixBlendMode:"multiply"}} w={100} src="img/carrentlogo.png" />
        </Box>
        <Flex>
          <NavLink  href="/" label="Home" />
          <NavLink href="/services" label="Services" />
          <NavLink href="/about" label="About" />
          <NavLink href="/vehicles" label="Vehicles" />
          <NavLink href="/faq" label="FaQ" />
          <NavLink href="/signin" label="SignIn" />
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
