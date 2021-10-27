MOTIVATION:

Have a centralized campus Covid information portal which provides the latest updates about campus covid cases, covid hotspots on campus, covid information for city and country, standard operating procedures and any other relevant information.
Currently we get covid updates via emails and other information from campus covid advisory website. The need is to bring it all together and provide a one stop solution for all covid related information. A campus map with covid hotspots will help students recognise if they were exposed and can take appropriate measures.

b)We provide one of a kind personalized solution to provide you with localized contact tracing, live dashboards and any other covid related information catered to your indivisual need.
c)
1) Live dashboard for covid cases in campus/state/country.(completed) \\
2)plotly Map of the campus with hotspots of covid stricken places.(completed) \\
3) Covid advisory static pages.(completed)

d)Technology Stack : python, database(postgress), web scraping, node js, react js, HTML, CSS , JAVASCRIPT , BOOTSTRAP.

e)List of deliverables:
1) Live dashboard for covid cases in campus/state/country.(completed) \\
2)plotly Map of the campus with hotspots of covid stricken places.(completed) \\
3) Covid advisory static pages.(completed)

f) general comodity usage pc that can host a web server, Python, Node js, React js, html , css and javascript.

g) how to operate

- `git clone https://github.com/CS699-IITB-Autumn-2021/project-team_thunderstruck.git`
- `cd project-team_thunderstruck`
// setting up the server 
- Install nodejs, npm, postgres, python
- Install the following python packages using pip: json, numpy, pandas, chart_studio, plotly-express, bs4
{
to install node js see below links :
for windows: https://nodejs.org/dist/v16.13.0/node-v16.13.0-x64.msi
for mac: https://nodejs.org/dist/v16.13.0/node-v16.13.0.pkg

 to install python:
for windows: https://www.python.org/downloads/windows/
for linux: https://www.python.org/downloads/source/
for mac: https://www.python.org/downloads/macos/
to install postgress:
for windows: https://www.postgresql.org/download/windows/
for linux: https://www.postgresql.org/download/linux/
for mac: https://www.postgresql.org/download/macosx/
}

Then from the directory where git is cloned run following commands
Setup the database:
- Use the username password created while installing postgres and paste it in db.js in appropriate fields.
- Open psql in your command line: <br>
  `psql`
- Create the coviddash database: <br>
  `CREATE DATABASE coviddash;`
- Use the coviddash database: <br>`\c coviddash username` 
- Run commands from file: <br>
`\i server/sql_commands/database.sql` <br>
`\i server/sql_commands/insert_data.sql`
- Now our database is ready!
- See the tables that have been created: <br>`\dt` 
- Get out of psql <br>`\q` 

- Firing up the Server!<br>
`cd server` <br>
`npm install`<br>
`node app`<br>
Server running on port 8080
 
- Starting the client! Open a new terminal <br>
`cd ../client` <br>
`npm install`<br>
`npm start`<br>

Client is now running at port 3000
Go to http://localhost:3000 to open up the client home page

h)Primary stakeholders of the product/service built: any organization with a campus, which has residents or workers. eg: IT giants , schools, universities etc

i)Team details along with the contribution:

 PARAMVEER choudhary(213050061):dash board creation(4 plots),card creation(for total cases and deaths) ,committee task force advisory page,student advisory page,(homepage)
DIVYANK PRATAP TIWARI(213050029): heatmap generation, helped in frontend creation(signup page and homepage),campus residents advisory page,covid circulars advisory page.
NVS ABHISHEK(213050019): database creation backend work , frontend creation(admin panel,homepage,login page)


j) go to directory where repo is cloned
cd client/src/components/Home/Home.js