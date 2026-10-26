import MovieCard, {type MovieProps} from "./components/MovieCard"
import BookCard, {type BookProps} from "./components/BookCard"
import AlbumCard, {type AlbumProps} from "./components/AlbumCard"
import Section from "./components/Section"
function App(){

  const movies : MovieProps[] = [
    { Title : "Harry Potter", PremiereDate : 2001, Rating: 7, Url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nOOhiYTAPYIA98UPEgN3VkmwjNoKfHqBThFDLC138A&s=10" },
    { Title : "Avengers", PremiereDate: 2012, Rating: 8, Url: "https://fwcdn.pl/fpo/15/15/371515/7611932_1.3.jpg"},
    { Title: "Titanic", PremiereDate: 1997, Rating: 7, Url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsBWM10X7DV5lkHGNUlggPZAw7VMaQ53BskQ0ECyu4rv9-vqb3NayEan0&s=10"},
    { Title: "Matrix", PremiereDate: 1999, Rating: 9, Url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-H4cFJbf0RlzMw3xzTv10kB6gdhBkoUTKxG-cxebRsQ&s=10"},
    { Title: "Interstellar", PremiereDate: 2014, Rating: 9, Url: "https://fwcdn.pl/fpo/56/29/375629/7670122_2.8.webp"},
    { Title: "Diuna", PremiereDate: 2021, Rating: 3, Url: "https://fwcdn.pl/fpo/94/76/469476/8030930_1.3.jpg"}
  ]

  movies.sort((a,b) => a.Title.localeCompare(b.Title))
  const moviesAfter2010 = movies.filter((movie) => movie.PremiereDate > 2010)


  const books : BookProps[] =[
    { Title: "Zbrodnia i kara", ReleaseYear: 1999,Url:"https://static.profinfo.pl/storage/image/core_products/2024/6/28/9cfaf3a78e02df346cc3246a662e1b5e/admin/preview/15955B03053KS_HD.jpg.webp" ,Pages:360},
    { Title: "Pan Tadeusz" , ReleaseYear:1970,Url: "https://booktime.pl/img/products/18/28/05/1_max.jpg?v=1727252015",Pages:500},
    { Title: "Magiczne Krzeslo", ReleaseYear:2015,Url: "https://a.allegroimg.com/original/1e01b5/8a8be08441f895896ccecf92bda3",Pages:215}
  ]

  books.sort((a,b) => a.Title.localeCompare(b.Title))
  const booksByYear = [...books].sort((a,b) => b.ReleaseYear - a.ReleaseYear)

  const albums : AlbumProps[] =[
    { AlbumTitle: "Eminem Show", 
      Author: "Eminem",
      Url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0s5YwnrFnQrCS5fSdTx__nMUXk-cXG60g2ExHxvGaqA&s=10",
      Genre:"HipHop",
      ReleaseYear:2002,
      Songs: [
        {Title:"White America", Duration: 324},
        {Title:"Business", Duration: 251},
        {Title:"Cleanin' Out My Closet", Duration: 297},
        {Title:"Square Dance", Duration: 323},
        {Title:"Without Me", Duration: 290},
      ]
    },
    { AlbumTitle: "Nevermind", 
      Author: "Nirvana",
      Url: "https://www.indieground.net/images/blog/2024/indieblog-best-album-covers-90s-11.jpg",
      Genre:"Rock",
      ReleaseYear:1991,
      Songs: [
        {Title:"Smells Like Teen Spirit", Duration: 301},
        {Title:"In Bloom", Duration: 254},
        {Title:"Come as You Are", Duration: 219},
      ]
    },
    { AlbumTitle: "Demo",
      Author: "Nieznany ",
      Url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW0t64KQXmUbJ0eB-eUrNsAlXEkwqNbu-W438btEEm5w&s=10",
      Genre:"Pop",
      ReleaseYear:2026,
      Songs: []
    }
  ]

  albums.sort((a,b) => a.AlbumTitle.localeCompare(b.AlbumTitle))
  const longestAlbum = [...albums].sort((a, b) => b.Songs.length - a.Songs.length)[0]





  return(
    <>
    <Section Title="Movies">
    {
      movies.map((movie) => {
        return(
        <MovieCard key={movie.Title} Title={movie.Title} PremiereDate={movie.PremiereDate} Url={movie.Url} Rating={movie.Rating}/>
      )
    }) 
    }
    </Section>

    <Section Title="Movies post 2010">
    {
      moviesAfter2010.map((movie) => {
        return(
        <MovieCard key={movie.Title} Title={movie.Title} PremiereDate={movie.PremiereDate} Url={movie.Url} Rating={movie.Rating}/>
      )
    }) 
    }
    
    </Section>

    <Section Title="Books">
    {
      books.map((book) => {
        return(
        <BookCard key={book.Title} Title={book.Title} ReleaseYear={book.ReleaseYear} Pages={book.Pages} Url={book.Url}/>
      )
    }) 
    }
    </Section>

    <Section Title="Books by release date">
    {
      booksByYear.map((book) => {
        return(
        <BookCard key={book.Title} Title={book.Title} ReleaseYear={book.ReleaseYear} Pages={book.Pages} Url={book.Url}/>
      )
    }) 
    }
    </Section>

    <Section Title="Albums">
    {
      albums.map((album) => {
        return(
          <AlbumCard key={album.AlbumTitle} AlbumTitle={album.AlbumTitle} Author={album.Author} Url={album.Url} Genre={album.Genre} ReleaseYear={album.ReleaseYear} Songs={album.Songs}/>
      )
    }) 
    }
    </Section>

    <Section Title="Longest Album">

      <AlbumCard AlbumTitle={longestAlbum.AlbumTitle} Author={longestAlbum.Author} Url={longestAlbum.Url} Genre={longestAlbum.Genre} ReleaseYear={longestAlbum.ReleaseYear} Songs={longestAlbum.Songs}/>
    </Section>

    </>
  )
}

export default App
