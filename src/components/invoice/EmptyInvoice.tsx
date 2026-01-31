import { Receipt } from "lucide-react";

export const EmptyInvoice = () => {
  return (
    <div className="px-6 py-12 text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4">
        <Receipt className="h-6 w-6 text-muted-foreground" />
      </div>
      <p className="text-muted-foreground">No items yet. Add your first item to get started.</p>
    </div>
  );
};
