import mainNavbar from "../MainPage/mainNavbar"

interface galleryProps{
  ArtName:string;
  CreationDate:string;
  Price:number;
  ArtImage:string;
  Ratings:string;
  Description:string;

}
const mainPage : React.FC = (props)=> {
  return (
    <div>
      <div>
      props.map((items)=> {
        <p>galleryProps.ArtName</p>
        <p>galleryProps.CreationDate</p>
        <p>galleryProps.Price</p>
        <p>galleryProps.ArtImage</p>
        <p>galleryProps.ArtImage</p>
        <p>galleryProps.Ratings</p>
        <p>galleryProps.Description</p>
      })
      </div>
    </div>
   
  )
}
export default mainPage;