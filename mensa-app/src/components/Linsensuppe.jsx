import React from "react";
import Bewertungskarte from "./Bewertungskarte";
import Bild from "../Images/Vegan3_Linsensuppe.jpeg";

const Linsensuppe = () => {
  const bewertungenLinsenSuppe = [
    {
      rating: "6,5",
      title: "Beste Linsensuppe",
      text: "Die türkische Linsensuppe mit Fladenbrot überzeugt zwar nicht mit einem schönen Aussehen punktet aber mit einem Schnapperpreis und gutem Geschmack. Die Suppe besteht wie man es unschwer am Namen bereits erkennen kann vor allem aus Linsen, hinzu kommen Kartoffeln und Paprika. Gewürzt ist die Suppe so, dass man zwar eine gewisse Schärfe herausschmecken kann, aber auch nicht den ganzen Nachmittag auf dem Mensaklo verbringen muss. Dennoch empfehlenswert ist es mit Salz und Pfeffer nachzubessern, da diese Gewürze ein wenig fehlen. Im Bezug auf die Portion enttäuscht die Linsensuppe auch nicht, man mag zwar denken, dass eine Suppe auch mit Fladenbrot und Beilagensalat nicht den Hunger stillen kann den man zur Mensa mitbringt, dabei täuscht man sich aber. Denn aufgrund der Größe der Schüsseln in der die Suppe serviert wird, sollte man garantiert satt werden von der Portion. Falls dies nicht der Fall ist, kann man sich ohne schlechtes Gewissen noch eine zweite Portion holen, da sie mit einem Preis von 1.80€ preislich unschlagbar ist. Das einzige Manko meiner Meinung nach ist, dass das Stück Fladenbrot nicht besonders groß ist und man auch nur eins erhält. Im Großen und Ganzen ist dies aber meckern auf hohem Niveau.Zusammenfassend lässt sich sagen, dass die türkische Linsensuppe zwar nicht das beste Gericht der Mensa ist, aber immer eine solide Option bietet. Beispielsweise wenn man mal knapp bei Kasse ist oder die anderen Optionen sich nicht für den Preis lohnen. Man wird garantiert nicht von dem grundsoliden Gericht enttäuscht, deshalb gebe ich ihm: 6.5/10 Punkten",
      author: "Thomas G.",
      date: "02.03.24",
    },
    {
      rating: "8",
      title: "Geilo!",
      text: "Das ist einfach eine großartige Linsensuppe!",
      author: "Hank L.",
      date: "29.02.24",
    },
    {
      rating: "2",
      title: "Was für eine Verschwendung!",
      text: "Ich mag gar keine Linsen und auch keine Suppen. Das Beste an dem Essen war das Fladenbrot!",
      author: "Su W.",
      date: "01.02.24",
    },
  ];
  return (
    <div className="container">
      <h1 className="text-center">Linsensuppe</h1>
      <div className="row text-center">
        <div className="col-md-6">
          <img src={Bild} className="rounded" width="300px" />
          <p></p>
          <p></p>
        </div>
        <div className="col-md-6">
          <h3>1,80€</h3>
          <h5 className="align-middle">6/10</h5>
          <h5 className="align-middle">Enthält Gluten, Weizen, Sesamsamen</h5>
        </div>
      </div>
      {bewertungenLinsenSuppe.map((item, index) => {
        return (
          <Bewertungskarte
            rating={item.rating}
            title={item.title}
            text={item.text}
            author={item.author}
            date={item.date}
          ></Bewertungskarte>
        );
      })}
    </div>
  );
};

export default Linsensuppe;
