import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FeatureCards() {
  const features = [
    { title: "Sustainable materials", desc: "Responsibly sourced woods and fabrics." },
    { title: "Hand-finished quality", desc: "Built to last with attention to detail." },
    { title: "Free delivery", desc: "Complimentary delivery on orders over $200." },
  ]
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((f) => (
        <Card key={f.title} className="bg-card">
          <CardHeader>
            <CardTitle className="text-base md:text-lg">{f.title}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">{f.desc}</CardContent>
        </Card>
      ))}
    </div>
  )
}
