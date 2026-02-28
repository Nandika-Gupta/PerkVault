import React from 'react';
import { MessageSquare, Zap, Shield, BellRing } from 'lucide-react';
import { mockSMS } from '../data/mockData';

export default function SMSSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-indigo-100/50 blur-3xl"></div>
              <div className="relative space-y-4">
                {mockSMS.map((sms, i) => (
                  <div 
                    key={sms.id} 
                    className="flex flex-col rounded-2xl bg-slate-50 p-4 border border-slate-100 shadow-sm transform transition-all hover:scale-105"
                    style={{ marginLeft: `${i * 20}px` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-indigo-600">{sms.sender}</span>
                      <span className="text-[10px] text-slate-400">{sms.time}</span>
                    </div>
                    <p className="text-sm text-slate-700 font-medium">{sms.text}</p>
                  </div>
                ))}
                <div className="flex items-center gap-2 justify-center pt-4">
                  <div className="h-2 w-2 rounded-full bg-indigo-600 animate-bounce"></div>
                  <div className="h-2 w-2 rounded-full bg-indigo-600 animate-bounce [animation-delay:0.2s]"></div>
                  <div className="h-2 w-2 rounded-full bg-indigo-600 animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 mb-12 lg:mb-0">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-600/20 mb-6">
              <MessageSquare size={14} />
              <span>SMS Parsing Engine</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">
              Real-time SMS Sync. <br />
              No manual entry required.
            </h2>
            <p className="text-lg text-slate-600 serif-text mb-10">
              Our engine parses incoming SMS notifications from payment providers to instantly capture rewards. It's like having a personal assistant for your wallet.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Instant Detection</h4>
                  <p className="text-sm text-slate-500 mt-1">Rewards appear in your vault seconds after the SMS arrives.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <Shield size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Privacy First</h4>
                  <p className="text-sm text-slate-500 mt-1">We only parse financial reward messages. Your personal chats stay private.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <BellRing size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Smart Reminders</h4>
                  <p className="text-sm text-slate-500 mt-1">Get notified before a coupon extracted from SMS expires.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
