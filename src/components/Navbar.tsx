import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../App.css";
import { Divider, Grid, SvgIcon } from "@mui/material";
import divider from "../files/images/divider.png";

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
    <div>
      <Grid container columns={12} paddingTop={5}>
        <Grid
          item
          xs={3}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack
            direction={"row"}
            spacing={0.5}
            divider={
              <Divider
                orientation="vertical"
                flexItem
                color={"#ffffff"}
                style={{ height: "25px" }}
              />
            }
          >
            <Link href="https://twitter.com/bySarace">
              <TwitterIcon style={{ color: "#1DA1F2" }}></TwitterIcon>
            </Link>
            <Link href="https://www.facebook.com/bysarace">
              <SvgIcon className="facebook"></SvgIcon>
            </Link>
            <Link href="https://www.instagram.com/saraceonline/">
              <SvgIcon className="instagram"></SvgIcon>
            </Link>
          </Stack>
        </Grid>
        <Grid
          item
          xs={6}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
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
        </Grid>
        <Grid
          item
          xs={3}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Button
            variant="outlined"
            size="small"
            style={{ color: "white", borderColor: "white" }}
          >
            BİZE ULAŞ
          </Button>
        </Grid>
      </Grid>
      <Grid container columns={12}>
        <Grid
          item
          xs={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
        ></Grid>
        <Grid
          item
          xs={8}
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding={0}
        >
          <img src={divider} width="25%" height="100%" />
        </Grid>
        <Grid
          item
          xs={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
        ></Grid>
      </Grid>
      <Grid
        container
        columnSpacing={-25}
        marginLeft={"auto"}
        marginRight={"auto"}
      >
        {sections.map((section) => (
          <Grid
            item
            xs={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
            paddingTop={3}
            paddingBottom={5}
          >
            <Link
              color="inherit"
              key={section.title}
              href={section.url}
              className="navbar-links"
            >
              {section.title}
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Navbar;
