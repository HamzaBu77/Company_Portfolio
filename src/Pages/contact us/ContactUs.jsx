import "./ContactUs.css"

let Contact = () =>{
    return(
    <section id="contact" className="Contact_Form">
        <div className="Form_title">
        <span>Contact Us</span>
        <h1>Discuss your Project</h1>
        </div>
         <div className="Form_container">
            <input placeholder="Project Title"></input>
            <div className="project_details">
            <textarea placeholder="Enter Your Project Details"></textarea>
            </div>
         </div>
    </section>
    )
}

export default Contact