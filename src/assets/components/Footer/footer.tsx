import "./footer.css"
const Footer = () =>{
     return (
       <>
         <footer>
           <div className="container-footer">
             <h4>Direitos Autorais © [2025] [Kaiky Victório].</h4>
             <div className="container-icons">
               <i>
                 <img
                   src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"
                   alt="Github Icon"
                 />
               </i>
               <i>
                 <img
                   src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/CIS-A2K_Instagram_Icon_%28Black%29.svg/1024px-CIS-A2K_Instagram_Icon_%28Black%29.svg.png"
                   alt="Instagram Icon"
                 />
               </i>
               <i>
                 <img
                   src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"
                   alt="Linkedin Icon"
                 />
               </i>
             </div>
           </div>
         </footer>
       </>
     );
}
export default Footer