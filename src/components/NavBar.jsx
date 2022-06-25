import React, { useState } from "react";
import {
  AppBar,
  Box,
  styled,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

function NavBar({draw, setDraw}) {
    const [open, setOpen] = useState(false);

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));

  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  const UserIcons = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          color="white"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Kenny Dev
        </Typography>
        <CodeIcon color="white" sx={{ display: { xs: "block", sm: "none" }, cursor: "pointer" }} onClick={() => setDraw(true)} />
        <Search>
          <InputBase placeholder="Search..." sx={{ input: { color: 'black' } }} />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            sx={{ width: 25, height: 25 }}
            src="https://mui.com/static/images/avatar/6.jpg"
            onClick={() => setOpen(true)}
          />
        </Icons>
        <UserIcons onClick={() => setOpen(true)}>
          <Avatar
            alt="Remy Sharp"
            sx={{ width: 25, height: 25 }}
            src="https://mui.com/static/images/avatar/6.jpg"
          />
          <Typography varient="span">Kmh</Typography>
        </UserIcons>
      </StyledToolbar>
      <Menu
        id="basic-menu"
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default NavBar;
