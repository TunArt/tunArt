import React , { useState, useEffect } from 'react';
import axios from 'axios';
import { Switch } from 'antd';
import Head from 'next/head'
import styles from '../../styles/profile.module.css'

// Import the Cloudinary classes. 
  import {fill} from "@cloudinary/url-gen/actions/resize";
  import {CloudinaryImage} from '@cloudinary/url-gen';

const myImage = new CloudinaryImage('sample', {cloudName: 'dk8yjc0ph'}).resize(fill().width(100).height(150));



const ProfilePage = () => {
  const [user, setUser] = useState('');
  const [data,setData] = useState([])
  const [up,setUp] = useState(false)
  const [inp,setInp]=useState(false)
  const[edit,setEdit] = useState(false)
  const [add,setAdd] = useState(false)
  const [info,setInfo]=useState({name:"",email:"",password:"",phone:"",bio:""})
  const [create,setCreate] = useState({name:"",startDate:"",endDate:"",creationDate:"",price:"",description:""})
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();

  /**
   * handleOnChange
   * @description Triggers when the file input changes (ex: when a file is selected)
   */

  function handleOnChange(changeEvent:any) {
    const reader = new FileReader();

    reader.onload = function(onLoadEvent:any) {
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
    const fileInput :any = Array.from(form.elements).find(name => name === 'file');

    const formData = new FormData();

    for ( const file of fileInput.files ) {
      formData.append('file', file);
    }

    formData.append('upload_preset', 'my-uploads');


    const data = await fetch('https://api.cloudinary.com/v1_1/dk8yjc0ph/image/upload', {
      method: 'POST',
      body: formData
    }).then(r => r.json());

    setImageSrc(data.secure_url);
    setUploadData(data);
  }
  const handleChange=(e:any)=>{
    console.log(e.target.value);
    setInfo({...info,[e.target.name]:e.target.value})
}

const handleChangeCreate=(e:any)=>{
  console.log(e.target.value);
  setInfo({...info,[e.target.name]:e.target.value})
}

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

const updateInfo = (id:any,body:any) => {
  axios
   .put(`http://localhost:3000/api/users/updateUser/${localStorage.getItem('id')}`, body)
   .then(res => {
    if (!res.data) throw Error ('access denied')
    setUp(!up);
     console.log(res.data) 
    })
    .catch(err => {
      axios.put(`http://localhost:3000/api/artists/updateArtist/${localStorage.getItem('id')}`, body)
      .then(res=>{
        setUp(!up);
      })
    })
 }


  useEffect(() => {  
    console.log(localStorage.getItem('id'));
    axios.get(`http://localhost:3000/api/users/getUserId/${localStorage.getItem('id')}`)
      .then(res => {
        if (!res.data) throw Error ('access denied')
        setData(res.data);
        setUser('user')
        console.log('current user', res.data);
      })
      .catch(err => {
    axios.get(`http://localhost:3000/api/artist/getArtistId/${localStorage.getItem('id')}`)
        .then(res => {
        setData(res.data);
        })
  });
  }, []);


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
      onClick={()=>{setEdit(!edit)}}
      type="button"
      className="inline-block rounded-l bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
      data-te-ripple-init
      data-te-ripple-color="light">
      <b>Edit profile</b>
    </button>
    <button
      onClick={()=>{setInp(!inp)}}
      type="button"
      className="inline-block bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
      data-te-ripple-init
      data-te-ripple-color="light">
      <b>Posts</b>
    </button>
    <button
      onClick={()=>{setAdd(!add)}}
      type="button"
      className="inline-block rounded-r bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
      data-te-ripple-init
      data-te-ripple-color="light">
      <b>New</b>
    </button>
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
                      <div className={styles.container}>
      <Head>
        <title>Image Uploader</title>
        <meta name="description" content="Upload your image to Cloudinary!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Image Uploader
        </h1>

        <p className={styles.description}>
          Upload your image to Cloudinary!
        </p>

        <form className={styles.form} method="post" onChange={handleOnChange} onSubmit={handleOnSubmit}>
          <p>
            <input type="file" name="file" />
          </p>
          
          <img src={imageSrc} />
          
          {imageSrc && !uploadData && (
            <p>
              <button>Upload Files</button>
            </p>
          )}

          {uploadData && (
            <code><pre>{JSON.stringify(uploadData, null, 2)}</pre></code>
          )}
        </form>
      </main>
    </div>
                Sale <Switch defaultChecked onChange={onChange} /> Bid   
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
                    <a href="#">
                      <img alt="Image placeholder" src="https://www.w3schools.com/howto/img_avatar.png" className="rounded-circle"/>
                    </a>
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
                  <h3>
                  {user ? data.userName : data.name} <span className="font-weight-light"></span>
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2"></i>{user ? data.birthDate : data.birthDate}
                  </div>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2"></i>Email : {user ? data.email : data.email}
                  </div>
                  <div>
                    <i className="ni education_hat mr-2"></i>Password : {user ? data.password : data.password}
                  </div>
                  <hr className="my-4"/>
                  <p>{data.bio}</p>
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
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-control-label" >Email address</label>
                          <input type="email" id="input-email" className="form-control form-control-alternative" placeholder="Email address" onChange={handleChange}/>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label className="form-control-label" >Password</label>
                          <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder="First name" onChange={handleChange}/>
                        </div>
                      </div>
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