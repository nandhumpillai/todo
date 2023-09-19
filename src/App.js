import './App.css';
import MainPage from './components/MainPage/MainPage';
// import axios from 'axios'

function App() {
  // const [array, setArray] = useState([]);
  return (
    <div className="App">
      <MainPage></MainPage>
      {/* <button onClick={()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
          console.log(response.data);
          setArray(response.data)
        })
      }}>click here</button>
      {
        array.map((data)=>{
          return(
            <h1 style={{color: "white"}}>{data.title}</h1>
          )
        })
      } */}
      
    </div>
  );
}

export default App;
