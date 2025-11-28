import React from "react";

const AdminDashboard = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-10 text-center">
      <h1 className="text-4xl font-bold text-indigo-700">Admin Dashboard</h1>

      <p className="text-lg text-gray-600 mt-4 max-w-xl">
        Welcome, Admin!  
        Manage your website settings, rooms, bookings, and all admin features here.
      </p>

      <div className="mt-8 grid md:grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="p-6 bg-white shadow-lg rounded-xl border">
          <h2 className="text-xl font-semibold text-gray-800">Website Settings</h2>
          <p className="text-gray-600 mt-2 text-sm">
            Update navbar, footer, site content, themes, and more.
          </p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-xl border">
          <h2 className="text-xl font-semibold text-gray-800">Rooms Management</h2>
          <p className="text-gray-600 mt-2 text-sm">
            Add rooms, change prices, update images, manage availability.
          </p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-xl border">
          <h2 className="text-xl font-semibold text-gray-800">Bookings</h2>
          <p className="text-gray-600 mt-2 text-sm">
            View upcoming bookings, customers, and reports.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
