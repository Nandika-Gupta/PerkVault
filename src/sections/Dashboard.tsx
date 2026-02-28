import React, { useState } from 'react';
import { mockRewards, Reward } from '../data/mockData';
import { formatCurrency, cn } from '../lib/utils';
import { Filter, Search, Clock, Tag, ExternalLink } from 'lucide-react';

export default function Dashboard() {
  const [filter, setFilter] = useState<string>('All');
  const [search, setSearch] = useState('');

  const filteredRewards = mockRewards.filter(reward => {
    const matchesFilter = filter === 'All' || reward.category === filter;
    const matchesSearch = reward.description.toLowerCase().includes(search.toLowerCase()) || 
                          reward.platform.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const categories = ['All', 'Food', 'Shopping', 'Travel', 'Health', 'Others'];

  return (
    <section id="dashboard" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Your Reward Vault</h2>
            <p className="mt-2 text-slate-600 serif-text">Real-time aggregation from all your UPI apps.</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search rewards..."
                className="pl-10 pr-4 py-2 rounded-full border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap",
                    filter === cat 
                      ? "bg-indigo-600 text-white shadow-md" 
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredRewards.map((reward) => (
            <div key={reward.id} className="group relative flex flex-col rounded-3xl bg-white p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-2xl text-white font-bold",
                  reward.platform === 'Google Pay' ? 'bg-blue-500' : 
                  reward.platform === 'Paytm' ? 'bg-sky-600' : 'bg-purple-600'
                )}>
                  {reward.platform[0]}
                </div>
                <div className={cn(
                  "px-3 py-1 rounded-full text-xs font-bold",
                  reward.status === 'Expiring Soon' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
                )}>
                  {reward.status}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  <Tag size={12} />
                  {reward.category} • {reward.type}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{reward.description}</h3>
                {reward.amount && (
                  <p className="text-3xl font-extrabold text-indigo-600 mb-4">{formatCurrency(reward.amount)}</p>
                )}
              </div>

              <div className="mt-6 flex items-center justify-between pt-6 border-t border-slate-50">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Clock size={14} />
                  <span>Expires {new Date(reward.expiryDate).toLocaleDateString()}</span>
                </div>
                <button className="text-indigo-600 hover:text-indigo-700 font-bold text-sm flex items-center gap-1">
                  Redeem <ExternalLink size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
