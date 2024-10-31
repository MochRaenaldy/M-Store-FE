import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Headers from "../components/navbar";

const RootLayout = () => {
  return (
    <Box>
      <Headers />
      <Outlet />
    </Box>
  );
};

export default RootLayout;
