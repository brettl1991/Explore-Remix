import { Link } from "@remix-run/react";

const BackLink = () => {
  return (
    <Link className="link" to="/">
      {" "}
      Back to Home Page
    </Link>
  );
};

export default BackLink;
