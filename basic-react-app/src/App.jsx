import './App.css';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header';

function CoreConcept(props) {
  return <li>
    <img src={props.img} alt={props.title} />
    <h1>{props.title}</h1>
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
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              img={CORE_CONCEPTS[0].image}
            />
            <CoreConcept 
              {...CORE_CONCEPTS[1]}
            />
            <CoreConcept 
              {...CORE_CONCEPTS[2]}
            />
            <CoreConcept 
              {...CORE_CONCEPTS[3]}
            />
          </li>
        </section>
      </main>
    </div>
  );
}

export default App;
