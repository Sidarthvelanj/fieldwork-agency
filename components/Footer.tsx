export default function Footer() {
  return (
    <footer className="border-t border-line dark:border-line-dark">
      <div className="wrap py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="label">© {new Date().getFullYear()} Fieldwork Studio</p>
        <div className="flex gap-6 label">
          <a href="#top" className="hover:text-clay transition-colors">
            Back to top
          </a>
          <a href="#contact" className="hover:text-clay transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
