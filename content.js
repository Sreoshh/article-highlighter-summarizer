chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type !== "HIGHLIGHT") return;

  const selection = window.getSelection();
  if (!selection || selection.toString().trim() === "") {
    alert("Please select text first");
    return;
  }

  const text = selection.toString().trim();

  const isNoHighlightSite =
    location.hostname.includes("chat.openai.com") ||
    location.hostname.includes("chatgpt.com") ||
    location.hostname.includes("vercel.app");

  chrome.storage.local.get({ clips: [] }, ({ clips }) => {
    clips.push({
      id: crypto.randomUUID(),
      text,
      url: location.href,
      created: Date.now()
    });

    chrome.storage.local.set({ clips }, () => {
      chrome.runtime.sendMessage({ type: "CLIP_ADDED" });
    });
  });


  if (!isNoHighlightSite && selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const mark = document.createElement("mark");

    mark.style.backgroundColor = "#ffeb7a";
    mark.style.padding = "2px 4px";
    mark.style.borderRadius = "4px";
    mark.textContent = text;

    range.deleteContents();
    range.insertNode(mark);
  }

  selection.removeAllRanges();
});
