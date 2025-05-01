
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground">
            © {currentYear} Omar. All rights reserved.
          </p>
          
          <p className="text-muted-foreground mt-4 md:mt-0">
            Designed & Built with ♥
          </p>
        </div>
      </div>
    </footer>
  );
}
