/* Dla zadań 1-5 musisz skorzystać z danych z pliku data.js*/

console.log("***************1****************");

/*
1. Wykonaj funkcje, która zwróci jedynie osoby z podaną rasą w argumencie.
    Input: showOnlyUsersWithRace("Uruguayan")
    Output: [{id: 3, first_name: "Sondra", last_name: "Cossey", email: "scossey2@mapy.cz", gender: "Female", ip_address: "162.65.167.45",
    title: "Mr", job_title: "Associate Professor", race: "Uruguayan", company: "Lemke-Hartmann", age: 31, }]
    Input: showOnlyUsersWithRace(1)
    Output: "taka rasa nie istnieje"
    Input: showOnlyUsersWithRace('Polish')
    Output: []*/


// function showOnlyUsersWithRace(raceChoose) {
//   for (i = 0; i < people.length; i++) {
//     var result = "";
//     if (people[i].race == raceChoose) {
//       result = people[i];
//       break;
//     } else if (people[i].race.includes(raceChoose) == false && typeof (raceChoose) == "string") {
//       result = [];
//     } else {
//       result = "taka rasa nie istnieje";
//     }
//   }
//   return console.log(result);
// }
// showOnlyUsersWithRace("Uruguayan");
// showOnlyUsersWithRace(1);
// showOnlyUsersWithRace("Polish");


console.log("***************2***************");

/*
2. Wyświetl każdego z userów w konwencji: title first_name last_name work as job_title in company.
Output:
Honorable Elsa Pickhaver work as Nuclear Power Engineer in Nicolas, Kihn and Crist.
Mrs Clarance Vidineev work as Analyst Programmer in Cremin LLC.
Mr Sondra Cossey work as Associate Professor in Lemke-Hartmann.
Ms Ashly Kellough work as Database Administrator I in Denesik Group.
Rev Tiffanie Buncom work as Recruiting Manager in Macejkovic Group.
Honorable Nadean Fillis work as Civil Engineer in Senger Inc.
Ms Roderich Marmion work as Research Nurse in Green and Sons.
Honorable Free Sturgis work as VP Marketing in Cremin and Sons.
Rev Raquel Lembke work as Paralegal in Goodwin Group.
Mr Adah Cristofvao work as Health Coach IV in Sipes-Bernier. */

// for (i = 0; i < people.length; i++) {
//   console.log(people[i].first_name + " " + people[i].last_name + " work as " + people[i].job_title);
// }

console.log("***************3***************");

/*
3. Skróć zawartość kolekcji do kluczy id, first_name, last_name i dodaj nowy klucz full_name
składający się z first_name i last_name.
Output: [
{id: 1, first_name: "Elsa", last_name: "Pickhaver", full_name: "Elsa Pickhaver"}
{id: 2, first_name: "Clarance", last_name: "Vidineev", full_name: "Clarance Vidineev"}
{id: 3, first_name: "Sondra", last_name: "Cossey", full_name: "Sondra Cossey"}
{id: 4, first_name: "Ashly", last_name: "Kellough", full_name: "Ashly Kellough"}
{id: 5, first_name: "Tiffanie", last_name: "Buncom", full_name: "Tiffanie Buncom"}
{id: 6, first_name: "Nadean", last_name: "Fillis", full_name: "Nadean Fillis"}
{id: 7, first_name: "Roderich", last_name: "Marmion", full_name: "Roderich Marmion"}
{id: 8, first_name: "Free", last_name: "Sturgis", full_name: "Free Sturgis"}
{id: 9, first_name: "Raquel", last_name: "Lembke", full_name: "Raquel Lembke"}
{id: 10, first_name: "Adah", last_name: "Cristofvao", full_name: "Adah Cristofvao"}]*/


// for (i = 0; i < people.length; i++) {
//   people[i].full_name = people[i].first_name + " " + people[i].last_name;
//   var peopleShort = JSON.parse(JSON.stringify(people));
//   delete peopleShort[i].age;
//   delete peopleShort[i].company;
//   delete peopleShort[i].race;
//   delete peopleShort[i].job_title;
//   delete peopleShort[i].title;
//   delete peopleShort[i].ip_address;
//   delete peopleShort[i].gender;
//   delete peopleShort[i].email;

//   console.log(peopleShort[i]);
// }

console.log("***************4***************");

/*
4. Wyświetl jedynie osoby, które mają co najmniej 30 lat i są kobietami w konwencji 'imię ma X lat'
i na koniec wyświetl sumę ich lat.
Output:
Sondra ma 31 lat.
Ashly ma 42 lat.
Tiffanie ma 51 lat.
Nadean ma 45 lat.
Raquel ma 50 lat.
Adah ma 54 lat.
Razem mają: 273 lata.*/


// var ageCount = 0;
// for (i = 0; i < people.length; i++) {
//   if (people[i].age >= 30 && people[i].gender == "Female") {
//     console.log(people[i].first_name + " ma " + people[i].age + " lat");
//     ageCount += people[i].age;
//   }
// }
// console.log("Suma ich lat wynosi " + ageCount);


console.log("***************5***************");
/*
5*.  Dodaj do kolekcji dodatkowe klucze:
height: wiek + 100
weight: wiek + 10
// bmi: weight / (height/100) ^ 2
Następnie zwróc tablie imion tych osób, które mają BMI w zakresie 18,5–24,99.
Output: ["Elsa", "Clarance", "Sondra", "Roderich"]
*/


// for (i = 0; i < people.length; i++) {
//   people[i].height = people[i].age + 100;
//   people[i].weight = people[i].age + 10;
//   people[i].bmi = people[i].weight / ((people[i].height / 100) * (people[i].height / 100));
//   if (people[i].bmi >= 18.5 && people[i].bmi <= 24.99) {
//     console.log(people[i]);
//   }
// }


console.log("***************6***************");

// Input dla zadań 6-10:

const numbersList = [
  21,
  -20,
  49,
  5,
  -7,
  9,
  20,
  72,
  -4,
  23,
  -5,
  -22,
  120,
  20,
  -34,
  8,
  29,
  47,
  -21,
  -53,
  32,
  -27,
];

// 6. Policz sumę wszytskich elementów tablicy
// Output: 'Suma elementów w tablicy to 262.'


// var sum = 0;
// for (i = 0; i < numbersList.length; i++) {
//   sum = sum + numbersList[i];
// }
// console.log("Suma elementów w tablicy to " +
//   sum + ".");


console.log("***************7***************");
// 7. Policz sumę wartości bezwględnych w tablicy
// Output: 'Suma wartości bezwględnych z elementów w tablicy: 648.'


var sumAbs = 0;
for (i = 0; i < numbersList.length; i++) {
  sumAbs = sumAbs + Math.abs(numbersList[i]);
}
console.log("Suma wartości bezwzględnych w tablicy to " +
  sumAbs + ".");


console.log("***************8***************");
// 8. Wyświetl tylko elementy większe lub równe od 20:
// Output: 'Elementy większe lub równe 20: 21,49,20,72,23,120,20,29,47,32.'

console.log("***************9***************");
// 9. Wyświetl sumę elementów tylko ujemnych:
// Output: 'Suma elementów ujemnych: -193.'

console.log("**************10***************");
// 10*. Wyświetl sumę elemnetów na pozycjach parzystych:
// Output: '1.5 Suma elementów parzystych: 200'