import ButtonSubmit from "./button_submit";
import PasswordValidation from "./passwordValidation";
import Icons from "./icons_pass";

const SetPassword = () => {
  return (
    <div className="slide-in">
      <div>
        <h1>Set <span className="green">Password</span></h1>
      </div>
      <div className="form">
        <PasswordValidation />
      </div>
      <div>
        <ButtonSubmit
          text={"Confirm"}/>
      </div>
    </div>
  );
};

export default SetPassword;
