# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a hash in Ruby?

Your answer:

Researched answer: Hashes in Ruby consist of key:value pairs. It is similar to an array, yet different because the indexing is not static as it is with arrays. In hashes, indexing is done with arbitrary keys of an object type. You create a hash by using the arrow function to assign a key to a value key => value and separating each key value pair with a comma. The entire has should be enclosed in curly braces. 

{ "jardin" => "garden", "fenetre" => "window", "avion" => "airplane" }

2. What is a gem?

Your answer: A gem refers to a block of code used in Ruby.

Researched answer: A gem is a software package used with Ruby that is used to pass on applications or libraries. Gems can be installed via the command line. Rubygems.org has a great deal of ruby gems available. ActiveRecord is an example of a Ruby gem that I have used before.  

3. What is Ruby on Rails?

Your answer: 

Researched answer: Ruby on Rails is a web application framework written in Ruby. It is an MVC (Model/View/Controller) framework that provides the structures for a database, web service and web pages. Some well-known companies utilizing Ruby on Rails include AirBnB, Square, GitHub and Shopify. 

4. What is a relational database? Are there other kinds of databases?

Your answer: A database is an organized collection of data. A relational database is a database in which we understand how data relates to other data. 

Researched answer: A relational database is a model created in the 1970's by E.F. Codd from IBM. It allows tables to be related to one another using a common attribute. In this way we can understand how data is related to other data and use that knowledge to call on it effectively. For example, a library with an online lending system would have a table that contained data for the library user, such as Library ID, name, address, and preferred library location. The system would also have a table containing requested items which would include data such as Media ID, Library ID, current location of media, and Date of Delivery to preferred location. These tables are now related due to the shared Library ID, which enables you to utilize a foreign key to connect the tables. Some examples of more complicated relational databases are Cloud SQL and AlloyDB.

There are certainly more kinds of databases! One is a centralized database, which is when the data is stored in one central location and users access the data from different locations. There are also the following databases: personal, commercial, end user, operational, cloud, object-oriented, graph, noSQL, and more beyond that I'm sure!

5. What are primary keys? Why are they important?

Your answer: Primary keys are a crucial reference point when working with Ruby on Rails. Similarly to how you use an index to pinpoint locations of data in JavaScript, you use primary keys to indicate specific data. 

Researched answer: The primary key contains values (never null values) and identifies the rows in a table. It is a relational database table column which is meant to uniquely identify each table value. It is used to ensure that the data in a specific column is unique. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: RESTful routes are an attempt to bring the operations that can be applied to a project into HTTP requests. REST stands for Representational State Transfer; it is a pattern to follow when structuring routes between the server and the client.

2. JSON: JavaScript Object Notation is a lightweight data-interchange format. It is easy for humans to read and write, and easy for machines to parse and generate. It is a text format that is completely language independent, but uses conventions that are familiar o programmers of the C-family of languages, which makes it an ideal data-interchange language. It is built on two structures, key:value pairs and an ordered list of values. 

3. ERB: ERB stands for Embedded Ruby, and it is a Ruby templating system. When using ERB, Ruby code can be added to any plain text document for the purposes of generating document information details and/or flow control. 

4. Params: Params are URL parameters (or query strings) that are a way to pass additional information into a controller method to query the database or dynamically modify the view. 

5. API: API is an acronym for Application Programming Interface. It is a way for two or more computer programs to communicate with each other. When an application is only controllers and models it is called an API.
