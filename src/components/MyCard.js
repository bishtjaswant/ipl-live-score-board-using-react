import {
  DialogContentText,
  DialogContent,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Dialog,
  DialogTitle,
  DialogActions,
  Grid,
  Typography,
  Slide,
} from "@material-ui/core";
import React, { useState } from "react";
import { getMatchDetail } from "../api/config";

const MyCard = ({ match }) => {

  const [matchDetail, setMatchDetail] = useState({});
  const [open, setOpen] = useState(false);

  const getMatchUniqueID =  (id) => {
            
             getMatchDetail(id)
             .then((data) => {
                 setMatchDetail(data);;
                 console.log(matchDetail);
                 handleClickOpen()
             }).catch((err) => {
                 console.log(err);
             });
  };


  const handleClickOpen = () => {
    setOpen(true);
  
  };

  const handleClose = () => {
    setOpen(false);
  };

 const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  

  const dialogSlide = ( ) => {
      return (
           <div>
        <Dialog
          open={open}
  //        TransitionComponent={Transition}
           
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{"match detail"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
            <Typography>Match <span style={{fontWeight:"bold"}}> {matchDetail.started?'started':'still not started'} </span> </Typography> 
             <Typography>Score <span style={{fontWeight:"bold"}}> {matchDetail.score} </span> </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus color="primary">
              Dismiss
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      );
  };


const cardMatchDetail = (params) => {
    return ( <Card style={{ marginTop: "1.6rem" }}>
    <CardContent>
      <Typography>IPL Match</Typography>
      <Grid container justify="center" alignItems="center" spacing={4}>
        <Grid item>
          <Typography>{match["team-1"]}</Typography>
        </Grid>
        <Grid item>
          <img
            style={{ width: "7rem", objectFit: "cover" }}
            src="/vs.png"
            alt=""
          />
        </Grid>
        <Grid item>
          <Typography>{match["team-2"]}</Typography>
        </Grid>
      </Grid>
    </CardContent>

    <CardActions>
      <Grid container spacing={9} justify="center">
        <Grid item>
          <Button
            onClick={() => getMatchUniqueID(match.unique_id)}
            variant="contained"
            size="small"
          >
            show detail
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            Time start {new Date(match.dateTimeGMT).toLocaleString()}
          </Button>
        </Grid>
      </Grid>
    </CardActions>
  </Card>)
}








  return (
    <>
    {cardMatchDetail()}
    {dialogSlide()}
     </>
  );
};

export default MyCard;
