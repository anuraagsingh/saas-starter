'use client';

import Link from 'next/link';
import { useActionState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CircleIcon, Loader2 } from 'lucide-react';
import { signIn, signUp } from './actions';
import { ActionState } from '@/lib/auth/middleware';

export function Login({ mode = 'signin' }: { mode?: 'signin' | 'signup' }) {
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect');
  const priceId = searchParams.get('priceId');
  const inviteId = searchParams.get('inviteId');
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    mode === 'signin' ? signIn : signUp,
    { error: '' }
  );

  return (
    <div className="min-h-[100dvh] flex">
      {/* Left panel — Interactive Blue with faceted geometry */}
      <div className="hidden lg:flex lg:w-1/2 relative justify-center items-center bg-[hsl(258_100%_38%)] overflow-hidden">
        {/* Faceted geometric device */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06]"
          viewBox="0 0 800 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <polygon points="0,0 400,120 200,500" fill="white" />
          <polygon points="400,120 800,0 600,350" fill="white" />
          <polygon points="200,500 400,120 550,400" fill="white" opacity="0.5" />
          <polygon points="550,400 600,350 800,500" fill="white" opacity="0.3" />
          <polygon points="0,500 200,500 100,800" fill="white" opacity="0.4" />
          <polygon points="200,500 400,650 100,800" fill="white" opacity="0.2" />
          <polygon points="400,650 800,500 700,900" fill="white" opacity="0.35" />
          <polygon points="400,650 700,900 500,1000" fill="white" opacity="0.25" />
          <polygon points="100,800 400,650 500,1000" fill="white" opacity="0.15" />
          <polygon points="500,1000 700,900 800,1000" fill="white" opacity="0.3" />
        </svg>

        {/* Brand content */}
        <div className="relative z-10 text-center px-16">
          <div className="flex justify-center mb-8">
            <CircleIcon className="h-16 w-16 text-[hsl(177_94%_45%)]" />
          </div>
          <h1
            className="text-[2.5rem] font-bold tracking-tight mb-4"
            style={{
              fontFamily: "'Maison Neue Extended Demi', 'Segoe UI', sans-serif",
              color: 'white',
            }}
          >
            Interactive
          </h1>
          <p
            className="text-base leading-relaxed max-w-xs mx-auto"
            style={{
              fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
              color: 'rgba(255,255,255,0.7)',
            }}
          >
            Securing Your Success
          </p>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[hsl(224_20%_8%)] to-transparent opacity-30" />
      </div>

      {/* Right panel — form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-12">
        <div className="w-full max-w-md">
          {/* Mobile brand header */}
          <div className="lg:hidden flex justify-center mb-8">
            <CircleIcon className="h-12 w-12 text-[hsl(258_100%_38%)]" />
          </div>

          <h2
            className="text-3xl font-bold mb-2 text-[hsl(258_100%_38%)]"
            style={{
              fontFamily: "'Maison Neue Extended Demi', 'Segoe UI', sans-serif",
            }}
          >
            {mode === 'signin' ? 'Welcome back' : 'Create your account'}
          </h2>
          <p
            className="text-[hsl(219_15%_39%)] mb-10"
            style={{
              fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
            }}
          >
            {mode === 'signin'
              ? 'Enter your credentials to continue'
              : 'Get started with your workspace'}
          </p>

          {/* Form card */}
          <div
            className="rounded-lg p-px"
            style={{
              background: 'linear-gradient(135deg, hsl(220, 23%, 84%) 0%, hsl(224, 18%, 76%) 100%)',
            }}
          >
            <div className="bg-white rounded-lg p-8 space-y-6">
              <form action={formAction} className="space-y-5">
                <input type="hidden" name="redirect" value={redirect || ''} />
                <input type="hidden" name="priceId" value={priceId || ''} />
                <input type="hidden" name="inviteId" value={inviteId || ''} />

                {/* Email */}
                <div>
                  <Label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2"
                    style={{
                      color: 'hsl(224, 20%, 29%)',
                      fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
                    }}
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    defaultValue={state.email}
                    required
                    maxLength={50}
                    placeholder="Enter your email"
                    className="h-11 rounded-md border-[hsl(220_23%_84%)] text-[hsl(224_20%_29%)] placeholder:text-[hsl(222_16%_65%)] focus:border-[hsl(177_94%_45%)] focus:ring-[hsl(177_94%_45%)]"
                  />
                </div>

                {/* Password */}
                <div>
                  <Label
                    htmlFor="password"
                    className="block text-sm font-semibold mb-2"
                    style={{
                      color: 'hsl(224, 20%, 29%)',
                      fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
                    }}
                  >
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete={
                      mode === 'signin' ? 'current-password' : 'new-password'
                    }
                    defaultValue={state.password}
                    required
                    minLength={8}
                    maxLength={100}
                    placeholder="Enter your password"
                    className="h-11 rounded-md border-[hsl(220_23%_84%)] text-[hsl(224_20%_29%)] placeholder:text-[hsl(222_16%_65%)] focus:border-[hsl(177_94%_45%)] focus:ring-[hsl(177_94%_45%)]"
                  />
                </div>

                {state?.error && (
                  <div
                    className="text-sm rounded-md px-3 py-2"
                    style={{
                      background: 'hsl(0, 72%, 96%)',
                      color: 'hsl(0, 72%, 34%)',
                    }}
                  >
                    {state.error}
                  </div>
                )}

                {/* Submit */}
                <div>
                  <Button
                    type="submit"
                    disabled={pending}
                    className="w-full h-11 rounded-md font-semibold shadow-sm transition-colors"
                    style={{
                      background: 'hsl(258, 100%, 38%)',
                      color: 'white',
                      fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = 'hsl(231, 89%, 26%)')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = 'hsl(258, 100%, 38%)')
                    }
                  >
                    {pending ? (
                      <>
                        <Loader2 className="animate-spin mr-2 h-4 w-4" />
                        Loading...
                      </>
                    ) : mode === 'signin' ? (
                      'Sign in'
                    ) : (
                      'Sign up'
                    )}
                  </Button>
                </div>
              </form>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t" style={{ borderColor: 'hsl(220, 23%, 84%)' }} />
                </div>
                <div className="relative flex justify-center">
                  <span
                    className="bg-white px-4 text-sm"
                    style={{ color: 'hsl(219, 15%, 39%)' }}
                  >
                    {mode === 'signin'
                      ? 'New to Interactive?'
                      : 'Already have an account?'}
                  </span>
                </div>
              </div>

              {/* Toggle link */}
              <div>
                <Link
                  href={`${mode === 'signin' ? '/sign-up' : '/sign-in'}${
                    redirect ? `?redirect=${redirect}` : ''
                  }${priceId ? `&priceId=${priceId}` : ''}`}
                  className="w-full flex justify-center h-11 rounded-md items-center font-semibold border transition-colors"
                  style={{
                    borderColor: 'hsl(258, 100%, 38%)',
                    color: 'hsl(258, 100%, 38%)',
                    fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'hsl(258, 100%, 38%)';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.color = 'hsl(258, 100%, 38%)';
                  }}
                >
                  {mode === 'signin'
                    ? 'Create an account'
                    : 'Sign in to existing account'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
