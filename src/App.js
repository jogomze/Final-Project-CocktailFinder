import logo from './logo.svg';
import './App.css';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/aboutus";
import ContactUs from "./pages/contactus";

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({signOut}) {
  return (
    <div className="App"><button className="App" onClick={signOut}>Sign out</button>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contact" element={<ContactUs />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </div>
)
}

export default withAuthenticator(App);
