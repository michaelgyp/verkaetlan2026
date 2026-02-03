import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const client = createClient(
  "https://rtiddewyylgihlgsugmi.supabase.co",
  "sb_publishable_fLwMwlg1k5QC5z1fOf81eg_3YiQln25"
);

const overlay = document.getElementById("lock-overlay");

// Helper to handle the UI toggle
const toggleOverlay = (isOpen) => {
  if (isOpen) {
    overlay.style.display = "none";
    document.body.classList.remove("locked");
  } else {
    overlay.style.display = "flex";
    document.body.classList.add("locked");
  }
};

async function init() {
  // 1. Get the initial state
  const { data, error } = await client
    .from("site_config")
    .select("isOpen")
    .eq("id", 1)
    .maybeSingle();

  if (data) toggleOverlay(data.isOpen);

  // 2. Subscribe to changes
  client
    .channel('site_status')
    .on(
      'postgres_changes', 
      { 
        event: 'UPDATE', 
        schema: 'public', 
        table: 'site_config', 
        filter: 'id=eq.1' 
      }, 
      (payload) => {
        console.log('Change received!', payload);
        toggleOverlay(payload.new.isOpen);
      }
    )
    .subscribe();
}

init();