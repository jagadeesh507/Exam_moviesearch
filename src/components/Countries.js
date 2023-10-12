import { Box, chakra, Image, Flex, SimpleGrid, Heading } from "@chakra-ui/react";
import React from "react";

function Countries({ val }) {
  return (
    <Box
      w="xs"
      bg="white"
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      maxW="250px"
    >
      <Image
        w="full"
        h={48}
        fit="cover"
        src={val.flag}
        alt="avatar"
      />

        <chakra.p textAlign={"center"}  mb="4px" fontWeight={"bold"} fontSize={"xl"} pt="10px">
            {val.name}
        </chakra.p>

    <Flex direction={"column"} alignItems={"left"} ml="12px">
   <chakra.p><chakra.span fontWeight={"semibold"}>Population: </chakra.span>{val.population}</chakra.p>
   <chakra.p><chakra.span fontWeight={"semibold"}>Region: </chakra.span>{val.region}</chakra.p>
   <chakra.p><chakra.span fontWeight={"semibold"}>Capital: </chakra.span>{val.capital}</chakra.p>
    </Flex>
    </Box>
  );
}

export default Countries;
