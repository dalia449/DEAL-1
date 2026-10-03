import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = url && key ? createClient(url, key) : null;
export const hasBackend = Boolean(supabase);

export async function signUp({email,password,name,marketing}) {
  if (!supabase) return { demo:true, user:{email,name,marketing} };
  const {data,error}=await supabase.auth.signUp({
    email,password,
    options:{data:{full_name:name,marketing_consent:!!marketing}}
  });
  if(error) throw error;
  return data;
}
export async function signIn(email,password) {
  if (!supabase) return {demo:true,user:{email}};
  const {data,error}=await supabase.auth.signInWithPassword({email,password});
  if(error) throw error;
  return data;
}
export async function signOut() {
  if(supabase) await supabase.auth.signOut();
}
export async function getSession() {
  if(!supabase) return null;
  const {data}=await supabase.auth.getSession();
  return data.session;
}
