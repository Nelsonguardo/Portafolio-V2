"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">N</span>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-medium">NELSON</span>
            <span className="text-xs text-muted-foreground">GUARDO</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="/" label="INICIO" />
          <NavLink href="/portafolio" label="PORTAFOLIO" />
          <NavLink href="/servicios" label="SERVICIOS" />
          <NavLink href="/curriculum" label="CURRICULUM" />
          <NavLink href="/contacto" label="CONTACTO" />
        </nav>

        {/* Mobile Navigation Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} aria-label="Menú">
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden">
          <div className="fixed inset-y-0 left-0 right-0 h-full bg-background shadow-xl">
            <div className="container flex h-16 items-center justify-between px-6 border-b">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">N</span>
                <div className="flex flex-col leading-none">
                  <span className="text-sm font-medium">NELSON</span>
                  <span className="text-xs text-muted-foreground">GUARDO</span>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Cerrar menú">
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="container flex flex-col p-6 bg-background">
              <MobileNavLink href="/" label="INICIO" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink href="/portafolio" label="PORTAFOLIO" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink href="/servicios" label="SERVICIOS" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink href="/curriculum" label="CURRICULUM" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink href="/contacto" label="CONTACTO" onClick={() => setIsMenuOpen(false)} />
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

interface NavLinkProps {
  href: string
  label: string
}

function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`${isActive ? "text-black dark:text-white font-medium" : "text-muted-foreground hover:text-foreground transition-colors"} text-sm`}
    >
      {label}
    </Link>
  )
}

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void
}

function MobileNavLink({ href, label, onClick }: MobileNavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${isActive ? "text-black dark:text-white font-medium" : "text-muted-foreground hover:text-foreground transition-colors"
        } py-4 text-lg border-b border-muted last:border-0 transition-colors block font-medium`}
    >
      {label}
    </Link>
  )
}

