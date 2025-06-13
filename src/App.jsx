import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/common/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Games from './components/sections/Games';
import Contact from './components/sections/Contact';
import './components/common/Header.css';
import './components/sections/Hero.css';
import './components/sections/About.css';
import './components/sections/Projects.css';
import './components/sections/Games.css';
import './components/sections/Contact.css';
import './components/games/TicTacToe.css';
import './components/games/SnakeGame.css';
import './components/games/MemoryGame.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Games />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
