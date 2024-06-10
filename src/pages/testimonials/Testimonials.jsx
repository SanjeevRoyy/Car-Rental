import {
  Box,
  Button,
  Flex,
  Group,
  Image,
  Paper,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonials = () => {
  return (
    <Flex p={40} gap={40} bg="whitesmoke" justify="center">
      <Box w="65%">
        <Text c="secondary.0">Our Testimonials</Text>
        <Title mt={10} size="h2" c="primary.0">
          WHAT PEOPLE SAY ABOUT OUR COMPANY
        </Title>

        <Text mt={20}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
          delectus ipsa optio architecto error. Sequi repellendus dicta vel
          dignissimos molestias?
        </Text>
        <Group mt={25}>
          <Button variant="default">
            <FaArrowLeft />
          </Button>
          <Button bg="secondary.0">
            <FaArrowRight />
          </Button>
        </Group>
      </Box>
      <Paper radius={20} w="45%" p={20} bg="white">
        <Image w={20} src='icons/quotes.png'/>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nisi a
          laboriosam provident sunt quae, sed commodi vel in ab tempora ipsa
          pariatur id minima. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Alias nisi a laboriosam provident sunt quae, sed commodi vel in
          ab tempora ipsa pariatur id minima.
        </Text>
        <Image w={100} src="/icons/rating.png" />
        <Group>
          <img
            height={70}
            style={{ objectFit: "cover", borderRadius: "50%" }}
            width={70}
            src="img/user11.jpg"
          />
          <Box>
            <Text fw={500} c="primary.0">
              Marie John
            </Text>
            <Text>User</Text>
          </Box>
        </Group>
      </Paper>
      <Paper radius={20} w="45%" p={20} bg="white">
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nisi a
          laboriosam provident sunt quae, sed commodi vel in ab tempora ipsa
          pariatur id minima. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Alias nisi a laboriosam provident sunt quae, sed commodi vel in
          ab tempora ipsa pariatur id minima.
        </Text>
        <Image w={100} src="/icons/rating.png" />
        <Group>
          <img
            height={70}
            style={{ objectFit: "cover", borderRadius: "50%", objectPosition:'top' }}
            width={70}
            src="img/user12.jpg"
          />
          <Box>
            <Text fw={500} c="primary.0">
              Adam Smith
            </Text>
            <Text>User</Text>
          </Box>
        </Group>
      </Paper>
    </Flex>
  );
};

export default Testimonials;
