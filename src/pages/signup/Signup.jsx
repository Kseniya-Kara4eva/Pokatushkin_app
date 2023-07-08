import React, {useState} from 'react'
import "./signup.css";
import InputComponent from "../../components/input-component";
import axios from 'axios';

const Signup = () => {
    const [firstName, setFirstName] = useState("firstname");
    const [lastName, setLastName] = useState("lastname");
    const [email, setEmail] = useState("test@test.com");
    const [password, setPassword] = useState("12345");
    const [clientId, setClientId] = useState("b1ee3775-fef4-45e9-894b-8fcb7d25e448");

    const registrationHandler = (e) => {
        e.preventDefault();
        axios("https://sf-final-project-be.herokuapp.com/api/auth/sign_up", {
            method: "POST",
            data: {
                clientId,
                email,
                firstName,
                lastName,
                password,
            }
        }).then(({data}) => {
            alert("Вы зарегестрированы")
        }).catch((e) => {
            alert("ошибка регистрации")
            console.log(e.message)
        })

    }

    return (
        <main>
            <div className="hero">
                <form onSubmit={(e) => registrationHandler(e)} className="form_signup">
                    <fieldset className="form_input form_email">
                        <InputComponent
                            key="email"
                            type="email"
                            onChange={setEmail}
                            placeholder="Введите свой E-mail"
                            label="E-mail"
                        ></InputComponent>
                        {/*<label htmlFor="email">E-mail*</label>*/}
                        {/*<input value={email} onChange={(e) => {*/}
                        {/*    setEmail(e.target.value)*/}
                        {/*}} type="email" name="email" id="email"/>*/}
                    </fieldset>
                    <fieldset className="form_input form_password">
                        <InputComponent
                            key="password"
                            type="password"
                            onChange={setPassword}
                            placeholder="Type your password"
                            label="Пароль*"
                        ></InputComponent>
                        {/*<label htmlFor="password">Пароль*</label>*/}
                        {/*<input onChange={(e) => {*/}
                        {/*    setPassword(e.target.value)*/}
                        {/*}} value={password} type="password" name="password" id="password"/>*/}
                    </fieldset>
                    <fieldset className="form_input form_first_name">
                        <InputComponent
                            key="first_name"
                            type="first_name"
                            onChange={setFirstName}
                            placeholder="Введите свое имя"
                            label="Имя"
                        ></InputComponent>
                        {/*<label htmlFor="first_name">Имя</label>*/}
                        {/*<input onChange={(e) => {*/}
                        {/*    setFirstName(e.target.value)*/}
                        {/*}} value={firstName} type="text" name="first_name" id="first_name"/>*/}
                    </fieldset>
                    <fieldset className="form_input form_last_name">
                        <InputComponent
                            key="last_name"
                            type="last_name"
                            onChange={setLastName}
                            placeholder="Введите свою фамилию"
                            label="Фамилия"
                        ></InputComponent>
                        {/*<label htmlFor="last_name">фамилия</label>*/}
                        {/*<input onChange={(e) => {*/}
                        {/*    setLastName(e.target.value)*/}
                        {/*}} value={lastName} type="text" name="last_name" id="last_name"/>*/}
                    </fieldset>
                    <fieldset className="form_input form_client-id">
                        <InputComponent
                            key="client-id"
                            type="client-id"
                            placeholder="Введите client id"
                            label="Client ID"
                            onChange={setClientId}
                        ></InputComponent>
                        {/*<label htmlFor="client-id">Client ID*</label>*/}
                        {/*<input value="b1ee3775-fef4-45e9-894b-8fcb7d25e448" type="text" name="client-id"*/}
                        {/*       id="client-id"/>*/}
                    </fieldset>
                    <button style={{
                        width: "100%",
                        padding: "20px"
                    }} className="btn">Зарегистрироваться
                    </button>
                </form>
            </div>
        </main>
    )
}

export default Signup