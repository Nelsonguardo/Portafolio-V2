interface SectionHeadingProps {
  title: string
  description?: string
  centered?: boolean
  className?: string
}

export default function SectionHeading({ title, description, centered = false, className = "" }: SectionHeadingProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{title}</h2>
      {description && (
        <p className={`mt-4 text-muted-foreground md:text-xl ${centered ? "max-w-[700px] mx-auto" : "max-w-[700px]"}`}>
          {description}
        </p>
      )}
    </div>
  )
}

