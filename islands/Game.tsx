
import { h } from "preact";
import { useState } from "preact/hooks";

type Stage =
  | "intro"
  | "scene1"
  | "scene2"
  | "scene3"
  | "hidden"
  | "fight"
  | "escape";

export default function Game() {
  const [stage, setStage] = useState<Stage>("intro");
  const [description, setDescription] = useState(
    "Ciemność otacza Cię, czujesz ból i dziwne uczucie w ciele. Twoje ciało wydaje się inne – ręka pokryta jest łuskami, oko widzi w ciemnościach, a w głowie słyszysz szepty Chaosu."
  );
  const [morality, setMorality] = useState("");

  const handleChoice = (choice: string) => {
    if (stage === "intro") {
      if (choice === "A") {
        setStage("scene1");
        setDescription(
          "Zignorowałeś zmiany w swoim ciele i postanowiłeś skupić się na ucieczce. W oddali widzisz światło – biegniesz ku niemu, ale coś za Tobą szepcze groźby. Czy to Twoje myśli, czy coś więcej?"
        );
      } else if (choice === "B") {
        setStage("scene1");
        setDescription(
          "Zaczynasz badać swoje ciało. Twoja prawa ręka przypomina łapę skavena – pokryta jest twardymi łuskami i zakończona ostrymi pazurami. Twoje lewe oko widzi inaczej – dostrzegasz ślady spaczenia i słyszysz głosy Chaosu, które nie chcą ucichnąć."
        );
      }
    } else if (stage === "scene1") {
      if (choice === "A1") {
        setStage("scene2");
        setDescription(
          "Uklęknąłeś przy szczątkach Adelberta i Ragnara. Wspomnienia uderzają Cię niczym fala. Pamiętasz ich twarze, głosy, decyzje. W głowie pojawiają się pytania."
        );
      } else if (choice === "A2") {
        setStage("scene3");
        setDescription(
          "Zignorowałeś szczątki towarzyszy, koncentrując się na znalezieniu wyjścia. Otoczenie wydaje się coraz bardziej niebezpieczne, słyszysz odgłosy skavenów w oddali."
        );
      }
    } else if (stage === "scene2") {
      if (choice === "B1") {
        setMorality("Wyrzuty sumienia");
        setStage("scene3");
        setDescription(
          "„Byli dla mnie przyjaciółmi, a ja ich zdradziłem”. Uczucie winy wypełnia Twoje serce, ale postanawiasz iść dalej."
        );
      } else if (choice === "B2") {
        setMorality("Egoizm");
        setStage("scene3");
        setDescription(
          "„Zrobiłem to dla siebie, nigdy mi na nich nie zależało”. Te słowa rezonują w Twoim umyśle, prowadząc Cię dalej."
        );
      } else if (choice === "B3") {
        setMorality("Gniew");
        setStage("scene3");
        setDescription(
          "„To ich wina! Nie mieli prawa mnie osądzać”. Gniew dodaje Ci siły na dalszą podróż."
        );
      }
    } else if (stage === "scene3") {
      if (choice === "C1") {
        setStage("hidden");
        setDescription(
          "Ukryłeś się w szczątkach areny. Skaveni badają miejsce eksplozji, co daje Ci chwilę na zaplanowanie kolejnego kroku."
        );
      } else if (choice === "C2") {
        setStage("fight");
        setDescription(
          "Zdecydowałeś się walczyć, używając swojej nowej mutacji. Twoja ręka z łatwością rozszarpuje skavenów, ale w głowie słyszysz głosy Chaosu, które Cię paraliżują"
        );
      } else if (choice === "C3") {
        setStage("join");
        setDescription(
          "Dołączasz do grupy patrolujących skavenów, spoglądasz na nich a oni na ciebie..."
        );
      }
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Tekstowa gra RPG</h1>
      <div style={{ alignSelf: "center"}}>
      <p>{description}</p>
      {stage === "intro" && (
        <div>
          <button onClick={() => handleChoice("A")}>
            A) Zignorować zmiany i uciekać 
          </button>
          <button onClick={() => handleChoice("B")}>
            B) Zbadać swoje ciało 
          </button>
        </div>
      )}
      {stage === "scene1" && (
        <div>
          <button onClick={() => handleChoice("A1")}>
            A1) Uklęknąć przy szczątkach towarzyszy 
          </button>
          <button onClick={() => handleChoice("A2")}>
            A2) Zignorować szczątki i szukać wyjścia 
          </button>
        </div>
      )}
      {stage === "scene2" && (
        <div>
          <button onClick={() => handleChoice("B1")}>
            B1) Wyrzuty sumienia 
          </button>
          <button onClick={() => handleChoice("B2")}>
            B2) Egoizm 
          </button>
          <button onClick={() => handleChoice("B3")}>
            B3) Gniew 
          </button>
        </div>
      )}
      {stage === "scene3" && (
        <div>
          <button onClick={() => handleChoice("C1")}>
            C1) Ukryć się 
          </button>
          <button onClick={() => handleChoice("C2")}>
            C2) Walczyć 
          </button>
          <button onClick={() => handleChoice("C3")}>
            C3) Dołączyć do nich
          </button>
        </div>
      )}
      {["hidden", "fight", "join"].includes(stage) && (
        <div>
          <p>Koniec pierwszej godziny gry.</p>
          {morality && <p>Twoje uczucia: {morality}</p>}
          <p>Czy Thomas jest zadowolony ze swojej kampani?</p>
          <input></input>
        </div>
      )}
    </div>
    </div>
  );
}
