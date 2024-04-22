import '../assets/css/App.css';
import Body from '../Components/Layout/Body/Body.jsx';
import Footer from '../Components/Layout/Footer/Footer.jsx';
import Header from '../Components/Layout/Header/Header.jsx';
import InnerBody from '../Components/Layout/Body/InnerBody.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <InnerBody />
      <Footer />
    </div>
  );
}

export default App;
