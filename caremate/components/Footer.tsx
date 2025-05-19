const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p>© {new Date().getFullYear()} CareMate. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="text-sm hover:text-gray-300">Terms</a>
            <a href="#" className="text-sm hover:text-gray-300">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer