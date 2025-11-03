import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
        <CardContent className="p-0">
          <div className="aspect-square overflow-hidden bg-secondary">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start p-4 gap-2">
          <p className="text-sm text-muted-foreground uppercase">{category}</p>
          <h3 className="font-semibold text-lg line-clamp-2">{name}</h3>
          <p className="text-xl font-bold text-primary">${price.toFixed(2)}</p>
          <Button className="w-full mt-2" variant="default">
            View Details
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};
