import "../assets/scss/components/App.scss";
import Topbar from "./pages/Topbar";
import Menu from "./Menu";

const App = () => {
  return (
    <div id="page">
      <Topbar isOpen={true} />
      <Menu isOpen={true} />
      <div className="page__wrapper">

      </div>
    </div>
  );
};

export default App;
