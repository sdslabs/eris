import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faCheckCircle} from "@fortawesome/free-solid-svg-icons";
const user = <FontAwesomeIcon icon={faUser} />;
const key = <FontAwesomeIcon icon={faKey} />;
const tick = <FontAwesomeIcon icon={faCheckCircle} />;

const Icons = ({ }) => {
    
      return (
        <table className="icons">
        <tr>
          <td><i>{user}</i></td>
          <td><hr/></td>
          <td><i> {tick}</i></td>
          <td><hr /></td>
          <td><i> {key}</i></td>
        </tr>
        <tr>
          <td>Create account</td>
          <td></td>
          <td>Verify Email</td>
          <td></td>
          <td>Set password</td>
        </tr>
      </table>
      );
    };
    
    export default Icons;
    
    