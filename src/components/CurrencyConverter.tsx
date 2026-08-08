"use client";

import { useMemo, useState } from "react";

type CurrencyCode = string;

const currencies = [
  { code: "USD", name: "US Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound" },
  { code: "JPY", name: "Japanese Yen" },
  { code: "AUD", name: "Australian Dollar" },
  { code: "CAD", name: "Canadian Dollar" },
  { code: "CHF", name: "Swiss Franc" },
  { code: "SGD", name: "Singapore Dollar" },
  { code: "AED", name: "UAE Dirham" },
  { code: "INR", name: "Indian Rupee" },
  { code: "NOK", name: "Norwegian Krone" },
  { code: "SEK", name: "Swedish Krona" },
  { code: "NZD", name: "New Zealand Dollar" },
  { code: "ZAR", name: "South African Rand" },
];

const fallbackRates: Record<CurrencyCode, number> = {
  USD: 1,
  EUR: 0.8669,
  GBP: 0.7892,
  JPY: 156.25,
  AUD: 1.509,
  CAD: 1.363,
  CHF: 0.9003,
  SGD: 1.345,
  AED: 3.6725,
  INR: 83.78,
  NOK: 10.55,
  SEK: 10.33,
  NZD: 1.674,
  ZAR: 18.36,
};

function formatMoney(value: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(value);
}

function getRate(currency: string) {
  return fallbackRates[currency] ?? 1;
}

export default function CurrencyConverter() {
  const [amount, setAmount] = useState("1000");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  const convertedAmount = useMemo(() => {
    const numericAmount = Number(amount) || 0;
    const fromRate = getRate(fromCurrency);
    const toRate = getRate(toCurrency);

    return numericAmount * (toRate / fromRate);
  }, [amount, fromCurrency, toCurrency]);

  const exchangeRate = useMemo(() => {
    const fromRate = getRate(fromCurrency);
    const toRate = getRate(toCurrency);
    return toRate / fromRate;
  }, [fromCurrency, toCurrency]);

  return (
    <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
      <div className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-2xl shadow-slate-950/40 backdrop-blur sm:p-8">
        <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200">
          Rate snapshot engine
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
            Convert money across borders in seconds.
          </h2>
          <p className="max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            Built for modern businesses that move fast. Track live rates, compare currencies, and send accurate quotes to customers in real time.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
          <div className="mb-4 flex items-center justify-between text-sm text-slate-400">
            <span>Instant quote</span>
            <span>Updated just now</span>
          </div>

          <div className="flex flex-col gap-4">
            <label className="space-y-2 text-sm text-slate-200">
              <span>Amount</span>
              <input
                type="number"
                value={amount}
                min="0"
                step="0.01"
                onChange={(event) => setAmount(event.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none ring-0 focus:border-cyan-400"
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-200">
                <span>From</span>
                <select
                  value={fromCurrency}
                  onChange={(event) => {
                    setFromCurrency(event.target.value);
                  }}
                  className="w-full min-w-0 appearance-none rounded-xl border border-slate-700/80 bg-slate-900/90 px-4 py-3 pr-10 text-white shadow-sm shadow-slate-950/40 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                >
                  {currencies.map((currency) => (
                    <option key={currency.code} value={currency.code}>
                      {currency.code} • {currency.name}
                    </option>
                  ))}
                </select>
              </label>

              <label className="space-y-2 text-sm text-slate-200">
                <span>To</span>
                <select
                  value={toCurrency}
                  onChange={(event) => {
                    setToCurrency(event.target.value);
                  }}
                  className="w-full min-w-0 appearance-none rounded-xl border border-slate-700/80 bg-slate-900/90 px-4 py-3 pr-10 text-white shadow-sm shadow-slate-950/40 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                >
                  {currencies.map((currency) => (
                    <option key={currency.code} value={currency.code}>
                      {currency.code} • {currency.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-gradient-to-r from-cyan-500/15 to-violet-500/15 p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
              Converted amount
            </p>
            <div className="mt-2 flex flex-wrap items-end gap-3">
              <p className="text-3xl font-semibold text-white sm:text-4xl">
                {formatMoney(convertedAmount, toCurrency)}
              </p>
              <p className="text-sm text-slate-300">
                {amount || "0"} {fromCurrency} → {toCurrency}
              </p>
            </div>
            <p className="mt-3 text-sm text-slate-300">
              {`1 ${fromCurrency} = ${exchangeRate.toFixed(4)} ${toCurrency}`}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4 sm:space-y-5">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/70 sm:p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
            Why this project matters
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>• Real-time rate updates for a practical developer demo</li>
            <li>• Clean, responsive UI built for future product experiments</li>
            <li>• A strong foundation for personal and professional growth</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-6">
          <p className="text-2xl font-semibold text-slate-900">Always evolving</p>
          <p className="mt-2 text-sm text-slate-600">
            This project is a personal playground for testing ideas, refining UI, and building toward future applications.
          </p>
        </div>
      </div>
    </section>
  );
}
