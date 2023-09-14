const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors({
    origin: '*'
}));

app.get("/videocatalog", function (req, res) {
  res.json([
    {
      "video_ID": "2001",
      "contentType": "TV Series",
      "genre": "Crime Drama",
      "image_id":  "https://m.media-amazon.com/images/M/MV5BYTc3OGUwZTUtOWVjZi00NWQwLThjYmQtZjMwYzE4ZDE3MjkzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX680_.jpg",
      "title": "Breaking Bad"
  },
    {
      "video_ID":  "2002",
      "contentType":  "TV Series",
      "genre": "Comedy Drama",
      "image_id":  "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSpUkHaqfWzj4D5wcEQjIZgC-P3A1VGUK4FGR0xT3KPdvGYAsiz",
      "title":  "The Office"
  }
 ]);
});

app.listen(3000, function (req, res) {
  console.log("Server is running at port 3000");
});
