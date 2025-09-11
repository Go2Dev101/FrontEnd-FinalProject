import { Badge } from "@/components/ui/badge";
import { Dumbbell } from "lucide-react";

export const Tag = ({ proteins, kcal }) => {
  return (
    <div className="flex gap-2 ">
      {proteins &&
        proteins.map((protein, index) => (
          <Badge key={index} variant="secondary">
            {protein}
          </Badge>
        ))}
      <Badge variant="secondary">
        <Dumbbell />
        {kcal}kcal
      </Badge>
    </div>
  );
};
