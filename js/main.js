const pathCode = '130000'; //エリアコード(東京:130000)

function fetchWeatherInfo() {
  fetch(`https://www.jma.go.jp/bosai/forecast/data/forecast/${pathCode}.json`)
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
fetchWeatherInfo();
