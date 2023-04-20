import logo from './logo.svg';
import './App.css';

function App() {

  const cats = [
    {
      name:"meow",
      email:"meow@nyu.edu"
  }
  
  ]



  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
      <p className="text-gray-500 text-lg">
        {cats && cats.map((cat)=>(
          <div className="text-3xl text-slate-50 drop-shadow-md font-bold mb-5">{cat.name} </div>

        ))
        }
      </p>
    </div>
  );
}

export default App;
