export const InvoiceColumnHeaders = () => {
  return (
    <div className="flex items-center gap-4 px-6 py-3 bg-secondary/50 border-b border-border text-sm font-medium text-muted-foreground">
      <div className="flex-1 min-w-[140px]">Item</div>
      <div className="w-24 text-center">Qty</div>
      <div className="w-28 text-right">Price</div>
      <div className="w-28 text-right">Total</div>
      <div className="w-10" /> {/* Spacer for remove button */}
    </div>
  );
};
