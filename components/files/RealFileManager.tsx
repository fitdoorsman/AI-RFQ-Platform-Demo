"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

type FileItem = {
  id: string;
  filename: string;
  url: string;
  version: number;
};

export function RealFileManager({
  rfqId,
  files
}: {
  rfqId: string;
  files: FileItem[];
}) {
  const router = useRouter();
  const uploadRef = useRef<HTMLInputElement | null>(null);
  const replaceRefs = useRef<Record<string, HTMLInputElement | null>>({});
  const [loading, setLoading] = useState<string | null>(null);

  async function uploadNew() {
    const file = uploadRef.current?.files?.[0];
    if (!file) {
      window.alert("Select a file first.");
      return;
    }

    const form = new FormData();
    form.append("rfqId", rfqId);
    form.append("file", file);
    setLoading("upload");

    const res = await fetch("/api/files/upload", {
      method: "POST",
      body: form
    });

    setLoading(null);

    if (!res.ok) {
      window.alert("Unable to upload file.");
      return;
    }

    if (uploadRef.current) uploadRef.current.value = "";
    router.refresh();
  }

  async function replaceFile(fileId: string) {
    const file = replaceRefs.current[fileId]?.files?.[0];
    if (!file) {
      window.alert("Select a replacement file first.");
      return;
    }

    const form = new FormData();
    form.append("fileId", fileId);
    form.append("file", file);
    setLoading(fileId);

    const res = await fetch("/api/files/replace", {
      method: "POST",
      body: form
    });

    setLoading(null);

    if (!res.ok) {
      window.alert("Unable to replace file.");
      return;
    }

    if (replaceRefs.current[fileId]) replaceRefs.current[fileId]!.value = "";
    router.refresh();
  }

  return (
    <div className="card">
      <h2 style={{ marginTop: 0 }}>File Manager</h2>

      <div className="field">
        <label>Upload New RFQ File</label>
        <input ref={uploadRef} type="file" />
      </div>
      <button className="button primary" style={{ marginTop: 10 }} onClick={uploadNew} disabled={loading === "upload"}>
        {loading === "upload" ? "Uploading..." : "Upload File"}
      </button>

      <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
        {files.map((file) => (
          <div key={file.id} className="list-card">
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
              <div>
                <div style={{ fontWeight: 700 }}>{file.filename}</div>
                <div style={{ color: "var(--muted)", fontSize: 13 }}>Version {file.version}</div>
              </div>
              <a className="button" href={file.url} target="_blank">
                Download
              </a>
            </div>

            <div style={{ marginTop: 12, display: "grid", gap: 8 }}>
              <input
                type="file"
                ref={(el) => {
                  replaceRefs.current[file.id] = el;
                }}
              />
              <button className="button" onClick={() => replaceFile(file.id)} disabled={loading === file.id}>
                {loading === file.id ? "Replacing..." : "Replace / New Version"}
              </button>
            </div>
          </div>
        ))}
        {!files.length ? <div style={{ color: "var(--muted)" }}>No RFQ files yet.</div> : null}
      </div>
    </div>
  );
}
