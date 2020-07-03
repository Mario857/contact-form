import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Emoji, Hero } from "../components";
import LakeImg from "../images/italy-lake.jpg";
import { isValidEmail } from "../utils/validateEmail";

const ResponseModule = styled.div`
  background: #333;
  color: white;
  font-family: Courier,monospace;
  border-radius: 4px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  max-width: 100%;
  margin-top: 12px;
  box-sizing: border-box;
  text-align: center;
  padding: 12px;

  > p {
    margin: 0;
    word-wrap: break-word;
    :first-of-type {
      padding-bottom: 12px;
    }
  }
`;

const Section = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  width: 100%;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  background-color: rgba(0%, 19%, 11%, 0.7);
  width: 420px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 40px;
  border-radius: 24px;
  font-family: Courier, monospace;
`;

const FieldWrapper = styled.div`
  padding: 12px 0 20px;
  position: relative;
`;

const Label = styled.label`
  display: block;
  margin-left: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.6);
  padding: 8px;
  color: black;
  border-radius: 12px;
  border: 2px solid rgba(0, 0, 0, 0.5);
  &:focus {
    outline: 0;
    border: 2px solid black;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.6);
  padding: 8px;
  color: black;
  border-radius: 12px;
  resize: none;
  border: 2px solid rgba(0, 0, 0, 0.5);
  &:focus {
    outline: 0;
    border: 2px solid black;
  }
`;

const FieldError = styled.p`
  position: absolute;
  color: red;
  font-size: 0.8rem;
  bottom: 0;
  left: 8px;
  margin: 0;
`;

const Button = styled.button`
  background-color: rgb(14, 140, 87);
  transition: background-color 0.2s;
  box-sizing: border-box;
  padding: 12px 8px;
  color: white;
  letter-spacing: 2px;
  cursor: pointer;
  border: 0;
  border-radius: 8px;
  margin: 24px 0 0;

  &:hover {
    background-color: rgb(15, 206, 125);
  }

  &[disabled] {
    cursor: auto;
    background-color: rgb(73, 93, 84);
  }
`;

const NavLink = styled(Link)`
  display: block;
  text-align: center;
  font-size: 2rem;
  text-decoration: none;
  color: white;
`;

export const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [apiData, setApiData] = useState({
    email: "",
    message: "",
  });
  const [errorEmail, setErrorEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = (name: string, value: string) => {
    switch (name) {
      case "email":
        isValidEmail(value)
          ? setErrorEmail("")
          : setErrorEmail("Email is not valid!");
        setEmail(value);
        break;
      case "message":
        value.length >= 30
          ? setErrorMessage("")
          : setErrorMessage("Message must be at least 30 characters long!");
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    const { name, value } = event.target;

    validateForm(name, value);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const body = {
      email,
      message,
    };
    fetch("http://localhost:9000/API/contact", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        response.json().then((data) => {
          setApiData({ email: data.email, message: data.message });
        });
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };


  return (
    <div>
      <Hero img={LakeImg}>
        {apiData.email && <ResponseModule>
          <p>Your information has been submitted:</p>
          <p>{apiData?.email}</p>
          <p>{apiData?.message}</p>
          </ResponseModule>}
        <Section>
          <FormWrapper>
            <Form onSubmit={handleSubmit}>
              <FieldWrapper>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  value={email}
                  onChange={(e) => handleChange(e)}
                />
                <FieldError>{errorEmail}</FieldError>
              </FieldWrapper>
              <FieldWrapper>
                <Label htmlFor='message'>Message</Label>
                <Textarea
                  id='message'
                  name='message'
                  value={message}
                  onChange={(e) => handleChange(e)}
                />
                <FieldError>{errorMessage}</FieldError>
              </FieldWrapper>
              <Button
                disabled={
                  Boolean(errorMessage || errorEmail) ||
                  email.length === 0 ||
                  message.length === 0
                }
              >
                Submit
              </Button>
            </Form>
          </FormWrapper>

          <NavLink to='/'>
            <Emoji symbol='👈' label='finger pointing right' /> Return
          </NavLink>
        </Section>
      </Hero>
    </div>
  );
};
