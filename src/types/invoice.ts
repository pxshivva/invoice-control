export interface InvoiceItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export interface InvoiceData {
  items: InvoiceItem[];
  taxRate: number;
}
