import { NextResponse } from "next/server";
import { adminSupabase } from "@/lib/adminSupabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      id,
      name,
      from_name,
      message,
      photos,
      theme,
      love_date,
      first_met_date,
      first_met_text,
      special_moment_text,
      secret_message,
      quiz_q1,
      quiz_a1,
      quiz_q2,
      quiz_a2,
      quiz_q3,
      quiz_a3,
    } = body;

    if (!id || !name || !from_name || !message) {
      return NextResponse.json(
        { error: "Required fields are missing." },
        { status: 400 }
      );
    }

    const { error } = await adminSupabase
      .from("surprises")
      .insert({
        id,
        name,
        from_name,
        message,
        photos: photos || [],
        theme: theme || "romantic",
        love_date: love_date || null,
        first_met_date: first_met_date || null,
        first_met_text: first_met_text || null,
        special_moment_text: special_moment_text || null,
        secret_message: secret_message || null,
        quiz_q1: quiz_q1 || null,
        quiz_a1: quiz_a1 || null,
        quiz_q2: quiz_q2 || null,
        quiz_a2: quiz_a2 || null,
        quiz_q3: quiz_q3 || null,
        quiz_a3: quiz_a3 || null,
      });

    if (error) {
      console.error("Supabase insert error:", error);

      return NextResponse.json(
        { error: "Could not create surprise." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id });
  } catch (error) {
    console.error("Create surprise API error:", error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}