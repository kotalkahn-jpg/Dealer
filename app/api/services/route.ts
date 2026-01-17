// app/api/services/route.ts
import { NextResponse } from "next/server";
import { services } from "@/lib/services";

export function GET() {
  return NextResponse.json(services);
}
