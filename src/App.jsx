import './App.css'
import './i18n';
import About from './components/About/About'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Tools from './components/Tools/Tools';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <section className='App'>
      <Header/>
      <Hero/>
      <About/>
      <Tools/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </section>
  )
}

export default App
