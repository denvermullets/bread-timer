import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Timer: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);
  const [customTime, setCustomTime] = useState("");

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const padTo2Digits = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  const convertMsToHM = (milliseconds: number) => {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;
    hours = hours % 24;

    return (
      padTo2Digits(hours) +
      ":" +
      padTo2Digits(minutes) +
      ":" +
      padTo2Digits(seconds)
    );
  };

  return (
    <Container
      marginTop={20}
      maxW="md"
      py={{ base: "0", sm: "8" }}
      px={{ base: "4", sm: "10" }}
      bg={useBreakpointValue({ base: "transparent", sm: "white" })}
      boxShadow={{ base: "none", sm: "xl" }}
      borderRadius={{ base: "none", sm: "xl" }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={useBreakpointValue({ base: "xs", md: "sm" })}>
              Bread Timer
            </Heading>
            <Text color="muted">Time to harvest that bread</Text>
          </Stack>
        </Stack>
        <Stack spacing="6">
          <Stack spacing="5">
            <FormControl>
              <FormLabel htmlFor="text">Project</FormLabel>
              <Input
                id="project"
                placeholder="Project"
                type="text"
                // onChange={handleEmailChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="time">Time</FormLabel>
              <Input
                id="time"
                placeholder="00:00:00"
                type="text"
                onChange={() => setCustomTime("e")}
                value={time ? convertMsToHM(time) : ""}
              />
            </FormControl>
          </Stack>
          <Stack spacing="4">
            <Button
              variant="solid"
              colorScheme="blue"
              onClick={() => setRunning(!running)}
            >
              {running ? "Stop" : "Start"}
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Timer;
