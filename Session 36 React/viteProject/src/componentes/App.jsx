import Card from "./Card"
import './App.css'

let contacts = [
  {
    contactName : "Beyonce",
    imgSrc :"https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
    imgAlt :"avatar_img",
    contactPhone : "+123 456 789",
    contactEmail : "b@beyonce.com"
  },
  {
    contactName : "Jack Bauer",
    imgSrc : "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
    imgAlt : "avatar_img",
    contactPhone : "+987 654 321",
    contactEmail : "jack@nowhere.com"
  },
  {
    contactName : "Chuck Norris",
    imgSrc : "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    imgAlt : "avatar_img",
    contactPhone : "+918 372 574",
    contactEmail : "gmail@chucknorris.com",
  } 
]

export default function App() {
  // let cards = contacts.map((c)=>(
  //   <Card contactName={c.contactName} imgSrc={c.imgSrc} imgAlt={c.imgAlt} contactPhone={c.contactPhone} contactEmail={c.contactEmail} />
  //   ));
  
  return (
    <div>
      <h1>My Contacts</h1>
      { //cards
        contacts.map((c)=>(
          <Card contactName={c.contactName} imgSrc={c.imgSrc} imgAlt={c.imgAlt} contactPhone={c.contactPhone} contactEmail={c.contactEmail} />
        )) 
      }
    </div>
  )
};
