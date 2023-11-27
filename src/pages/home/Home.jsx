import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignIn from "../../components/authentication/SignIn";
import SingUp from "../../components/authentication/SingUp";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) navigate("/chat");
  }, []);
  return (
    <Container maxW="xl" centerContent>
      <Box
        className="bg-indigo-700 shadow-[0px_4px_23px_rgba(0,0,0,0.25)] border border-indigo-700"
        d="flex"
        justifyContent="center"
        p={3}
        // bg="gray.600"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <h4 className="font-semibold text-center text-2xl">Live chat</h4>
      </Box>
      <Box
        className="border border-indigo-800"
        bg="gray.800"
        w="100%"
        p={4}
        borderRadius="lg"
        borderWidth="1px"
      >
        <Tabs className="" isFitted variant="soft-rounded">
          <TabList className="" mb="1em">
            <Tab>Login</Tab>
            <Tab>Register</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SignIn />{" "}
            </TabPanel>
            <TabPanel>
              <SingUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Home;
