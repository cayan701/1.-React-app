import './App.css';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header';
import CoreConcept from './components/CoreConcept';
import TabButtons from './components/TabButtons';

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
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButtons>Components</TabButtons>
            <TabButtons>JSX</TabButtons>
            <TabButtons>Props</TabButtons>
            <TabButtons>React State</TabButtons>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
