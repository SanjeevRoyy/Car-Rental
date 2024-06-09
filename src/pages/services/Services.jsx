import { Box, Button, Flex, Image, Paper, Text, Title } from "@mantine/core";
import React from "react";

const Services = () => {
  return (
    <>
      <Box mt={40} ta="center">
        <Text c="secondary.0">Our Services</Text>
        <Title c="primary.0" size="h2">
          OUR BEST SERVICES FOR YOU
        </Title>
      </Box>
      <Flex gap={20} mt={30} justify="center">
        <Paper bg="whitesmoke" withBorder w={370} p={20}>
          <Image src="img/onlinebooking.jpg" />

          <Title mt={10} c="primary.0" size="h3">
            ONLINE BOOKING
          </Title>
          <Text mt={10}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, vero
            omnis consequuntur voluptates, similique, quaerat mollitia ut
            corporis corrupti accusantium cupiditate atque eveniet iste odit?
          </Text>

          <Button mt={10} bg="secondary.0">
            See More
          </Button>
        </Paper>
        <Paper withBorder w={370} p={20}>
          <Image radius={15} src="img/citytransport.jpg" />
          <Title mt={10} c="primary.0" size="h3">
            CITY TRANSPORT
          </Title>
          <Text mt={10}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, vero
            omnis consequuntur voluptates, similique, quaerat mollitia ut
            corporis corrupti accusantium cupiditate atque eveniet iste odit?
          </Text>
          <Button mt={10} bg="secondary.0">
            See More
          </Button>
        </Paper>
        <Paper withBorder w={370} p={20}>
          <Image radius={15} src="img/specialevents.jpg" />
          <Title mt={10} c="primary.0" size="h3">
            SPECIAL EVENTS
          </Title>
          <Text mt={10}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, vero
            omnis consequuntur voluptates, similique, quaerat mollitia ut
            corporis corrupti accusantium cupiditate atque eveniet iste odit?
          </Text>
          <Button mt={10} bg="secondary.0">
            See More
          </Button>
        </Paper>
      </Flex>
    </>
  );
};

export default Services;
