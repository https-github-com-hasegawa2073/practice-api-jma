function fetchInfo() {
  fetch('https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (wheather) {
      console.log(wheather);
    });
}
fetchInfo();
