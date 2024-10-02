import Header from "../component/header";

export default function About() {
  return (
    <div>
      <Header />
      
      <div className="aboutSection">
        <h2 className="title">About the Car</h2>
        <div className="content">
          <img 
            src="/images.jpeg" 
            alt="Tesla Roadster 2023 showcasing its sleek design" 
            className="carImage"  
          />
          <div className="text">
            <h3>Model: SuperFast 2023</h3>
            <p>
              The SuperFast 2023 is a revolutionary car that combines luxury,
              performance, and cutting-edge technology. With a sleek design and
              an aerodynamic body, this car is built for speed and efficiency.
            </p>
            <p>
              Equipped with a powerful V8 engine, it goes from 0 to 60 mph in
              just 3.5 seconds. Inside, you’ll find state-of-the-art features,
              including a premium sound system, adaptive cruise control, and
              advanced safety technologies.
            </p>
            <p>
              Experience the future of driving with the SuperFast 2023.
              <a href="/test-drive" className="cta"> Book a test drive!</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
