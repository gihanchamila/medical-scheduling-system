import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="admin-container">
      {/* You can add a Sidebar or Admin Navbar here later */}
      <nav className="p-4 bg-slate-100 border-b">Admin Panel Navigation</nav>

      <main className="p-6">{children}</main>
    </section>
  );
}
