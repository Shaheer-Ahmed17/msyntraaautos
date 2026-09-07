"use client";

import { useState } from "react";
import { submitInquiry } from "./actions";

const interestOptions = [
  "A vehicle",
  "Private viewing",
  "Trade-in",
  "Service",
];

export default function EnquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");

  const [isPending, setIsPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setError("");

    if (!name.trim() || !email.trim() || !interest) {
      setError("Please complete all required fields.");
      return;
    }

    setIsPending(true);

    const result = await submitInquiry({
      name,
      email,
      interest,
      message,
    });

    setIsPending(false);

    if (!result.success) {
      setError(result.error);
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border-t border-white/10 pt-8">
        <div className="flex min-h-[360px] flex-col justify-center">
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#c49a78]">
            Enquiry received
          </p>

          <h3 className="mt-6 max-w-2xl text-4xl font-light leading-[0.95] tracking-[-0.035em] sm:text-6xl">
            Thank you.
            <br />
            We&apos;ll be in touch.
          </h3>

          <p className="mt-7 max-w-md text-sm leading-7 text-white/45">
            Your enquiry has been received by the MSYNTRA team. One of
            our advisors will review your message and get back to you.
          </p>

          <button
            type="button"
            onClick={() => {
              setName("");
              setEmail("");
              setInterest("");
              setMessage("");
              setSubmitted(false);
              setError("");
            }}
            className="mt-10 w-fit border-b border-white/30 pb-3 text-[10px] uppercase tracking-[0.2em] text-white transition-colors hover:border-white"
          >
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-12"
    >
      <div>
        <label
          htmlFor="name"
          className="mb-4 block text-[9px] uppercase tracking-[0.22em] text-white/35"
        >
          01 / Your name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Your full name"
          autoComplete="name"
          className="w-full border-b border-white/15 bg-transparent py-4 text-lg font-light text-white outline-none placeholder:text-white/20 focus:border-white/60"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-4 block text-[9px] uppercase tracking-[0.22em] text-white/35"
        >
          02 / Email address
        </label>

        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          autoComplete="email"
          className="w-full border-b border-white/15 bg-transparent py-4 text-lg font-light text-white outline-none placeholder:text-white/20 focus:border-white/60"
        />
      </div>

      <div>
        <p className="mb-5 text-[9px] uppercase tracking-[0.22em] text-white/35">
          03 / I&apos;m interested in
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {interestOptions.map((option) => {
            const selected = interest === option;

            return (
              <label
                key={option}
                className={`group cursor-pointer border px-5 py-5 transition-colors ${
                  selected
                    ? "border-[#9e6d48]"
                    : "border-white/10 hover:border-[#9e6d48]"
                }`}
              >
                <input
                  type="radio"
                  name="interest"
                  value={option}
                  checked={selected}
                  onChange={(event) =>
                    setInterest(event.target.value)
                  }
                  className="sr-only"
                />

                <span
                  className={`flex items-center justify-between text-[10px] uppercase tracking-[0.16em] transition-colors ${
                    selected
                      ? "text-white"
                      : "text-white/55 group-hover:text-white"
                  }`}
                >
                  {option}

                  <span
                    className={`flex h-3 w-3 items-center justify-center border transition-colors ${
                      selected
                        ? "border-[#9e6d48]"
                        : "border-white/25 group-hover:border-[#9e6d48]"
                    }`}
                  >
                    {selected && (
                      <span className="h-1.5 w-1.5 bg-[#9e6d48]" />
                    )}
                  </span>
                </span>
              </label>
            );
          })}
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-4 block text-[9px] uppercase tracking-[0.22em] text-white/35"
        >
          04 / Tell us more
        </label>

        <textarea
          id="message"
          name="message"
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Tell us what you're looking for..."
          className="w-full resize-none border-b border-white/15 bg-transparent py-4 text-lg font-light text-white outline-none placeholder:text-white/20 focus:border-white/60"
        />
      </div>

      {error && (
        <div className="border border-red-400/20 bg-red-400/5 px-5 py-4">
          <p className="text-xs leading-5 text-red-200">
            {error}
          </p>
        </div>
      )}

      <div className="flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-[10px] leading-5 text-white/30">
          By submitting this form, you&apos;re simply starting a
          conversation with MSYNTRA.
        </p>

        <button
          type="submit"
          disabled={isPending}
          className="group flex w-fit items-center gap-8 bg-[#9e6d48] px-7 py-5 text-[10px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#b48662] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? "Sending..." : "Send enquiry"}

          {!isPending && (
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          )}
        </button>
      </div>
    </form>
  );
}