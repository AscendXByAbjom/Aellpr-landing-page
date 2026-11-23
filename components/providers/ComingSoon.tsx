"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { comingSoon, type Audience } from "@/content/site";
import { Wordmark } from "@/components/brand/Wordmark";
import { Check } from "@/components/mockups/Phone";
import { Arrow } from "@/components/ui/Arrow";

type Ctx = { open: (audience?: Audience) => void };
const ComingSoonContext = createContext<Ctx>({ open: () => {} });
export const useComingSoon = () => useContext(ComingSoonContext);

type Status = "idle" | "sending" | "done" | "error";

/**
 * "Coming soon" dialog built on the native <dialog> element: the browser
 * handles focus trapping, Escape and focus return. Page scroll is locked by
 * CSS (html:has(dialog[open])). Enter/exit transitions are CSS-only.
 */
export function ComingSoonProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const [audience, setAudience] = useState<Audience>("sender");
  // Bumped on every open so the form starts fresh each time.
  const [session, setSession] = useState(0);

  const opener = useRef<HTMLElement | null>(null);

  const open = useCallback((a?: Audience) => {
    opener.current = document.activeElement as HTMLElement | null;
    if (a) setAudience(a);
    setSession((s) => s + 1);
    ref.current?.showModal();
  }, []);

  const close = useCallback(() => ref.current?.close(), []);

  return (
    <ComingSoonContext.Provider value={{ open }}>
      {children}
      <dialog
        ref={ref}
        aria-labelledby="coming-soon-title"
        onClick={(e) => e.target === e.currentTarget && close()}
        onClose={() => opener.current?.focus?.()}
        className="cs-dialog m-auto w-[min(560px,calc(100%-2rem))] max-w-none overflow-hidden rounded-[28px] bg-paper p-0 text-ink shadow-2xl max-sm:mb-0 max-sm:w-full max-sm:rounded-b-none"
      >
        {session > 0 && (
          <Panel
            key={session}
            audience={audience}
            setAudience={setAudience}
            onClose={close}
          />
        )}
      </dialog>
    </ComingSoonContext.Provider>
  );
}

function Panel({
  audience,
  setAudience,
  onClose,
}: {
  audience: Audience;
  setAudience: (a: Audience) => void;
  onClose: () => void;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [contact, setContact] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const value = contact.trim();
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
    const isPhone = /^\+?[\d\s-]{10,16}$/.test(value);
    if (!isEmail && !isPhone) {
      setError("Enter a valid email address or phone number.");
      inputRef.current?.focus();
      return;
    }
    setError("");
    setStatus("sending");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contact: value, audience }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain">
      <div className="relative overflow-hidden bg-ink px-7 pb-8 pt-7 text-paper sm:px-9">
        <div
          aria-hidden
          className="absolute -right-24 -top-32 size-80 rounded-full bg-[radial-gradient(closest-side,rgb(245_107_34/0.45),transparent)]"
        />
        <div className="relative flex items-center justify-between">
          <Wordmark tone="white" className="h-7 w-auto" />
          <button
            type="button"
            onClick={onClose}
            className="grid size-10 place-items-center rounded-full border border-paper/25 text-lg transition hover:bg-paper/10"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <p className="label-mono relative mt-8 text-orange-glow">
          {comingSoon.eyebrow}
        </p>
        <h2 id="coming-soon-title" className="display-md relative mt-2">
          {comingSoon.title}
        </h2>
      </div>

      <div className="px-7 pb-8 pt-6 sm:px-9">
        <p className="text-[15px] leading-relaxed text-muted">
          {comingSoon.body}
        </p>

        {comingSoon.showNotifyForm && status !== "done" && (
          <form onSubmit={submit} className="mt-6" noValidate>
            <fieldset>
              <legend className="label-mono text-ink/70">
                I’m interested in
              </legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {(Object.keys(comingSoon.audiences) as Audience[]).map((a) => (
                  <button
                    type="button"
                    key={a}
                    onClick={() => setAudience(a)}
                    aria-pressed={audience === a}
                    className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${
                      audience === a
                        ? "border-ink bg-ink text-paper"
                        : "border-line bg-white hover:border-ink/40"
                    }`}
                  >
                    {comingSoon.audiences[a]}
                  </button>
                ))}
              </div>
            </fieldset>

            <label
              htmlFor="notify-contact"
              className="label-mono mt-6 block text-ink/70"
            >
              Notify me at launch
            </label>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <input
                ref={inputRef}
                id="notify-contact"
                value={contact}
                onChange={(e) => {
                  setContact(e.target.value);
                  if (error) setError("");
                }}
                placeholder="Email or phone number"
                autoComplete="email"
                inputMode="email"
                aria-invalid={!!error}
                aria-describedby={error ? "notify-error" : undefined}
                className="h-13 flex-1 rounded-xl border border-line bg-white px-4 text-[16px] outline-none transition placeholder:text-muted/70 focus:border-orange focus:ring-4 focus:ring-orange/15"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="h-13 rounded-xl bg-orange px-6 text-[14px] font-semibold text-white transition-colors hover:bg-orange-deep disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Keep me posted"}
              </button>
            </div>
            {error && (
              <p
                id="notify-error"
                className="mt-2 text-[13px] text-orange-deep"
              >
                {error}
              </p>
            )}
            {status === "error" && (
              <p className="mt-2 text-[13px] text-orange-deep">
                Something went wrong. Please try again.
              </p>
            )}
            <p className="mt-4 text-[12px] leading-relaxed text-muted">
              By continuing you agree to our{" "}
              <a
                href="/privacy"
                className="underline underline-offset-2 hover:text-ink"
              >
                Privacy Policy
              </a>
              .
            </p>
          </form>
        )}

        {status === "done" && (
          <div
            className="mt-6 flex animate-[fade-in_0.4s_var(--ease-out)] items-start gap-4 rounded-2xl bg-cream p-5"
            role="status"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-orange text-white">
              <Check className="size-4" />
            </span>
            <div>
              <p className="font-display text-xl font-medium tracking-tight">
                You’re on the list.
              </p>
              <p className="mt-1 text-[14px] text-muted">
                We’ll reach out the moment Aellpr opens in your area.
              </p>
            </div>
          </div>
        )}

        {!comingSoon.showNotifyForm && (
          <button
            type="button"
            onClick={onClose}
            className="mt-6 inline-flex items-center gap-3 rounded-xl bg-ink px-6 py-4 text-[14px] font-semibold text-paper"
          >
            Keep exploring <Arrow dir="right" />
          </button>
        )}
      </div>
    </div>
  );
}
