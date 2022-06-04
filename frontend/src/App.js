import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/auth" />
        </Routes>
      </main>
    </>
  );
}

export default App;
