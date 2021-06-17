import leftPicture from "../assets/dom1.jpg";
import rightPicture from "../assets/dom2.jpg";

const places = [
  {
    title: "Left",
    description:
      "lorem ipsumLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in natus eos, perspiciatis repellendus ipsa dolor impedit explicabo aspernatur soluta, fugiat libero sunt officiis ex molestiae nihil dolorum? Expedita, rerum!",
    imageUrl: process.env.PUBLIC_URL + leftPicture,

    time: 1500,
  },

  {
    title: "Right",
    description:
      "lorem ipsumLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in natus eos, perspiciatis repellendus ipsa dolor impedit explicabo aspernatur soluta, fugiat libero sunt officiis ex molestiae nihil dolorum? Expedita, rerum!",
    imageUrl: process.env.PUBLIC_URL + rightPicture,
    time: 1500,
  },
];

export default places;
