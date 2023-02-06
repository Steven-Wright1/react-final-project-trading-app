import HeaderPhoto from "../images/HeaderPhoto.jpg";
import Container from "@mui/material/Container";

export const Banner = () => {
  return (
    <div className="header-container">
      <Container>
        <div className="d-flex align-items-center justify-content-around">
          <div className="d-flex flex-column">
            <h1>Favourites</h1>
            <div>Add Favourites Below to Start</div>
          </div>
          <img
            src={HeaderPhoto}
            className="trading-image"
            alt="example trading app on mobile device"
          />
        </div>
      </Container>
    </div>
  );
};
