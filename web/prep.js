(() => {
  const docItems = Array.from(document.querySelectorAll("[data-doc-item]"));
  const overlay = document.querySelector("[data-preview-overlay]");
  const previewTitle = document.querySelector("[data-preview-title]");
  const previewBody = document.querySelector("[data-preview-body]");
  const closeButton = document.querySelector("[data-preview-close]");
  const refreshButton = document.querySelector("[data-refresh-docs]");

  if (!docItems.length) {
    return;
  }

  const docs = new Map();

  function formatSize(bytes) {
    if (!bytes) {
      return "0 KB";
    }

    const kb = bytes / 1024;
    if (kb < 1024) {
      return `${Math.max(1, Math.round(kb))} KB`;
    }

    return `${(kb / 1024).toFixed(1)} MB`;
  }

  function revokeObjectUrl(entry) {
    if (entry.objectUrl) {
      URL.revokeObjectURL(entry.objectUrl);
      entry.objectUrl = null;
    }
  }

  function updateButtons(entry, enabled) {
    entry.previewButton.disabled = !enabled;
    entry.downloadButton.disabled = !enabled;
    entry.removeButton.disabled = !enabled;
  }

  function clearEntry(entry) {
    revokeObjectUrl(entry);
    entry.file = null;
    entry.nameNode.textContent = entry.initialName;
    entry.statusNode.textContent = entry.emptyStatus;
    updateButtons(entry, false);
    entry.input.value = "";
  }

  function setEntryFile(entry, file) {
    revokeObjectUrl(entry);
    entry.file = file;
    entry.objectUrl = URL.createObjectURL(file);
    entry.nameNode.textContent = file.name;
    entry.statusNode.textContent = `已上傳 · ${formatSize(file.size)}`;
    updateButtons(entry, true);
  }

  function closePreview() {
    overlay.hidden = true;
    previewBody.innerHTML = "";
    previewTitle.textContent = "檔案預覽";
  }

  function openPreview(entry) {
    if (!entry.file || !entry.objectUrl) {
      return;
    }

    previewBody.innerHTML = "";
    previewTitle.textContent = entry.file.name;

    if (entry.file.type.startsWith("image/")) {
      const image = document.createElement("img");
      image.className = "preview-image";
      image.src = entry.objectUrl;
      image.alt = entry.file.name;
      previewBody.appendChild(image);
    } else if (entry.file.type === "application/pdf" || entry.file.name.toLowerCase().endsWith(".pdf")) {
      const frame = document.createElement("iframe");
      frame.className = "preview-frame";
      frame.src = entry.objectUrl;
      frame.title = entry.file.name;
      previewBody.appendChild(frame);
    } else {
      const placeholder = document.createElement("div");
      placeholder.className = "preview-placeholder";
      placeholder.innerHTML = "<div><strong>這個檔案格式目前無法直接預覽</strong><p>你可以改成 PDF、PNG、JPG 或 WEBP 再上傳。</p></div>";
      previewBody.appendChild(placeholder);
    }

    overlay.hidden = false;
  }

  function downloadFile(entry) {
    if (!entry.file || !entry.objectUrl) {
      return;
    }

    const anchor = document.createElement("a");
    anchor.href = entry.objectUrl;
    anchor.download = entry.file.name;
    anchor.rel = "noopener";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  }

  function refreshAll() {
    docs.forEach((entry) => clearEntry(entry));
  }

  docItems.forEach((card) => {
    const key = card.getAttribute("data-doc-key");
    const entry = {
      key,
      card,
      nameNode: card.querySelector("[data-doc-name]"),
      statusNode: card.querySelector("[data-doc-status]"),
      input: card.querySelector("[data-file-input]"),
      previewButton: card.querySelector('[data-action="preview"]'),
      downloadButton: card.querySelector('[data-action="download"]'),
      removeButton: card.querySelector('[data-action="remove"]'),
      uploadButton: card.querySelector("[data-upload-target]"),
      initialName: card.querySelector("[data-doc-name]")?.textContent?.trim() || "尚無檔案",
      emptyStatus: card.querySelector("[data-doc-status]")?.textContent?.trim() || "尚無檔案",
      file: null,
      objectUrl: null,
    };

    docs.set(key, entry);

    entry.uploadButton?.addEventListener("click", () => entry.input?.click());
    entry.input?.addEventListener("change", () => {
      const [file] = entry.input.files || [];
      if (file) {
        setEntryFile(entry, file);
      }
    });

    entry.previewButton?.addEventListener("click", () => openPreview(entry));
    entry.downloadButton?.addEventListener("click", () => downloadFile(entry));
    entry.removeButton?.addEventListener("click", () => clearEntry(entry));

    clearEntry(entry);
  });

  refreshButton?.addEventListener("click", refreshAll);
  closeButton?.addEventListener("click", closePreview);
  overlay?.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closePreview();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !overlay.hidden) {
      closePreview();
    }
  });
})();
