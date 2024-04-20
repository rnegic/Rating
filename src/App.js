import logo from './logo.svg';
import './App.css';
import Movielist from './Movielist'

function App() {

  const movieList = [
    { name: "Misery", rating: "7", year: "1990", img: "" },
    { name: "Иди и смотри", rating: "9", year: "1985", img: "" },
    { name: "Fall", rating: "6", year: "2022", img: "" }
  ];

  return (
    <div className="App">
      <Movielist movieList={movieList} />
    </div>
  );
}

export default App;
