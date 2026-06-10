export type QuoteLineItem = { id: string; partNumber: string; quantity: number };
export type QuoteFile = { id: string; filename: string; url: string; previewUrl?: string | null; version: number };
export type Quote = {
  id: string; quoteNumber: string; title: string; process: string; material: string; finish: string;
  notes?: string | null; lineItems: QuoteLineItem[]; certifications: string[]; inspections: string[]; files: QuoteFile[];
};
export type RFQLineItem = { id: string; partNumber: string; quantity: number };
export type RFQ = {
  id: string; rfqNumber: string; sourceQuoteId: string; sourceQuoteNumber: string; title: string; process: string; material: string; finish: string;
  dueDate?: string | null; status: "Draft Ready" | "Distributed" | "Closed" | "Awarded"; notes?: string | null;
  lineItems: RFQLineItem[]; certifications: string[]; inspections: string[]; files: QuoteFile[];
};
export type Partner = { id: string; partnerNumber: string; companyName: string; certifications: string[]; capabilities: string[]; responseScore?: number | null };
export type PartnerQuote = { id: string; rfqId: string; partnerId: string; status: "Draft" | "Submitted" | "Declined"; submittedPrice?: string | null; leadTime?: string | null; notes?: string | null; attachmentFileId?: string | null };
export type Message = { id: string; rfqId: string; senderType: "internal" | "partner"; senderId: string; body: string; createdAt: string };
