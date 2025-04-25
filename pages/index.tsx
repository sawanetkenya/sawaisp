import { useEffect, useState } from 'react';
import KPI from '@/components/KPI';
import ThemeToggle from '@/components/ThemeToggle';
import api from '@/lib/api';

export default function Dashboard() {
  const [data, setData] = useState({
    total_users: 0,
    expiring_this_month: 0,
    expected_revenue: 0,
  });

  useEffect(() => {
    api.get('/metrics.php').then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-tr from-[#0f0f0f] to-[#1f1f1f] text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <ThemeToggle />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <KPI title="Total Users" value={data.total_users} />
        <KPI title="Expiring This Month" value={data.expiring_this_month} />
        <KPI title="Expected Revenue" value={`KES ${data.expected_revenue}`} />
      </div>
    </main>
  );
}
