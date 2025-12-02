import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ProductCard({ product }) {
  return (
    <Card className="group overflow-hidden">
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={product.imageUrl || "/placeholder-logo.png"}
          alt={product.imageAlt}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-base md:text-lg">{product.name}</CardTitle>
      </CardHeader>
      {/* <CardContent className="pt-0 text-sm text-muted-foreground">{product.price}</CardContent> */}
      {/* <CardFooter className="pt-2">
        <Button className="w-full">Add to cart</Button>
      </CardFooter> */}
    </Card>
  );
}

// Consider removing once all imports are confirmed to use components/product-card.jsx
