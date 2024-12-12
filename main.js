import "./style.css";

// Theme imports
import "@spectrum-web-components/theme/express/scale-medium.js";
import "@spectrum-web-components/theme/express/theme-light.js";
import "@spectrum-web-components/theme/sp-theme.js";
// Component imports
import "@spectrum-web-components/button/sp-button.js";
import "@spectrum-web-components/divider/sp-divider.js";

// Encapsulate everything in an async function to avoid top-level await issues
const initializeApp = async () => {
  // Load the Adobe SDK
  await import("https://cc-embed.adobe.com/sdk/v4/CCEverywhere.js");
  console.log("CCEverywhere loaded", window.CCEverywhere);

  // Host information for the Adobe SDK
  const hostInfo = {
    clientId: import.meta.env.VITE_API_KEY, // Replace with a service account key if available
    appName: "Jowan Print Design with Adobe Express",
  };

  // Optional configuration parameters (locale, login, etc.)
  const configParams = {};

  // Initialize Adobe Express Editor
  const { editor } = await window.CCEverywhere.initialize(
    hostInfo,
    configParams
  );

  // Function to launch the editor
  const launchEditing = async () => {
    let docConfig = {}; // Optional document settings (canvas size)
    let appConfig = {}; // Optional app settings (allowed files, templates, etc.)
    let exportConfig = []; // Optional export settings (labels, actions, styles, etc.)

    // Open the editor
    editor.create(docConfig, appConfig, exportConfig);
  };

  // Automatically launch the editor on page load
  launchEditing();

  // Add manual trigger (if needed)
  document.getElementById("launchExpress").onclick = launchEditing;
};

// Call the initializeApp function
initializeApp();
