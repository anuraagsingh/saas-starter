import { checkoutAction } from '@/lib/payments/actions';
import { Check } from 'lucide-react';
import { getStripePrices, getStripeProducts } from '@/lib/payments/stripe';
import { SubmitButton } from './submit-button';

// Prices are fresh for one hour max
export const revalidate = 3600;

export default async function PricingPage() {
  const [prices, products] = await Promise.all([
    getStripePrices(),
    getStripeProducts(),
  ]);

  const basePlan = products.find((product) => product.name === 'Base');
  const plusPlan = products.find((product) => product.name === 'Plus');

  const basePrice = prices.find((price) => price.productId === basePlan?.id);
  const plusPrice = prices.find((price) => price.productId === plusPlan?.id);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div
        className="text-center mb-12"
      >
        <h1
          className="text-3xl font-bold mb-3"
          style={{
            fontFamily: "'Maison Neue Extended Demi', 'Segoe UI', sans-serif",
            color: 'hsl(258, 100%, 38%)',
          }}
        >
          Choose your plan
        </h1>
        <p
          className="text-lg"
          style={{ color: 'hsl(219, 15%, 39%)' }}
        >
          Start free, scale as you grow.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-xl mx-auto">
        <PricingCard
          name={basePlan?.name || 'Base'}
          price={basePrice?.unitAmount || 800}
          interval={basePrice?.interval || 'month'}
          trialDays={basePrice?.trialPeriodDays || 7}
          features={[
            'Unlimited Usage',
            'Unlimited Workspace Members',
            'Email Support',
          ]}
          priceId={basePrice?.id}
          highlighted={false}
        />
        <PricingCard
          name={plusPlan?.name || 'Plus'}
          price={plusPrice?.unitAmount || 1200}
          interval={plusPrice?.interval || 'month'}
          trialDays={plusPrice?.trialPeriodDays || 7}
          features={[
            'Everything in Base, and:',
            'Early Access to New Features',
            '24/7 Support + Slack Access',
          ]}
          priceId={plusPrice?.id}
          highlighted={true}
        />
      </div>
    </main>
  );
}

function PricingCard({
  name,
  price,
  interval,
  trialDays,
  features,
  priceId,
  highlighted,
}: {
  name: string;
  price: number;
  interval: string;
  trialDays: number;
  features: string[];
  priceId?: string;
  highlighted: boolean;
}) {
  return (
    <div
      className="pt-6 px-6 pb-8"
      style={{
        background: highlighted ? 'hsl(258, 100%, 97%)' : 'white',
        border: highlighted
          ? '2px solid hsl(258, 100%, 38%)'
          : '1px solid hsl(220, 23%, 84%)',
        borderRadius: '8px',
      }}
    >
      <h2
        className="text-2xl font-semibold mb-2"
        style={{
          fontFamily: "'Maison Neue Extended Demi', 'Segoe UI', sans-serif",
          color: 'hsl(224, 20%, 29%)',
        }}
      >
        {name}
      </h2>
      <p className="text-sm mb-4" style={{ color: 'hsl(219, 15%, 39%)' }}>
        with {trialDays} day free trial
      </p>
      <p
        className="text-4xl font-bold mb-6"
        style={{ color: 'hsl(224, 20%, 29%)' }}
      >
        ${price / 100}{' '}
        <span className="text-xl font-normal" style={{ color: 'hsl(219, 15%, 39%)' }}>
          per user / {interval}
        </span>
      </p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check
              className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0"
              style={{ color: 'hsl(258, 100%, 38%)' }}
            />
            <span style={{ color: 'hsl(224, 20%, 29%)' }}>{feature}</span>
          </li>
        ))}
      </ul>
      <form action={checkoutAction}>
        <input type="hidden" name="priceId" value={priceId} />
        <SubmitButton highlighted={highlighted} />
      </form>
    </div>
  );
}
