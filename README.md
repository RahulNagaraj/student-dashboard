Student Dashboard
1. Load the student's data from this API - https://api.myjson.com/bins/1dlper and show loading screen when data is being loaded

2. After the data is loaded, show the Dashboard using the data.

3. Dashboard Schematics

  3.1 It will be a grid of cards with each card representing one individual student.

  3.12 Each card will show the name, total marks and id of the student it represents.

  3.3 Each row of the grid will have 3 cards if device is desktop, 2 cards if device is tablet and 1 card if it is mobile. (Responsive)

  3.4 There will be a fixed header on the top of the page which will have a search bar and 2 buttons in the same row.

  3.5 When user types into the search bar, only students whose name starts with the input string are shown in the grid, rest are hidden.

  3.6 The first Button will toggle the order of the students between alphabetical and reverse-alphabetical order of name.

  3.7 The second Button will toggle the order of the students between increasing and decreasing order of total marks.

  3.8 Clicking on a card will take the user to the details page where all the details of the student will be shown. The url should reflect the id of the student. Eg. http://localhost:5050/55 (student with id 55)

  3.9 Inside the details page along with details a bar graph will be shown of the marks in individual subjects scored by the student

## Installation

```bash
git clone https://github.com/RahulNagaraj/student-dashboard
cd student-dashboard
npm install
```

## Get started

```bash
npm start
```