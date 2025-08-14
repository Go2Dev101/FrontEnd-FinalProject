import { Badge } from "@/components/ui/badge";
import { Dumbbell} from "lucide-react";

export const Tag = ({ category, kcal }) => {
  return (
    <div className="flex gap-2">
      <Badge variant="secondary">{category}</Badge>
      <Badge variant="secondary">
        <Dumbbell />
        {kcal}kcal
      </Badge>
    </div>
  );
};
