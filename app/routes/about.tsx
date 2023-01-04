import BackLink from "~/components/BackLink";
import nature from "~/imges/nature.jpg";
import image from "~/imges/nature-two.jpg";
import imagenew from "~/imges/nature-3.jpg";

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
            <img src={image} alt="Forest" />
          </div>
          <div className="image-column">
            <img src={imagenew} alt="Mountains" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
