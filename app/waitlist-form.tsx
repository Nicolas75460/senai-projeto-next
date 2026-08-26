"use client";

import { FormEvent, useState } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    window.setTimeout(() => setStatus("success"), 700);
  }

  if (status === "success") {
    return <p className="form-success" role="status">Você está na lista. Em breve, uma novidade chega por aí.</p>;
  }

  return (
    <form className="waitlist-form" onSubmit={handleSubmit} noValidate>
      <label className="sr-only" htmlFor="email">Seu melhor e-mail</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
          if (status === "error") setStatus("idle");
        }}
        placeholder="Seu melhor e-mail"
        aria-describedby={status === "error" ? "email-error" : undefined}
        required
      />
      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Enviando..." : "Quero participar"}
        {status !== "loading" && <span aria-hidden="true">↗</span>}
      </button>
      {status === "error" && <span id="email-error" className="form-error" role="alert">Digite um e-mail válido.</span>}
    </form>
  );
}
