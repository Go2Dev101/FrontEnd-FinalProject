import React from "react";

export function AdminDashboard() {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1 p-6 bg-white">
        <header className="mb-6">
          <h2 className="text-2xl font-bold">Dashboard</h2>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500 text-sm">Total Orders</p>
            <h3 className="text-2xl font-bold text-blue-600">250</h3>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500 text-sm">Subscriptions</p>
            <h3 className="text-2xl font-bold text-green-600">75</h3>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500 text-sm">Revenue</p>
            <h3 className="text-2xl font-bold text-purple-600">$15,000</h3>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-4">Recent Orders</h3>
          <table className="w-full bg-white rounded shadow text-sm">
            <thead className="bg-gray-300 text-left">
              <tr>
                <th className="p-3">Order ID</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Status</th>
                <th className="p-3">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3">#1001</td>
                <td className="p-3">Emily</td>
                <td className="p-3">Delivered</td>
                <td className="p-3">$120</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">#1002</td>
                <td className="p-3">Owen</td>
                <td className="p-3">Pending</td>
                <td className="p-3">$90</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">#1003</td>
                <td className="p-3">Isabella</td>
                <td className="p-3">Shipped</td>
                <td className="p-3">$140</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
