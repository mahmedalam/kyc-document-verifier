import { History, LayoutDashboard, Settings, Upload } from "lucide-react";

export const navLinks = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    label: "Upload Document",
    path: "/upload",
    icon: <Upload />,
  },
  {
    label: "Verification History",
    path: "/history",
    icon: <History />,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: <Settings />,
  },
];
