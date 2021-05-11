import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import axios from 'axios';
import { img_300, img_500, unavailable, unavailableLandscape } from '../../config';
import './DisplayContent.css'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    height: "90%",
    width: "70%",
    backgroundColor: "lightgray",
    color: "black",
    boxShadow: theme.shadows[5],
    padding: "0"
  },
}));

export default function DisplayContent({ children, id, media_type }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [data, setdata] = useState()
  const [dataVedio, setdatavedio] = useState()

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=21f176f25df157c836a68afa9a117781&language=en-US`)
    setdata(data)
  }

  const fetchDataVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=21f176f25df157c836a68afa9a117781&language=en-US`)

    setdatavedio(data.results[0]?.key);
  }

  useEffect(() => {
    fetchData();
    fetchDataVideo();
  }, [])

  return (
    <div className="cards">
      <div type="button" onClick={handleOpen}>
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {data && (<div className={classes.paper}>

            <div className="forMobile">
              <h2>{data.name || data.title}</h2>
              <p>{data.tagline}</p>
              <img className="image_landscape" src={data.backdrop_path ? `${img_500}/${data.backdrop_path}` : unavailable} />
              <div className="overview">
                <p className="description">{data.description || data.overview}</p>
                <div className="ratingANDtype">
                  <p className="rating">{data.vote_average}</p>
                  <p className="media_type">{media_type}</p>
                </div>
              </div>
              <a className="watch_trailer" href={`https://www.youtube.com/watch?v=${dataVedio}`} target="_blank">Watch Trailer</a>
            </div>


            <div className="DisplayContent">
              <div className="image">
                <img className="image_portrait" src={data.poster_path ? `${img_300}/${data.poster_path}` : unavailable} />

                <img className="image_landscape" src={data.backdrop_path ? `${img_500}/${data.backdrop_path}` : unavailable} />
              </div>

              <div className="content">
                <h2>{data.name || data.title}</h2>
                <p>{data.tagline}</p>
                <div className="overview">
                  <p>{data.description || data.overview}</p>
                  <div className="ratingANDtype">
                    <p className="rating">{data.vote_average}</p>
                    <p className="media_type">{media_type}</p>
                  </div>
                </div>
                <a className="watch_trailer" href={`https://www.youtube.com/watch?v=${dataVedio}`} target="_blank">Watch Trailer</a>

              </div>
            </div>
          </div>
          )}
        </Fade>
      </Modal>
    </div>
  );
}
