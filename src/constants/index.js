import { ChartNoAxesColumn, Award, File } from "lucide-react";


export const sideNav = [
  {
    text: "Dashboard",
    path: "/dashboard",
    icon: <ChartNoAxesColumn size={20} strokeWidth={2}  />,
  },
  {
    text: "Skill Test",
    path: "/skill-test",
    icon: <Award size={20} strokeWidth={2} />,
  },
  {
    text: "Internship",
    path: "/internship",
    icon: <File size={20} strokeWidth={2} />,
  },
];
