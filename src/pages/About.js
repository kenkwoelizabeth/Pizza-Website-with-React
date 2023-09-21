import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Our family has always cherished the tradition of gathering at my grandmother's house. She had a remarkable talent for making pizzas that were nothing short of legendary. Her secret recipes, perfected over years of love and dedication, transformed every Friday into a special occasion we fondly referred to as "Pizza Day."

Grandma Pizza's kitchen was a place of magic and laughter. As she kneaded the dough, spread the rich tomato sauce, and sprinkled an array of toppings, the aroma wafted through the house, drawing us all together. Each pizza was a work of art, and every bite was a taste of heaven.

We couldn't help but be captivated by the joy that these pizza gatherings brought to our family. The happiness, the conversations, and the unforgettable flavors created memories that we cherished deeply.

It was during one of these cherished Friday evenings, as we savored Grandma Pizza's creations, that the idea of sharing her culinary magic with the world was born. We decided to honor her legacy by starting our very own pizza business, dedicated to preserving her recipes and sharing them with others.

And so, our pizza business was born out of a genuine love for Grandma Pizza's creations and a desire to extend her warmth and deliciousness to all pizza lovers. Each pizza we make is a tribute to her, crafted with the same dedication and care that she put into her beloved recipes.

Today, we proudly continue Grandma Pizza's tradition, offering the same mouthwatering pizzas that brought our family together for generations. It's not just about the food; it's about the joy, the togetherness, and the love that each slice represents.


        </p>
      </div>
    </div>
  );
}

export default About;
