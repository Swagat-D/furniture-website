export function AboutSection() {
  return (
    <div id="about" className="grid gap-8 md:grid-cols-2 items-center">
      <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted">
        <img
          src="/woodworker-workshop.png"
          alt="Craftsman hand-finishing a wooden chair in a woodshop"
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <h2 className="text-balance text-2xl md:text-3xl font-semibold">Crafted with care, built to last</h2>
        <p className="text-muted-foreground mt-3">
          Our mission is simple: create furniture that feels like home from the first day and ages beautifully over the
          years. We partner with responsible suppliers and finish every piece with attention to detail.
        </p>
        <ul className="mt-4 grid gap-2 text-sm">
          <li>• Responsibly sourced wood and fabrics</li>
          <li>• Durable finishes and joinery</li>
          <li>• Designed for comfort and daily living</li>
        </ul>
      </div>
    </div>
  )
}
