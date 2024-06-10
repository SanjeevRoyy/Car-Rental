import { Box, Divider, Flex, Group, Image, Text } from "@mantine/core";
import React from "react";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaGoogle, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <Flex justify="space-between" gap={20} p={40} bg="primary.0">
        <Flex direction="column" w="20%">
          <Image
            mt={-25}
            // style={{ mixBlendMode: "multiply" }}
            w={150}
            src="img/logocar1.png"
          />
          <Text size="sm" c="white">
            It is a long established fact that a reader will be distracted by
            the readable content
          </Text>
          <Group mt={10}>
            <RiFacebookCircleLine color="white" />
            <FaGoogle color="white" />
            <FaInstagram color="white" />
            <FaTwitter color="white" />
            <FaLinkedinIn color="white" />
          </Group>
        </Flex>
        <Flex gap={10} direction="column" w="15%">
          <Text fw={700} c="white">
            QUICKS LINKS
          </Text>
          <Text size="sm" c="white">
            Home
          </Text>
          <Text size="sm" c="white">
            Services
          </Text>
          <Text size="sm" c="white">
            About Us
          </Text>
          <Text size="sm" c="white">
            Vehicles
          </Text>
          <Text size="sm" c="white">
            Faq
          </Text>
        </Flex>
        <Flex gap={10} direction="column" w="15%">
          <Text fw={700} c="white">
            LEGAL
          </Text>
          <Text size="sm" c="white">
            Terms & Condition
          </Text>
          <Text size="sm" c="white">
            Cookie Policy
          </Text>
          <Text size="sm" c="white">
            Privacy Policy
          </Text>
          <Text size="sm" c="white">
            Feedback
          </Text>
        </Flex>
        <Flex gap={10} direction="column" w="20%">
          <Text fw={700} c="white">
            CONTACT
          </Text>
          <Text size="sm" c="white">
            New Baneshwor, Kathmandu
          </Text>
          <Text size="sm" c="white">
            abiralmanauya9@gmail.com
          </Text>
          <Text size="sm" c="white">
            +977-9820310011
          </Text>
        </Flex>
      </Flex>
      <Divider />
      <Text size="sm" p={10} ta="center" c="white" bg="primary.0">
        Copyright @2024 By Sanjeev. All Right Reserved 
      </Text>
    </>
  );
};

export default Footer;
