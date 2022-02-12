import React, { useEffect, useState } from "react";
import { useFetchCountryName } from "../../custom-hooks/useCountry";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import { useParams } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function CardCountry() {
  const [expanded, setExpanded] = useState(false);
  const { name } = useParams();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const { country, loadingCountry, errorCountry } = useFetchCountryName(name);

  useEffect(() => {
    //console.log(country && country.name)
    console.log("name", name);
  });

  if (loadingCountry) return <h1>Loading...</h1>;
  if (errorCountry) console.log("Something went wrong...", errorCountry);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={country && country.name} />
      <CardMedia
        component="img"
        height="194"
        image={country && country.flag}
        alt="Flag"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Hello, This is {country && country.name}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Details:</Typography>
          <Typography paragraph>
            {country && country.capital}, {country && country.region},{" "}
            {country &&
              country.languages.map((language) => (
                <span key={language}>{language}</span>
              ))}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default CardCountry;
