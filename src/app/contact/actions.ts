"use server";

import { supabaseAdmin } from "@/utils/supabase/admin";

type InquiryInput = {
  name: string;
  email: string;
  interest: string;
  message: string;
};

export type InquiryResult =
  | { success: true }
  | { success: false; error: string };

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function submitInquiry(
  input: InquiryInput
): Promise<InquiryResult> {
  const name = input.name.trim();
  const email = input.email.trim();
  const interest = input.interest.trim();
  const message = input.message.trim();

  if (!name || !email || !interest) {
    return {
      success: false,
      error: "Please complete all required fields.",
    };
  }

  if (!isValidEmail(email)) {
    return {
      success: false,
      error: "Please enter a valid email address.",
    };
  }

  const { error } = await supabaseAdmin.from("inquiries").insert({
    name,
    email,
    interest,
    message: message || null,
  });

  if (error) {
    console.error("Failed to submit inquiry:", error);

    return {
      success: false,
      error:
        "Something went wrong submitting your enquiry. Please try again.",
    };
  }

  return { success: true };
}