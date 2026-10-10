export type RangeKey = 'today' | 'week' | 'month' | '90d' | 'custom';

export type AdminDateRange = {
  key: RangeKey;
  from: string;
  to: string;
  start: string;
  end: string;
  label: string;
};

const ZONE = 'Asia/Shanghai';
const day = (date: Date) => new Intl.DateTimeFormat('en-CA', {
  timeZone: ZONE, year: 'numeric', month: '2-digit', day: '2-digit',
}).format(date);
const shift = (value: string, days: number) => {
  const date = new Date(`${value}T12:00:00Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
};
const validDate = (value: string | null) => {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T12:00:00Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
};
const midnight = (value: string) => new Date(`${value}T00:00:00+08:00`).toISOString();

export function adminDateRange(params: URLSearchParams, now = new Date()): AdminDateRange {
  const today = day(now);
  const requested = params.get('range');
  const key: RangeKey = requested === 'week' || requested === 'month' || requested === '90d' || requested === 'custom' ? requested : 'today';
  let from = today;
  let to = today;
  if (key === 'week') {
    const weekday = new Date(`${today}T12:00:00Z`).getUTCDay();
    from = shift(today, -(weekday === 0 ? 6 : weekday - 1));
  } else if (key === 'month') {
    from = `${today.slice(0, 7)}-01`;
  } else if (key === '90d') {
    from = shift(today, -89);
  } else if (key === 'custom') {
    const start = params.get('from');
    const finish = params.get('to');
    if (validDate(start) && validDate(finish) && start! <= finish! && finish! <= today) {
      from = start!;
      to = finish!;
    } else {
      throw new Error('Invalid date range');
    }
  }
  return {
    key, from, to, start: midnight(from), end: midnight(shift(to, 1)),
    label: key === 'today' ? '今天' : key === 'week' ? '本周' : key === 'month' ? '本月' : key === '90d' ? '近 90 天' : `${from} 至 ${to}`,
  };
}

export function rangeFromRequest(request: Request) {
  return adminDateRange(new URL(request.url).searchParams);
}
