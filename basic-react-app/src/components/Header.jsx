import reactImg from '../assets/react.svg';

const reactDescriptions = ['fundatmental', 'core', 'random'];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    const description = reactDescriptions[getRandomInt(2)];
  
    return (
      <header>
        <img src={reactImg} alt="hey" />
        <h1>New Website</h1>
        <p> {description} This is a random website</p>
      </header>
    );
}