 var myDiv = document.querySelector('div');
 var requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=Energodar';

 requestURL = requestURL+'&appid=3392d12d6de425c0dce79fd95e7364ac';
 var request = new XMLHttpRequest();
 request.open('GET', requestURL);
 request.responseType = 'json';
 request.send();
 request.onload = function()
 {
     cityweather_json = request.response;
    showWeather(cityweather_json);
 }

 function showWeather(jsonObj)
 {
    var d = new Date();
    var myArticle = document.createElement('article');
    var myH1 = document.createElement('h1');
    var myH2 = document.createElement('h3');
    myH1.textContent=jsonObj.name;
    myH2.textContent=d.toDateString(d);
    myArticle.appendChild(myH2);
    myArticle.appendChild(myH1); 

    myDiv.appendChild(myArticle);

    var myArticle = document.createElement('article');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');

    myPara1.textContent = `temperature: ${Math.round(jsonObj.main.temp_max-273.16)} C°... ${Math.round(jsonObj.main.temp_min-273.16)} C°`;
    myPara2.textContent = `pressure: ${jsonObj.main.pressure} mbar`;
    myPara3.textContent = `wind speed: ${jsonObj.wind.speed} mph`;

    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myDiv.appendChild(myArticle);
 }
