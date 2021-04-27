import logo from './logo.svg';
import './App.css';
import {Container} from "react-bootstrap";
import Navbart from "./components/Navbar";
import Explorez from "./components/Explorez";
import Part3 from "./components/Part3";



import Partt from "./components/Part2";


const environs= [
  {name:'Tunis' ,imge:'https://a0.muscache.com/im/pictures/31e445ed-8b69-477b-aefd-d04dae6d0bb1.jpg?im_q=medq&amp;im_w=720'},
  {name:'Marsa' ,imge:'https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&amp;im_w=720'},
  {name:'Kelibia' ,imge:'https://a0.muscache.com/im/pictures/7253e011-7c22-48fd-b75d-d0da35372397.jpg?im_q=medq&amp;im_w=720'},
  {name:'Yasmone Hammamet' ,imge:'https://a0.muscache.com/im/pictures/52e8083e-2de2-446d-a860-534eab250541.jpg?im_q=medq&amp;im_w=720'},
  {name:'Hammamet Sud' ,imge:'https://a0.muscache.com/im/pictures/20e74de0-0eb8-4fca-afb8-b111875acdf5.jpg?im_q=medq&amp;im_w=720'},
  {name:'Hergla' ,imge:'https://a0.muscache.com/im/pictures/e639b7ab-aee3-48ee-9743-216684a51319.jpg?im_q=medq&amp;im_w=720'},
  {name:'Korba' ,imge:'https://a0.muscache.com/im/pictures/ca3737ef-0faf-46ba-b055-b4a2d99e2cea.jpg?im_q=medq&amp;im_w=720'},
  {name:'Aghir' ,imge:'https://a0.muscache.com/im/pictures/585d1e53-e2e1-4baf-a34e-36301dd1e2da.jpg?im_q=medq&amp;im_w=720'},
  
]


const partout = [
  {imgp:'https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=720',desc:'Escapades en pleine nature'},
  {imgp:'https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=720',desc:'Des logements uniques'},
  {imgp:'https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=720',desc:'Logements entiers'},
  {imgp:'https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=720',desc:'Animaux de compagnie acceptés'}
]

function App() {
  return (
    <div className="App">
      <Navbart />

      {/***************/}
      <div className="Container">
      <h5>Explorez les environs</h5> 
      <div className="grapart1"><Explorez  explor ={environs} /></div>
      
      </div>
     

       {/***************/}
         {/***************/}
      <div className="Container">
      <h1>Chez vous, partout</h1> 
      <div className="grapart2">
        <Partt tt={partout} /></div>
      
      </div>
     

       {/***************/}

<Part3 />
{/***************/}

    </div>
  );
}

export default App;
