
import "../../src/css/ImgGallery.css";
import { Navbar } from "./navbar"
import { useNavigate } from "react-router-dom"
import img1 from '../images/Img/Peter 1.jpeg'
import img2 from '../images/Img/WhatsApp Image 2025-04-01 at 1.42.23 AM.jpeg'
import img3 from '../images/Img/WhatsApp Image 2025-04-01 at 1.42.26 AM.jpeg'
import img4 from '../images/Img/WhatsApp Image 2025-04-01 at 1.42.29 AM (1).jpeg'
import img5 from '../images/Img/imgdi2.jpeg'
import img6 from '../images/Img/diimg3.jpeg'
import img7 from '../images/Img/WhatsApp Image 2025-04-01 at 1.42.33 AM (1).jpeg'
import img8 from '../images/Img/WhatsApp Image 2025-07-25 at 7.58.18 PM (1).jpeg'
import img9 from '../images/Img/WhatsApp Image 2025-07-25 at 7.58.22 PM.jpeg'
import img10 from '../images/Img/WhatsApp Image 2025-07-18 at 11.21.50 PM.jpeg'
import img11 from '../images/Img/WhatsApp Image 2025-07-25 at 7.58.24 PM.jpeg'
import img12 from '../images/Img/WhatsApp Image 2025-07-18 at 11.21.50 PM.jpeg'




export default function ImgGallery() {


  return (
<div>
<Navbar />
 
<div class="imgcontainer">
    <div class="box a"><img src={img1} alt="" /></div>
    <div class="box b"><img src={img2} alt="" /></div>
    <div class="box c"><img src={img3} alt="" /></div>
    <div class="box d"><img src={img4} alt="" /></div>
    <div class="box e"><img src={img5} alt="" /></div>
    <div class="box f"><img src={img6} alt="" /></div>
    <div class="box g"><img src={img7} alt="" /></div>
    <div class="box h"><img src={img8} alt="" /></div>
    <div class="box i"><img src={img9} alt="" /></div>
    <div class="box j"><img src={img10} alt="" /></div>
    <div class="box h"><img src={img8} alt="" /></div>
    <div class="box i"><img src={img9} alt="" /></div>
    <div class="box j"><img src={img10} alt="" /></div>
     <div class="box a"><img src={img11} alt="" /></div>
    <div class="box b"><img src={img12} alt="" /></div>
    <div class="box c"><img src={img3} alt="" /></div>
    <div class="box d"><img src={img4} alt="" /></div>
    <div class="box e"><img src={img5} alt="" /></div>
    
    
</div>

  </div>      
  );
}
