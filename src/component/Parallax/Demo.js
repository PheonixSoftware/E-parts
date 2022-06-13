import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import ParallaxSlide from "./ParallaxSlide";
import DotIndicator from "./DotIndicator";
import  useArrowDarkButtonStyles  from "./arrowDarkbutton.styles";
import cd70d from "../../images/CD70DREAM.png";
import pridor from "../../images/Pridor.png";
import cbf125fb from "../../images/CB125F.png";
import cg125b from "../../images/CG125.png";
import cd70b from "../../images/CD70.png";
import cbf150f from "../../images/CB150F.png";
import cg125se from "../../images/CG125SE.png";
const data = [
  {
    id: 1,
    title: "CD 70",
    subtitle: "Black",
    image: cd70b,
    // eslint-disable-next-line max-len
  },
  {
    id: 2,
    title: "CD 70 DREAM",
    subtitle: "Black",
    image: cd70d,
    // eslint-disable-next-line max-len
  },
  {
    id: 3,
    title: "PRIDOR",
    subtitle: "Black",
    image: pridor,
    // eslint-disable-next-line max-len
  },

  {
    id: 4,
    title: "CG 125",
    subtitle: "Black",
    image: cg125b,
    // eslint-disable-next-line max-len
  },
  {
    id: 5,
    title: "CG 125 SE",
    subtitle: "Black",
    image: cg125se,
    // eslint-disable-next-line max-len
  },

  {
    id: 6,
    title: "CB 125 F",
    subtitle: "Black",
    image: cbf125fb,
    // eslint-disable-next-line max-len
  },
  {
    id: 7,
    title: "CB 150 F",
    subtitle: "Black",
    image: cbf150f,
    // eslint-disable-next-line max-len
  },
];

const useStyles = makeStyles(({ palette, breakpoints, spacing }) => ({
  root: {
    // a must if you want to set arrows, indicator as absolute
    position: "relative",
    width: "96%",
  },
  slide: {
    perspective: 1000, // create perspective
    overflow: "hidden",
    // relative is a must if you want to create overlapping layers in children
    position: "relative",
    paddingTop: spacing(8),
    [breakpoints.up("sm")]: {
      paddingTop: spacing(10),
    },
    [breakpoints.up("md")]: {
      paddingTop: spacing(14),
    },
  },
  imageContainer: {
    display: "block",
    position: "relative",

    zIndex: 2,
    paddingBottom: "56.25%",
  },
  image: {
    display: "block",
    position: "absolute",
    zIndex: 10,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    marginLeft: "12%",
    [breakpoints.up("sm")]: {
      marginLeft: "4%",
    },
  },
  arrow: {
    display: "none",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    [breakpoints.up("sm")]: {
      display: "inline-flex",
    },
  },
  arrowLeft: {
    left: 0,
    [breakpoints.up("lg")]: {
      left: 0,
    },
  },
  arrowRight: {
    right: 0,
    [breakpoints.up("lg")]: {
      right: -40,
    },
  },
  text: {
    // shared style for text-top and text-bottom
    fontFamily: "Poppins, san-serif",
    fontWeight: 900,
    position: "absolute",
    color: palette.common.white,
    padding: "0 8px",
    transform: "rotateY(45deg)",
    lineHeight: 1.2,
    [breakpoints.up("sm")]: {
      padding: "0 16px",
    },
    [breakpoints.up("md")]: {
      padding: "0 24px",
    },
  },
  title: {
    top: 20,
    left: "20%",
    height: "40%",
    fontSize: 40,
    zIndex: 1,
    background: "linear-gradient(0deg, rgba(255,255,255,0) 0%, #9c9c9c 100%)",
    [breakpoints.up("sm")]: {
      top: 40,
      fontSize: 72,
    },
    [breakpoints.up("md")]: {
      top: 52,
      fontSize: 72,
    },
  },
  subtitle: {
    top: 60,
    left: "0%",
    height: "52%",
    fontSize: 56,
    zIndex: 2,
    background: "linear-gradient(0deg, rgba(255,255,255,0) 0%, #888888 100%)",
    [breakpoints.up("sm")]: {
      top: 112,
      left: "6%",
      fontSize: 96,
    },
    [breakpoints.up("md")]: {
      top: 128,
      fontSize: 104,
    },
  },
  indicatorContainer: {
    textAlign: "center",
  },
}));

const ParallaxCarousel = () => {
  const classes = useStyles();
 // const arrowStyles = useArrowDarkButtonStyles();
  const createStyle = (slideIndex, fineIndex) => {
    const diff = slideIndex - fineIndex;
    if (Math.abs(diff) > 1) return {};
    return {
      transform: `rotateY(${(-diff + 1) * 45}deg)`,
    };
  };
  // eslint-disable-next-line react/prop-types
  const renderElements = ({ index, onChangeIndex }) => (
    <>
      <Button
        className={cx(classes.arrow, classes.arrowLeft)}
       // classes={arrowStyles}
        disabled={index === 0}
        onClick={() => onChangeIndex(index - 1)}
      >
        <KeyboardArrowLeft />
      </Button>
      <Button
        className={cx(classes.arrow, classes.arrowRight)}
       // classes={arrowStyles}
        disabled={index === data.length - 1}
        onClick={() => onChangeIndex(index + 1)}
      >
        <KeyboardArrowRight />
      </Button>
      <div className={classes.indicatorContainer}>
        {data.map(({ id }, i) => (
          <DotIndicator
            key={id}
            active={i === index}
            onClick={() => onChangeIndex(i)}
          />
        ))}
      </div>
    </>
  );
  const renderChildren = ({ injectStyle, fineIndex }) =>
    data.map(({ id, title, subtitle, image }, i) => (
      <div key={id} className={classes.slide}>
        <Typography
          noWrap
          className={cx(classes.text, classes.title)}
          style={{ ...injectStyle(i, 60), ...createStyle(i, fineIndex) }}
        >
          {title}
        </Typography>
        <Typography
          noWrap
          className={cx(classes.text, classes.subtitle)}
          style={{ ...injectStyle(i, 40), ...createStyle(i, fineIndex) }}
        >
          {subtitle}
        </Typography>
        <div className={classes.imageContainer}>
          <img className={classes.image} src={image} alt={"slide"} />
        </div>
      </div>
    ));
  return (
    <div className={classes.root}>
      <ParallaxSlide renderElements={renderElements}>
        {renderChildren}
      </ParallaxSlide>
    </div>
  );
};

export default ParallaxCarousel;
