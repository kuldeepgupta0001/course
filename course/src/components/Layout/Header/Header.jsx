import React from "react";
import { ColorModeSwitcher } from "../../../ColorModeSwitcher";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { RiDashboardFill, RiLoginBoxLine, RiMenu5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const LinkButton = ({ url = "/", title = "Home" }, onClose) => (
  <Link onClick={onClose} to={url}>
    <Button variant={"ghost"}>{title}</Button>
  </Link>
);

const Header = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  const isAuthenticated = true;

  const user = {
    role: "admin",
  };

  const logoutHandler = () => {
    console.log("LOgout");
    onClose();
  };

  return (
    <>
      <ColorModeSwitcher />
      <Button
        onClick={onOpen}
        colorScheme={"yellow"}
        width="12"
        height={"12"}
        rounded="full"
        top={"6"}
        left={"6"}
      >
        <RiMenu5Fill />
      </Button>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter={"blur(2.5px)"} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={"1px"}>COURSE BUNDLER</DrawerHeader>
          <DrawerBody>
            <VStack spacing={"4"} alignItems={"flex-start"}>
              <LinkButton url="/" title="Home" />
              <LinkButton url="/courses" title="Browse All Courses" />
              <LinkButton url="/request" title="Request a Course" />
              <LinkButton url="/contact" title="Contact US" />
              <LinkButton url="/about" title="About" />

              <HStack
                justifyContent={"space-evenly"}
                position="absolute"
                bottom={"2rem"}
                width="80%"
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link onClick={onClose} to="/profile">
                          <Button variant={"ghost"} colorScheme={"yellow"}>
                            Profile
                          </Button>
                        </Link>
                        <Button variant={"ghost"} onClick={logoutHandler}>
                          <RiLoginBoxLine />
                          Logout
                        </Button>
                      </HStack>

                      {user && user.role === "admin" && (
                        <Link onClick={onClose} to="/admin/dashboard">
                          <Button colorScheme="purple" variant={"ghost"}>
                            <RiDashboardFill style={{ margin: "4px" }} />
                            Dashboard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link onClick={onClose} to="/login">
                      <Button colorScheme={"yellow"}>Login</Button>
                    </Link>
                    <p>OR</p>
                    <Link onClick={onClose} to="/register">
                      <Button colorScheme={"yellow"}>Register</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
