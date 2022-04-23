import Card from "./components/Card";
import Search from "./components/Search";
import UserContextProvider from "./contexts/UserContext";


function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <div className="top">
          <h1>devfinder</h1>
          <h3>LIGHT</h3>
        </div>
        <Search />
        <Card />
      </div>
    </UserContextProvider>

    
    
  );
}

export default App;
