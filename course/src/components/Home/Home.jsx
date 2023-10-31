import React from "react";
import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import "./home.css";
import { Link } from "react-router-dom";
import bg from "../../assets/images/bg.png";
import { CgGoogle, CgYoutube } from "react-icons/cg";
import { SiCoursera, SiUdemy } from "react-icons/si";
import { DiAws } from "react-icons/di";
import introVideo from "../../assets/videos/intro.mp4";

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={["column", "row"]}
          height="100%"
          justifyContent={["center", "space-between"]}
          alignItems="center"
          spacing={["16", "56"]}
        >
          <VStack
            width={"full"}
            alignItems={["center", "flex-end"]}
            spacing="8"
          >
            <Heading children="LEARN FROM THE EXPERTS" size={"2xl"} />
            <Text
              fontSize={"2xl"}
              fontFamily="cursive"
              textAlign={["center", "left"]}
              children="Find Valuable Content At Reasonable Price"
            />
            <Link to="/courses">
              <Button size={"lg"} colorScheme="yellow">
                Explore Now
              </Button>
            </Link>
          </VStack>

          <Image
            className="vec-gf"
            boxSize={"md"}
            src={bg}
            objectFit="contain"
          />
        </Stack>
      </div>
      <Box padding={"8"} bgColor="blackAlpha.800">
        <Heading
          textAlign={"center"}
          fontFamily="body"
          color={"yellow.400"}
          children="OUR BRANDS"
        />
        <HStack
          className="brands"
          justifyContent={"space-evenly"}
          marginTop="4"
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>

      <div className="container2">
        <video
          // autoPlay
          controls
          controlsList="nodownload nufullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>
      </div>
    </section>
  );
};

export default Home;
