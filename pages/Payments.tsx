
import React from 'react';

const Payments: React.FC<{ onNavigate: any }> = ({ onNavigate }) => {
  return (
    <div className="p-6 sm:p-8 md:p-12 bg-black min-h-screen">
      <div className="max-w-6xl mx-auto space-y-10">
        <header className="flex flex-wrap justify-between items-end gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Payments & Invoices</h2>
            <p className="text-slate-500 mt-2">Manage your billing history and download transaction records.</p>
          </div>
          <button className="bg-brand-red text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2">
            <span className="material-symbols-outlined">settings_applications</span> Payment Settings
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Current Balance</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-white">$0.00</span>
              <span className="text-brand-red text-xs font-bold bg-red-500/10 px-2 py-0.5 rounded-full">+0%</span>
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Last Payment</p>
            <p className="text-3xl font-black text-white">$250.00</p>
            <p className="text-slate-500 text-xs mt-2">Processed on Oct 12, 2023</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Total Year-to-Date</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-white">$1,200.00</span>
              <span className="text-brand-red text-xs font-bold bg-red-500/10 px-2 py-0.5 rounded-full">+12%</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-800 bg-black/40">
                  <th className="px-8 py-5 text-xs font-bold text-slate-500 uppercase tracking-widest">Date</th>
                  <th className="px-8 py-5 text-xs font-bold text-slate-500 uppercase tracking-widest">Description</th>
                  <th className="px-8 py-5 text-xs font-bold text-slate-500 uppercase tracking-widest">Amount</th>
                  <th className="px-8 py-5 text-xs font-bold text-slate-500 uppercase tracking-widest">Status</th>
                  <th className="px-8 py-5 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">Invoice</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {[
                  { date: 'Oct 15, 2023', desc: 'Monthly Subscription', amount: '$49.00', status: 'Paid', overdue: false },
                  { date: 'Oct 12, 2023', desc: 'Consulting Fee', amount: '$250.00', status: 'Paid', overdue: false },
                  { date: 'Aug 20, 2023', desc: 'Quarterly Team License', amount: '$891.00', status: 'Overdue', overdue: true }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors group">
                    <td className="px-8 py-6 text-sm text-slate-300 whitespace-nowrap">{row.date}</td>
                    <td className="px-8 py-6 text-sm text-white font-semibold">{row.desc}</td>
                    <td className="px-8 py-6 text-sm text-white font-black">{row.amount}</td>
                    <td className="px-8 py-6">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${row.overdue ? 'bg-orange-500/20 text-orange-500' : 'bg-red-500/20 text-brand-red'}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="text-brand-red font-bold text-sm hover:underline inline-flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">download</span> PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
