import './App.css';

const reactDescriptions = ['fundatmental', 'core', 'random'];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[getRandomInt(2)];

  return (
    <header>
      <img src="src/assets/react.svg" alt="hey" />
      <h1>New Website</h1>
      <p> {description} This is a random website</p>
    </header>
  );
}

function App() {
  return <Header />
}

export default App
