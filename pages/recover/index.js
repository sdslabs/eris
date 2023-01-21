import Button1 from "../../components/button1";
import Input from "../../components/input_box";
import Think from "../../public/images/illustration_think.png";
import Labs from "../../public/images/labs logo.png";
import Image from "next/image";
import Carousel from "../../components/carousel";

const RecoverPage = ({ refs }) => {
  return (
<div>
    <div className="split_left carousel">
        <div className="top">
            <Image src={Labs} alt="labs" />
        </div>
        <div className="centred_img">
        <Carousel />
        </div>
    </div>
    <div className="split_right">
        <div className="login">
            <div>
                <h1>Reset <span className="green">Password</span></h1>
            </div>
            <div className="form">
                <div>
                    <p>Email address</p>
                    <Input 
                        text={"Enter your registered email address"}
                    />
                </div>
                <div>
                    <Button1
                        text={"Send reset link"}
                    />
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default RecoverPage;

