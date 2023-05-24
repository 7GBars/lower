import "./App.css";
import Favor from "./_assets/Hartavor.jpg";

import {Hero} from "./components/Hero/Hero";
import {Slider} from "./components/Slider/Slider";
import {BasicExample} from "./components/Navbar/HeaderNavBar";
import {services} from "./_serviceInfo/serviceInfo";

function App() {
  const servicesJSX = services.map(t => {
    return <Slider
      id={t.id}
      imageSrc={t.imageSrc}
      title={t.title}
      subtitle={t.subtitle}
      flipped={t.flipped}
      additionalInfo={t.additionalInfo}
      isListInfo={t.isListInfo}
    />
  });
  return (
    <div className="App home">
      <BasicExample/>
      <Hero imageSrc={Favor} />
      {servicesJSX}
    </div>
  );
}

export default App;
