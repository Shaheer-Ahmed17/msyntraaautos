import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const role = user.app_metadata?.role;

  if (role !== "admin") {
    await supabase.auth.signOut();
    redirect("/admin/login");
  }

  redirect("/admin/dashboard");
}