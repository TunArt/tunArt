import React , { useState, useEffect } from 'react';
import axios from 'axios';
import { Switch } from 'antd';
import Head from 'next/head'
import styles from '../../styles/profile.module.css'

const ProfilePage = () => {
  const [user, setUser] = useState('');
  const [data,setData] = useState([])
  const [up,setUp] = useState(false)
  const [inp,setInp]=useState(false)
  const[edit,setEdit] = useState(false)
  const [add,setAdd] = useState(false)
  const [info,setInfo]=useState({name:"",phone:"",bio:""})
  const [create,setCreate] = useState({name:"",startDate:"",endDate:"",creationDate:"",price:"",description:""})
  const [imageSrc, setImageSrc] = useState( );
  const [uploadData, setUploadData] = useState();
  const [img,setImg]=useState("")
  const [rerender,setRerender]=useState(false)
  
/**
   * handleOnChange
   * @description Triggers when the file input changes (ex: when a file is selected)
   */

function handleOnChange(changeEvent:any) {
  const reader = new FileReader();

  reader.onload = function(onLoadEvent) {
    setImageSrc(onLoadEvent.target.result);
    setUploadData(undefined);
  }
  reader.readAsDataURL(changeEvent.target.files[0]);
}

/**
 * handleOnSubmit
 * @description Triggers when the main form is submitted
 */

async function handleOnSubmit(event:any) {
  event.preventDefault();

  const form = event.currentTarget;
  const fileInput:any = Array.from(form.elements).find(({name})  => name === 'file');

  const formData = new FormData();

  for ( const file of fileInput.files ) {
    formData.append('file', file);
  }

  formData.append('upload_preset', 'tunartweb');

  axios
      .post("https://api.cloudinary.com/v1_1/dk8yjc0ph/image/upload", formData)
      .then((response) => {
        console.log(response);
        console.log(response.data.secure_url);
        let imgurl = response.data.secure_url;
        setImageSrc(response.data.secure_url);
        console.log("img for the user", imgurl);
        axios
          .put(  
            user ? `http://localhost:3000/api/users/updateImgUser/${localStorage.email}` : 
            `http://localhost:3000/api/artists/updateImgArtist/${localStorage.email}`,
            {
              picture: imgurl,
            }
          )
          .then((response) => {
            console.log(response);
            setRerender(!rerender)
          });
      });
  };

  const handleChange=(e:any)=>{
    console.log(e.target.value);
    setInfo({...info,[e.target.name]:e.target.value})
}

const handleChangeCreate=(e:any)=>{
  console.log(e.target.value);
  setCreate({...create,[e.target.name]:e.target.value})
}


const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

const updateInfo = (id:any,body:any) => {
  axios
   .put(`http://localhost:3000/api/users/updateUser/${localStorage.getItem('email')}`, body)
   .then(res => {
    if (!res.data) throw Error ('access denied')
    setUp(!up);
     console.log(res.data) 
    })
    .catch(err => {
      axios.put(`http://localhost:3000/api/artists/updateArtist/${localStorage.getItem('email')}`, body)
      .then(res=>{
        setUp(!up);
      })
    })
 }


  useEffect(() => {  
    console.log(localStorage.getItem('id'));
    axios.get(`http://localhost:3000/api/users/getUser/${localStorage.email}`)     
     .then(res => {
        if (!res.data) throw Error ('access denied')
        setData(res.data);
        setUser('user')
        console.log('current user', res.data);
      })
      .catch(err => {
    axios.get(`http://localhost:3000/api/artists/getArtist/${localStorage.email}`)
        .then(res => {
        console.log("current user",res)
        setData(res.data)
        ;
        })
  });
  }, [rerender]);

  const submitForm=(body:Object)=>{
      axios.post('http://localhost:3000/api/artworks/addArtwork', body)
      .then(response=> {console.log(response)
     })
      .catch(err=> console.log(err))
      }


  return (
    <div>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
      <div id ="current"className="media align-items-center">
                    <div className="media-body ml-2 d-none d-lg-block">
                      <span className="mb-0 text-sm  font-weight-bold">{user ? data.userName : data.name}</span>
                    </div>
                  </div>
      <div className="main-contentt">
          <div className="container-fluid">
            <form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
              <div className="form-group mb-0">
              </div>
            </form>      
      </div>
    <div id ="head"className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" >
      <span className="mask bg-gradient-default opacity-8"></span>
      <div className="container-fluid d-flex align-items-center">
        <div id = "row1" className="row">
        <div className="col-lg-7 col-md-10"> 
            <h1 className="display-2 text-white">Hello {user ? data.userName : data.name} </h1>
            <p className="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects . Thank you ! </p>
            <div id ="buttons" className="flex items-center justify-center">
  <div
    className="inline-flex shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
    role="group">
    <button
      onClick={()=>{setEdit(!edit),setInp(false),setAdd(false)}}
      type="button"
      className="inline-block rounded-l bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
      data-te-ripple-init
      data-te-ripple-color="light">
      <b>Edit profile</b>
    </button>
      {user && <button
      onClick={()=>{setInp(!inp),setEdit(false),setAdd(false)}}
      type="button"
      className="inline-block bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
      data-te-ripple-init
      data-te-ripple-color="light">
      <b>Favorites</b>
    </button> }
    {!user && <> <button
      onClick={()=>{setInp(!inp),setEdit(false),setAdd(false)}}
      type="button"
      className="inline-block bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
      data-te-ripple-init
      data-te-ripple-color="light">
      <b>Posts</b>
    </button>
    <button
      onClick={()=>{setAdd(!add),setEdit(false),setInp(false)}}
      type="button"
      className="inline-block rounded-r bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
      data-te-ripple-init
      data-te-ripple-color="light">
      <b>New</b>
    </button> </>}
    
  </div>
</div>
          </div>
          <img id ="robot"alt="Image placeholder" src="https://www.pngall.com/wp-content/uploads/7/Paint-Color-PNG-HD-Image.png" />
        </div>
      </div>
    </div>  
    <div id="card1">
      {inp && <div className="card">
  <img id="ava" src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
  <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p> 
  <div className="container">
  </div>
</div> }
     </div> 
     <div>
      {add &&  <form id ="form1" className="card">
                  <div className="pl-lg-4">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label className="form-control-label" >name</label>
                          <input type="text" id="input-username" className="form-control form-control-alternative" placeholder="Username" onChange={handleChangeCreate}/>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-control-label" >startDate</label>
                          <input type="datetime-local" id="input-email" className="form-control form-control-alternative" placeholder="Email address" onChange={handleChangeCreate}/>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label className="form-control-label" >endDate</label>
                          <input type="datetime-local" id="input-first-name" className="form-control form-control-alternative" placeholder="First name" onChange={handleChangeCreate}/>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label className="form-control-label" >creation date</label>
                          <input type="date" id="input-last-name" className="form-control form-control-alternative" placeholder="Last name" onChange={handleChangeCreate}/>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label className="form-control-label" >price</label>
                          <input type="number" id="input-first-name" className="form-control form-control-alternative" placeholder="DT" onChange={handleChangeCreate}/>
                        </div>
                      </div>
                      <div className="col-lg-6">
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label className="form-control-label" ></label>
                          Sale <Switch defaultChecked onChange={onChange} /> Bid   
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-4"/>
                  <div className="pl-lg-4">
                    <div className="form-group focused">
                      <label>Description</label>
                      <textarea  className="form-control form-control-alternative" placeholder="A few words about your artwork ..." onChange={handleChangeCreate}></textarea>
                    </div>
                  </div>
                  <button
                   onClick={submitForm}
                  id ="add"
                  type="button"
                  className="inline-block rounded-l bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
                  data-te-ripple-init
                  data-te-ripple-color="light">
            <b>Add a new artwork</b>
            </button>
                </form>}
     </div> 
     
     <div>
      {edit && <div  className="container-fluid mt--7">
        <div id = "contain" className="row"> 
          <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
            <div className="card card-profile shadow">
              <div className="row justify-content-center">
                <div className="col-lg-3 order-lg-2">
                  <div className="card-profile-image">
                    <div>
                    </div>
                  <div className="card-profile-image">
                    <div >
                    <div>
<img
  alt="Image placeholder"
  src= {data ? data.picture : "https://www.w3schools.com/howto/img_avatar.png"}
  className="rounded-circle"
  onClick={() => {
    document?.getElementById("image")?.click();
  }}
/>

                    </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
              </div>
              <div className="card-body pt-0 pt-md-4">
                <div className="row">
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">  
                     
                    </div>
                  </div>
                </div>
                <div className="text-center"> 
                <div className="container mx-auto px-4">

  <main className="max-w-lg mx-auto ">
    <form className="flex flex-col space-y-4" method="post" onChange={(e) => { console.log(e.target.value); handleOnChange(e) }} onSubmit={handleOnSubmit}>
      <div className="flex items-center justify-center border-2 border-dashed border-gray-400 py-4 px-6 rounded-md">
        <input type="file" name="file" accept="image/png, image/jpg, image/gif, image/jpeg" className="hidden" id="file-input" />
        <label htmlFor="file-input" className="cursor-pointer">
          <span className="text-gray-700 font-medium">Select a file</span>
        </label>
        {imageSrc && !uploadData && (
          <button className="ml-4 py-2 px-4 bg-purple-900 text-white font-medium rounded-md hover:bg-blue-700" id="cloud">Upload Files</button>
        )}
      </div>

      {uploadData && (
        <code id="code" className="bg-gray-100 py-2 px-4 rounded-md"><pre>{JSON.stringify(uploadData, null, 2)}</pre></code>
      )}
    </form>
  </main>

</div>

                  <h3>
                  {user ? data.userName : data.name} <span className="font-weight-light"></span>
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2"></i>{user ? data.birthDate : data.birthDate}
                  </div>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2"></i>Email : {user ? data.email : data.email}
                  </div>
                  
                  <hr className="my-4"/>
                  <p>{data?.bio}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 order-xl-1">
            <div className="card bg-secondary shadow">
              <div className="card-header bg-white border-0">
                <div className="row align-items-center">
                  <div className="col-8">
                    <h3 className="mb-0">My account</h3>
                  </div>
                  <div className="col-4 text-right">
                    <a href="#!" className="btn btn-sm btn-primary">Settings</a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <form>
                  <h6 className="heading-small text-muted mb-4">User information</h6>
                  <div className="pl-lg-4">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label className="form-control-label" >Username</label>
                          <input type="text" id="input-username" className="form-control form-control-alternative" placeholder="Username" onChange={handleChange}/>
                        </div>
                      </div>
                      {/* <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-control-label" >Email address</label>
                          <input type="email" id="input-email" className="form-control form-control-alternative" placeholder="Email address" onChange={handleChange}/>
                        </div>
                      </div> */}
                    </div>
                    <div className="row">
                      {/* <div className="col-lg-6">
                        <div className="form-group focused">
                          <label className="form-control-label" >Password</label>
                          <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder="First name" onChange={handleChange}/>
                        </div>
                      </div> */}
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label className="form-control-label" >PhoneNumber</label>
                          <input type="text" id="input-last-name" className="form-control form-control-alternative" placeholder="Last name" onChange={handleChange}/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-4"/>
                  <h6 className="heading-small text-muted mb-4">About me</h6>
                  <div className="pl-lg-4">
                    <div className="form-group focused">
                      <label>About Me</label>
                      <textarea  className="form-control form-control-alternative" placeholder="A few words about you ..." onChange={handleChange}></textarea>
                    </div>
                    <button className="btn btn-sm btn-primary " onClick ={updateInfo}>Update ✔</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> }
      </div>

<img id ="footer1" alt="Image placeholder" src="https://www.kindpng.com/picc/m/748-7485176_art-gallery-logo-png-transparent-png.png"/>

   
    
  </div>
</div> 

)}

export default ProfilePage;