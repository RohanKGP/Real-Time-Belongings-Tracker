"use client";

import { Button, Card, Label, TextInput } from "flowbite-react";

const LoginCard = () => {
  return (
    <Card>
      <form className="loginForm flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="loginEmail" value="Email ID" />
          </div>
          <TextInput
            id="loginEmail"
            placeholder="name@gmail.com"
            required
            type="email"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Password" />
          </div>
          <TextInput id="loginPassword" required type="password" />
        </div>
        <Button type="submit">Login</Button>
      </form>
    </Card>
  );
};

export default LoginCard;
