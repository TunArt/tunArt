import React, {useState} from "react";
import axios from "axios";

const CreateArt=()=>{
    const[artName, setArtName]= useState("")
    const[artType, setArtType]= useState("")
    const[categoryId,setCategoryId]=useState(0)
    const[price,setPrice]=useState(0)
    const[creationDate,setCreationDate]=useState("")
    const[rating,setRating]=useState(0)
    const[auction,setAuction]=useState(false)
    const[description,setDescription]=useState("")
    const[image,setImage]=useState("")
    //const[artistId,setArtistId]=useState(0)

    const cloud_name = "dwkdymju4";
    const upload_preset ="blog test image 00";

    const handleClick=async()=>{
        const {files} =document.querySelector(".app_uploadInput");
        const formData = new FormData();
    
        formData.append("file", files[0]);
        formData.append("upload_preset", upload_preset);
        const options={
          method:"POST",
          body: formData,
        };
       fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        options 
        )
        .then((res)=> res.json())
        .then((res)=> setImage(res.secure_url))
        .catch((err)=>console.log(err));
        alert("Image uploaded !");
      }
    

    const UploadInformations=()=>{
        //axios.get
        axios.put('http://localhost:3000/api/updateUser/:id', {
          artName:artName,  
          artType: artType,
          categoryId: categoryId,
          price: price,
          creationDate:creationDate,
          auction:auction,
          description:description,
          image:image
    
        })
        //window.location.reload()
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        alert("Your informations are updated successfully !");
      }

    return(
        <>
        <div>
        <form>
            <input type="text" placeholder="Art Name"></input>
        </form>
        <form>
            <input type="text" placeholder="Art Type"></input>
        </form>
        <form>
            <input type="text" placeholder="Price"></input>
        </form>
        <form>
            <input type="text" placeholder="Description"></input>
        </form>
        <form>
            <input type="text" placeholder="Art Type"></input>
        </form>
        <form>
            <input type="text" placeholder="Image"></input>
        </form>
        <form>
            <input type="text" placeholder="Creation Date"></input>
        </form>
        <form>
            <input type="text" placeholder="Auction"></input>
        </form>
        <form>
            <input type="text" placeholder="Rating"></input>
        </form>
        <div className="app">
            <input type="file" /*lang="eng"*/ className="app_uploadInput"/>
                <img style={{width:500, height:300}} src={image} className="app_uploadInput"/>
            <button onClick={handleClick}>Upload Your Image</button>
      </div>
        <button onClick={UploadInformations}>Submit Your Art's Informations</button>
        </div>
        </>
    )
}
export default CreateArt;