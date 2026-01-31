import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { InvoiceItem } from "@/types/invoice";

interface InvoiceItemRowProps {
  item: InvoiceItem;
  onUpdate: (id: string, field: keyof InvoiceItem, value: string | number) => void;
  onRemove: (id: string) => void;
  isAnimating?: boolean;
}

export const InvoiceItemRow = ({ item, onUpdate, onRemove, isAnimating }: InvoiceItemRowProps) => {
  const lineTotal = item.quantity * item.price;

  return (
    <div className={`invoice-row ${isAnimating ? 'fade-in' : ''}`}>
      {/* Item Name */}
      <div className="flex-1 min-w-[140px]">
        <Input
          type="text"
          placeholder="Item name"
          value={item.name}
          onChange={(e) => onUpdate(item.id, "name", e.target.value)}
          className="bg-transparent border-none shadow-none focus-visible:ring-1 focus-visible:ring-accent font-medium"
        />
      </div>

      {/* Quantity */}
      <div className="w-24">
        <Input
          type="number"
          min="1"
          placeholder="Qty"
          value={item.quantity || ""}
          onChange={(e) => onUpdate(item.id, "quantity", parseInt(e.target.value) || 0)}
          className="bg-transparent border-none shadow-none focus-visible:ring-1 focus-visible:ring-accent text-center font-mono"
        />
      </div>

      {/* Price */}
      <div className="w-28">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
          <Input
            type="number"
            min="0"
            step="0.01"
            placeholder="0.00"
            value={item.price || ""}
            onChange={(e) => onUpdate(item.id, "price", parseFloat(e.target.value) || 0)}
            className="bg-transparent border-none shadow-none focus-visible:ring-1 focus-visible:ring-accent pl-7 text-right font-mono"
          />
        </div>
      </div>

      {/* Line Total */}
      <div className="w-28 text-right font-mono font-semibold text-foreground">
        ${lineTotal.toFixed(2)}
      </div>

      {/* Remove Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onRemove(item.id)}
        className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};
