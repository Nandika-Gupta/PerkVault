import React from 'react';
import { ArrowRight, Smartphone, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-32 lg:pb-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-600/20">
              <Zap size={14} />
              <span>New: Real-time SMS Parsing</span>
            </div>
            <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl">
              All your UPI rewards, <br />
              <span className="text-indigo-600">one vault.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 serif-text max-w-2xl">
              Stop letting your Google Pay, Paytm, and PhonePe rewards expire. PerkVault aggregates every cashback and coupon into a single, intelligent dashboard.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all flex items-center gap-2 group">
                Get Started Free
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="rounded-full bg-white px-8 py-4 text-lg font-bold text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 transition-all">
                How it works
              </button>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-slate-100 pt-12 sm:grid-cols-3">
              <div>
                <div className="flex items-center gap-2 text-indigo-600">
                  <Smartphone size={20} />
                  <span className="font-bold">OCR Sync</span>
                </div>
                <p className="mt-2 text-sm text-slate-500">Upload screenshots, we extract the value.</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-indigo-600">
                  <ShieldCheck size={20} />
                  <span className="font-bold">Secure</span>
                </div>
                <p className="mt-2 text-sm text-slate-500">Bank-grade encryption for your data.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 lg:col-span-5 lg:mt-0">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-indigo-100/50 blur-2xl"></div>
              <div className="relative mx-auto w-full max-w-[300px] rounded-[3rem] border-[8px] border-slate-900 bg-slate-900 p-2 shadow-2xl animate-float">
                <div className="h-[600px] w-full overflow-hidden rounded-[2.2rem] bg-slate-50">
                  {/* Mock App Interface */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-6">
                      <div className="h-8 w-8 rounded-full bg-indigo-600"></div>
                      <div className="h-2 w-12 rounded-full bg-slate-200"></div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-32 w-full rounded-2xl bg-indigo-600 p-4 text-white">
                        <p className="text-xs opacity-80">Total Savings</p>
                        <p className="text-2xl font-bold">₹4,250</p>
                        <div className="mt-4 h-1 w-full rounded-full bg-white/20">
                          <div className="h-full w-2/3 rounded-full bg-white"></div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm">
                            <div className="h-10 w-10 rounded-lg bg-slate-100"></div>
                            <div className="flex-1 space-y-1">
                              <div className="h-2 w-20 rounded-full bg-slate-200"></div>
                              <div className="h-2 w-12 rounded-full bg-slate-100"></div>
                            </div>
                            <div className="h-4 w-8 rounded-full bg-green-100"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
