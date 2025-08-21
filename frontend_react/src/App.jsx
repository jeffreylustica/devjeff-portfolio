import "./App.scss";
import { useEffect, useState } from "react";
import {
  About,
  Contact,
  Home,
  Skills,
  Timeline,
  Works,
  Footer,
} from "./containers";
import { Navbar, SideNav } from "./components";
import { fetchDocuments } from "./components/services/apiService";

const App = () => {
  const [personalDetails, setPersonalDetails] = useState([]);
  const [resume, setResume] = useState({});

  useEffect(() => {
    const fetchPersonalDetails = async () => {
      try {
        const res = await fetchDocuments("personaldetails");
        const data = await res.json();
        setPersonalDetails(data.documents);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchResume = async () => {
      try {
        const res = await fetchDocuments("files");
        const data = await res.json();
        const resume = data.documents.find((file) => file.name === "resume");
        setResume(resume);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPersonalDetails();
    fetchResume();
  }, []);

  return (
    <div className="app">
      <Navbar personalDetails={personalDetails} resume={resume} />
      <SideNav personalDetails={personalDetails} resume={resume} />
      <Footer coprClass="desktop-class" />

      <Home />
      <About resume={resume} />
      <Works />
      <Skills />
      <Timeline />
      <Contact data={personalDetails} />
    </div>
  );
};

export default App;
