import { Grid, Typography } from "@mui/material";
// @ts-ignore
import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";
import "../App.css";

export default function Contact() {
  const map = useRef();
  const mapContainer = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      accessToken:
        "pk.eyJ1IjoidHJib3QiLCJhIjoiY2s3NmFscm1xMTV0MDNmcXFyOWp1dGhieSJ9.tR2IMHDqBPOf_AeGjHOKFA",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [30.470827721998376, 39.78170783591696],
      zoom: 18,
    });
    const marker = new mapboxgl.Marker()
      .setLngLat([30.470827721998376, 39.78170783591696])
      .addTo(map.current);
  });

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
      <Grid
        ref={mapContainer}
        className="map-container"
        item
        xs={12}
        padding={5}
      ></Grid>
    </div>
  );
}
