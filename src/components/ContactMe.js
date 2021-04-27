import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Confirmation from "./Confirmation";
import Footer from "./Footer";
import Input from "./Input";

const ContactMe = () => {
  const [submitted, setSubmitted] = useState();

  return (
    <Wrapper>
      {submitted ? (
        <Confirmation />
      ) : (
        <>
          <Title>Contact Me</Title>
          <Form>
            <Input type={"email"} placeholder={"Email"} required />

            <Textarea placeholder="What's on your mind?" required />

            <Button onClick={() => setSubmitted(true)}>Submit</Button>
          </Form>
        </>
      )}
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Textarea = styled.textarea`
  border-radius: 5px;
  border: 1px solid lightgray;
  height: 5em;
  margin-top: 15px;
  background: inherit;
  color: white;
  &:focus {
    outline: none;
    box-shadow: 0 0 10px #9ecaed;
  }
`;

const Form = styled.form`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  width: 40%;
`;

const Title = styled.h1`
  margin-top: 30px;
  color: rgb(252, 186, 3);
`;

export default ContactMe;
