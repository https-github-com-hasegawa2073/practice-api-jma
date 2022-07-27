async function fetchWeatherInfo(areaCode) {
  const response = await fetch(
    `https://www.jma.go.jp/bosai/forecast/data/forecast/${areaCode}.json`
  );
  const json = await response.json();
  return json;
}

(async function () {
  const tokyoAll = await fetchWeatherInfo(130000);
  const tokyoInfo = tokyoAll[1].tempAverage.areas[0];
  const areaName = tokyoInfo.area.name;
  const max = tokyoInfo.max;
  const min = tokyoInfo.min;
  console.log(`${areaName}: 最高気温${max}度 最低気温${min}度`);
})();
