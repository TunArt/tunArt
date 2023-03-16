import React from "react";
import NavBar from "../../../components/navBar";
import styles from "../../../styles/principale.module.css";
import style from "../Reports/reports.module.css";
import styless from "../../../styles/newArt.module.css";
import 'w3-css/w3.css';
import Footer from "../footer/footer";


const Reports=()=>{
    const reportSubmit=()=>{
        alert("Thank you for your feedback! You will hear from us soon.")
    }

    return(
      <div className={styles.all}>
      <div><NavBar/></div>
      <div className={style.all}>
      <div className={style.form}>
      <div className={style.title}>Report Something</div>
      <div className={style.subtitle}></div>
      <div className={style["input-Container ic1"]}>
        <input id="firstname" className={style.input} type="text" placeholder=" " />
        <div className={style.cut}></div>
        <label for="firstname" className={style.placeholder}>First name</label>
      </div>
      <div className={style["input-container ic2"]}>
        <input id="lastname" className={style.input} type="text" placeholder=" " />
        <div className={style.cut}></div>
        <label for="lastname" className={style.placeholder}>Last name</label>
      </div>
      <div className={style["input-container ic2"]}>
        <input id="email" className={style.input} type="text" placeholder=" " />
        <div className={style["cut cut-short"]}></div>
        <label for="email" className={style.placeholder}>Subject</label>
      </div>
      <button type="text" className={style.submit}>submit</button>
    
      </div>
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

/*
        <div className={style.all}>
        <div className={style.container}>
  <form action="/action_page.php">
    <div className={style.row}>
      <div className={style.col25}>
      <div className={style.label}><label for="fname">First Name</label></div>
      </div>
      <div className={style.col75}>
        <div className={style.inputt}><input type="text" id="fname" name="firstname" placeholder="Your name.."/></div>
      </div>
    </div>
    <div className={style.row}>
      <div className={style.col25}>
      <div className={style.label}><label for="lname">Last Name</label></div>
      </div>
      <div className={style.col75}>
        <div className={style.inputt}><input type="text" id="lname" name="lastname" placeholder="Your last name.."/></div>
      </div>
    </div>
    <div className={style.row}>
      <div className={style.col25}>
        <div className={style.label}><label for="country">Report's Type</label></div>
      </div>
      <div className={style.col75}>
        <select id="country" name="country" className={style.select}>
          <option value="australia">Site Malfunction</option>
          <option value="canada">Users Behavior</option>
          <option value="usa">Other</option>
        </select>
      </div>
    </div>
    <div className={style.row}>
      <div className={style.col25}>
        <div className={style.label}><label for="subject">Subject</label></div>
      </div>
      <div className={style.col75}>
        <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"100px"}} className={style.textarea}></textarea>
      </div>
    </div>
    <div className={style.row}>
      <div className={style.inputt}><input type="submit" value="Submit"/></div>
    </div>
  </form>
</div>
    </div>
*/