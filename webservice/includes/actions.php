<?php
/**
 * @return array
 */

// Opdracht 5: Unsplash API inladen
function getDishes()
{
    return [
        [
            "id" => 1,
            "name" => "Bulgogi",
            "kitchen" => "Korean",
            "image" => "https://source.unsplash.com/1600x900/?bulgogi"
        ],
        [
            "id" => 2,
            "name" => "Broodje gehaktbal",
            "kitchen" => "Dutch",
            "image" => "https://source.unsplash.com/1600x900/?meatball"
        ],
        [
            "id" => 3,
            "name" => "Lasagna",
            "kitchen" => "Italian",
            "image" => "https://source.unsplash.com/1600x900/?lasagne"
        ],
        [
            "id" => 4,
            "name" => "Vindaloo",
            "kitchen" => "Indian",
            "image" => "https://source.unsplash.com/1600x900/?indian,kitchen"
        ],
        [
            "id" => 5,
            "name" => "Gözleme",
            "kitchen" => "Turkish",
            "image" => "https://source.unsplash.com/1600x900/?turkish,kitchen"
        ],

        [
            "id" => 6,
            "name" => "Spaghetti",
            "kitchen" => "Italian",
            "image" => "https://source.unsplash.com/1600x900/?spaghetti"
        ],
        [
            "id" => 7,
            "name" => "Nachos",
            "kitchen" => "Mexican",
            "image" => "https://source.unsplash.com/1600x900/?nachos"
        ],

        [
            "id" => 8,
            "name" => "Biryani",
            "kitchen" => "Indian",
            "image" => "https://source.unsplash.com/1600x900/?biryani"
        ],
        [
            "id" => 9,
            "name" => "Sashimi",
            "kitchen" => "Japanese",
            "image" => "https://source.unsplash.com/1600x900/?sashimi"
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */

// Opdracht 2
function getDishDetails($id)
{
    $tags = [
        1 => [
            "recipe" => "Bulgogi is een van Korea's populairste rundvleesgerechten. Letterlijk vertaald betekent het vuurvlees, en het wordt in die zin ook gebruikt voor andere Koreaanse barbecue-gerechten, zoals dak bulgogi (kip) en dweji bulgogi (varken) (Bron: Wikipedia).",
            "tags" => ['Koreaans', 'Gamasot']
        ],
        2 => [
            "recipe" => "Een broodje gehaktbal is een typische Oer-Hollandse snack!",
            "tags" => ['Nederlands', 'Gehaktbal']
        ],
        3 => [
            "recipe" => "Lasagne is een Italiaanse ovenschotel die wordt bereid met dunne pastabladen van circa 10 bij 15 cm (Bron: Wikipedia).",
            "tags" => ['Italiaans']
        ],
        4 => [
            "recipe" => "Vindaloo is een Indiase curry die populair is in de regio van Goa en bekendstaat als een zeer pittig gerecht. De basisingrediënten zijn lams-, varkens- of kippenvlees, azijn, suiker, gember en specerijen. Andere bekende namen voor het gerecht zijn vindalho of vindallo (Bron: Wikipedia).",
            "tags" => ['Indiaas', 'Goa']
        ],
        5 => [
            "recipe" => "Gözleme is een hartig, traditioneel Turks gebak/gerecht, gemaakt van met de hand gerold deeg dat lichtjes is ingesmeerd met boter en eieren, gevuld met verschillende dingen, verzegeld en gekookt op een bakplaat (Bron: Wikipedia).",
            "tags" => ['Turks']
        ],
        6 => [
            "recipe" => "Spaghetti is een ronde pastasliert, waarmee typisch Italiaanse gerechten kunnen worden gemaakt. Spaghetti wordt, onder de naam itriyya voor het eerst vermeld in een Syrisch-Arabisch woordenboek door Isho bar Ali, een arts en lexicograaf in de negende eeuw als product van Siciliaanse boeren dat met scheepsladingen tegelijk wordt geëxporteerd (Bron: Wikipedia).",
            "tags" => ['Italiaans']
        ],
        7 => [
            "recipe" => "Nacho's zijn een gerecht uit de Tex-Mexkeuken. Ze worden zowel als hoofdgerecht als bij wijze van snack gegeten (Bron: Wikipedia).",
            "tags" => ['Mexicaans']
        ],
        8 => [
            "recipe" => "Biryani is een Indiaas rijstgerecht dat is ontstaan binnen de islamitische samenleving van het Indisch subcontinent (Bron: Wikipedia).",
            "tags" => ['Indiaas']
        ],
        9 => [
            "recipe" => "Sashimi is een Japans gerecht van verse, rauwe vis en schelpdieren die met een zeer scherp mes in dunne schijfjes gesneden worden (Bron: Wikipedia).",
            "tags" => ['Japans']
        ],
    ];

    return $tags[$id];
}
