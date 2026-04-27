import DashboardLayout from "./DashboardLayout";

const adminSidebar = [
  { label: "Dashboard", path: "/admin" },
  { label: "Users", path: "/admin/users" },
  { label: "Services", path: "/admin/services" },
  { label: "Bookings", path: "/admin/bookings" },
  { label: "Disputes", path: "/admin/disputes" },
  { label: "Payment Logs", path: "/admin/payment-logs" },
];

export default function AdminLayout({ children }) {
  return <DashboardLayout sidebarItems={adminSidebar}>{children}</DashboardLayout>;
}