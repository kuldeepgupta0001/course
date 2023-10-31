import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Request = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  return (
    <Container h="95vh">
      <VStack h={"full"} justifyContent={"center"} spacing="12">
        <Heading textTransform={"uppercase"} children="Request New Course" />
        <form style={{ width: "100%" }}>
          <Box my={"4"}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="abcd"
              type={"text"}
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={"4"}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="abcd@gmail.com"
              type={"email"}
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={"4"}>
            <FormLabel htmlFor="course" children="Course" />
            <Textarea
              required
              id="course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              placeholder="Explain the Course...."
              focusBorderColor="yellow.500"
            />
          </Box>

          <Button my={"4"} colorScheme={"yellow"} type="submit">
            Send Mail
          </Button>
          <Box my={"4"}>
            See Available Courses!{" "}
            <Link to={"/courses"}>
              <Button colorScheme={"yellow"} variant="link">
                Click Here
              </Button>
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};
export default Request;
