import Image from 'next/image';
import React from 'react'
import { Button } from './ui/button';

type Props = { variant?: "sign-in" | "sign-up" };

function SocialProviders({ variant = "sign-in" }: Props) {
  return (
    <div className="space-y-3">
      <Button
        type="button"
        className="flex w-full items-center justify-center gap-3 rounded-xl border border-light-300 bg-light-100 px-4 py-3 text-body-medium text-dark-900 hover:bg-light-200 focus:outline-none focus:ring-2 focus:ring-dark-900/10 cursor-pointer"
        aria-label={`${variant === "sign-in" ? "Continue" : "Sign up"} with Google`}
      >
        <Image src="/google.svg" alt="" width={18} height={18} />
        <span>Continuar con Google</span>
      </Button>
      <Button
        type="button"
        className="flex w-full items-center justify-center gap-3 rounded-xl border border-light-300 bg-light-100 px-4 py-3 text-body-medium text-dark-900 hover:bg-light-200 focus:outline-none focus:ring-2 focus:ring-dark-900/10 cursor-pointer"
        aria-label={`${variant === "sign-in" ? "Continue" : "Sign up"} with Apple`}
      >
        <Image src="/apple.svg" alt="" width={18} height={18} />
        <span>Continuar con Apple</span>
      </Button>
    </div>
  )
}

export default SocialProviders