import { Box, Flex, Image, Text, Title } from "@mantine/core";
import React from "react";

const OurApp = () => {
  return (
    <Flex gap={80} p={40}>
      <Image radius='10' w='500px' src="/img/appsection.png" />
      <Box>
        <Text c="secondary.0">Our App</Text>
        <Title mt={10} c='primary.0' size="h2">ONE APP, <br /> MILLIONS OF USERS</Title>
        <Text mt={10}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          inventore accusantium dolorem? Nostrum aperiam dolorum eum harum
          doloremque iste quod?
        </Text>
        <Image mt={20} style={{cursor:"pointer"}} w={400} src='img/playstore.png'/>
      </Box>
    </Flex>
  );
};

export default OurApp;
