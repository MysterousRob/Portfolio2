import '../assets/css/App.css';
import Footer from '../Components/Layout/Footer/Footer.jsx';
import Header from '../Components/Layout/Header/Header.jsx';
import Body from '../Components/Layout/Body/Body.jsx';
// import ProgressBars from '../Components/Layout/Body/ProgressBars.jsx';

function App() {
  return (
    <div className="App">
      <Header /> 
      {/* <ProgressBars  /> */}
      <Body />
     
      <Footer />
    </div>
  );
}

export default App;
