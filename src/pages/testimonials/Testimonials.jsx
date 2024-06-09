import { Box, Flex, Text, Title } from "@mantine/core";
import React from "react";

const Testimonials = () => {
  return (
    <Flex align='center'> 
      <Box p={40} bg="smokewhite">
        <Text c="secondary.0">Our Testimonials</Text>
        <Title size="h2" c="primary.0">
          WHAT PEOPLE SAY ABOUT OUR COMPANY
        </Title>

        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
          delectus ipsa optio architecto error. Sequi repellendus dicta vel
          dignissimos molestias?
        </Text>
      </Box>
      <Box w='40%'>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nisi a
          laboriosam provident sunt quae, sed commodi vel in ab tempora ipsa
          pariatur id minima. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Alias nisi a laboriosam provident sunt quae, sed commodi vel in
          ab tempora ipsa pariatur id minima.
        </Text>
      </Box>
      <Box w='40%'>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nisi a
          laboriosam provident sunt quae, sed commodi vel in ab tempora ipsa
          pariatur id minima. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Alias nisi a laboriosam provident sunt quae, sed commodi vel in
          ab tempora ipsa pariatur id minima.
        </Text>
      </Box>
    </Flex>
  );
};

export default Testimonials;
