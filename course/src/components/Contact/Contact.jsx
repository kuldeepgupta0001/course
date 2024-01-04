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
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { contactUs } from "../../redux/actions/other";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const {
    loading,
    error,
    message: stateMessage,
  } = useSelector((state) => state.other);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(contactUs(name, email, message));
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (stateMessage) {
      toast.success(stateMessage);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, stateMessage]);
  return (
    <Container h="95vh">
      <VStack h={"full"} justifyContent={"center"} spacing="12">
        <Heading textTransform={"uppercase"} children="Contact Us" />
        <form onSubmit={submitHandler} style={{ width: "100%" }}>
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
            <FormLabel htmlFor="message" children="Message" />
            <Textarea
              required
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message...."
              focusBorderColor="yellow.500"
            />
          </Box>

          <Button
            isLoading={loading}
            my={"4"}
            colorScheme={"yellow"}
            type="submit"
          >
            Send Mail
          </Button>
          <Box my={"4"}>
            Request for a course?{" "}
            <Link to={"/request"}>
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

export default Contact;
