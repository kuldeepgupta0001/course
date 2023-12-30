import React, { useEffect, useState } from "react";
import { Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { resetPassword } from "../../../redux/actions/profile";

const ResetPassword = () => {
  const [password, setPassword] = useState("");

  const params = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, message, error } = useSelector((state) => state.profile);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(resetPassword(params.token, password));
    navigate("/login");
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  return (
    <Container py={"16"} height={"78.7vh"}>
      <form onSubmit={submitHandler}>
        <Heading
          children="Forget Password"
          my="16"
          textTransform={"uppercase"}
          textAlign={["center", "left"]}
        />
        <VStack spacing={"8"}>
          <Input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New Password"
            type={"password"}
            focusBorderColor="yellow.500"
          />
          <Button
            isLoading={loading}
            type="submit"
            w={"full"}
            colorScheme="yellow"
          >
            Reset Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ResetPassword;
