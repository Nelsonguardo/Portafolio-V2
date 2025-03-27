import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { ReactNode } from "react"

interface ProjectFilterProps {
  categories: {
    id: string
    label: string
  }[]
  defaultCategory: string
  children: {
    [key: string]: ReactNode
  }
}

export default function ProjectFilter({ categories, defaultCategory, children }: ProjectFilterProps) {
  return (
    <Tabs defaultValue={defaultCategory} className="w-full">
      <div className="flex justify-center mb-8">
        <TabsList className="bg-muted/50 rounded-lg p-1">
          {categories.map((category) => (
            <TabsTrigger 
              key={category.id} 
              value={category.id}
              className="rounded-md px-6 py-2.5 text-sm font-medium transition-all data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm hover:bg-muted/80"
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {categories.map((category) => (
        <TabsContent key={category.id} value={category.id} className="mt-0">
          {children[category.id]}
        </TabsContent>
      ))}
    </Tabs>
  )
}