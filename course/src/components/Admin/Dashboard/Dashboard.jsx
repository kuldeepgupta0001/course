import {
  Box,
  Grid,
  Heading,
  HStack,
  Progress,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { RiArrowDownLine, RiArrowUpLine } from "react-icons/ri";
import cursor from "../../../assets/images/cursor.png";
import Sidebar from "../Sidebar";
// import { DoughnutChart, LineChart } from "./Chart";

const Databox = ({ title, qty, qtyPercentage, profit }) => (
  <Box
    w={["full", "20%"]}
    boxShadow={"-2px 0 10px rgba(107,70,193,0.5)"}
    p="8"
    borderRadius={"lg"}
  >
    <Text children={title} />

    <HStack spacing={"6"}>
      <Text fontSize={"2xl"} fontWeight="bold" children={qty} />

      <HStack>
        <Text children={`${qtyPercentage}%`} />
        {profit ? (
          <RiArrowUpLine color="green" />
        ) : (
          <RiArrowDownLine color="red" />
        )}
      </HStack>
    </HStack>
    <Text opacity={0.6} children={"Since Last Month"} />
  </Box>
);

const Bar = ({ title, value, profit }) => (
  <Box py="4" px={["0", "20"]}>
    <Heading size="sm" children={title} mb="2" />

    <HStack w="full" alignItems={"center"}>
      <Text children={profit ? "0%" : `-${value}%`} />

      <Progress w="full" value={profit ? value : 0} colorScheme="purple" />
      <Text children={`${value > 100 ? value : 100}%`} />
    </HStack>
  </Box>
);

const Dashboard = () => {
  return (
    <Grid
      css={{
        cursor: `url(${cursor}), default`,
      }}
      minH={"100vh"}
      templateColumns={["1fr", "5fr 1fr"]}
    >
      <Box boxSizing="border-box" py="16" px={["4", "0"]}>
        {/* <Text
          textAlign={"center"}
          opacity={0.5}
          children={`Last change was on ${
            String(new Date(stats[11].createdAt)).split("G")[0]
          }`}
        /> */}
      </Box>

      <Sidebar />
    </Grid>
  );
};

export default Dashboard;
