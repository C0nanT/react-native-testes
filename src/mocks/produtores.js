import green from "..assets/produtores/green.png";
import grow from "..assets/produtores/grow.png";
import jennyjack from "..assets/produtores/jenny-jack.png";
import potager from "..assets/produtores/potager.png";
import salad from "..assets/produtores/salad.png";

const geraNumero = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const produtores = {
  titulo: "Produtores",
  lista: [
    {
      nome: "Green",
      imagem: green,
      distancia: `${geraNumero(100, 800)}m`,
      estrelas: geraNumero(1, 5),
    },
    {
      nome: "Grow",
      imagem: grow,
      distancia: `${geraNumero(100, 800)}m`,
      estrelas: geraNumero(1, 5),
    },
    {
      nome: "Jenny",
      imagem: jennyjack,
      distancia: `${geraNumero(100, 800)}m`,
      estrelas: geraNumero(1, 5),
    },
    {
      nome: "Potager",
      imagem: potager,
      distancia: `${geraNumero(100, 800)}m`,
      estrelas: geraNumero(1, 5),
    },
    {
      nome: "Salad",
      imagem: salad,
      distancia: `${geraNumero(100, 800)}m`,
      estrelas: geraNumero(1, 5),
    },
  ],
};

export default produtores;
