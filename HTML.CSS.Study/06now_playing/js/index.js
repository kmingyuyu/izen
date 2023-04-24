// 현재 상영중 
var movieURL =
"https://api.themoviedb.org/3/movie/now_playing?api_key=fb02461a36052d23db17c429eeb29513&language=ko-KR&page=1&region=KR";
let now = 0;

$.ajax({
    type: "GET",
    url: movieURL,
    dataType: "json",
    async: false,
    success: function (data) {
      // console.log(data); //data:모든정보
      // console.log(results); //정보내에 상세정보
      // title = 제목
      // vote_average =평점
      // overview =영화설명
      // poster_path =포스터
      const results = data.results;
      for (const result of results) {
        let imgURL = "https://image.tmdb.org/t/p/w500" + result.poster_path;
        now++;
        $(".playnow" + now).append(`<img src="${imgURL}">`); //상영중 박스포스터
        $(".play-title" + now).append(`${result.title}`); //상영중 박스제목
        $(".play-voteaverage" + now ).append( `<i class="fa-solid fa-star" style="color: #e4e82c;"></i>&nbsp;${result.vote_average}`); //상영중 박스 평점
        $(".play-releasedate" + now).append(`${result.release_date}`)
      }
    },
    error: function (request, status, error) {
      console.log("code:" + request.status);
      console.log("message:" + request.responseText);
      console.log("error:" + error);
    },
  });
  

  // 개봉 예정
  let up = 0;
  var movieURLsecond =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=fb02461a36052d23db17c429eeb29513&language=ko-KR&page=1&region=KR"
  $.ajax({
    type: "GET",
    url: movieURLsecond,
    dataType: "json",
    async: false, 
    success: function(data) {
      const results = data.results;
      for(const result of results) {
        up++;
        let imgbackdrop = "https://image.tmdb.org/t/p/w500" + result.backdrop_path;
        $(".test" + up).attr("src", imgbackdrop); //개봉예정 슬라이드 백드랍
        $(".sw-title" + up).append(`${result.title}`); //개봉예정 박스제목
        $(".sw-releasedate" + up).append(`${result.release_date}`);  //개봉예정 날짜
      }
  
    },
    error: function(request, status, error) {   
          console.log("code:" + request.status);
          console.log("message:" + request.responseText);
          console.log("error:" + error);
    }
  });

//  더보기
  $(document).ready(function(){
    $('.blind').click(function(){
      if($('.blind').hasClass('blind')){
         $('.blind').css('display', 'none')
         $('.hidesetup').css('display', 'block');
      }
    });
  });







// $(document).ready(function(){
//   var navHeight = $(".h-Nav").height(); 
//   //navHeight 의 높이를 구하기

//   $(".hide-nav").hide();
//   //스크롤시 나타날 객체 미리 숨기기

//   $(window).scroll(function(){  // 윈도우 스크롤 기능 작동
//       var rollIt = $(this).scrollTop() >= navHeight; 
// // 스크롤의 정도가 navHeight 의 값을 넘었을 때 == 윈도우 스크롤의 값이 navHeight 의 높이와 같거나 크다

// /*
// scrollTop 은 윈도우에서 스크롤의 위치가 가장 상위에 있다는 의미로 해석
// 스크롤의 위치가 화면 아래일수록 == scrollTop 의 값이 커짐
// */
//   if(rollIt){ 
//   //윈도우 스크롤 기능의 값이 navHeight 의 높이와 같거나 크면
//           $(".hide-nav").show().css({"position":"fixed"});
//       }
//       else{
//           $(".hide-nav").hide();
//       }
//   });
  
// });