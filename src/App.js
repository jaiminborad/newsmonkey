import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import News from "./components/news";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                key="businessca"
                pageSize={6}
                country="ca"
                categorie="business"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                key="businessin"
                pageSize={6}
                country="in"
                categorie="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pageSize={6}
                country="in"
                categorie="entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                key="general"
                pageSize={6}
                country="in"
                categorie="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News key="health" pageSize={6} country="in" categorie="health" />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                key="science"
                pageSize={6}
                country="in"
                categorie="science"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                pageSize={6}
                country="in"
                categorie="technology"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
