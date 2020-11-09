import React from "react";
import { usePlayer } from "../../context/usePlayer";

import { Container } from "./styles";

function Menu() {
  const { isSidebarOpen, setIsSidebarOpen } = usePlayer();

  return (
    <Container>
      <h1>Waves</h1>

      <button type="button" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        {isSidebarOpen ? "Close Library" : "Open Library"}
      </button>
    </Container>
  );
}

export default Menu;
