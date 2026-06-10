export function MessageThread({ messages }: { messages: { id: string; senderType: "internal" | "partner"; senderId: string; body: string; createdAt: string }[] }) {
  if (!messages.length) return <div style={{ color: "var(--muted)" }}>No messages yet.</div>;
  return (
    <div className="message-thread">
      {messages.map((message) => (
        <div key={message.id} className={`message ${message.senderType === "partner" ? "partner" : ""}`}>
          <div style={{ fontSize: 12, opacity: .75, marginBottom: 6 }}>
            {message.senderType === "internal" ? "Internal" : "Partner"} • {new Date(message.createdAt).toLocaleString()}
          </div>
          {message.body}
        </div>
      ))}
    </div>
  );
}
