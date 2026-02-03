(function () {
  const overlay = document.getElementById("lock-overlay");
  const unlockButton = document.getElementById("unlock-button");

  if (!overlay) return;

  const hideOverlay = () => {
    overlay.classList.add("lock-overlay--hidden");
    setTimeout(() => {
      overlay.style.display = "none";
    }, 240);
  };

  // Hide the button for visitors – opening is controlled globally
  if (unlockButton) {
    unlockButton.style.display = "none";
  }

  const checkConfig = async () => {
    try {
      const res = await fetch("./data/config.json", { cache: "no-store" });
      if (!res.ok) return;
      const cfg = await res.json();
      if (cfg && cfg.isOpen === true) {
        hideOverlay();
      }
    } catch (e) {
      console.error("Kundi ikki lesa config.json", e);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", checkConfig);
  } else {
    checkConfig();
  }
})();

