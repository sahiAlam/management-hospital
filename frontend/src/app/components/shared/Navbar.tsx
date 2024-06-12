"use client";
import { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const user = localStorage.getItem("userInfo");
  const authInfo = useSelector((state: RootState) => state.auth.userInfo);

  const router = useRouter();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Logout Handler
  const handleLogoutUser = () => {
    localStorage.removeItem("userInfo");
    handleCloseUserMenu();
    router.push("/login");
  };

  return (
    <AppBar sx={{ position: "fixed" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", sm: "flex" },
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link
              href="/"
              style={{
                color: "#fff",
                fontSize: "28px",
                display: "flex",
                alignItems: "center",
              }}
            >
              careConsult{"  "}
              <Box component="span" sx={{ color: "#54de54", fontSize: "40px" }}>
                +
              </Box>
            </Link>
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", sm: "none" },
              flexGrow: 1,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link
              href="/"
              style={{
                color: "#fff",
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
              }}
            >
              careConsult{"  "}
              <Box component="span" sx={{ color: "#54de54", fontSize: "20px" }}>
                +
              </Box>
            </Link>
          </Typography>

          {user ? (
            <>
              <Stack
                direction={"row"}
                alignItems={"center"}
                gap={1.5}
                sx={{ flexGrow: 0, marginLeft: "auto" }}
              >
                <Typography>Hi, {authInfo?.email}</Typography>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={authInfo?.email} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleLogoutUser}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </Stack>
            </>
          ) : (
            <>
              <Box sx={{ flexGrow: 0, marginLeft: "auto" }}>
                <Button
                  sx={{
                    background: "#fff",
                    fontSize: "15px",
                    textTransform: "capitalize",
                    padding: "7px 20px",
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "rgba(32, 166, 162, 1)",
                      transform: "scale(1.05)",
                      transition: "transform 0.3s ease",
                    },
                  }}
                >
                  <Link href="/login">Login</Link>
                </Button>
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
