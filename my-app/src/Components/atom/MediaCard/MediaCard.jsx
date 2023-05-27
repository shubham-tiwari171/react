import React, { useEffect } from "react";
import "./MediaCard.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies, setFevMovies } from "../../../reducers/reducers";
import { useNavigate, useLocation } from "react-router-dom";
const MediaCard = () => {
  const { movies, loading } = useSelector((state) => state.myData);
  let fevMovies = useSelector((state) => state.myData.fevMovies);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    handlefetch();
  }, [dispatch, fevMovies]);

  function handlefetch() {
    dispatch(getAllMovies());
    console.log(fevMovies);
  }

  const handleNavigateToFavMedia = () => {
    fevMovies = [...Array.from(new Set(fevMovies))];
    location.pathname === "/fav-media" ? navigate("/") : navigate("/fav-media");
  };

  const handleWishListClick = (id) => {
    dispatch(setFevMovies(id));
  };

  if (loading && !movies) {
    return (
      <>
        <div>loading...</div>
      </>
    );
  }
  return (
    <>
      {loading === false && (
        <div className="container mt-5" style={{}}>
          <h2 className="text-center">Bootstrap movie cards</h2>
          <button className="btn btn-danger" onClick={handleNavigateToFavMedia}>
            {location.pathname === "/fav-media"
              ? "Go to Media"
              : "Go to FavMedia"}
          </button>
          <div className="d-flex justify-content-center flex-wrap g-3 card-container">
            {location.pathname === "/" && (
              <div className="wrap">
                {movies &&
                  movies.Search &&
                  movies.Search.map((movie) => (
                    <div key={movie.imdbID} className="box">
                      <div className="box-top">
                        <img
                          className="box-image"
                          src={movie.Poster}
                          alt="Girl Eating Pizza"
                        />
                        <div className="title-flex">
                          <h3 className="box-title">{movie.Title}</h3>
                          <p className="user-follow-info">{movie.Year}</p>
                        </div>
                        {/* <p className="description">{movie.Description}</p> */}
                      </div>
                      <button
                        href="#"
                        className=" btn btn-outline-dark button"
                        onClick={() => handleWishListClick(movie.imdbID)}
                      >
                        Add to wishlist
                      </button>
                    </div>
                  ))}
              </div>
            )}

            {location.pathname === "/fav-media" && (
              <div className="wrap">
                {fevMovies &&
                  fevMovies.map((movie) => (
                    <div key={movie.imdbID} className="box">
                      <div className="box-top">
                        <img
                          className="box-image"
                          src={movie.Poster}
                          alt="Girl Eating Pizza"
                        />
                        <div className="title-flex">
                          <h3 className="box-title">{movie.Title}</h3>
                          <p className="user-follow-info">{movie.Year}</p>
                        </div>
                        {/* <p className="description">{movie.Description}</p> */}
                      </div>
                      <button
                        href="#"
                        className=" btn btn-outline-dark button"
                        onClick={() => handleWishListClick(movie.imdbID)}
                      >
                        Add to wishlist
                      </button>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default MediaCard;
