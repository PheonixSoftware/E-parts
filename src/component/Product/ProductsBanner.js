// import * as React from "react";
// import { styled } from "@material-ui/styles";
// import Box from "@material-ui/core/Box";
// import ButtonBase from "@material-ui/core/ButtonBase";
// import Typography from "@material-ui/core/Typography";
// import sparepart from "../../images/SPAREPARTS.png";
// import { useHistory } from "react-router-dom";
// const images = [
//   {
//     url: sparepart,
//     title: "PRODUCTS",
//     width: "100%",
//     height: "100%",
//   },
// ];

// const ImageButton = styled(ButtonBase)(({ theme }) => ({
//   position: "relative",
//   height: 200,
//   [theme.breakpoints.down("sm")]: {
//     width: "100% !important", // Overrides inline-style
//     height: 100,
//   },
//   "&:hover, &.Mui-focusVisible": {
//     zIndex: 1,
//     "& .MuiImageBackdrop-root": {
//       opacity: 0.15,
//     },
//     "& .MuiImageMarked-root": {
//       opacity: 0,
//     },
//     "& .MuiTypography-root": {
//       border: "4px solid currentColor",
//     },
//   },
// }));

// const ImageSrc = styled("span")({
//   position: "absolute",
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   backgroundSize: "cover",
//   backgroundPosition: "center 50%",
// });

// const Image = styled("span")(({ theme }) => ({
//   position: "absolute",
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   color: theme.palette.common.white,
// }));

// const ImageBackdrop = styled("span")(({ theme }) => ({
//   position: "absolute",
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   backgroundColor: theme.palette.common.black,
//   opacity: 0.4,
//   transition: theme.transitions.create("opacity"),
// }));

// const ImageMarked = styled("span")(({ theme }) => ({
//   height: 5,
//   width: 25,
//   backgroundColor: theme.palette.common.white,
//   position: "absolute",

//   bottom: -2,
//   left: "calc(50% - 9px)",
//   transition: theme.transitions.create("opacity"),
// }));

// export default function ButtonBases() {
//   const navigate = useHistory();
//   return (
//     <Box
//       sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%" }}
//     >
//       {images.map((image) => (
//         <ImageButton
//           focusRipple
//           key={image.title}
//           onClick={navigate.push("/")}
//           style={{
//             width: image.width,
//             height: "300px",
//           }}
//         >
//           <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
//           <ImageBackdrop className="MuiImageBackdrop-root" />
//           <Image>
//             <Typography
//               component="span"
//               variant="subtitle1"
//               color="inherit"
//               sx={{
//                 position: "relative",
//                 p: 4,
//                 pt: 2,
//                 pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
//               }}
//             >
//               {image.title}
//               <ImageMarked className="MuiImageMarked-root" />
//             </Typography>
//           </Image>
//         </ImageButton>
//       ))}
//     </Box>
//   );
// }
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Button  from '@material-ui/core/Button';
import sparepart from "../../images/SPAREPARTS.png";
import { useHistory } from 'react-router-dom';
const images = [
  {
    url: sparepart,
    title: "PRODUCTS",
    width: "100%",
    height: "100%",
  },
  
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function ButtonBases() {
  const classes = useStyles();
  const navigate=useHistory();

  return (
    <div className={classes.root} >
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Button
             
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
              onClick={()=>{navigate.push("/products")}}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Button>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}
