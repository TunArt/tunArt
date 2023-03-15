import React from "react";
import NavBar from "../../../components/navBar";
import styles from "../../../styles/principale.module.css";
import style from "../Reports/reports.module.css";
import 'w3-css/w3.css';
import Footer from "../footer/footer";


const Reports=()=>{
    const reportSubmit=()=>{
        alert("Thank you for your feedback! You will hear from us soon.")
    }

    return(
        <div className={styles.all}>
        <div><NavBar/></div>
        <div className={style.container}>
  <form action="/action_page.php">
    <div className={style.row}>
      <div className={style.col25}>
        <label for="fname">First Name</label>
      </div>
      <div className={style.col75}>
        <div className={style.input}><input type="text" id="fname" name="firstname" placeholder="Your name.."/></div>
      </div>
    </div>
    <div className={style.row}>
      <div className={style.col25}>
        <label for="lname">Last Name</label>
      </div>
      <div className={style.col75}>
        <div className={style.input}><input type="text" id="lname" name="lastname" placeholder="Your last name.."/></div>
      </div>
    </div>
    <div className={style.row}>
      <div className={style.col25}>
        <label for="country">Country</label>
      </div>
      <div className={style.col75}>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
      </div>
    </div>
    <div className={style.row}>
      <div className={style.col25}>
        <label for="subject">Subject</label>
      </div>
      <div className={style.col75}>
        <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>
      </div>
    </div>
    <div className={style.row}>
      <div className={style.input}><input type="submit" value="Submit"/></div>
    </div>
  </form>
</div>
    <Footer/> 
    </div>
    )
}
export default Reports;

/*
<div className={styles.wrapper}>
    <h1 className={styles.titles}>REPORT SOMETHING ?</h1>
    <br></br>
    <form className="w3-card-4" style={{width:"600px", height:"auto", marginTop:"50px", fontFamily:"monospace", backgroundColor:"gray"}}>
                <h3 style={{fontFamily:"monospace", marginLeft:"30px", marginRight:"30px", marginTop:"2 0px", padding:"10px", backgroundColor:"darkorange", textAlign:"center", borderRadius:"10px"}}>Please fill in you informations</h3><br/>
                <input type="text" placeholder="Enter your full name" style={{width:"300px",marginLeft:"30px", padding:"6px"}}></input><br/><br/>
                <input type="text" placeholder="Enter your email" style={{width:"300px",marginLeft:"30px", padding:"6px"}}></input><br/><br/>
                <input type="text" placeholder="Enter your complaint's subject" style={{width:"300px",marginLeft:"30px", padding:"6px"}}></input><br/><br/>
                <input type="text" placeholder="Report here .." style={{width:"300px",marginLeft:"30px", padding:"6px"}}></input><br/><br/>
                <button type="submit" onClick={reportSubmit}className={styles.submitButton2} style={{marginLeft:"30px", marginBottom:"30px"}}>Submit Your Report</button>
            </form>
    
    </div>
*/