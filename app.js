console.log("Let's get this party started!");

let $searchInput = $("#search-input").val();

$("#search-btn").click(async function getGif($searchInput) {
  const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: $searchInput,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
    },
  });
  console.log(res.data);
});

