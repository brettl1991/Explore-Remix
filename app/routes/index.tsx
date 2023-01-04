import { Link } from "@remix-run/react";

const Main = () => {
  return (
    <div className="main-page">
      <div className="header">
        <h1>Agn Photography</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
      <div className="nav">
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/services/services">
          Services
        </Link>
        <Link className="link" to="/contacts/contacts">
          Contacts
        </Link>
      </div>
      <div className="row">
        <div className="side">
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            eveniet mollitia veritatis architecto est ex. Iure, qui voluptatum?
            Dicta aut ad aspernatur? Sunt inventore voluptate facere dicta at
            sint nemo. Mollitia iste minus veritatis quae sunt fuga! Omnis, amet
            nisi!
          </p>
        </div>

        <div className="main">
          <h2>Work With Me</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur quaerat tenetur id eligendi molestias corrupti! Non,
            numquam maxime doloribus iste aliquam nemo, dicta corporis adipisci
            vel repellendus quasi. Quos, voluptate.
          </p>
        </div>
      </div>
      <div className="footer">
        <h2>&copy; Agn Photography 2023</h2>
      </div>
    </div>
  );
};

export default Main;
