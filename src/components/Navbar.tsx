import React from 'react';
import { Wallet, Bell, User, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
            <Wallet size={24} />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900">PerkVault</span>
        </div>
        
        <div className="hidden md:flex md:items-center md:gap-8">
          <a href="#dashboard" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Dashboard</a>
          <a href="#analytics" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Analytics</a>
          <a href="#ocr" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Sync Rewards</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-all">
            <Bell size={20} />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all">
            <User size={20} />
          </button>
          <button className="md:hidden rounded-lg p-2 text-slate-600 hover:bg-slate-100">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}
