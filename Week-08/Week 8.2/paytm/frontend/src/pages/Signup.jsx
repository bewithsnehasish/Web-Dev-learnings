import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign Up"} />
          <SubHeading label={"Enter Your information to create an account"} />
          <InputBox
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder={"John"}
            label={"First Name"}
          />
          <InputBox
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            placeholder={"Doe"}
            label={"Last Name"}
          />
          <InputBox
            onChange={(e) => setUserName(e.target.value)}
            placeholder={"harkirat@gmail.com"}
            label={"email"}
          />
          <InputBox
            onChange={(e) => setPassword(e.target.value)}
            placeholder={"123456"}
            label={"Password"}
          />
          <div className="pt-4">
            <Button
              onClick={async () => {
                axios.post("http://localhost:8080/api/v1/user/signup", {
                  userName,
                  firstName,
                  lastName,
                  password,
                });
              }}
              label={"Sign Up"}
            />
          </div>
          <BottomWarning
            label={"Already have an Account"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};
