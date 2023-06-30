import { useState } from "react";
import {
  EmailFormFields,
  ErrorResponseArgs,
  PendingArgs,
  SuccessResponseArgs,
} from "react-mailchimp-subscribe";
import clsx from "clsx";
import locales from "../../app/api/utils/locales";

const EmailForm: React.FC<{
  status:
    | ErrorResponseArgs["status"]
    | SuccessResponseArgs["status"]
    | PendingArgs["status"];
  subscribe: (data: EmailFormFields) => void;
  message:
    | ErrorResponseArgs["message"]
    | SuccessResponseArgs["message"]
    | PendingArgs["message"];
  inputPlaceholder?: string;
  buttonLabel?: string;
}> = ({ status, message, subscribe, inputPlaceholder, buttonLabel }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (email === "") {
      setError(true);
      return;
    }
    subscribe({
      EMAIL: email,
    });
    setEmail("");
  };
  return (
    <div className="mail-msg">
      {status !== "sending" && status !== "success" && (
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="email"
            className={clsx("input-row", { error: error })}
            placeholder={inputPlaceholder ?? "Email address"}
            value={email}
            name={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input type="submit" 
          value={buttonLabel ?? locales.en.SUBSCRIBE}
           className="button" />
        </form>
      )}
    </div>
  );
};
export default EmailForm;
