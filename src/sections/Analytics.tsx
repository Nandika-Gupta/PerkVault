import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar, Legend
} from 'recharts';
import { analyticsData, categoryData } from '../data/mockData';
import { TrendingUp, Award, Wallet, Calendar } from 'lucide-react';

const COLORS = ['#4f46e5', '#06b6d4', '#8b5cf6', '#ec4899', '#f59e0b'];

export default function Analytics() {
  return (
    <section id="analytics" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Savings Analytics</h2>
          <p className="mt-2 text-slate-600 serif-text">Visualize your reward performance and trends.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mb-12">
          <div className="rounded-3xl bg-slate-50 p-8 border border-slate-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white">
                <Wallet size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Total Savings</p>
                <p className="text-3xl font-extrabold text-slate-900">₹5,130</p>
              </div>
            </div>
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={analyticsData}>
                  <defs>
                    <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="savings" stroke="#4f46e5" fillOpacity={1} fill="url(#colorSavings)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8 border border-slate-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-white">
                <Award size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Redeemed Offers</p>
                <p className="text-3xl font-extrabold text-slate-900">117</p>
              </div>
            </div>
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={analyticsData}>
                  <Bar dataKey="redeemed" fill="#10b981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8 border border-slate-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-amber-500 flex items-center justify-center text-white">
                <Calendar size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Avg. Monthly</p>
                <p className="text-3xl font-extrabold text-slate-900">₹855</p>
              </div>
            </div>
            <div className="flex items-center justify-center h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-slate-900 p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-bold text-indigo-300 ring-1 ring-inset ring-indigo-500/20 mb-4">
                <TrendingUp size={14} />
                <span>Insight of the week</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">You're saving 24% more than last month!</h3>
              <p className="text-slate-400 serif-text">Most of your savings are coming from Food & Dining. Consider checking out the 'Shopping' category for untapped rewards.</p>
            </div>
            <button className="rounded-full bg-white px-8 py-4 text-slate-900 font-bold hover:bg-slate-100 transition-all">
              Download Full Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
