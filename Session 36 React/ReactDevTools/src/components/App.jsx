// css style
import './App.css'
// components
import Card from './Card';
// data
import contacts from './contacts';

export default function App() {

  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map((c) => { return <Card key={c.email} name={c.name} imgSrc={c.imgURL} phone={c.phone} email={c.email} /> })}
    </div>
  );
};