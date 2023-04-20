var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

var movieURL =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=fb02461a36052d23db17c429eeb29513&language=ko-KR&page=1&region=KR";

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
    for (let i=0; i<results.length; i++) {
      if(i==0){
        let imgURL = "https://image.tmdb.org/t/p/w500" + results[i].poster_path;
        $(".test1").append(
          `<a href="./index2.html?id=${results[i].id}"><img src="${imgURL}"></a>`
        );
      }
      if(i==1){
        let imgURL = "https://image.tmdb.org/t/p/w500" + results[i].poster_path;
        $(".test2").append(
          `<a href="./index2.html?id=${results[i].id}"><img src="${imgURL}"></a>`
        );
      }
      if(i==2){
        let imgURL = "https://image.tmdb.org/t/p/w500" + results[i].poster_path;
        $(".test3").append(
          `<a href="./index2.html?id=${results[i].id}"><img src="${imgURL}"></a>`
        );
      }
      
      
      
    }
    
    // $(".test1").append(`${results[i].title}`);
    for(const result of results) {
      // console.log(result)
     
      }
      
    
    
          
          // console.log(result.title);
          // console.log(result.vote_average);
          // console.log(result.overview);
          // console.log(result.poster_path);
          // console.log(result.id);
          // }
    
  },
  error: function (request, status, error) {
    console.log("code:" + request.status);
    console.log("message:" + request.responseText);
    console.log("error:" + error);
  },
});
