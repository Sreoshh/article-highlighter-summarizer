const list = document.getElementById("clips");

function loadClips() {
  chrome.storage.local.get({ clips: [] }, ({ clips }) => {
    list.innerHTML = "";

    if (clips.length === 0) {
      list.innerHTML = "<li>No saved texts yet</li>";
      return;
    }

    clips.forEach((clip) => {
      const li = document.createElement("li");

      const text = document.createElement("span");
      text.textContent = "• " + clip.text;

      const del = document.createElement("button");
      del.textContent = "✕";
      del.className = "delete";
      del.onclick = () => deleteClip(clip.id);

      li.append(text, del);
      list.appendChild(li);
    });
  });
}

function deleteClip(id) {
  chrome.storage.local.get({ clips: [] }, ({ clips }) => {
    chrome.storage.local.set(
      { clips: clips.filter(c => c.id !== id) },
      loadClips
    );
  });
}

document.getElementById("highlightBtn").onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {

    chrome.scripting.executeScript(
      {
        target: { tabId: tab.id },
        files: ["content.js"]
      },
      () => {
        
        chrome.tabs.sendMessage(tab.id, { type: "HIGHLIGHT" });
      }
    );
  });
};


chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "CLIP_ADDED") loadClips();
});

loadClips();
