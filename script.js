let btnSearch2 = document.querySelector("#button-addon3");

const searchApi2 = btnSearch2.addEventListener("click", function () {

  let searchQuery = document.querySelector("input[type = 'search']").value.trim();
  searchQuery = searchQuery.toLowerCase().replace(' ', '_');

  const YOUTUBE_API_KEY = "AIzaSyAIqG_Rna2mkVuTMJMJzjh2yQxvgbgY5hw";

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=` + searchQuery + `&key=${YOUTUBE_API_KEY}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.querySelector(".ytplayer").src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
      console.log(data);
      console.log(url);
    })
    .catch(function (error) {
      console.log(error);
    });

});

window.addEventListener('beforeunload', () => {
  window.localStorage.clear();
});