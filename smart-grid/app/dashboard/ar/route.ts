import { NextResponse } from "next/server";
import fs from "fs/promises";

export async function GET() {
  const htmlContent = await fs.readFile(
    process.cwd() + "/static/ar.html",
    "utf-8",
  );

  return new NextResponse(htmlContent, {
    status: 200,
    headers: {
      "Content-Type": "text/html",
      // Optional: Add cache control headers
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=60",
    },
  });
}
