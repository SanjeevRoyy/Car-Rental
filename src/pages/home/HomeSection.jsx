import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Group,
  Image,
  Space,
  Tabs,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdUpdate } from "react-icons/md";

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
        <Button.Group bg="whitesmoke" mt={10}>
          <Button c="primary.0" variant="default">
            Hourly
          </Button>
          <Button c="primary.0" variant="default">
            Distance
          </Button>
          <Button c="primary.0" variant="default">
            Flat Rate
          </Button>
        </Button.Group>
      </Center>
      <Center>
        <Flex gap={20} p={20} align="center">
          <Box>
            <Group gap={2}>
              <FaLocationDot color="#211455" />
              <Text> Pick Up address</Text>
            </Group>
            <TextInput mt={5} placeholder="Enter Pick Up Address" />
          </Box>
          <Divider c="primary.0" orientation="vertical" />
          <Box>
            <Group gap={2}>
              <FaLocationDot color="#211455" />
              <Text> Drop Up address</Text>
            </Group>
            <TextInput mt={5} placeholder="Enter Drop Up Address" />
          </Box>
          <Divider orientation="vertical" />
          <Box>
            <Group gap={2}>
              <MdUpdate  color="#211455"/>
              <Text> Pick Up Date</Text>
            </Group>
            <TextInput mt={5} placeholder="Enter Pick Up Data" />
          </Box>
          <Divider orientation="vertical" />
          <Box>
            <Group gap={2}>
              <MdUpdate color="#211455" />
              <Text> Pick Up Time</Text>
            </Group>
            <TextInput mt={5} placeholder="Enter Pick Up Time" />
          </Box>
          <Button bg="secondary.0">Search</Button>
        </Flex>
      </Center>

      {/* <Box h={"20vh"}></Box> */}
    </>
  );
};

export default HomeSection;
