import './styles/css/App.css'
import PopUp from './components/PopUp'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <PopUp />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;