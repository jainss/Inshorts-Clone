import "./App.css";
import Header from "./components/Header";
import InfoHeader from "./components/InfoHeader";
import { Box, styled } from "@mui/material";

const Container = styled(Box)`
    width: 70%;
    margin: 40px auto 0 auto;
`;



function App() {
  return (
    <Box>
      <Header />
      <Container>
        <InfoHeader />
      </Container>
    </Box>
  );
}

export default App;
