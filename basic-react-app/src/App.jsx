import { useState } from 'react';

import './App.css';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header';
import CoreConcept from './components/CoreConcept';
import TabButtons from './components/TabButtons';
import React from 'react';

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState('Please select a button');

  function handleClick(selectedButton) {
    //selectedButton => 'components', 'JSX', 'props', 'state';

    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  } 

  console.log('App started');

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <ul>
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
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButtons onSelect={() => handleClick('components')}>Components</TabButtons>
            <TabButtons onSelect={() => handleClick('JSX')}>JSX</TabButtons>
            <TabButtons onSelect={() => handleClick('Props')}>Props</TabButtons>
            <TabButtons onSelect={() => handleClick('State')}>React State</TabButtons>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
