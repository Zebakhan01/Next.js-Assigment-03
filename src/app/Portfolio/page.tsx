import Header from "../component/header";

export default function Portfolio(){


    return (
      <div>
        <Header />
      
        <div className="car">
           
            
            <section className="carDetails">
                <h2>Car Model: Tesla Model S</h2>
                <img src="/tesla-roadster-new.jpeg" alt="Tesla Model S" className="carImage" />
                <p><strong>Year:</strong> 2023</p>
                <p><strong>Color:</strong> Black</p>
                <p><strong>Engine:</strong> Electric</p>
                <p><strong>Features:</strong></p>
                <ul>
                    <li>Autopilot</li>
                    <li>Fast Charging</li>
                    <li>All-Wheel Drive</li>
                    <li>Premium Interior</li>
                </ul>
            </section>

            <footer className="footer">
                <p>&copy; 2024 Car Enthusiast</p>
            </footer>
        </div>
        </div>
    );
};


