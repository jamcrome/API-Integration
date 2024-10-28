console.log("Hello I'm Here")

const getImg = (imgSrc) => {
  document.getElementById("image_display").src = imgSrc

}

const getSwansonQuote = () => {
  fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then((response) => response.json())
      .then((data) => {
        document.getElementById("quote_display").innerText = `"${data[0]}"`;
        // console.log(data)
        let swanson_image = "https://miro.medium.com/v2/resize:fit:2732/format:webp/1*9MRUVwkjDwUh9bgOjtnuuQ.jpeg"
        getImg(swanson_image)
      })
      .catch((error) => {
        console.log("No good:", error);
      });
}

const getKanyeQuote = () => {
  fetch("https://api.kanye.rest")
    .then((response) => response.json())
      .then((data) => {
        document.getElementById("quote_display").innerText = `"${data['quote']}"`;
        // console.log(data)
        let kanye_image = "https://www.thepopculture.co/cdn/shop/articles/kanye-west-quotes-funny.jpg?v=1577055928&width=1000"
        getImg(kanye_image)
      })
      .catch((error) => {
        console.log("No good:", error);
      });
}

// const getInspirationalQuote = () => {
//   fetch("https://api.quotable.io/quotes/random")
//     .then((response) => response.json())
//       .then((data) => {
//         document.getElementById("quote_display").innerText = `"${data['quote']}"`;
//         console.log(data)
//         // let kanye_image = "https://www.thepopculture.co/cdn/shop/articles/kanye-west-quotes-funny.jpg?v=1577055928&width=1000"
//         // getImg(kanye_image)
//       })
//       .catch((error) => {
//         console.log("No good:", error);
//       });
// }


