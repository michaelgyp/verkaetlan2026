(function () {
  const overlay = document.getElementById("lock-overlay");

  if (!overlay) {
    console.error("No overlay");
    return;
  }

  // Hide overlay (unlock)
  const hideOverlay = () => {
    overlay.classList.add("lock-overlay--hidden");
    document.body.classList.remove("locked"); // allow scrolling
    setTimeout(() => {
      overlay.style.display = "none";
    }, 240);
  };

  // Show overlay (lock)
  const showOverlay = () => {
    overlay.style.display = "flex"; // ensure it becomes visible
    overlay.classList.remove("lock-overlay--hidden");
    document.body.classList.add("locked"); // disable scrolling
  };

  // Initialize Supabase client
  const SUPABASE_URL = "https://rtiddewyylgihlgsugmi.supabase.co"; // replace with your project URL
  const SUPABASE_ANON_KEY = "sb_publishable_fLwMwlg1k5QC5z1fOf81eg_3YiQln25"; // replace with your publishable anon key
  const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  const checkConfig = async () => {
    try {
      const { data, error } = await supabase
        .from("site_config")
        .select("isOpen")
        .eq("id", 1)
        .single();

      if (error) {
        console.error("Supabase error:", error);
        return;
      }

      if (!data) return;

      if (data.isOpen === true) {
        hideOverlay();
      } else {
        showOverlay();
      }
    } catch (e) {
      console.error("Could not fetch config from Supabase", e);
    }
  };

  // Run on page load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", checkConfig);
  } else {
    checkConfig();
  }

  // Optional: poll every 5 seconds for live updates
  setInterval(checkConfig, 5000);
})();
