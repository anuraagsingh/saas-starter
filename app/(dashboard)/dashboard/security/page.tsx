'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Lock, Trash2, Loader2 } from 'lucide-react';
import { useActionState } from 'react';
import { updatePassword, deleteAccount } from '@/app/(login)/actions';

type PasswordState = {
  currentPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
  error?: string;
  success?: string;
};

type DeleteState = {
  password?: string;
  error?: string;
  success?: string;
};

export default function SecurityPage() {
  const [passwordState, passwordAction, isPasswordPending] = useActionState<
    PasswordState,
    FormData
  >(updatePassword, {});

  const [deleteState, deleteAction, isDeletePending] = useActionState<
    DeleteState,
    FormData
  >(deleteAccount, {});

  return (
    <section className="flex-1 p-4 lg:p-8">
      <h1
        className="text-lg lg:text-2xl font-semibold mb-6"
        style={{
          fontFamily: "'Maison Neue Extended Demi', 'Segoe UI', sans-serif",
          color: 'hsl(258, 100%, 38%)',
        }}
      >
        Security Settings
      </h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Password</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" action={passwordAction}>
            <div>
              <Label htmlFor="current-password" className="mb-2 font-semibold">
                Current Password
              </Label>
              <Input
                id="current-password"
                name="currentPassword"
                type="password"
                autoComplete="current-password"
                required
                minLength={8}
                maxLength={100}
                defaultValue={passwordState.currentPassword}
              />
            </div>
            <div>
              <Label htmlFor="new-password" className="mb-2 font-semibold">
                New Password
              </Label>
              <Input
                id="new-password"
                name="newPassword"
                type="password"
                autoComplete="new-password"
                required
                minLength={8}
                maxLength={100}
                defaultValue={passwordState.newPassword}
              />
            </div>
            <div>
              <Label htmlFor="confirm-password" className="mb-2 font-semibold">
                Confirm New Password
              </Label>
              <Input
                id="confirm-password"
                name="confirmPassword"
                type="password"
                required
                minLength={8}
                maxLength={100}
                defaultValue={passwordState.confirmPassword}
              />
            </div>
            {passwordState.error && (
              <p
                className="text-sm rounded-md px-3 py-2"
                style={{
                  background: 'hsl(0, 72%, 96%)',
                  color: 'hsl(0, 72%, 34%)',
                }}
              >
                {passwordState.error}
              </p>
            )}
            {passwordState.success && (
              <p
                className="text-sm rounded-md px-3 py-2"
                style={{
                  background: 'hsl(158, 68%, 94%)',
                  color: 'hsl(158, 68%, 24%)',
                }}
              >
                {passwordState.success}
              </p>
            )}
            <Button
              type="submit"
              className="h-10 rounded-md font-semibold shadow-sm"
              style={{
                background: 'hsl(258, 100%, 38%)',
                color: 'white',
              }}
              disabled={isPasswordPending}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = 'hsl(231, 89%, 26%)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = 'hsl(258, 100%, 38%)')
              }
            >
              {isPasswordPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Updating...
                </>
              ) : (
                <>
                  <Lock className="mr-2 h-4 w-4" />
                  Update Password
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Delete Account</CardTitle>
        </CardHeader>
        <CardContent>
          <p
            className="text-sm mb-4"
            style={{ color: 'hsl(219, 15%, 39%)' }}
          >
            Account deletion is non-reversable. Please proceed with caution.
          </p>
          <form action={deleteAction} className="space-y-4">
            <div>
              <Label htmlFor="delete-password" className="mb-2 font-semibold">
                Confirm Password
              </Label>
              <Input
                id="delete-password"
                name="password"
                type="password"
                required
                minLength={8}
                maxLength={100}
                defaultValue={deleteState.password}
              />
            </div>
            {deleteState.error && (
              <p
                className="text-sm rounded-md px-3 py-2"
                style={{
                  background: 'hsl(0, 72%, 96%)',
                  color: 'hsl(0, 72%, 34%)',
                }}
              >
                {deleteState.error}
              </p>
            )}
            <Button
              type="submit"
              variant="destructive"
              className="h-10 rounded-md font-semibold shadow-sm"
              style={{
                background: 'hsl(0, 72%, 34%)',
                color: 'white',
              }}
              disabled={isDeletePending}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = 'hsl(0, 63%, 28%)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = 'hsl(0, 72%, 34%)')
              }
            >
              {isDeletePending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Deleting...
                </>
              ) : (
                <>
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete Account
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
