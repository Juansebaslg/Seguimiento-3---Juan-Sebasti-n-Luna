import React, { useEffect, useState } from "react";
import { allNetworks } from "../functions/functions";
import {
  Heading,
  Box,
  Flex,
  Button,
  Image,
  Icon,
  Spacer,
} from "@chakra-ui/react";
import { GrBike } from "react-icons/gr";
import logo from "../assets/citybikes_logo.png";
import './Estilos.css'

const Inicio = () => {
  const [networks, setNetworks] = useState([]);
  useEffect(() => {
    allNetworks(setNetworks);
  }, []);

  return (
    <>
      <center>
        <Heading as="h1" size="lg">
          NETWORKS
        </Heading>
        <Image src={logo} width={300} m={4}></Image>
      </center>

      <div class="cards">
        {networks != null
          ? networks.map((network) => (
            <div class='card'>
              {/* Chakra UI - Modificar tarjeta */}
              <Box
                key={network.id}
                p={6}
                m='10'
                borderRadius="lg"
                width="50rem"
                bg='gray.200'
              >
                <Flex>
                  <text >
                    <strong>{network.name} </strong>
                    <Icon as={GrBike} />
                    <p>Company: {network.company}</p>
                    <p>Country: {network.location.country} </p>
                    <p>City: {network.location.city}</p>
                    <a href={`/network/stations/${network.id}`}>
                      <Button mt={2} colorScheme="Green">
                        Stations
                      </Button>
                    </a>
                  </text>
                  <Spacer />
                  <Image
                    boxSize="8rem"
                    src={`https://countryflagsapi.com/png/${network.location.country}`}
                  ></Image>
                </Flex>
              </Box>
            </div>
            ))
          : "No se encontraron networks"}
      </div>
    </>
  );
};

export default Inicio;
