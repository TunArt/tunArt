import React , { useState, useEffect } from 'react';
import axios from 'axios';

const ProfilePage = () => {
  const [user, setUser] = useState('');
  const [data,setData] = useState([])
  const [up,setUp] = useState(false)
  const [info,setInfo]=useState({name:"",email:"",password:"",phone:"",bio:""})

  const handleChange=(e:any)=>{
    console.log(e.target.value);
    setInfo({...info,[e.target.name]:e.target.value})
}

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
      <div className="main-content">
        <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
          <div className="container-fluid">
            <form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
              <div className="form-group mb-0">
              </div>
            </form>
            <ul className="navbar-nav align-items-center d-none d-md-flex">
              <li className="nav-item dropdown">
                <a className="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <div className="media align-items-center">
                    <span className="avatar avatar-sm rounded-circle">
                      <img alt="Image placeholder" src={user ? data.picture : data.picture} />
                    </span>
                    <div className="media-body ml-2 d-none d-lg-block">
                      <span className="mb-0 text-sm  font-weight-bold">{user ? data.userName : data.name}</span>
                    </div>
                  </div>
                </a>
              </li>
        </ul>
      </div>
    </nav>
    <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" >
      <span className="mask bg-gradient-default opacity-8"></span>
      <div className="container-fluid d-flex align-items-center">
        <div className="row">
          <div className="col-lg-7 col-md-10">
            <h1 className="display-2 text-white">Hello {user ? data.userName : data.name} </h1>
            <p className="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects . Thank you ! </p>
            <a href="#!" className="btn btn-info">Edit profile</a>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid mt--7">
      <div className="row">
        <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
          <div className="card card-profile shadow">
            <div className="row justify-content-center">
              <div className="col-lg-3 order-lg-2">
                <div className="card-profile-image">
                  <a href="#">
                    <img alt="Image placeholder" src={user ? data.picture : data.picture} className="rounded-circle"/>
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> 

)}

export default ProfilePage;