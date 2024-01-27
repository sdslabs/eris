import Image from "next/image";
import { useRouter } from "next/router";
import { React } from "react";
import Carousel from "../../components/carousel";
import Verify from "../../components/verifyEmail";
import Labs from "../../public/images/labs logo.png";

function VerifyEmailPage() {
  const router = useRouter();
  return (
    <div>
      <div className="split_left">
        <div className="top">
          <Image src={Labs} alt="labs" />
        </div>
        <div className="centred_img">
          <Carousel />
        </div>
      </div>
      <div className="split_right ">
        <div className="signup">
          <Verify email={router.query.email} />
        </div>
      </div>
    </div>
  );
}

export default VerifyEmailPage;
