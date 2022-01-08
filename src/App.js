import './App.css';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import WordBox from './components/WordBox/WordBox.jsx';
import WordList from './components/WordList/WordList.jsx';
import WordCard from './components/WordCard/WordCard.jsx';
import words from "./words.js";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <section>
          <WordCard
            english={words[1].english}
            transcription={words[1].transcription}
            translation={words[1].russian}
          >
          </WordCard>
        </section>
        <section>
          <WordBox />
          <WordBox />
          <WordBox />
        </section>
        <section>
          <WordList />
        </section>
      </div>
      <Footer />

    </div>
  );
}

export default App;
