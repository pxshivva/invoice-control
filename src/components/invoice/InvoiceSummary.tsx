import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Percent } from "lucide-react";

interface InvoiceSummaryProps {
  subtotal: number;
  taxRate: number;
  onTaxRateChange: (rate: number) => void;
}

export const InvoiceSummary = ({ subtotal, taxRate, onTaxRateChange }: InvoiceSummaryProps) => {
  const taxAmount = subtotal * (taxRate / 100);
  const grandTotal = subtotal + taxAmount;

  return (
    <div className="border-t border-border">
      {/* Subtotal and Tax Rate */}
      <div className="px-6 py-4 space-y-3">
        {/* Subtotal */}
        <div className="flex items-center justify-between text-muted-foreground">
          <span>Subtotal</span>
          <span className="font-mono font-medium text-foreground">${subtotal.toFixed(2)}</span>
        </div>

        {/* Tax Rate Input */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Label htmlFor="taxRate" className="text-muted-foreground">Tax Rate</Label>
            <div className="relative w-20">
              <Input
                id="taxRate"
                type="number"
                min="0"
                max="100"
                step="0.1"
                value={taxRate}
                onChange={(e) => onTaxRateChange(parseFloat(e.target.value) || 0)}
                className="h-8 pr-8 text-right font-mono text-sm"
              />
              <Percent className="absolute right-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            </div>
          </div>
          <span className="font-mono font-medium text-foreground">${taxAmount.toFixed(2)}</span>
        </div>
      </div>

      {/* Grand Total */}
      <div className="invoice-total">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">Grand Total</span>
          <span className="text-2xl font-bold font-mono">${grandTotal.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};
