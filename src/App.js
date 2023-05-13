import "./App.css";
import Favor from "./assets/Hartavor.jpg";
import service0 from "./assets/service0.jpg";
import service1 from "./assets/service1.jpg"
import service3 from "./assets/service3.jpg"
import test1 from "./assets/servise4.jpg"
import {Hero} from "./components/Hero/Hero";
import {Slider} from "./components/Slider/Slider";
import {BasicExample} from "./components/Navbar/HeaderNavBar";

function App() {
  const navbarLinks = [
    { url: "#", title: "Home" },
    { url: "#", title: "Trips" },
    { url: "#", title: "Rewards" },
  ];

  return (
    <div className="App">
      <BasicExample/>
      <Hero imageSrc={Favor} />
      <Slider
        imageSrc={service0}
        title={"Be an explorer."}
        subtitle={
          "Our platform offers a wide variety of unique travel locations!"
        }
      />
      <Slider
        imageSrc={service1}
        title={"Memories for a lifetime."}
        subtitle={"Your dream vacation is only a few clicks away."}
        flipped={true}
      />
      <Slider
        imageSrc={service3}
        title={"Memories for a lifetime."}
        subtitle={"Your dream vacation is only a few clicks away."}

      />
      <Slider
        imageSrc={test1}
        title={"Memories for a lifetime."}
        subtitle={"Your dream vacation is only a few clicks away."}
        flipped={true}
      />
    </div>
  );
}

export default App;
