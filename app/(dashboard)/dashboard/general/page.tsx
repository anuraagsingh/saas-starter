'use client';

import { useActionState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import { updateAccount } from '@/app/(login)/actions';
import { User } from '@/lib/db/schema';
import useSWR from 'swr';
import { Suspense } from 'react';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type ActionState = {
  name?: string;
  error?: string;
  success?: string;
};

type AccountFormProps = {
  state: ActionState;
  nameValue?: string;
  emailValue?: string;
};

function AccountForm({
  state,
  nameValue = '',
  emailValue = ''
}: AccountFormProps) {
  return (
    <>
      <div>
        <Label htmlFor="name" className="mb-2 font-semibold">
          Name
        </Label>
        <Input
          id="name"
          name="name"
          placeholder="Enter your name"
          defaultValue={state.name || nameValue}
          required
        />
      </div>
      <div>
        <Label htmlFor="email" className="mb-2 font-semibold">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          defaultValue={emailValue}
          required
        />
      </div>
    </>
  );
}

function AccountFormWithData({ state }: { state: ActionState }) {
  const { data: user } = useSWR<User>('/api/user', fetcher);
  return (
    <AccountForm
      state={state}
      nameValue={user?.name ?? ''}
      emailValue={user?.email ?? ''}
    />
  );
}

export default function GeneralPage() {
  const [state, formAction, isPending] = useActionState<ActionState, FormData>(
    updateAccount,
    {}
  );

  return (
    <section className="flex-1 p-4 lg:p-8">
      <h1
        className="text-lg lg:text-2xl font-semibold mb-6"
        style={{
          fontFamily: "'Maison Neue Extended Demi', 'Segoe UI', sans-serif",
          color: 'hsl(258, 100%, 38%)',
        }}
      >
        General Settings
      </h1>

      <Card>
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" action={formAction}>
            <Suspense fallback={<AccountForm state={state} />}>
              <AccountFormWithData state={state} />
            </Suspense>
            {state.error && (
              <p
                className="text-sm rounded-md px-3 py-2"
                style={{
                  background: 'hsl(0, 72%, 96%)',
                  color: 'hsl(0, 72%, 34%)',
                }}
              >
                {state.error}
              </p>
            )}
            {state.success && (
              <p
                className="text-sm rounded-md px-3 py-2"
                style={{
                  background: 'hsl(158, 68%, 94%)',
                  color: 'hsl(158, 68%, 24%)',
                }}
              >
                {state.success}
              </p>
            )}
            <Button
              type="submit"
              className="h-10 rounded-md font-semibold shadow-sm"
              style={{
                background: 'hsl(258, 100%, 38%)',
                color: 'white',
              }}
              disabled={isPending}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = 'hsl(231, 89%, 26%)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = 'hsl(258, 100%, 38%)')
              }
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                'Save Changes'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
