import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";
// import animals from "./data";
// const [cat, dog] = animals;
// const {name: catName, sound: catSound} = cat;
// const {name: dogName, sound: dogSound} = dog;
// console.log (dogSound);

console.log(cars);

const [honda, tesla] = cars;
const {
  hondaModel,
  colorsByPopularity: hondaColorsByPopularity,
  speedStats: hondaSpeedStats
} = honda;
const {
  teslaModel,
  colorsByPopularity: teslaColorsByPopularity,
  speedStats: teslaSpeedStats
} = tesla;
const [hondaTopColor, hondaSecondColo] = hondaColorsByPopularity;
const [teslaTopColor, teslaSecondColo] = teslaColorsByPopularity;
const {
  topSpeed: hondaTopSpeed,
  zeroToSixty: hondaZeroToSixty
} = hondaSpeedStats;
const {
  topSpeed: teslaTopSpeed,
  zeroToSixty: teslaZeroToSixty
} = teslaSpeedStats;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColor}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColor}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
