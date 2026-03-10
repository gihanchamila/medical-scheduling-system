import Link from "next/link";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary" />
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-primary"
            >
              Cura
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/doctors"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Find Doctors
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium hover:underline decoration-primary underline-offset-4"
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <span className="text-lg font-bold text-primary">Cura</span>
              <p className="mt-2 text-sm text-muted-foreground max-w-xs">
                Making healthcare accessible and efficient for everyone. Book
                your next appointment in seconds.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider">
                Support
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>Help Center</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider">
                Contact
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>support@cura.com</li>
                <li>+1 (555) 000-0000</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Cura Medical Scheduling. All
            rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
