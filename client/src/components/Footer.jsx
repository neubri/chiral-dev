import {
  BookOpen,
  Bot,
  Sparkles,
  FileText,
  BookMarked,
  Heart,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-300 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 glass-card rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-2xl font-light text-gray-800">Chiral</h3>
            </div>
            <p className="text-gray-600 mb-6 font-light leading-relaxed">
              Learn smarter with AI-powered reading and note-taking tools
              designed for modern learners.
            </p>
            {/* Social Links */}
            <div className="flex space-x-3">
              <a
                href="#"
                className="glass-button p-3 rounded-xl text-gray-600 hover:text-orange-600 smooth-transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="glass-button p-3 rounded-xl text-gray-600 hover:text-orange-600 smooth-transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a
                href="#"
                className="glass-button p-3 rounded-xl text-gray-600 hover:text-orange-600 smooth-transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-light text-lg text-gray-800 mb-6">Product</h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a
                  href="#"
                  className="hover:text-orange-600 smooth-transition font-light flex items-center gap-2"
                >
                  <Bot className="w-4 h-4" /> AI Explanations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-600 smooth-transition font-light flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" /> Smart Highlights
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-600 smooth-transition font-light flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" /> Note Management
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-600 smooth-transition font-light flex items-center gap-2"
                >
                  <BookMarked className="w-4 h-4" /> Reading Analytics
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-light text-lg text-gray-800 mb-6">Resources</h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a
                  href="#"
                  className="hover:text-orange-600 smooth-transition font-light"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-600 smooth-transition font-light"
                >
                  API Reference
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-600 smooth-transition font-light"
                >
                  Learning Guides
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-600 smooth-transition font-light"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-light text-lg text-gray-800 mb-6">Support</h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a
                  href="#"
                  className="hover:text-orange-600 smooth-transition font-light"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-600 smooth-transition font-light"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-600 smooth-transition font-light"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-600 smooth-transition font-light"
                >
                  Status
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600 font-light">
            © 2025 Chiral Learning. Crafted with{" "}
            <Heart className="w-4 h-4 text-red-500 inline mx-1" /> for better
            learning experiences.
          </p>
        </div>
      </div>
    </footer>
  );
}
