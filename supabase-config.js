// Supabase Configuration
// Get these values from your Supabase Project Settings: https://app.supabase.com/
const SUPABASE_URL = "https://evlrdekakjqxqciknmau.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2bHJkZWtha2pxeHFjaWtubWF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0MjUyNzAsImV4cCI6MjA5MDAwMTI3MH0.0dUckejILxVeWGEtW3b3zX1HtbTmVQqR_aLSXT65I4Q";

// Initialize Supabase Client
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
