import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ubmnnpxokmzkhhyrodxb.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVibW5ucHhva216a2hoeXJvZHhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwOTYzMDksImV4cCI6MjA4NDY3MjMwOX0.1FQ9vVEdrFtUUxuN3bvWb295EQsDr27LWtwUWuTeaWc'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
