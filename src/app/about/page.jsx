import Image from "next/image";
import jumur from '../../assets/images/jumur1.jpg'

const AboutPage = () => {
    return (
        <div>
              <h2>this is about </h2>
               <Image width="500" height="300" src="/jannat.jpg" alt="girl pic"></Image>
               <Image width="300" height="200" src={jumur} alt=""></Image>


        </div>
    );
};

export default AboutPage;