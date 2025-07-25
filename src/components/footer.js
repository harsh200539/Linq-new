import "../../src/css/styles.css"
export function Footer() {
  return (
    <footer className="py-3 bg-linq-black text-linq-white text-center">
      <div className="container">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} LINQ CORPORATE SOLUTIONS PRIVATE LIMITED. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
