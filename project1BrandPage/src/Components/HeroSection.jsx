export default function HeroSection() {
  return (
    <div className="hero-sec">
      <div className="text area">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p className="des">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="buttons">
          <button className="btn">Shop Now</button>
          <button className="catagory-btn btn">Catagory</button>
        </div>

        <div>
          <p className="also-avaliable">Also Avaliable on</p>
          <div className="logo">
            <img src="/images/flipkart.png" alt="flipkart-logo" />
            <img src="/images/amazon.png" alt="amazon-logo" />
          </div>
        </div>
      </div>
      <div className="shoes-picture">
        <img src="/images/hero-image.png" alt="red-shoes-picture" />
      </div>
    </div>
  );
}
