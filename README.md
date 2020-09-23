# Project_2

Project: Snap Budget

User: 
AS A person who needs to budget
I WANT TO input my income 
SO THAT I can organize my budget

APIs:
- (calendar API here) 
- 
- 

Teams:
-- Front End --
<> Tia Smith
<> 

-- Back End --
<> Devon Weems 
<> Ron Pitts

User Story: 

<mvp>
GIVEN an account balance and paramaters for bills 
WHEN a user loads the home page
THEN they choose a bill they can select if personal, business, or other 
WHEN the bill is inserted 
THEN that amount is taken from the budget 
WHEN the user inputs all of their expenses 
THEN their expenses a money left after expenses are displayed 
</mvp>



## Github Workflow

1. Decide on a task that was assigned to you
2. Always type into your terminal ``` git fetch ``` to make sure that you have the most up to date code
3. Create an issue title issue-xx on Github.com to represent your task
4. Type into your git terminal ``` git branch issue-xx ``` to create a branch
5. Type into your git terminal ``` git checkout issue-xx ``` to move to that branch
6. Complete your task and add your code by ``` git add _filename_ ``` 
7. Type into your git terminal ``` git commit -m "A comment here" ``` to commit your changes
8. Type into your git terminal ``` git push origin issue-xx ``` to push your changes to the branch issue-xx
9. Type into your git terminal ``` git checkout dev ``` to move to the dev branch. NEVER move to the master branch, even the project lead will 90% of the time be using the dev branch
10. Type into your git terminal ``` git merge issue-xx ``` to merge your issue branch into the dev branch. 
    - If there is a merge conflict, you aren't communicating. We will have merge conflicts, but our goal is to try as hard as possible to prevent them.
    - In the case of a merge conflict, message the project lead to assit you with rectifying it. If it comes down to having code reverted, the default will be to revert the code the merger is trying to add.
11. Type into your git terminal ``` git push ``` to push your changes 

## Project Outline

Stage 1 Design
- Outline UI 
- 
- Collect & document our APIs 
- Implement our API's to the backend
- Link classes on back-end to front 


Stage 2 Design
- Implement the CSS Interface
- Write code to store & keep user data 
- Write code to animate or alter DOM elements



User Input => PlacesAPI.GetPlaces => PlacesAPI.GetPlaceInfo => Display To Dom

##### GET Places by Bounding Box
Ajax Settings
- "async" : true
- "crossDomain" : true
- "url" : "https://opentripmap-places-v1.p.rapidapi.com/en/places/bbox?"
    - OPTIONAL:
        - "&kinds="
        - "&rate="
        - "&format="
        - "&limit="
    - REQUIRED:
    - "&lon_min"
    - "&lon_max"
    - "&lat_min"
    - "&lat_max"
- "headers" : {
    - "x-rapidapi-host" : "opentripmap-places-v1.p.rapidapi.com"
    - "x-rapidapi-key" : "1e3ad4ad08msh37dbc7f86166d8ap13837fjsncab8be83f428"}

Response
- "features" : array
    - [index] 
        - "id" : integer
        - "properties" : object
            - "xid" : number
            - "rate" : integer
            - "name" : string
            - "kinds" : string (separated by commas)
            - "wikidata"

##### GET Places by Radius
Ajax Settings
- "async" : true
- "crossDomain" : true
- "url" : "https://opentripmap-places-v1.p.rapidapi.com/en/places/radius?"
    - OPTIONAL:
        - "&kinds="
        - "&format="
        - "&rate="
        - "&limit="
    - REQUIRED:
        - "&lat="
        - "&lon="
- "headers" : {
    - "x-rapidapi-host" : "opentripmap-places-v1.p.rapidapi.com"
    - "x-rapidapi-key" : "1e3ad4ad08msh37dbc7f86166d8ap13837fjsncab8be83f428"}

Response
- "features" : array
    - [index] 
        - "id" : integer
        - "properties" : object
            - "xid" : number
            - "rate" : integer
            - "name" : string
            - "kinds" : string (separated by commas)
            - "wikidata"



##### GET Place Information
Ajax Settings
- "async" : true
- "crossDomain" : true
- "url" : "https://opentripmap-places-v1.p.rapidapi.com/en/places/xid/"
    - REQUIRED:
        - "ObjectID"
- "headers" : {
    - "x-rapidapi-host" : "opentripmap-places-v1.p.rapidapi.com"
    - "x-rapidapi-key" : "1e3ad4ad08msh37dbc7f86166d8ap13837fjsncab8be83f428"}

Response
- "preview" : object
    - "width" : integer
    - "height" : integer
    - "source" : string
- "image" : string
- "sources" : string[] (don't need this)
- "wikipedia_extracts" : object
    - "html" : string
    - "text" : string
    - "title" : string
- "bbox" : object
    - "lat_max" : number
    - "lat_min" : number
    - "lon_max" : number
    - "lon_min" : number
- "kinds" : string
- "url" : string
- "rate" : string
- "name" : string
- "nkinds" : string
- "wikipedia" : string
- "wikidata" : string
- "info" : object
    - "descr" : string
    - "image" : string
    - "src_id" : string
    - "src" : string
    - "web" : string
    - "url" : string


