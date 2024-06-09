import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Space,
  Tabs,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const HomeSection = () => {
  return (
    <>
      <Flex bg="whitesmoke" p={40} justify="space-between">
        <Box w={"50%"}>
          <Title c="primary.0">
            UNLOCK YOUR <FaLocationDot color="red" /> <br /> TRAVEL EXPERIENCE
          </Title>
          <Text mt={30}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas,
            corporis sunt? Dolorum in voluptates modi eligendi, qui enim nisi
            cumque mollitia eius dignissimos quod molestiae, ea hic ut
            obcaecati. Ducimus, autem!
          </Text>
          <Button mt={30} bg={"secondary.0"}>
            Booking Now
          </Button>
        </Box>
        <Image style={{ mixBlendMode: "multiply" }} src="img/car2.jpg" />
      </Flex>
      <Center>
        <Tabs  defaultValue="gallery">
          <Tabs.List>
            <Tabs.Tab value="gallery">Hourly</Tabs.Tab>
            <Tabs.Tab value="messages">Distance</Tabs.Tab>
            <Tabs.Tab value="settings">Flat Rate</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="gallery">
            <Flex>
              
            </Flex>
          </Tabs.Panel>

          <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>

          <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
        </Tabs>
      </Center>
      
    </>
  );
};

export default HomeSection;
