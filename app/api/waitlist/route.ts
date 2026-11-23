import { NextResponse } from "next/server";

/**
 * Waitlist stub — validates input and returns 200, but stores nothing yet.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON" },
      { status: 400 },
    );
  }

  const { contact, audience } = (body ?? {}) as {
    contact?: unknown;
    audience?: unknown;
  };
  if (
    typeof contact !== "string" ||
    contact.trim().length < 5 ||
    contact.length > 200
  ) {
    return NextResponse.json(
      { ok: false, error: "Invalid contact" },
      { status: 422 },
    );
  }
  if (
    audience !== undefined &&
    !["sender", "commuter", "business"].includes(String(audience))
  ) {
    return NextResponse.json(
      { ok: false, error: "Invalid audience" },
      { status: 422 },
    );
  }

  // Intentionally not persisted yet.
  return NextResponse.json({ ok: true });
}
