import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = sb_publishable_2KLdC3e75D5mP-juy23Iuw_rkDJwSVb
const SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkbnNkb2Zobmhqd2JzcHRpcG9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2MjEyMzIsImV4cCI6MjA5NDE5NzIzMn0.s4t6aJgB6QNxZFDcYEJOt0xP6zgDW6lQJYqR7s0VG0A

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
)
