import { Flex, Input, Button, chakra, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect,useRef, useState } from "react";
import Countries from "./Countries";

function Search() {
  const [countries, setCountries] = useState([]);
 const [country,setCountry]=useState("");
  const SearchCountry = async () => {
    const data = await fetch(
      " https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1709/data.json"
    );
    const res = await data.json();
    setCountries(res);
  };
  useEffect(() => {
    SearchCountry();
  },[country]);

  const handleSearch=()=>{
     setCountries(countries.filter(con=>country===""?true:con.name.toLowerCase()===country.toLowerCase()))

  }
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      mt="20px"
      direction={"column"}
    >
      <Flex direction="row" width={{ sm: "300px", md: "500px" }}>
        <Input
          type="text"
          placeholder="Search for country"
         onChange={(e)=>setCountry(e.target.value)}
         value={country}
        />
        <Button onClick={handleSearch} colorScheme="blue" color="white">
          Search
        </Button>
      </Flex>
      {countries?.length > 0 ? (
        <SimpleGrid
          pt={"20px"}
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing="40px"
        >
          {countries.map((name) => (
            <>
              <Countries key={name.name} val={name} />
            </>
          ))}
        </SimpleGrid>
      ) : (
        <Flex justifyContent={"center"} alignItems={"center"}>
          <chakra.p
            color={"red"}
            fontSize={"lg"}
            fontWeight="bold"
            fontFamily={"monospace"}
            pt={10}
          >
            country not found!
          </chakra.p>
        </Flex>
      )}
    </Flex>
  );
}

export default Search;
