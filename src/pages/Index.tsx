import { useState, useCallback } from "react";
import { InvoiceHeader } from "@/components/invoice/InvoiceHeader";
import { InvoiceColumnHeaders } from "@/components/invoice/InvoiceColumnHeaders";
import { InvoiceItemRow } from "@/components/invoice/InvoiceItemRow";
import { InvoiceSummary } from "@/components/invoice/InvoiceSummary";
import { AddItemButton } from "@/components/invoice/AddItemButton";
import { EmptyInvoice } from "@/components/invoice/EmptyInvoice";
import type { InvoiceItem } from "@/types/invoice";

const generateId = () => Math.random().toString(36).substring(2, 9);

const generateInvoiceNumber = () => {
  const date = new Date();
  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, "0");
  return `INV-${year}${month}-${random}`;
};

const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const Index = () => {
  const [items, setItems] = useState<InvoiceItem[]>([]);
  const [taxRate, setTaxRate] = useState(8.5);
  const [newItemIds, setNewItemIds] = useState<Set<string>>(new Set());
  
  const invoiceNumber = useState(() => generateInvoiceNumber())[0];
  const currentDate = useState(() => formatDate(new Date()))[0];

  const addItem = useCallback(() => {
    const newId = generateId();
    const newItem: InvoiceItem = {
      id: newId,
      name: "",
      quantity: 1,
      price: 0,
    };
    setItems((prev) => [...prev, newItem]);
    setNewItemIds((prev) => new Set(prev).add(newId));
    
    // Remove animation flag after animation completes
    setTimeout(() => {
      setNewItemIds((prev) => {
        const next = new Set(prev);
        next.delete(newId);
        return next;
      });
    }, 300);
  }, []);

  const updateItem = useCallback(
    (id: string, field: keyof InvoiceItem, value: string | number) => {
      setItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, [field]: value } : item
        )
      );
    },
    []
  );

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const subtotal = items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:py-12 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground tracking-tight">
            Invoice Generator
          </h1>
          <p className="mt-2 text-muted-foreground">
            Create professional invoices with automatic calculations
          </p>
        </div>

        {/* Invoice Card */}
        <div className="invoice-paper">
          <InvoiceHeader invoiceNumber={invoiceNumber} date={currentDate} />
          
          <InvoiceColumnHeaders />

          {/* Items List */}
          {items.length === 0 ? (
            <EmptyInvoice />
          ) : (
            <div>
              {items.map((item) => (
                <InvoiceItemRow
                  key={item.id}
                  item={item}
                  onUpdate={updateItem}
                  onRemove={removeItem}
                  isAnimating={newItemIds.has(item.id)}
                />
              ))}
            </div>
          )}

          <AddItemButton onClick={addItem} />

          <InvoiceSummary
            subtotal={subtotal}
            taxRate={taxRate}
            onTaxRateChange={setTaxRate}
          />
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          Custom feature: Adjustable tax rate for different jurisdictions
        </p>
      </div>
    </div>
  );
};

export default Index;
