import { NextResponse } from "next/server";

const fallbackRates = {
  base: "USD",
  date: new Date().toISOString().slice(0, 10),
  rates: {
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    JPY: 156.2,
    AUD: 1.51,
    CAD: 1.36,
    CHF: 0.9,
    SGD: 1.35,
    AED: 3.67,
    INR: 83.8,
    NOK: 10.56,
    SEK: 10.35,
    NZD: 1.67,
    ZAR: 18.4,
  },
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const from = searchParams.get("from") ?? "USD";

  try {
    const response = await fetch(`https://api.frankfurter.app/latest?from=${from}`);

    if (!response.ok) {
      throw new Error("Rate provider responded with an error.");
    }

    const data = await response.json();

    return NextResponse.json(data, { status: 200 });
  } catch {
    return NextResponse.json(
      {
        ...fallbackRates,
        base: from,
      },
      { status: 200 }
    );
  }
}
