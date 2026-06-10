"use client";

import { useState } from "react";

export function MockFileManager() {
  const [filename, setFilename] = useState("");
  const [files, setFiles] = useState<string[]>([]);

  function addFile() {
    if (!filename.trim()) return;
    setFiles((prev) => [...prev, filename.trim()]);
    setFilename("");
  }

  return (
    <div className="card">
      <h2 style={{ marginTop: 0 }}>Mock File Manager</h2>
      <div className="field">
        <label>Add File Name</label>
        <input value={filename} onChange={(e) => setFilename(e.target.value)} placeholder="drawing_rev_b.pdf" />
      </div>
      <button className="button" style={{ marginTop: 10 }} onClick={addFile}>Add Mock File</button>
      <div style={{ display: "grid", gap: 10, marginTop: 14 }}>
        {files.map((file) => (
          <div key={file} className="list-card">{file}</div>
        ))}
        {!files.length ? <div style={{ color: "var(--muted)" }}>Use this as a placeholder until real storage is connected.</div> : null}
      </div>
    </div>
  );
}
