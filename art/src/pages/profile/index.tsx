import React , { useState, useEffect } from 'react';
import axios from 'axios';
import { Switch } from 'antd';
import Head from 'next/head'
import styles from '../../styles/profile.module.css'

const ProfilePage = () => {
  const [user, setUser] = useState('');
  const [data,setData] = useState([])
  const [inp,setInp]=useState(false)
  const[edit,setEdit] = useState(false)
  const [add,setAdd] = useState(false)
  const [info,setInfo]=useState({name:"",phone:"",bio:""})
  const [create,setCreate] = useState({name:"",startDate:"",endDate:"",creationDate:"",image:"",price:"",description:"",})
  const [imageSrc, setImageSrc] = useState( );
  const [uploadData, setUploadData] = useState();
  const [rerender,setRerender]=useState(false)
  const [auction,setauction]=useState(true)
  const [artWorks,setArtWorks]=useState([])
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
console.log(info)

const handleChangeCreate=(e:any)=>{
  console.log(e.target.value);
  setCreate({...create,[e.target.name]:e.target.value})
}


const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
  setauction(checked)
};
console.log(create)

const updateInfo = () => {
  user ? 
  axios
   .put(`http://localhost:3000/api/users/updateUser/${localStorage.getItem('email')}`, 
      {
        userName:info.name,
        phoneNumber:info.phone
      })
   .then(res => {
     console.log(res.data) 
setRerender(!rerender)   
 }) 
     :
      axios.put(`http://localhost:3000/api/artists/updateArtist/${localStorage.getItem('email')}`, 
         {
          name:info.name,
          phoneNumber:info.phone,
          bio :info.bio
         })
      .then(res=>{
        console.log(res.data)
        setRerender(!rerender)
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
        }).then(async()=>{
          const res=await axios.get(`http://localhost:3000/api/artists/getArtists/${localStorage.id}`)
          console.log(res.data)
          setArtWorks((res.data[0]).artworks)
          
        })
  });
  }, [rerender]);
  console.log(artWorks)

  const submitForm=()=>{
    try {
      console.log("image in the submit form", create.image)
      const formData = new FormData();
      formData.append("file",create.image)
      console.log(formData.get('file'));
      axios
        .post("https://api.cloudinary.com/v1_1/dp54rkywx/image/upload?upload_preset=clzrszf3", formData)
        .then((response) => {
          console.log(response);
          console.log(response.data.secure_url);
          let imgurl = response.data.secure_url;
          setImageSrc(response.data.secure_url);
          console.log("img for the user", imgurl)
          axios.post(`http://localhost:3000/api/artworks/addArtwork/${localStorage.id}`,  {
            name:create.name,
            startDate:create.startDate,
            endDate:create.endDate,
            creationDate:create.creationDate,
            price:create.price,
            description:create.description,
            auction:auction ? 1:0,
            image:imgurl
          })
          .then(response=> {console.log(response)})
        }).catch(err => console.log(err))
    } catch {
      alert("Sorry, the request failed. Please try again.")
    }
   
  }
      
  return (
    <div id = "bodyy">
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
      <div className="main-contentt">
      <div id ="bg" className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" >
      <span className="mask bg-gradient-default opacity-8"></span>
      <div className="container-fluid d-flex align-items-center">
      <div id = "row1" className="row">
        <div id="homee" className="col-lg-7 col-md-10">
          <div id ="avatar2">
          <span className="avatar avatar-sm rounded-circle">
                  <img id="avaaa" src={data.picture ? data.picture : "https://www.w3schools.com/howto/img_avatar.png"} alt="Avatar"/>
                </span>          
                  <span id ="userN" className="mb-0 text-sm  font-weight-bold">{user ? data.userName : data.name}</span>
            </div>   
            <h1 id = "hello" className="display-2 text-white">Hello {user ? data.userName : data.name} </h1>
            <p id="hello1" className="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects . Thank you ! </p>
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
        </div>
      </div>
    </div> 
    <div >
        {inp && <div id="card3" className="card flex flex-col items-center justify-center rounded-lg shadow-md hover:shadow-lg transition-shadow p-4">
  <img 
    id="ava" 
    src={data.picture ? data.picture : "https://www.w3schools.com/howto/img_avatar.png"} 
    alt="Avatar" 
    className="rounded-full w-24 h-24 object-cover object-center mb-4 hover:opacity-75 transition-opacity" 
  />
  <h4 id="text" className="text-2xl font-bold text-gray-800 hover:text-blue-500 transition-colors"><b>{data?.name}</b></h4>
  <div className="container mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 mt-8">
    {artWorks.map((e, i) => {
      return (
        <div key={i} className="relative rounded-lg overflow-hidden">
          <img src={e.image} alt="" className="w-full h-full object-cover object-center rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-110" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white font-bold text-lg hover:text-blue-500 transition-colors bg-black bg-opacity-50">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
              Check
            </button>
          </div>
        </div>
      );
    })}
  </div>
</div>


 }
     </div> 
     <div>
      {add &&  <form id ="form1" className="card">
                  <div id ="form2" className="pl-lg-4">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label className="form-control-label" >name</label>
                          <input type="text" name="name" id="input-username" className="form-control form-control-alternative" placeholder="Username" onChange={handleChangeCreate}/>
                        </div>
                      </div>
                      <div  id="start" className="col-lg-6">
                        <div className="form-group">
                          <label  className="form-control-label" >startDate</label>
                          <input name="startDate" type="datetime-local" id="input-email" className="form-control form-control-alternative" placeholder="Email address" onChange={handleChangeCreate}/>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label className="form-control-label" >end Date</label>
                          <input  name = "endDate"type="datetime-local" id="input-first-name" className="form-control form-control-alternative" placeholder="First name" onChange={handleChangeCreate}/>
                        </div>
                      </div>
                      <div id="creation" className="col-lg-6">
                        <div className="form-group focused">
                          <label className="form-control-label" >creation Date</label>
                          <input  name="creationDate" type="date" id="input-last-name" className="form-control form-control-alternative" placeholder="Last name" onChange={handleChangeCreate}/>
                        </div>
                        <div id="iiimg" >
                          <input type="file" name="image" title='file' id=""  onChange={(e)=>{
                            create.image=e.target.files[0]
                          }}/>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div id="pricee" className="col-lg-6">
                        <div className="form-group focused">
                          <label className="form-control-label" >price</label>
                          <input name='price' type="number" id="input-first-name" className="form-control form-control-alternative" placeholder="DT" onChange={handleChangeCreate}/>
                        </div>
                      </div>
                        <div id="switch"  className="form-group focused">
                          <label className="form-control-label" ></label>
                          Sale <Switch defaultChecked onChange={onChange} /> Bid   
                        </div>

                        <div  className="pl-lg-4">
                    <div id="desc" className="form-group focused">
                      <label>Description</label>
                      <textarea name='description' className="form-control form-control-alternative" placeholder="A few words about your artwork ..." onChange={handleChangeCreate}></textarea>
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
                    </div>
                  </div>          
                </form>}
     </div>  
     <div>
      {edit && <div  className="container-fluid mt--7">
        <div id = "contain" className="row"> 
        <div  className="container mx-auto px-4">
            <div id="sha" className="card card-profile shadow">
              <div className="row justify-content-center">
                  <div className="card-profile-image">
                   
                     <img
                    alt="Image placeholder" 
                    id="round"
                    src= {data.picture   ? data.picture : "https://www.w3schools.com/howto/img_avatar.png"}
                    className="rounded-circle"
                      />
                  </div>
              </div>
              <div id="shaa" className="card-body pt-0 pt-md-4">
                  <form  method="post" onChange={(e) => { console.log(e.target.value); handleOnChange(e) }} onSubmit={handleOnSubmit}>
      <div id="up" className="flex items-center justify-center border-2 border-dashed border-gray-400 py-4 px-6 rounded-md">
        <input type="file" name="file" accept="image/png, image/jpg, image/gif, image/jpeg" className="hidden" id="file-input" />
        <label htmlFor="file-input" className="cursor-pointer">
          <span className="text-gray-700 font-medium">Select a file</span>
        </label>
        {imageSrc && !uploadData && (
          <button className="ml-4 py-2 px-4 bg-purple-900 text-white font-medium rounded-md hover:bg-blue-700" id="cloud">Upload Files</button>
        )}
      

      {uploadData && (
        <code id="code" className="bg-gray-100 py-2 px-4 rounded-md"><pre>{JSON.stringify(uploadData, null, 2)}</pre></code>
      )}
</div>
  <div id="naame" className="mt-8">
    <h3 id="user5" className="text-3xl font-bold">
      <b>{user ? data.userName : data.name}</b>
      <span className="font-weight-light"></span>
    </h3>
    <div className="h5 font-weight-400 flex items-center">
      <i className="ni location_pin mr-2"></i>
      age : <b>{user ? data.birthDate : data.birthDate} years old</b>
    </div>
    <div className="h5 font-weight-400 flex items-center">
      <i className="ni location_pin mr-2"></i>
      phone : <b>{user ? data.phoneNumber : data.phoneNumber }</b> 
    </div>
    <div className="h5 font-weight-400 flex items-center">
      <i className="ni location_pin mr-2"></i>
      Email : <b>{user ? data.email : data.email}</b>
    </div>
    <hr className="my-4" />
    <p>{data?.bio}</p>
  </div>
  </form>
                  </div>
                  </div>
  <div  className="col-xl-8 order-xl-1 mt-8">
    <div id="settingss" className="card bg-secondary shadow">
      <div  className="card-header bg-white border-0">
        <div className="row align-items-center">
          <div  className="col-8">
            <h3 className="mb-0">My account</h3>
          </div>
          <div id ="set" className="col-4 text-right">
            <a href="#!" className="btn btn-sm btn-primary">Settings</a>
          </div>
        </div>
      </div>
      <div className="card-body">
        <form  onSubmit={updateInfo}>
          <h6 className="heading-small text-muted mb-4">User information</h6>
          <div className="pl-lg-4">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group focused">
                  <label className="form-control-label">Username</label>
                  <input
                    name="name"
                    type="text"
                    id="Enter your name .."
                    className="form-control form-control-alternative"
                    placeholder="Enter your name .."
                    onChange={handleChange}
                  />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label className="form-control-label" >PhoneNumber</label>
                          <input name = "phone" type="text" id="Enter your phone .." className="form-control form-control-alternative" placeholder="Enter your phoneNumber .. " onChange={handleChange}/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-4"/>
                  <h6 className="heading-small text-muted mb-4">About me</h6>
                  <div className="pl-lg-4">
                    <div className="form-group focused">
                      <label>About Me</label>
                      <textarea  name = "bio" className="form-control form-control-alternative" placeholder="A few words about you ..." onChange={handleChange}></textarea>
                    </div>             
                 </div>
                </form>
              </div>
              <button onClick = {updateInfo} id ="but1" className="bg-blue-400 hover:bg-purple-300 text-white font-bold py- 2 px-4 shadow-md">
update your account 
</button>
            </div>
            </div>
           
            </div>
          </div>
          </div>
       }
      </div>

{/* <img id ="footer1" alt="Image placeholder" src="https://www.kindpng.com/picc/m/748-7485176_art-gallery-logo-png-transparent-png.png"/> */}

   
    
  </div>
</div> 

)}

export default ProfilePage;