import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../App.css";
import { Divider } from "@mui/material";

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

const Navbar = (props: HeaderProps) => {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar>
        <Stack
          direction={"row"}
          spacing={1}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <TwitterIcon style={{ color: "#1DA1F2" }}></TwitterIcon>
          <FacebookIcon style={{ color: "#3b5998" }}></FacebookIcon>
          <InstagramIcon
            style={{
              color: "linear-gradien(red,green 10%)",
            }}
          ></InstagramIcon>
        </Stack>
        <Typography
          component="h2"
          variant="h4"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
          className="animate-character"
        >
          {title}
        </Typography>

        <Button variant="outlined" size="small">
          BİZE ULAŞ
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
};

export default Navbar;
