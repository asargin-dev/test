import { Grid, Rating, Typography, Button } from "@mui/material";

export default function Shop() {
  const comments_trendyol = [
    {
      message:
        "\n" +
        "Nişan bohçası için aldım öyle güzel öyle harika öyle kaliteli ki kesinlikle tavsiye ediyorum 1 günde elime ulaştı 🙏",
    },
    {
      message:
        "Çok hızlı teslimat yanında gönderdiğiniz hediyeler için de teşekkür ederim.",
    },
  ];

  const comments_n = [
    {
      message:
        "\n" +
        "Çok rahat çok şık... babalar günü için hediye aldım çok mutlu oldu teşekkürler hızlı kargo için ",
    },
    {
      message:
        "Gerçekten el emeği olduğu belli oluyor. Herkesin eline sağlık sonuna kadar hakediyor.",
    },
  ];

  return (
    <div id="alisveris" className="shop">
      <Grid container xs={8} margin={"auto"} paddingTop={5} paddingBottom={5}>
        <Grid item xs={12} margin={"auto"}>
          <Typography
            textAlign={"center"}
            variant={"h5"}
            fontWeight={"bold"}
            color={"white"}
          >
            ALIŞVERİŞ
            <Typography
              textAlign={"center"}
              variant={"body2"}
              fontWeight={"bold"}
              color={"white"}
              paddingTop={5}
              fontSize={18}
            >
              Trendyol ve n11 'de ürünlerimizi yüksek kalite ve müşteri
              memnuniyeti ile sizlere ulaştırmaktayız.
              <Typography
                textAlign={"center"}
                variant={"body2"}
                fontWeight={"bold"}
                color={"white"}
                paddingTop={5}
                fontSize={18}
              >
                Mağazalarımıza kolayca ulaşmak için mağaza logosuna
                tıklayabilirsiniz.
              </Typography>
            </Typography>
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction={"row"}
        xs={8}
        margin={"auto"}
        paddingBottom={5}
      >
        <Grid
          item
          xs={4}
          margin={"auto"}
          display="grid"
          justifyContent={"right"}
          alignItems="right"
        >
          <Button
            href={
              "https://www.trendyol.com/magaza/sargin-ayakkabicilik-m-121131?sst=0"
            }
          >
            <Typography textAlign={"center"}>
              <img
                style={{
                  borderRadius: "20px",
                  backgroundColor: "orange",
                  width: "100px",
                  height: "100%",
                  marginBottom: "-3px",
                  padding: "10px",
                }}
                src="https://cdn.dsmcdn.com/web/logo/ty-web.svg"
                alt="Trendyol"
              />
            </Typography>
          </Button>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Typography textAlign={"center"} display={"flex"} color={"white"}>
              Mağaza Puanı:{" "}
              <Typography
                color={"white"}
                width={"65%"}
                display="flex"
                justifyContent={"center"}
                alignItems={"center"}
                style={{
                  border: "1px solid green",
                  borderRadius: "100%",
                  backgroundColor: "#47cb26",
                  color: "white",
                }}
              >
                9.9
              </Typography>
            </Typography>
          </div>
          <Typography
            textAlign={"center"}
            color={"white"}
            paddingTop={3}
            paddingBottom={3}
          >
            Gelen Yorumlar
          </Typography>
          {comments_trendyol.map((comment) => (
            <div>
              <Rating
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingBottom: "0.5rem",
                }}
                name="read-only"
                value={5}
                readOnly
              />
              <Typography
                color={"white"}
                textAlign="center"
                paddingBottom={2.5}
              >
                {comment.message}
              </Typography>
            </div>
          ))}
        </Grid>
        <Grid
          item
          xs={4}
          margin={"auto"}
          display="grid"
          justifyContent={"left"}
          alignItems="left"
        >
          <Button href={"https://www.n11.com/magaza/sarace"}>
            <Typography
              textAlign={"center"}
              bgcolor="white"
              borderRadius={250}
              paddingTop={1}
            >
              <img
                src="https://n11scdn.akamaized.net/a1/org/22/06/24/72/96/64/36/96/74/72/45/71/57583492847166994803.svg"
                width="125"
                height="63"
                alt="n11"
              />
            </Typography>
          </Button>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Typography
              textAlign={"center"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              color={"white"}
            >
              Mağaza Puanı:{" "}
              <Typography
                width={"70%"}
                color={"white"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                style={{
                  border: "1px solid green",
                  borderRadius: "100%",
                  backgroundColor: "#47cb26",
                  color: "white",
                }}
              >
                % 97
              </Typography>
            </Typography>
          </div>
          <Typography
            color={"white"}
            textAlign={"center"}
            paddingTop={3}
            paddingBottom={3}
          >
            Gelen Yorumlar
          </Typography>
          {comments_n.map((comment) => (
            <div>
              <Rating
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingBottom: "0.5rem",
                }}
                name="read-only"
                value={5}
                readOnly
              />
              <Typography
                color={"white"}
                textAlign="center"
                paddingBottom={2.5}
              >
                {comment.message}
              </Typography>
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
