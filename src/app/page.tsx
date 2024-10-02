import Image from 'next/image'; 
import tesla from './Portfolio/page';

import Header from "../app/component/header"
import Footer from "../app/component/footer"
export default function header(){
  return(
    <div>
    <Header />
    
    <h1 className='main screen'> Your car deserves the best care on the road.<br></br> Trust us to provide top-notch service<br></br> that keeps you moving smoothly and safely,<br></br>
       because every journey starts with a well-maintained ride.</h1>
            <Image 
            className='image'
                src={"/car.jpeg"}
                alt="Profile"
                width={500} 
                height={ 300}
                />

        
    <Footer />
    </div>
  );
}