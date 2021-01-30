import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import TableContents from "./components/TableContents";

function App() {
  return (
    <div className="App">

      <Wrapper>
        <Header />
        <TableContents/>
      </Wrapper>
      
    </div>
  );
}

export default App;
