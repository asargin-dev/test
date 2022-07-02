import * as React from "react";
import { Box, Divider, Grid } from "@mui/material";
import slipper_1 from "../files/images/sarace_001.jpeg";
import "../App.css";
import Typography from "@mui/material/Typography";

export default function Main() {
  const aboutText = [
    {
      text: "Tüketici olarak ayaklarımızın rahat, giydiğimiz ürünlerin sağlam aynı zamanda gösterişli olmasını bekleriz.",
    },
    {
      text: "İşte SARACE bu ihtiyaçları göz önünde bulundurarak tüketicilerine hem rahat hem sağlam hem de modayı ve güncel tasarımları takip eden bir çizgide ürünler sunmakta.",
    },
    {
      text: "1980 yıllarında terlik imalatıyla ticaret hayatına başlayan SARGIN ailesi, toptan ve perakende alanda olgunlaşmış; birikimlerini 2006 yılında yeniden imalat sektörüne yoğunlaştırarak faaliyetine devam etmiştir.",
    },
    {
      text: "Bugün SARACE markasıyla bay-bayan ev terliği, damat terliği üretimi yapmaktadır.",
    },
    {
      text: "Sarace nitelikli işçilik ve kaliteli malzemeyi birleştirerek sizlere en iyiyi sunmaya çalışmaktadır.",
    },
    {
      text: "Sektöre yön veren bir çok markayla birlikte çalışarak gün geçtikçe geniş ürün yelpazesine ulaşmıştır.",
    },
  ];

  return (
    <div>
      <Grid container xs={12} justifyContent="center" paddingBottom={10}>
        <Grid
          item
          xs={6}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="h4"
            color="text.primary"
            align="center"
            className="slide-text"
          >
            {"Yere şık ve sağlam basanların tercihi"}
          </Typography>
        </Grid>
        <Grid item xs={6} textAlign="center">
          <img src={slipper_1} loading="lazy" className="slipper-animate" />
        </Grid>
      </Grid>
      <div id={"hakkimizda"}>
        <Grid container xs={12}>
          <Grid
            item
            xs={12}
            style={{ width: "50% !important" }}
            paddingBottom={5}
          >
            <Divider color={"#ffffff"} textAlign={"center"}>
              <img
                src={
                  "https://img.icons8.com/material-two-tone/48/000000/slippers.png"
                }
              />
            </Divider>
          </Grid>
          <Grid
            item
            xs={12}
            textAlign={"center"}
            paddingTop={5}
            paddingBottom={5}
          >
            <Typography
              variant="h5"
              color="text.primary"
              align="center"
              fontWeight={"bold"}
            >
              {"HAKKIMIZDA"}
            </Typography>
            <Box padding={1} paddingTop={1.5} paddingBottom={5}>
              {aboutText.map((aboutText) => (
                <Typography
                  textAlign={"center"}
                  lineHeight={3}
                  letterSpacing={0.5}
                >
                  {aboutText.text}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Grid container xs={12}>
          <Grid
            item
            xs={6}
            margin={"auto"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            paddingX={-30}
            paddingLeft={5}
            paddingRight={5}
          >
            <Box padding={1} paddingTop={3} className="vision-boxes">
              <Typography textAlign={"center"} fontWeight={"bold"}>
                <Typography>
                  <img
                    src={
                      "https://img.icons8.com/external-chloe-kerismaker/64/000000/external-Vision-business-management-chloe-kerismaker.png"
                    }
                  />
                </Typography>
                VİZYONUMUZ
              </Typography>
              <Box paddingTop={3}>
                <Typography textAlign={"center"}>
                  Koşulsuz müşteri ve çalışan memnuniyeti düşüncesini
                  benimsemiş, sektör lideri ve itibarlı tanınmış bir marka
                  olmak.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            paddingLeft={5}
            paddingRight={5}
          >
            <Box padding={1} paddingTop={3} className="mission-boxes">
              <Typography textAlign={"center"} fontWeight={"bold"}>
                <Typography>
                  <img
                    src={
                      "https://img.icons8.com/color/96/000000/mission-of-a-company.png"
                    }
                  />
                </Typography>
                MİSYONUMUZ
              </Typography>
              <Box paddingTop={3}>
                <Typography textAlign={"center"}>
                  Sektördeki yeniliklerde lider olmak,
                </Typography>
                <Typography textAlign={"center"}>
                  Bireysel ve kurumsal anlamda sürekli gelişmek,
                </Typography>
                <Typography textAlign={"center"}>
                  Teknolojinin tüm imkanlarını çalışanlarına ve müşterilerine
                  sunmak,
                </Typography>
                <Typography textAlign={"center"}>
                  Çalışılması tercih edilen bir şirket olmak
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
