import { NextResponse } from "next/server";

const WP_URL =
  "https://oliviers45.sg-host.com/wp-json/wc/store/products?per_page=100";

export async function GET() {
  try {
    const res = await fetch(WP_URL, { cache: "no-store" });
    if (!res.ok) {
      return NextResponse.json(
        { error: "Upstream WP fetch failed" },
        { status: res.status }
      );
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("WP products proxy error:", error);
    return NextResponse.json(
        { error: "Unable to load products" },
        { status: 500 }
    );
  }
}
