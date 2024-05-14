import { useState } from 'react';

import './App.css';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header';
import CoreConcept from './components/CoreConcept';
import TabButtons from './components/TabButtons';
import React from 'react';

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState('Hey');

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  } 

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
            <TabButtons onSelect={() => handleClick('components')}>Components</TabButtons>
            <TabButtons onSelect={() => handleClick('JSX')}>JSX</TabButtons>
            <TabButtons onSelect={() => handleClick('Props')}>Props</TabButtons>
            <TabButtons onSelect={() => handleClick('State')}>React State</TabButtons>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
