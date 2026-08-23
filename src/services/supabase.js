import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jpkfigfnmpondbbcynja.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impwa2ZpZ2ZubXBvbmRiYmN5bmphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc0Nzg3OTIsImV4cCI6MjEwMzA1NDc5Mn0.QrLPW7-NUdQ3NjIE_6kaGWQZSq_ECeJE9RG4kzEpyNQ';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
