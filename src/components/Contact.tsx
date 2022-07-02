import { Grid, Typography } from "@mui/material";
// @ts-ignore
import mapboxgl from "mapbox-gl";
import "../App.css";

export default function Contact() {
  const contactInformations = [
    { title: "Telefon", description: "0 532 685 43 62" },
    {
      title: "Adres",
      description:
        "Uluönder Mahallesi Baksan Sanayi Sitesi 96.Blok N.11\n" +
        "Tepebaşı - ESKİŞEHİR",
    },
    { title: "E-Mail", description: "info@sarace.com.tr" },
  ];
  return (
    <div id="iletisim">
      <Grid
        container
        md={6}
        margin={"auto"}
        className="contact-box"
        borderRadius={250}
        paddingBottom={5}
      >
        <Grid item xs={12} padding={5}>
          <Typography variant="h5" textAlign={"center"}>
            İletişim Bilgileri
          </Typography>
        </Grid>

        {contactInformations.map((index) => (
          <Grid
            item
            xs={12}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            padding={1.5}
          >
            <Typography fontWeight={"bold"} textAlign={"center"}>
              {index.title}
              <br />
              <Typography fontWeight={"lighter"}>
                {index.description}
              </Typography>
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} padding={5}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.1278983962934!2d30.466220694285727!3d39.78168503640864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb3a9587c98896498!2zMznCsDQ2JzU0LjEiTiAzMMKwMjgnMTQuNSJF!5e0!3m2!1str!2str!4v1656795687863!5m2!1str!2str"
          width="100%"
          height="450"
          className="map-container"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Grid>
    </div>
  );
}
