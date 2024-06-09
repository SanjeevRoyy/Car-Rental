import {
  Box,
  Button,
  Group,
  Image,
  Text,
  Title,
  Card,
  Badge,
} from "@mantine/core";

import React from "react";

const Vehicles = () => {
  const carData = [
    {
      name: "Toyota Crown 2023",
      image: "img/car3.jpg",
      rating: 5.0,
      seats: 3,
      fuel: "Diesel",
      mileage: "15k",
      ac: true,
    },
    {
      name: "Grand Hilander Hybrid",
      image: "img/car4.jpg",
      rating: 5.0,
      seats: 3,
      fuel: "Diesel",
      mileage: "15k",
      ac: true,
    },
    {
      name: "Corolla Civic Hybrid",
      image: "img/car5.jpg",
      rating: 5.0,
      seats: 3,
      fuel: "Diesel",
      mileage: "15k",
      ac: true,
    },
    {
      name: "Honda Accord 2024",
      image: "img/car6.png",
      rating: 4.8,
      seats: 5,
      fuel: "Petrol",
      mileage: "10k",
      ac: true,
    },
    {
      name: "Ford Mustang 2022",
      image: "img/car7.png",
      rating: 4.7,
      seats: 4,
      fuel: "Petrol",
      mileage: "8k",
      ac: true,
    },
    {
        name: "Honda City Hybrid",
        image: "img/car2.jpg",
        rating: 5.0,
        seats: 3,
        fuel: "Diesel",
        mileage: "15k",
        ac: true,
      },
  ];

  function CarCard({ car }) {
    return (
      <Card mt={50} shadow="sm" padding="lg">
        <Card.Section>
          <Image src={car.image} height={160} alt={car.name} />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: 10 }}>
          <Title size='h3' c='primary.0' weight={500}>{car.name}</Title>
          <Badge color="pink" variant="light">
            {car.rating} ⭐
          </Badge>
        </Group>

        <Text size="sm" c="dimmed">
          {car.seats} Seats • {car.fuel} • {car.mileage} • AC:{" "}
          {car.ac ? "Yes" : "No"}
        </Text>

        <Button
        radius="md"
          variant="light"
          color="white"
          w='130'
          bg="secondary.0"
          fullWidth
          style={{ marginTop: 14 }}
        >
          Rent Now
        </Button>
      </Card>
    );
  }

  return (
    <Box p={40}>
      <Text c="secondary.0">Our Vehicles</Text>
      <Group mt={10} justify="space-between">
        <Title size="h2" c="primary.0">
          EXPLORE OUR TOP DEAL{" "}
        </Title>
        <Button bg="secondary.0">See All Vehicles</Button>
      </Group>
      <Box>
        <div style={{ display: "flex", justifyContent:"space-between", gap: "20px", flexWrap: "wrap" }}>
          {carData.map((car) => (
            <CarCard  key={car.name} car={car} />
          ))}
        </div>
      </Box>
    </Box>
  );
};

export default Vehicles;
