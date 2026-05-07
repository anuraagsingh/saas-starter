'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Loader2 } from 'lucide-react';
import { useFormStatus } from 'react-dom';

interface SubmitButtonProps {
  highlighted?: boolean;
}

export function SubmitButton({ highlighted = false }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full h-10 rounded-md font-semibold shadow-sm"
      style={{
        background: highlighted ? 'hsl(258, 100%, 38%)' : 'transparent',
        color: highlighted ? 'white' : 'hsl(258, 100%, 38%)',
        border: highlighted ? 'none' : '1px solid hsl(258, 100%, 38%)',
      }}
      onMouseEnter={(e) => {
        if (highlighted) {
          e.currentTarget.style.background = 'hsl(231, 89%, 26%)';
        } else {
          e.currentTarget.style.background = 'hsl(258, 100%, 38%)';
          e.currentTarget.style.color = 'white';
        }
      }}
      onMouseLeave={(e) => {
        if (highlighted) {
          e.currentTarget.style.background = 'hsl(258, 100%, 38%)';
        } else {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = 'hsl(258, 100%, 38%)';
        }
      }}
    >
      {pending ? (
        <>
          <Loader2 className="animate-spin mr-2 h-4 w-4" />
          Loading...
        </>
      ) : (
        <>
          Get Started
          <ArrowRight className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}
