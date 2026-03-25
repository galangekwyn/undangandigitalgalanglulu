// Supabase Configuration
// Get these values from your Supabase Project Settings: https://app.supabase.com/
const SUPABASE_URL = "https://evlrdekakjqxqciknmau.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2bHJkZWtha2pxeHFjaWtubWF1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDQyNTI3MCwiZXhwIjoyMDkwMDAxMjcwfQ.re1gYhLMUUazUBY5jjJJJ46nFCmwSj660Ff4UPGEYLs";

// Initialize Supabase Client
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
