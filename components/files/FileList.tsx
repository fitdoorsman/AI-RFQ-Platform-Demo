export function FileList({ files }: { files: { id: string; filename: string; url: string; previewUrl?: string | null; version: number }[] }) {
  if (!files.length) return <div style={{ color: "var(--muted)" }}>No files attached.</div>;
  return (
    <div style={{ display: "grid", gap: 10 }}>
      {files.map((file) => (
        <div key={file.id} className="list-card" style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
          <div>
            <div style={{ fontWeight: 700 }}>{file.filename}</div>
            <div style={{ color: "var(--muted)", fontSize: 13 }}>Version {file.version}</div>
          </div>
          <a className="button" href={file.url}>Download</a>
        </div>
      ))}
    </div>
  );
}
