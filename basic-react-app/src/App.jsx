import './App.css';
import reactImg from './assets/react.svg';

const reactDescriptions = ['fundatmental', 'core', 'random'];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[getRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="hey" />
      <h1>New Website</h1>
      <p> {description} This is a random website</p>
    </header>
  );
}

function CoreConcept() {
  return <li>
    <img src="..." alt="..." />
    <h3>Title</h3>
    <p>Description</p>
  </li>
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <li>
            <CoreConcept />
            <CoreConcept />
            <CoreConcept />
            <CoreConcept />
          </li>
        </section>
      </main>
    </div>
  );
}

export default App
