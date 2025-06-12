import 'react-native-url-polyfill/auto';
 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabase_url = "https://ceripebktlzbjkvmiumr.supabase.co";
const supabase_anonkey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlcmlwZWJrdGx6Ymprdm1pdW1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5NTU5MzgsImV4cCI6MjA2MDUzMTkzOH0.Ig7jVbhAi4_6-uPmhsgjgHpxkZZET0C8yz7BaH45IY4";

export const supabase = createClient(supabase_url, supabase_anonkey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});


