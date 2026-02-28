import React, { useState } from 'react';
import { Upload, FileText, CheckCircle2, Loader2, Smartphone } from 'lucide-react';
import { cn } from '../lib/utils';

export default function OCRSection() {
  const [status, setStatus] = useState<'idle' | 'uploading' | 'processing' | 'success'>('idle');

  const handleSimulate = () => {
    setStatus('uploading');
    setTimeout(() => setStatus('processing'), 1500);
    setTimeout(() => setStatus('success'), 3500);
    setTimeout(() => setStatus('idle'), 6000);
  };

  return (
    <section id="ocr" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">OCR Reward Extraction</h2>
            <p className="mt-4 text-lg text-slate-600 serif-text">
              Simply upload a screenshot of your reward from Google Pay or Paytm. Our AI-powered OCR pipeline will automatically extract the details and add it to your vault.
            </p>
            
            <ul className="mt-8 space-y-4">
              {[
                'Automatic platform detection',
                'Expiry date extraction',
                'Category classification',
                'Instant vault update'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-semibold">
                  <CheckCircle2 className="text-indigo-600" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className={cn(
              "relative rounded-[2.5rem] border-2 border-dashed p-12 transition-all duration-500",
              status === 'idle' ? "border-slate-300 bg-white" : 
              status === 'success' ? "border-green-500 bg-green-50" : "border-indigo-500 bg-indigo-50"
            )}>
              <div className="flex flex-col items-center text-center">
                {status === 'idle' && (
                  <>
                    <div className="h-20 w-20 rounded-3xl bg-slate-100 flex items-center justify-center text-slate-400 mb-6">
                      <Upload size={40} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Upload Screenshot</h3>
                    <p className="text-slate-500 mb-8">Drag and drop or click to browse</p>
                    <button 
                      onClick={handleSimulate}
                      className="rounded-full bg-indigo-600 px-8 py-3 text-white font-bold hover:bg-indigo-700 transition-all"
                    >
                      Select Image
                    </button>
                  </>
                )}

                {(status === 'uploading' || status === 'processing') && (
                  <>
                    <div className="h-20 w-20 rounded-3xl bg-indigo-100 flex items-center justify-center text-indigo-600 mb-6">
                      <Loader2 size={40} className="animate-spin" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {status === 'uploading' ? 'Uploading Image...' : 'Extracting Data...'}
                    </h3>
                    <p className="text-slate-500">Our AI is reading your reward details.</p>
                  </>
                )}

                {status === 'success' && (
                  <>
                    <div className="h-20 w-20 rounded-3xl bg-green-100 flex items-center justify-center text-green-600 mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Reward Extracted!</h3>
                    <div className="mt-4 w-full max-w-xs rounded-2xl bg-white p-4 text-left shadow-sm border border-green-100">
                      <p className="text-xs font-bold text-slate-400 uppercase">Detected Reward</p>
                      <p className="text-lg font-bold text-slate-900">₹100 Cashback</p>
                      <p className="text-sm text-slate-500">Platform: Google Pay</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
