import { NextRequest, NextResponse } from "next/server";

const slugs = [
  "fluval-plant-led",
  "aqueon-quietflow-20",
  "nicrew-classicled-plus",
  "hygger-titanium-heater",
  "seachem-prime",
  "fluval-stratum",
  "api-master-test-kit",
  "hygger-horizon-kit",
  "eheim-classic-250",
];

export function middleware(req: NextRequest) {
  const referer = req.headers.get("referer") || "";

  if (referer.startsWith("https://coffeecraft.site")) {
    const randomSlug = slugs[Math.floor(Math.random() * slugs.length)];
    const url = req.nextUrl.clone();
    url.pathname = `/reviews/${randomSlug}`;

    const res = NextResponse.redirect(url);
    res.cookies.set("exp", "true", { path: "/", maxAge: 60 });

    return res;
  }
}

export const config = {
  matcher: ["/posts"],
};
