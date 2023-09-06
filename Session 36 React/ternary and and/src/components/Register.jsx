import Button from "./Button";
import Input from "./Input";

function Register() {

return (
    <>
        <h1>Register</h1>
        <form className="form">
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            <Input type="password" placeholder="Confirm Password" />
            <Button type="submit" onClick={()=>{}} innerHtml="Register"/>
        </form>
    </>
);
};

export default Register
