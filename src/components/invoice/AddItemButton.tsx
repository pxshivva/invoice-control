import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AddItemButtonProps {
  onClick: () => void;
}

export const AddItemButton = ({ onClick }: AddItemButtonProps) => {
  return (
    <div className="px-6 py-4">
      <Button
        variant="outline"
        onClick={onClick}
        className="w-full border-dashed border-2 hover:border-accent hover:text-accent hover:bg-accent/5 transition-colors"
      >
        <Plus className="h-4 w-4 mr-2" />
        Add Item
      </Button>
    </div>
  );
};
