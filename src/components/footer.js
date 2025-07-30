import "../../src/css/styles.css"


export default function footer() {
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
