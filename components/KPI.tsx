import React from 'react';

type KPIProps = {
  title: string;
  value: string | number;
};

export default function KPI({ title, value }: KPIProps) {
  return (
    <div className="bg-white/10 dark:bg-white/5 backdrop-blur rounded-2xl p-4 shadow hover:scale-[1.02] transition">
      <h3 className="text-sm text-gray-400">{title}</h3>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
}
