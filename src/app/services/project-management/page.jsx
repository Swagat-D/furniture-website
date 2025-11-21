import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Project Management Services | Archik Construction',
  description: 'Expert project management services including timeline planning, budget management, quality control, and vendor coordination.',
}

export default function ProjectManagementPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Project <span className="text-amber-400">Management</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8">Expert oversight from conception to completion</p>
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
            Discuss Your Project
          </Button>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Coming Soon</h2>
          <p className="text-lg text-slate-600 mb-8">We're organizing something amazing for this page.</p>
          <Link href="/services">
            <Button variant="outline">Back to All Services</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}