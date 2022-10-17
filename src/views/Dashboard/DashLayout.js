import React from "react";
import DashLayout from "../../components/Dashboard/Layout";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const items = [
  { name: "Dashboard", icon: <DashboardIcon /> },
  { name: "Manage Mentors", icon: <ControlPointDuplicateIcon /> },
  { name: "Manage Classes", icon: <InboxIcon /> },
  { name: "Report", icon: < AssessmentIcon /> },
  { name: "Settings", icon: <SettingsIcon /> },
  { name: "Logout", icon: <LogoutIcon /> },

];
const View = () => {
  return (
    <DashLayout siderItems={items}>
      
    </DashLayout>
  );
};

export default View;
