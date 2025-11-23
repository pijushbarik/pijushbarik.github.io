function copyToClipboard(copyBtn, text) {
  navigator.clipboard.writeText(text).then(() => {
    copyBtn.innerText = "Copied!";
    setTimeout(() => (copyBtn.innerText = "Copy"), 2000);
  });
}

document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("copy-btn")) return;

  const copyBtn = e.target;
  const wrapper = e.target.closest(".code-wrapper");
  const code = wrapper.querySelector("pre code");

  copyToClipboard(copyBtn, code.innerText);
});