import React from "react";
import "./MediaCard.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../../reducers/reducers";
const MediaCard = () => {
  const dispatch = useDispatch();
  const { movies, loading } = useSelector((state) => state.myData);
  function handlefetch() {
    dispatch(getAllMovies());
    console.log(movies.Search);
  }
  return (
    <>
      <button className="btn btn-danger" onClick={handlefetch}>
        Fetch
      </button>
      <div className="container mt-5">
        <h2 className="text-center">Bootstrap movie cards</h2>
        <div className="d-flex justify-content-center flex-wrap g-3 card-container">
          {
            <div className="card movie_card">
              <img
                src="https://www.freepik.com/free-photo/bird-colorful-colorful-flowers-generative-ai_41104847.htm#query=nature&position=1&from_view=keyword&track=sph"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <i
                  className="fas fa-play play_button"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Play Trailer"
                ></i>
                <h5 className="card-title">POKEMON Detective Pikachu</h5>
                <span className="movie_info">2019</span>
                <span className="movie_info float-right">
                  <i className="fas fa-star"></i> 9 / 10
                </span>
              </div>
            </div>
          }

          <div className="card movie_card">
            <img src="./logo192.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <i
                className="fas fa-play play_button"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Play Trailer"
              ></i>
              <h5 className="card-title">POKEMON Detective Pikachu</h5>
              <span className="movie_info">2019</span>
              <span className="movie_info float-right">
                <i className="fas fa-star"></i> 9 / 10
              </span>
            </div>
          </div>

          <div className="card movie_card">
            <img
              src="https://www.freepik.com/free-photo/bird-colorful-colorful-flowers-generative-ai_41104847.htm#query=nature&position=1&from_view=keyword&track=sph"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <i
                className="fas fa-play play_button"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Play Trailer"
              ></i>
              <h5 className="card-title">POKEMON Detective Pikachu</h5>
              <span className="movie_info">2019</span>
              <span className="movie_info float-right">
                <i className="fas fa-star"></i> 9 / 10
              </span>
            </div>
          </div>

          <div className="card movie_card">
            <img
              src="https://www.freepik.com/free-photo/bird-colorful-colorful-flowers-generative-ai_41104847.htm#query=nature&position=1&from_view=keyword&track=sph"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <i
                className="fas fa-play play_button"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Play Trailer"
              ></i>
              <h5 className="card-title">POKEMON Detective Pikachu</h5>
              <span className="movie_info">2019</span>
              <span className="movie_info float-right">
                <i className="fas fa-star"></i> 9 / 10
              </span>
            </div>
          </div>

          <div className="card movie_card">
            <img
              src="https://www.freepik.com/free-photo/bird-colorful-colorful-flowers-generative-ai_41104847.htm#query=nature&position=1&from_view=keyword&track=sph"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <i
                className="fas fa-play play_button"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Play Trailer"
              ></i>
              <h5 className="card-title">POKEMON Detective Pikachu</h5>
              <span className="movie_info">2019</span>
              <span className="movie_info float-right">
                <i className="fas fa-star"></i> 9 / 10
              </span>
            </div>
          </div>

          <div className="card movie_card">
            <img
              src="https://www.freepik.com/free-photo/bird-colorful-colorful-flowers-generative-ai_41104847.htm#query=nature&position=1&from_view=keyword&track=sph"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <i
                className="fas fa-play play_button"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Play Trailer"
              ></i>
              <h5 className="card-title">POKEMON Detective Pikachu</h5>
              <span className="movie_info">2019</span>
              <span className="movie_info float-right">
                <i className="fas fa-star"></i> 9 / 10
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MediaCard;
