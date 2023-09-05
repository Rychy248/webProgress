import Button from "./Button";
import Input from "./Input";

function Login() {

return (
    <>
        <h1>Login</h1>
        <form className="form">
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            <Button type="submit" innerHtml="Login"/>
        </form>
    </>
);
};

export default Login
