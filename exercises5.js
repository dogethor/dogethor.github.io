const exercises = [
    {
        question: "<b>Zadanie 1.</b> <br><br> Liczby 𝑥₁ i 𝑥₂ są różnymi rozwiązaniami równania |𝑥 + 4| = 7. Suma 𝑥₁ + 𝑥₂ jest równa:",
        answers: ["A. (−14)", "B. (−8)", "C. 3", "D. 8"],
        correctAnswer: "B. (−8)",
        hint: "Z wartości bezwzględnej czyli |takich nawiasów| zawsze wyjdzie wartość nieujemna, czyli: |7| = 7 oraz |-7| = 7. Co więc musi stać zamiast x aby wychodziło podobnie jak w tych przykładach?",
        formulasPage: 4,
        solutionText: "po pouszczeniu nawiasów są dwie możliwości: <br><br> 1. <br> x + 4 = 7 <br> x = 7 -4 = 3 <br><br>2. <br> x + 4 = -7 <br> x = -7 -4 = -11 <br><br>  3-11 = -8 czyli odp B.<br><br>",
        interactiveExplanation: function(container) {
            container.innerHTML += `
                <label for="aInput">| 𝑥 + </label>
                <input type="number" id="aInput" value="4" oninput="drawNumberLine1(this)">
                | = 
                <input type="number" id="bInput" value="7" oninput="drawNumberLine1(this)">
                <br>
                <canvas id="numberLine" width="500" height="100"></canvas>
            `;

            drawNumberLine1(container.querySelector("#bInput")); // #aInput or #bInput whatever
        }
    },
    {
        question: '<b>Zadanie 2.</b> <br><br> Liczba <img src="zad2.png" style="width:100px;height:50px;"> jest równa:',
        answers: ["A. 5<sup>4</sup>", "B. 5<sup>-4</sup>", "C. 5<sup>0.25</sup>", "D. 5<sup>-0.25</sup>"],
        correctAnswer: "",
        hint: "Stopień pierwiastaka jest jak mianownik w wykładniku. -5 możesz możesz włączyć do nawiasu (do każdego z czynników) i takie tam. <button onclick='otworzTabliceNaStronie(10)'> Pokaż potrzebne wzory <button/>",
        formulasPage: 5,
        solutionText: "5^-1 * 5^5 = 5^(5-1) = 5^4",
        interactiveExplanation: null
    },
    {
        question: '<b>Zadanie 3.</b> <br><br> Wykaż, że liczba 𝟐<sup>𝟏𝟎𝟎</sup> + 𝟒<sup>𝟒𝟗</sup> + 𝟏𝟔<sup>𝟐𝟒</sup> jest podzielna przez 𝟐𝟏.',
        answers: [],
        correctAnswer: "",
        hint: "Żeby wykazać podzielność przez <b>21</b>, będziemu rozłożyć tą liczbe na czynniki, czyli wyciągać coś przed nawias aby powstało: <b>... * 21</b>",
        formulasPage: 5,
        solutionText: "<b> 2<sup>100</sup> + 2<sup>98</sup> + 2<sup>96</sup> <br>2<sup>96</sup> * (2<sup>4</sup> + 2<sup>2</sup> + 2<sup>96</sup>) <br>2<sup>96</sup> * 21</b>  <- ta liczba jest podzielna przez <b>21</b>",
        interactiveExplanation: null
    },
    {
        question: "<b>Zadanie 4.</b> <br><br> Dla każdej dodatniej liczby rzeczywistej <b>x</b> i dla każdej dodatniej liczby rzeczywistej <b>y</b> wartość wyrażenia <b>log<sub>7</sub> x + 6 log<sub>7</sub> y</b> jest równa wartości wyrażenia:",
        answers: ["<b>A. log<sub>7</sub> (<sup>x</sup>&frasl;<sub>y<sup>6</sup>)</sub></b>", "<b>B. log<sub>7</sub> ((xy)<sup>6</sup>)</b>", "<b>C. log<sub>7</sub>(6xy)</b>", "<b>D. log<sub>7</sub>(xy<sup>6</sup>)</b>"],
        correctAnswer: "",
        hint: "Skorzystaj z własności logarytmów: <b>log<sub>a</sub>(x) + log<sub>a</sub>(y) = log<sub>a</sub>(x*y)</b> oraz <b>log<sub>a</sub>(x<sup>b</sup>) = b*log<sub>a</sub>(x)</b>",
        formulasPage: 5,
        solutionText: "",
        interactiveExplanation: null
    },
    {
        question: "<b>Zadanie 5.</b> <br><br> Pani Aniela wpłaciła do banku kwotę <b>60 000 zł</b> na lokatę dwuletnią. Po każdym rocznym okresie oszczędzania bank doliczał odsetki w wysokości 𝑝% w skali roku od kwoty bieżącego kapitału znajdującego się na lokacie – zgodnie z procentem składanym. Na koniec okresu oszczędzania kwota na tej lokacie była równa <b> 67 925,76 zł </b> wraz z odsetkami (bez uwzględniania podatków). <br><br> Oprocentowanie lokaty w skali roku było równe:",
        answers: ["<b>A.</b> <b>6%</b>", "<b>B.</b> <b>6,4%</b>", "<b>C.</b> <b>6,5%</b>", "<b>D.</b> <b>7%</b>"],
        correctAnswer: "",
        hint: "Korzystamy z wzoru na procent składany: <b>P = P<sub>0</sub> * (1 + r)<sup>n</sup></b>",
        formulasPage: 10,
        solutionText: "",
        interactiveExplanation: function(container){
            rysujWykresEksponencjalny(container);

        }
    },
    {
        question: '<b>Zadanie 6.</b> <br><br> Dla każdej liczby rzeczywistej 𝑥 różnej od (−1), 0 oraz 1 wartość wyrażenia <img src="zad6.png" style="height:50px;">',//Brzydki zapis matematyczny w html: <b> <sup>x</sup>&frasl;<sub>x<sup>2</sup> - 1<sub> : <sup>3x<sup>3</sup></sup>&frasl;<sub>x + 1<sub></b>
        answers: ['<b>A.</b> <img src="zad6odp1.png" style="height:50px;">', '<b>B.</b> <img src="zad6odp2.png" style="height:50px;">', '<b>C.</b> <img src="zad6odp3.png" style="height:50px;">', '<b>D.</b> <img src="zad6odp4.png" style="height:40px;">'],
        correctAnswer: "",
        hint: "Skorzystaj z własności logarytmów: <b>log<sub>a</sub>(x) + log<sub>a</sub>(y) = log<sub>a</sub>(x*y)</b> oraz <b>log<sub>a</sub>(x<sup>b</sup>) = b*log<sub>a</sub>(x)</b>",
        formulasPage: 5,
        solutionText: "",
        interactiveExplanation: null
    },
];