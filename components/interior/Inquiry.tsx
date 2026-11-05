'use client';

import { useRef, useState, type FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import brand from '@/config/brand.json';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Inquiry({ path, title, product }: { path: string; title: string; product?: string }) {
  const [status, setStatus] = useState<Status>('idle');
  const pending = useRef(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;

    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form));
    pending.current = true;
    setStatus('sending');
    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fields, products: product ? [product] : [], page: path, pageTitle: title }),
      });
      if (!response.ok || (await response.json()).ok !== true) throw new Error('Inquiry failed');
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      pending.current = false;
    }
  }

  return (
    <section className="cl-inquiry" id="inquiry" aria-labelledby="inquiry-title">
      <div className="cl-wrap cl-split">
        <div>
          <p className="cl-eyebrow">Project inquiry</p>
          <h2 id="inquiry-title">Tell us about your project.</h2>
          <p>Share the intended use, destination, and configuration you have in mind.</p>
          {product && <p><strong>Model:</strong> {product}</p>}
          <a href={`mailto:${brand.email}`}>{brand.email}</a>
        </div>
        <form className="cl-form" method="post" action="/api/inquiry" onSubmit={submit} aria-busy={status === 'sending'}>
          <label>Name<input name="Name" autoComplete="name" maxLength={280} required /></label>
          <label>Work email<input type="email" name="Email" autoComplete="email" maxLength={280} required /></label>
          <label>Company<input name="Company" autoComplete="organization" maxLength={280} /></label>
          <label>Phone / WhatsApp<input type="tel" name="Phone / WhatsApp" autoComplete="tel" maxLength={80} /></label>
          <label>Destination country<input name="Destination country" autoComplete="country-name" maxLength={120} /></label>
          <label>Quantity<input type="number" name="Quantity" min={1} max={1_000_000} step={1} /></label>
          <label className="cl-form-wide">Project requirements<textarea name="Message" rows={4} maxLength={4000} required /></label>
          <button className="cl-button" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send inquiry'} <ArrowRight size={17} aria-hidden />
          </button>
          <div className="cl-form-wide cl-form-status" role="status" aria-live="polite">
            {status === 'success' && 'Thank you. Your inquiry has been sent.'}
            {status === 'error' && <>We could not send your inquiry. Please try again or <a href={`mailto:${brand.email}`}>email us</a>.</>}
          </div>
        </form>
      </div>
    </section>
  );
}
