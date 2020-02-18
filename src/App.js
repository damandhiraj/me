import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import MyAppBar from "./components/MyAppBar"

function App() {
  return (
    <React.Fragment>
      <MyAppBar/>
      <Container>
          <Box my={2}>
            {[...new Array(1000)]
              .map(
                () => `Portfolio Site`
              )
              .join("\n")}
          </Box>
        </Container>
      </React.Fragment>
  );
}

export default App;
