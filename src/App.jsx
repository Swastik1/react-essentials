import reactImage from "./assets/react-core-concepts.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];
const genRandomInt = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

const Header = () => {
  const descriptions = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descriptions} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;