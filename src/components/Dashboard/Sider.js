import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import { ListItemIcon, Paper } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import "./Sider.css";

export default function NestedList(props) {
  const [open, setOpen] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Paper elevation={3} class="SiderDash">
          <img src="https://res.cloudinary.com/dggvxdkri/image/upload/v1665654575/samples/Attendance%20pict/admin_Image_i9jp9u.jpg" alt="" className="SiderImage" style={{marginLeft:"6rem",objectFit:"cover"}} />

      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          // bgcolor: ["red","yellow"],
          minHeight: ["0vh", "100vh"],
          fontSize:["500"],
          
          
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
          subheader={
          <ListSubheader component="div" id="nested-list-subheader" >
                SuperAdmin Dashboard
          </ListSubheader>
        }
      >
        {props?.items?.map((item, index) => (
          <ListItemButton
            selected={selectedIndex === index && true}
            onClick={() => setSelectedIndex(index)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItemButton>
        ))}
      </List>
    </Paper>
  );
}
