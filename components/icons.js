import Image from "next/image";
import Create_curr from "../public/images/Create.svg";
import Create_done from "../public/images/Create_done.svg";
import Pwd_notDone from "../public/images/Set.svg";
import Pwd_curr from "../public/images/Set_2.svg";
import Pwd_done from "../public/images/Set_2.svg";
import Verify_notDone from "../public/images/Verify.svg";
import Verify_curr from "../public/images/Verify_2.svg";
import Verify_done from "../public/images/Verify_done.svg";

function Icons({ step }) {
  let verifyImg = Verify_notDone,
    createAccImg = Create_done,
    setPwdImg = Pwd_notDone;

  if (step === "password") {
    setPwdImg = Pwd_curr;
  } else if (step === "verify") {
    setPwdImg = Pwd_done;
    verifyImg = Verify_curr;
  } else if (step === "account") {
    createAccImg = Create_curr;
  } else {
    setPwdImg = Pwd_done;
    verifyImg = Verify_done;
  }

  return (
    <div className="icon_box">
      <table className="icon_table">
        <tbody>
          <tr>
            <td><Image className="icon" src={createAccImg} alt="create" /></td>
            <td><hr className="icon_hr" /></td>
            <td><Image className="icon" src={setPwdImg} alt="set" /></td>
            <td><hr className="icon_hr" /></td>
            <td><Image className="icon" src={verifyImg} alt="verify" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Icons;
