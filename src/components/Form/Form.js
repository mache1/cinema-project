import './Form.scss';

const Form = (props) => {
    return (
        <form className="form">
            <h1>Login</h1>
            <input className="email" type="text" placeholder="Emali" />
            <input className="password" type="text" placeholder="Password" />
            <button type="submit">Continue</button>
        </form>
    );
}

export default Form;