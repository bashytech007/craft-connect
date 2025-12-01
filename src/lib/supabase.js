import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

// Create client - will work at runtime when proper env vars are set
// Using placeholders for build time to allow build to complete
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
