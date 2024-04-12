import NavigationBars from "./components/NavigationBars";
import model from "./model";

const App = () => {
  return (
    <main>
      <NavigationBars {...model} />
    </main>
  );
};

export default App;
