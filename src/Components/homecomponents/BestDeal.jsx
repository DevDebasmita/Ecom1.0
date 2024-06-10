import "./home.css";

const BestDeal = () => {
  return (
    <div className="bestdeal-container">
      <div className="bestdeal">
        <div className="right">
          <h1>Best Deal On Fashion</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
            dolorum dolore rerum odit omnis? Aperiam dicta reiciendis at cum.
            Repellendus quos tempora quia, iusto dolore alias dignissimos
            blanditiis perferendis dolores.
          </p>
          <button className="btn1">Buy Now</button>
          <div className="time_box">
            <h3>Hurry, Before it's Too Late!</h3>
            <div className="time1">
              <div className="box">
                <div className="time">02</div>
                <div className="time-n">Day</div>
              </div>
              <div className="box">
                <div className="time">06</div>
                <div className="time-n">Hr</div>
              </div>
              <div className="box">
                <div className="time">05</div>
                <div className="time-n">Min</div>
              </div>
              <div className="box">
                <div className="time">30</div>
                <div className="time-n">Sec</div>
              </div>
            </div>
          </div>
        </div>

        <div className="left">
          <div className="left-col">
            <img src="../F1.jpeg" alt="waiting" />
          </div>
          <div className="left-col2">
            <img src="../F2.jpeg" alt="" />
          </div>
          <div className="left-col2">
            <img src="../F3.jpeg" alt="" />
          </div>
        </div>
      </div>
      <div className="dots">
        &bull; &bull; &bull;
      </div>
    </div>
  );
};

export default BestDeal;
