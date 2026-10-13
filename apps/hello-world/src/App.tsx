import TitleCard from "./components/TitleCard"
import BookCard from "./components/BookCard"
import AlbumCard from "./components/MusicAlbum"
function App(){

  return(
    <>
    <div>
    <TitleCard Title="Harry Potter" PremiereDate={1999} Url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nOOhiYTAPYIA98UPEgN3VkmwjNoKfHqBThFDLC138A&s=10"/>
    <TitleCard Title="Avengers" PremiereDate={2009} Url="https://fwcdn.pl/fpo/15/15/371515/7611932_1.3.jpg"/>
    <TitleCard Title="Titanic" PremiereDate={1997} Url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsBWM10X7DV5lkHGNUlggPZAw7VMaQ53BskQ0ECyu4rv9-vqb3NayEan0&s=10"/>
    </div>

    <div>
      <BookCard Title="Zbrodnia i kara" Author="Fiodor Dostojewski" Url="https://static.profinfo.pl/storage/image/core_products/2024/6/28/9cfaf3a78e02df346cc3246a662e1b5e/admin/preview/15955B03053KS_HD.jpg.webp"/>
      <BookCard Title="Pan Tadeusz" Author="Adam Mickiewicz" Url="https://booktime.pl/img/products/18/28/05/1_max.jpg?v=1727252015"/>
      <BookCard Title="Magiczne Krzeslo" Author="noname" Url="https://a.allegroimg.com/original/1e01b5/8a8be08441f895896ccecf92bda3"/>
      
    </div>

    <div>
      <AlbumCard AlbumTitle="The eminem show" Author="Eminem" Url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0s5YwnrFnQrCS5fSdTx__nMUXk-cXG60g2ExHxvGaqA&s=10" ><span>Without me </span><span>4:30</span><br /><span>with me </span><span>5:00</span></AlbumCard>
      <AlbumCard AlbumTitle="Nevermind" Author="Nivana" Url="https://www.indieground.net/images/blog/2024/indieblog-best-album-covers-90s-11.jpg" ><span>Test1 </span><span>4:20</span><br /><span>Test2</span><span>3:00</span></AlbumCard>
    </div>

    </>
  )
}

export default App
