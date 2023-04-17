// 1. 전체 url 가져오기

const currentURL = location.href;

console.log(currentURL);

// 2. 쿼리스트링 파라메터 가져오기

const urlobj = new URL(currentURL);

//파라메터에 대한 정보가 들어있다.
const params = urlobj.searchParams;
console.log(params);

// 파라메터의 값을 구한다 params.get('변수명')
const q = params.get("q");
const krcity = params.get("krcity");

console.log(q, krcity);

// 3.  ajax 이용해서 전체 날씨 정보 얻어오기
function getCityWeather(q) {
  var temp = {};
  var urlAPI =
    "https://api.openweathermap.org/data/2.5/weather?appid=300b8b73f4cbaa4954807b91e39db9ce&units=metric&lang=kr";
  urlAPI += "&q=" + q;

  $.ajax({
    type: "GET",
    url: urlAPI,
    dataType: "json",
    async: false, //동기상태 -> ajax은 기본적으로 비동기
    success: function (mingyu) {
      const maintemp = mingyu.main.temp;
      const icon = mingyu.weather[0].icon;
      const feelslike = mingyu.main.feels_like;
      const humidity = mingyu.main.humidity;
      const windspeed = mingyu.wind.speed;
      const clouds = mingyu.clouds.all;

      temp.feelslike = feelslike;
      temp.maintemp = maintemp;
      temp.humidity = humidity;
      temp.windspeed = windspeed;
      temp.icon = icon;
      temp.clouds = clouds;
    },
    error: function (request, status, error) {
      console.log("code:" + request.status);
      console.log("message:" + request.responseText);
      console.log("error:" + error);
    },
  });

  return temp;

  // main.temp(현재온도) feelslike(체감온도) main.humidity(습도) wind.speed(풍속) clouds.all(흐림)
}

const Main = getCityWeather(q);
const iconURL = "https://openweathermap.org/img/wn/" + Main.icon + ".png";
// 4. 데이터 바인딩 작업

$("#krcity").text(`${krcity} `);
$("#maintemp").text(`현재온도:${Main.maintemp} ℃`);
$("#feelslike").text(`체감온도:${Main.feelslike} ℃`);
$("#humidity").text(`습도:${Main.humidity} `);
$("#windspeed").text(`풍속:${Main.windspeed} `);
$("#clouds").text(`흐림지수:${Main.clouds} `);
$("#icon").attr("src", iconURL);

$(".region-title").text(`${krcity} 상세날씨`);

// 단 부트스트랩 card를 이용해서 출력하세요.(card를 여러개 만드셔도 됩니다.)
// 카드 출력 결과: 한글 지역명, 날씨 아이콘,
//  그룹내 기상조건("description": "구름조금") 온도, 체감온도, 습도, 풍속, 흐림
// => 결과에 대한 설명은 https://openweathermap.org/current#parameter 참고
