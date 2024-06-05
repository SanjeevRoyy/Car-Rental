import { Box, Flex, Image, NavLink } from "@mantine/core";
import React from "react";

const Navbar = () => {
  return (
    <>
      <Flex justify="space-between">
        <Image src='icons/physics.png'/>
        
        <NavLink label="Home" />
        <NavLink label="Services" />
        <NavLink label="About" />
        <NavLink label="Vehicles" />
        <NavLink label="FaQ" />
      </Flex>
    </>
  );
};

export default Navbar;
