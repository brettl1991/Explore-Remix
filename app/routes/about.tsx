import BackLink from "~/components/BackLink";
import nature from "~/imges/nature.jpg";
import image from "~/imges/nature-two.jpg";
import imagenew from "~/imges/nature-3.jpg";
import zebra from "~/imges/zebra.jpg";
import elephant from "~/imges/elephant.jpg";
import lion from "~/imges/lion.jpg";
import turtle from "~/imges/turtle.jpg";
import doplhin from "~/imges/dolphin.jpg";
import nemo from "~/imges/nemo.jpg";

const About = () => {
  return (
    <div className="main-page">
      <div className="nav">
        <BackLink />
      </div>
      <div className="about">
        <h1>About my photography work</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsum
          quas beatae autem ad impedit. Officia, corrupti delectus? Sed
          voluptate dolore a libero commodi molestias ducimus officiis omnis
          eum, impedit vero aliquam nobis iure, saepe similique tempora eveniet
          eligendi! Repellendus illo libero numquam vitae quidem soluta quam
          neque praesentium consequatur! Corporis molestiae possimus sed
          reiciendis quod suscipit enim vitae assumenda modi minus perferendis
          maiores dignissimos et, explicabo harum deserunt illo quos adipisci
          corrupti hic! Accusantium voluptatum consequatur eveniet voluptatibus
          debitis, sit natus minima incidunt nobis doloremque vitae officiis
          minus ab deserunt rem reiciendis laudantium tempora consequuntur,
          earum fugit perferendis! Laudantium.
        </p>
        <h2>Nature photos</h2>
        <div className="image-row">
          <div className="image-column">
            <img src={nature} alt="nature" />
          </div>
          <div className="image-column">
            <img src={image} alt="nature" />
          </div>
          <div className="image-column">
            <img src={imagenew} alt="nature" />
          </div>
        </div>
        <h2>Wild animal photos</h2>
        <div className="image-row">
          <div className="image-column">
            <img src={zebra} alt="zebra" />
          </div>
          <div className="image-column">
            <img src={elephant} alt="elephant" />
          </div>
          <div className="image-column">
            <img src={lion} alt="lion" />
          </div>
        </div>
        <h2>Sea life photos</h2>
        <div className="image-row">
          <div className="image-column">
            <img src={turtle} alt="turtle" />
          </div>
          <div className="image-column">
            <img src={doplhin} alt="dolphin" />
          </div>
          <div className="image-column">
            <img src={nemo} alt="nemofishes" />
          </div>
        </div>
        <h2 className="about-contact">
          For more photos please{" "}
          <a
            href="https://linkedin.com/in/agnes-brettl-55b5a5a0"
            target="_blank"
          >
            CONTACT
          </a>{" "}
          me!
        </h2>
      </div>
      <div className="footer">
        <h2>&copy; Agn Photography 2023</h2>
      </div>
    </div>
  );
};

export default About;
