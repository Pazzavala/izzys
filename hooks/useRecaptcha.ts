// hooks/useRecaptcha.ts
"use client";

import { useEffect, useState } from "react";

export function useRecaptcha(action = "submit") {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Add reCAPTCHA script if it's not already loaded
    if (typeof window !== "undefined" && !window.grecaptcha) {
      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
      script.async = true;
      script.defer = true;

      script.onload = () => executeRecaptcha();
      document.head.appendChild(script);
    } else if (window.grecaptcha) {
      executeRecaptcha();
    }
  }, []);

  const executeRecaptcha = () => {
    if (typeof window !== "undefined" && window.grecaptcha) {
      window.grecaptcha.ready(async () => {
        try {
          const newToken = await window.grecaptcha.execute(
            process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
            { action }
          );
          setToken(newToken);
        } catch (error) {
          console.error("reCAPTCHA error:", error);
        } finally {
          setLoading(false);
        }
      });
    }
  };

  return { token, loading, refresh: executeRecaptcha };
}

// Add type definition for window
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
    };
  }
}
