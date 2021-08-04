The 'jsonfileparser.js' file reads data about height and weight of a number of persons from 'sample.json' file. This is 
followed by parsing the json file using the filesystem module 'fs' from nodejs library. This is followed by
calculating the BMI and pointing whether a particular person is OverWeight/Moderately Obese/Normal and is suffering from Enhanced
 Health Risk/Medium Health Risk/High health Risk as per data available in the PDF shared over mail.
 After calculating BMI score along with BMI Category and Health Risk, we convert these data into a json file named 'bmiperson.json'.
 Afterwards we read data from this new JSON file into a table in an HTML file named 'newtable.html'.