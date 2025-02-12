import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Service from "./components/Service";
import Content from "./components/Content";
import Stat from "./components/Stat";
import RowMedium from "./components/RowMedium";
import RowColumn from "./components/RowColumn";
import {servicesData,statsData,recentWorkData} from './data/data'
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Content />
      <Service services={servicesData ||[] }/>
      <Stat stats={statsData}/>
      <hr />
      <div className="row column">
        <h3>Our Recent Work</h3>
      </div>
      <RowMedium works={recentWorkData}/>
      <hr/>
      <RowColumn />
      <Footer />
    </div>
  );
}

export default App;
