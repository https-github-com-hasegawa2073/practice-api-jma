const areaCode = '130000'; //エリアコード(東京:130000)

function fetchWeatherInfo(area) {
  fetch(`https://www.jma.go.jp/bosai/forecast/data/forecast/${area}.json`)
    .then(function (response) {
      if (!response.ok) {
        return Promise.reject(
          new Error(`${response.status}: ${response.statusText}`)
        );
      } else {
        return response.json();
      }
    })
    .catch(function (error) {
      console.error(error);
    });
}

fetchWeatherInfo(areaCode);
