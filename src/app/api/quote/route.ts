import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({
    ok: true,
    received: body,
    leadStatus: "ready",
    quoteContext: {
      productFamily: body.productFamily ?? null,
      selectedMachine: body.selectedMachine ?? null,
    },
  });
}
