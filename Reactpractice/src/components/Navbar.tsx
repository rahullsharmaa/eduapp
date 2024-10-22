import { LogOut, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 font-bold text-2xl">
            Firstque
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="hover:bg-indigo-700 px-3 py-2 rounded-md flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span>Profile</span>
            </button>
            <button className="hover:bg-indigo-700 px-3 py-2 rounded-md flex items-center space-x-2">
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}