import { Box, Flex, Group, Image, Text, Title } from "@mantine/core";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <>
      <Flex mt={40} gap={50} justify="center" p={40}>
        <Image radius={20} w={600} src="img/about.webp" />
        <Box mt={10}>
          <Text c="secondary.0">About Us</Text>
          <Title c="primary.0" size="h2">
            OUR COMMITMENT TO YOUR COMFORT AND SATISFACTION
          </Title>
          <Text mt={10}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet omnis
            cumque rem odit libero reprehenderit vitae, dignissimos provident
            consequuntur necessitatibus.
          </Text>
          <Group mt={20}>
            <FaCheckCircle color="#211455" />
            <Text>24/7 Online Booking</Text>
          </Group>
          <Group>
            <FaCheckCircle color="#211455" />
            <Text>Diverse Vehicles Selection</Text>
          </Group>
          <Group>
            <FaCheckCircle color="#211455" />
            <Text>Flexible Pick-up and Drop-off Locations</Text>
          </Group>
        </Box>
      </Flex>
      {/* <Group w="100vw" bg="primary.0">
        <Image  src='img/logo1.png'/>
        <Image  style={{mixBlendMode:"multiply"}} src='img/logo7.png'/>
        <Image  src='img/logo3.png'/>
        <Image  src='img/logo4.png'/>
        <Image style={{mixBlendMode:"multiply"}} src='img/logo5.png'/>
      </Group> */}
      <Image mt={40} src='img/logo8.png'/>
    </>
  );
};

export default About;
