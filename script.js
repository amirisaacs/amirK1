// Add your Tally form ID below after creating the form at https://tally.so
// Example: const TALLY_FORM_ID = "wA1b2C";
const TALLY_FORM_ID = "YOUR_TALLY_FORM_ID";

document.getElementById("year").textContent = new Date().getFullYear();

if (TALLY_FORM_ID && TALLY_FORM_ID !== "YOUR_TALLY_FORM_ID") {
  const container = document.getElementById("tally-form-container");
  const iframe = document.createElement("iframe");
  iframe.src = `https://tally.so/embed/${encodeURIComponent(TALLY_FORM_ID)}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;
  iframe.width = "100%";
  iframe.height = "420";
  iframe.frameBorder = "0";
  iframe.title = "טופס יצירת קשר עם אמיר";
  iframe.loading = "lazy";
  iframe.style.border = "0";
  container.replaceChildren(iframe);
}