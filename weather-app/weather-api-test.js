import { WeatherAPI } from "./weather-api.js";

function testConstructURL(){

  const weatherAPIObj = new WeatherAPI();

  weatherAPIObj.constructURL("France");

}

async function testinvokeURL(){

  const weatherAPIObj = new WeatherAPI();

  weatherAPIObj.constructURL("England");
  
  const  responseJson = await weatherAPIObj.invokeURL();
  console.log(responseJson);

}

//testConstructURL();

testinvokeURL();
