import React from 'react';

export default function KPI({ title, value }) {
  return (
    <div className="rounded-xl bg-slate-800 p-4 text-white shadow-md w-full md:w-1/3">
      <h2 className="text-sm text-slate-400">{title}</h2>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  );
}
