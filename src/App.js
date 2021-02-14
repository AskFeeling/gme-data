import React from "react";
import InfoBar from "./components/InfoBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormWrapper from "./components/FormWrapper";
import "./App.css";

function App() {
  return (
      <div className="wrapper">
        <div className="info">
          <InfoBar />
        </div>
        <div className="form">
          <ToastContainer />
          <FormWrapper />
        </div>
      </div>
  );
}

export default App;
