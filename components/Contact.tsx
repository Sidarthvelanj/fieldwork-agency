"use client";

import { useState, FormEvent } from "react";
import Reveal from "./Reveal";

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): Errors {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Enter your name.";
    if (!values.email.trim()) {
      next.email = "Enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!values.message.trim())
      next.message = "Tell us a little about the project.";
    return next;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      // Replace with a real submit — API route, form service, or email endpoint.
      setSubmitted(true);
      setValues({ name: "", email: "", message: "" });
    }
  }

  if (submitted) {
    return (
      <section id="contact" className="wrap py-20 md:py-28 text-center">
        <p className="label mb-4 text-clay">Message received</p>
        <h2 className="font-display italic text-3xl md:text-4xl max-w-lg mx-auto">
          Thanks — we&apos;ll get back to you within two business days.
        </h2>
        <button
          onClick={() => setSubmitted(false)}
          className="label mt-8 borde border-ink dark:border-ink-dark px-6 py-3 rounded-full hover:border-clay hover:text-clay transition-colors"
        >
          Send another message
        </button>
      </section>
    );
  }

  return (
    <section id="contact" className="wrap py-20 md:py-28">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20">
        <Reveal>
          <p className="label mb-4 text-clay">Get in touch</p>
          <h2 className="font-display italic text-4xl md:text-5xl mb-4">
            Tell us what you&apos;re building.
          </h2>
          <p className="text-ink/70 dark:text-ink-dark/70 max-w-sm">
            One message, no forms to escape from later. We reply personally,
            usually within two business days.
          </p>
        </Reveal>

        <Reveal delayMs={100}>
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div>
              <label htmlFor="name" className="label block mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
                className="w-full bg-transparent border border-line dark:border-line-dark rounded-lg px-4 py-3 focus:border-clay outline-none"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-sm text-[#B0492E] mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="label block mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={values.email}
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
                className="w-full bg-transparent border border-line dark:border-line-dark rounded-lg px-4 py-3 focus:border-clay outline-none"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-sm text-[#B0492E] mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="label block mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={values.message}
                onChange={(e) =>
                  setValues({ ...values, message: e.target.value })
                }
                className="w-full bg-transparent border border-line dark:border-line-dark rounded-lg px-4 py-3 focus:border-clay outline-none resize-none"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="text-sm text-[#B0492E] mt-1">
                  {errors.message}
                </p>
              )}
            </div>

           <button
  type="submit"
  className="label bg-clay text-paper px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
>
  Send Message
</button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
