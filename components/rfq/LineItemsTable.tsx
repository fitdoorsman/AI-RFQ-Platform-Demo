export function LineItemsTable({ items }: { items: { id: string; partNumber: string; quantity: number }[] }) {
  return (
    <table className="table">
      <thead><tr><th>Part Number</th><th>Quantity</th></tr></thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.partNumber}</td>
            <td>{item.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
