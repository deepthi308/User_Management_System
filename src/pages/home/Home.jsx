import { useState } from "react";
import Form from "../../components/form/Form";

export default function Home() {
  useState({
    name: "",
    email: "",
  });

  return (
    <section className="page home-page">
      <Form />
    </section>
  );
}
