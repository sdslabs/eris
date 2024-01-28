import { useRouter } from "next/router";
import { React } from "react";
import LeftCarousel from "../../components/LeftCarousel";
import Verify from "../../components/verifyEmail";

function VerifyEmailPage() {
  const router = useRouter();
  return (
    <div>
      <LeftCarousel />
      <div className="split_right ">
        <div className="signup">
          <Verify email={router.query.email} />
        </div>
      </div>
    </div>
  );
}

export default VerifyEmailPage;
