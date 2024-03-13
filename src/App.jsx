import { useState } from "react";
import "./App.css";
function App() {
  const [value, setValue] = useState("");
  const [newData, setNewdata] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let api = `https://api.unsplash.com/search/photos?page=1&query=${value}&client_id=rqNcsjJoLWrVIHIyoIBUladVIjksAPBOGGdKAcqt4hE`;
    const getData = async (api) => {
      const req = await fetch(api);
      const data = await req.json();
      setNewdata(data.results);
    };
    getData(api);
  };
  return (
    <div className="app">
      <div className="container">
        <h3>Enter a word !</h3>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => {
              setValue(e.target.value);
            }}
            type="text"
            placeholder="Enter the name..."
          />
          <button>Search</button>
        </form>
        <div className="cards">
          {newData.map((item) => {
            return <img key={item.id} src={item.urls.small} alt="" />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
