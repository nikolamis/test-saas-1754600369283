export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-xl font-bold text-blue-600">
            Test SAAS 1754600369283
          </h1>
        </div>
      </nav>
      
      <main>{children}</main>
      
      <footer className="bg-white border-t mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 Test SAAS 1754600369283. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}