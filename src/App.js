import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries/Countries';


function App() {
  return (
    <div className="App">

     <Countries></Countries>
     
      
    </div>
  );
}

// function LoadCountries() {

//   const [countries,SetCountries] =useState([])

//   useEffect(()=>{
// fetch('https://restcountries.com/v3.1/all')
// .then(res =>res.json())
// .then(data => SetCountries(data))
//   },[])

//   return (
//     <div>
//       <h1>visiting countries</h1>
//       <h1>Available Countries:{countries.length}</h1>
      
      
//     </div>
//   )
// };

export default App;
