import React, { useState } from "react";
import "./promociones.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Promo1 from "../assets/promo-1.jpg";
import Promo2 from "../assets/promo-2.jpg";
import Promo3 from "../assets/promo-3.jpg";
import Promo4 from "../assets/promo-4.jpg";
import Promo5 from "../assets/promo-5.jpg";
import Promo6 from "../assets/promo-6.jpg";
import Promo7 from "../assets/promo-7.jpg";

const PromocionesPc = () => {
  const imagesPromo = [Promo1, Promo2, Promo3, Promo4, Promo5, Promo6, Promo7];
  const [data, setData] = useState({ img: "", i: 0 });
  const viewImage = (img, i) => {
    setData({ img, i });
  };
  const imgAction = (action) => {
    let i = data.i;
    if (action === "next-img") {
      setData({ img: imagesPromo[i + 1], i: i + 1 });
    }
    if (action === "previous-img") {
      setData({ img: imagesPromo[i - 1], i: i - 1 });
    }
    if (!action) {
      setData({ img: "", i: 0 });
    }
  };

  return (
    <div className="promos">
      {data.img && (
        <div
          style={{
            width: "100%",
            height: "100vh",
            background: "rgba(0,0,0,0.8)",
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            top: "0",
            left: "0",
            zIndex: "10",
          }}
        >
          <button
            onClick={() => imgAction()}
            style={{
              position: "absolute",
              top: "20px",
              right: "15px",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              border: 0,
              backgroundColor: "transparent",
            }}
          >
            <i
              class="fa-solid fa-xmark"
              style={{ color: "white", fontSize: "25px" }}
            ></i>
          </button>
          <button
            onClick={() => imgAction("previous-img")}
            style={{
              marginRight: "10px",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              border: 0,
              backgroundColor: "transparent",
            }}
          >
            <i
              class="fa-solid fa-arrow-left"
              style={{ color: "white", fontSize: "25px" }}
            ></i>
          </button>
          <img
            src={data.img}
            alt=""
            style={{ width: "auto", maxWidth: "100%", maxHeight: "70%" }}
          />
          <button
            onClick={() => imgAction("next-img")}
            style={{
              marginLeft: "10px",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              border: 0,
              backgroundColor: "transparent",
            }}
          >
            <i
              class="fa-solid fa-arrow-right"
              style={{ color: "white", fontSize: "25px" }}
            ></i>
          </button>
        </div>
      )}
      <div className="todo-promos">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {imagesPromo.map((image, i) => (
              <img
                key={i}
                src={image}
                style={{ width: "100%", display: "block" }}
                alt=""
                onClick={() => viewImage(image, i)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default PromocionesPc;
