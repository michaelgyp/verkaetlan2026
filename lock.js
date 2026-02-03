(function () {
  const overlay = document.getElementById("lock-overlay");
  const unlockButton = document.getElementById("unlock-button");

  if (!overlay) return;

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

  // Hide the unlock button for visitors
  if (unlockButton) {
    unlockButton.style.display = "none";
  }

  const checkConfig = async () => {
    try {
      const res = await fetch("./data/config.json", { cache: "no-store" });
      if (!res.ok) return;

      const cfg = await res.json();

      // If site is open -> hide overlay, if site closed -> show overlay
      if (cfg && cfg.isOpen === true) {
        hideOverlay();
      } else {
        showOverlay();
      }
    } catch (e) {
      console.error("Could not read config.json", e);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", checkConfig);
  } else {
    checkConfig();
  }
})();
