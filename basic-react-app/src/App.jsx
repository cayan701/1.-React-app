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

function CoreConcept(props) {
  return <li>
    <img src={props.img} alt={props.title} />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </li>
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <li>
            <CoreConcept 
              title="Component" 
              description="Here's a full tutorial of UI" 
              img={reactImg}
            />
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
