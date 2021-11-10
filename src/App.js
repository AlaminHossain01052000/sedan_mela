
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import ExploreNow from './Pages/Explore/ExploreNow/ExploreNow';
import Home from './Pages/Home/Home/Home';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/explore">
            <ExploreNow></ExploreNow>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

// const ourSedans = [
//   {
//     name: "BMW 2 Series Sedan",
//     engine: "4Cylinder/1998cc",
//     gear: 7,
//     gearType: "Auto",
//     fuelType: "Petrol/Diesel",
//     price: 70,
//     img: "https://www.autosbangla.com/images/bmw/bmw-2-series-sedan-img.jpg"
//   },
//   {
//     name: "Mercedes AMG E43 4MATIC",
//     engine: "4Cylinder/2996cc",
//     gear: 9,
//     gearType: "Auto",
//     fuelType: "Petrol",
//     price: 105,
//     img: "https://www.autosbangla.com/images/mercedes-benz/MERCEDES-BENZ-E-CLASS-AMG-E43-4MATIC-IMG.jpg"
//   },
//   {
//     name: "Audi A3",
//     engine: "4Cylinder/1984cc",
//     gear: 6,
//     gearType: "Manual",
//     fuelType: "Petrol",
//     price: 50,
//     img: "https://www.autosbangla.com/images/audi/audi-a3.jpg"
//   },
//   {
//     name: "BMW 5 Series Sedan",
//     engine: "6Cylinder/2993cc",
//     gear: 8,
//     gearType: "Auto",
//     fuelType: "Petrol-Electric",
//     price: 135,
//     img: "https://www.autosbangla.com/images/bmw/bmw-5-series-sedan.jpg"
//   },
//   {
//     name: "Mercedes AMG E63 4MATIC",
//     engine: "8Cylinder/3982cc",
//     gear: 9,
//     gearType: "Auto",
//     fuelType: "Petrol",
//     price: 110,
//     img: "https://www.autosbangla.com/images/mercedes-benz/MERCEDES-BENZ-E-CLASS-AMG-E63-4MATIC-IMG.jpg"
//   },
//   {
//     name: "Audi A4",
//     engine: "4Cylinder/1984cc",
//     gear: 7,
//     gearType: "Auto",
//     fuelType: "Petrol",
//     price: 75,
//     img: "https://www.autosbangla.com/images/audi/audi-a4.jpg"
//   },
//   {
//     name: "BMW 7 Series Sedan",
//     engine: "6Cylinder/2993cc",
//     gear: 8,
//     gearType: "Auto",
//     fuelType: "Petrol-Electric",
//     price: 256,
//     img: "https://www.autosbangla.com/images/bmw/bmw-7-series-sedan.jpg"
//   },
//   {
//     name: "Mercedes AMG E63 S 4MATIC",
//     engine: "8Cylinder/3982cc",
//     gear: 9,
//     gearType: "Auto",
//     fuelType: "Petrol",
//     price: 115,
//     img: "https://www.autosbangla.com/images/mercedes-benz/MERCEDES-BENZ-E%20CLASS-AMG-E43-S-4MATIC-IMG.jpg"
//   },
//   {
//     name: "Audi A5",
//     engine: "4Cylinder/1968cc",
//     gear: 7,
//     gearType: "Auto",
//     fuelType: "Diesel",
//     price: 95,
//     img: "https://www.autosbangla.com/images/audi/audi-a5.jpg"
//   },
//   {
//     name: "Audi A6",
//     engine: "4Cylinder/1968cc",
//     gear: 7,
//     gearType: "Auto",
//     fuelType: "Petrol-Hybrid",
//     price: 106,
//     img: "https://www.autosbangla.com/images/audi/audi-a6.jpg"
//   },
//   {
//     name: "Toyoto Camry",
//     engine: "4Cylinder/2486cc",
//     gear: 8,
//     gearType: "Auto",
//     fuelType: "Petrol-Electric",
//     price: 92,
//     img: "https://www.autosbangla.com/images/toyota/toyota-camry.jpg"
//   },
//   {
//     name: "Suzuki Artiga",
//     engine: "4Cylinder/1462cc",
//     gear: 5,
//     gearType: "Auto",
//     fuelType: "Petrol-Hybrid",
//     price: 25,
//     img: "https://www.autosbangla.com/images/suzuki/suzuki-artiga.jpg"
//   }

// ]
// console.log(JSON.stringify(ourSedans));