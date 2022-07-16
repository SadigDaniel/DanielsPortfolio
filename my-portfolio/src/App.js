import './App.css';
import NavigationBar from './screens/navigationBar/NavigationBar';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Header from './screens/header/Header';
import AboutMe from './screens/aboutMe/AboutMe';
import Technologies from './screens/technologies/Technologies';
import Portfolio from './screens/portfolio/Portfolio';
import ContactMe from './contactMe/ContactMe';
import PastExperince from "./screens/pastExperinces/PastExperience"
//import PastExperince from './screens/pastExperinces/PastExperince';
function App() {
  const particlesInit = async (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <div className="App">
     <NavigationBar />
     <></>
     <Header />
     <Particles 
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#212529",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              /*
              onClick: {
                enable: true,
                mode: "push",
              },
              */
              // onHover: {
              //   enable: true,
              //   mode: "repulse",
              // },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 200,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffff5f",
              distance: 150,
              enable: true,
              opacity: 0.5,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
          },
        }}
      />
      <AboutMe />
      <Technologies />
      <Portfolio />
      <PastExperince />
      <ContactMe />
      
    </div>
  );
}

export default App;
