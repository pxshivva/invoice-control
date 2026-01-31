import { FileText } from "lucide-react";

interface InvoiceHeaderProps {
  invoiceNumber: string;
  date: string;
}

export const InvoiceHeader = ({ invoiceNumber, date }: InvoiceHeaderProps) => {
  return (
    <div className="invoice-header">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary-foreground/10">
            <FileText className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-semibold tracking-tight">Invoice</h1>
            <p className="text-sm text-primary-foreground/70">#{invoiceNumber}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-primary-foreground/70">Date</p>
          <p className="font-medium">{date}</p>
        </div>
      </div>
    </div>
  );
};
