'use client';

import { useState } from 'react';
import type { RangeKey } from '@/lib/admin-date-range';

export type RangeValue = { key: RangeKey; from: string; to: string; label: string };
const choices: { key: RangeKey; label: string }[] = [
  { key: 'today', label: '今天' }, { key: 'week', label: '本周' },
  { key: 'month', label: '本月' }, { key: '90d', label: '90天' },
  { key: 'custom', label: '自定义' },
];
export const rangeQuery = (value: Pick<RangeValue, 'key' | 'from' | 'to'>) => {
  const params = new URLSearchParams({ range: value.key });
  if (value.key === 'custom') { params.set('from', value.from); params.set('to', value.to); }
  return params.toString();
};

export default function AdminDateRange({ value, onChange, busy = false }: {
  value: RangeValue;
  onChange: (value: RangeValue) => void;
  busy?: boolean;
}) {
  const [customOpen, setCustomOpen] = useState(value.key === 'custom');
  const [from, setFrom] = useState(value.from);
  const [to, setTo] = useState(value.to);
  const [error, setError] = useState('');
  const select = (key: RangeKey) => {
    setError('');
    if (key === 'custom') { setCustomOpen(true); return; }
    setCustomOpen(false);
    onChange({ ...value, key, label: choices.find(choice => choice.key === key)?.label || value.label });
  };
  const apply = () => {
    if (!from || !to || from > to || to > new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Shanghai' })) {
      setError('请选择有效的起止日期'); return;
    }
    setError('');
    onChange({ key: 'custom', from, to, label: `${from} 至 ${to}` });
  };
  return <div className="admin-date-range">
    <div className="admin-date-choices" role="group" aria-label="时间范围">
      {choices.map(choice => <button key={choice.key} type="button" disabled={busy}
        className={value.key === choice.key ? 'active' : ''}
        aria-pressed={value.key === choice.key}
        onClick={() => select(choice.key)}>{choice.label}</button>)}
    </div>
    {customOpen ? <div className="admin-custom-dates">
      <label>开始日期<input type="date" value={from} max={to || undefined} onChange={event => setFrom(event.target.value)} /></label>
      <label>结束日期<input type="date" value={to} min={from || undefined} onChange={event => setTo(event.target.value)} /></label>
      <button type="button" className="admin-secondary" disabled={busy} onClick={apply}>查询</button>
      {error ? <span role="alert" className="admin-inline-error">{error}</span> : null}
    </div> : null}
  </div>;
}
