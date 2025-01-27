---
position: 8
---

# Joins and Relates in ArcGIS Pro

## Key Concepts

- **Tabular Joins**: Add additional columns from one table to another table.
  - Combines data based on a common ID column
  - Like adding new columns to an existing attribute table

- **Relates**: Establish connections between two tables
  - Allows passing selections between tables
  - Useful for one-to-many relationships
  - Based on common ID columns

## Exercise: Working with Joins and Relates

### Data Used

- Rivers and streams (NHD)
- Water bodies layer
- Watershed boundaries (HUC levels)
- Cumulative area table
- Species observations table

### Steps for Table Join

Cumulative area has info about river drainaige.

We want to add this drainage info to the rivers layer.

1. Right-click on rivers layer
2. Select "Joins and Relates" > "Add Join"
3. Choose the input table (rivers)
4. Select common ID field
5. Choose target table (cumulative area)
6. Configure join settings:
     - Keep all target features
     - Index the join fields
     - Validate the join

### Steps for Relate

We have species observations for different watersheds.

We want to relate these observations to the watershed boundaries.

1. Right-click on subwatersheds layer
2. Select "Joins and Relates" > "Add Relate"
3. Choose input related field (HUC12)
4. Select target table (observations)
5. Set output relate field (zone ID)
6. Name the relate
7. Set cardinality (one-to-many)

### Using the Relate

1. Select watersheds of interest
2. Open attribute table
3. Click hamburger menu
4. Choose "Related Data"
5. View related observations

## Best Practices

- Verify field names for joins/relates
- Check for matching IDs between tables
- Validate joins before executing
- Use indexing for better performance
- Understand one-to-one vs one-to-many relationships

---

## California wildfire frequency by country

A file geodatabase named Wildfire Impacted Area Assignment.gdb (you will need to unzip/decompress it) containing two feature classes:

Counties: The feature data for California counties

Wildfires: The feature data for the wildfire perimeters

What you need to do:
Create a new ArcGIS Pro Project (using the “map” template) and add the data to the map.

Conduct your analysis:

Dissolve the wildfire perimeters into a single feature using the dissolve tool.

Intersect the dissolved wildfire perimeters and the county layer as your using the intersect tool.

In the results of the intersect tool add a new field to the attribute table to store the area (in acres) of polygon. Use the calculate geometry tool in the attribute table to calculate the area (in US Survey Acres) for each of the features.

Use the Summary Statistics tool to calculate to sum the area of wildfire areas by county. Set the “COUNTY” field as the case field and sum the values from the field you added to the intersect tool output.

Add a new field to the County layer to store the area from the wildfire summary table.

Join the output of the Summary Statistics tool to the County layer

Use the Calculate Field too in the County attribute table to update the new empty field with the area values from the Summary Statistics tool output.

Remove the join between the County layer and the Summary Statistics output.

Add a new field to the County Layer and calculate the percentage of areas burned by wildfire to the total area of each county. Be sure to multiple the value by 100 so the values are represented as a percentage. Here is an example of what the expression should look like (!Wildfire_Area!/!Area_Acres!)*100, with ‘Wildfire_Area’ being the field that contains the wildfire area you calculated and ‘Area_Acres’ being the area field (in acres) from the County layer.

Symbolize the counties by the percentage of area burned by wildfires. You can choose any color ramp that you like, but use just 5 classes and use the default classification method of Natural Breaks (Jenks) to have your map be comparable. The general trend should look similar to he image below, although your colors maybe different.

Make an appropriate map layout with a title, a legend with information about the symbol classes (just the range of percentages within each class if fine), a list of data sources, your name, the date you published the map, a scale bar, a north arrow, and the map itself. Make sure to include a basemap for reference. Additionally, the counties should be labeled with their names (just the name is sufficient, you do not need to add the word “County” at the end as in the lecture on labeling).

Add metadata to your final county layer indicate the geoprocessing workflow you conducted on the data. Make sure to indicate your name, the source data involved, where the source data was obtained, and the date you did the processing and relevant details for what you did to generate the layer. For this project use the default Item Description format for the metadata.

Export a PDF of the map’s layout and a map package of the map.

What you need to submit
You will submit the PDF and map package here on Coursera during the peer review phase. You will be graded on each item.

Things to Watch Out For
Selections – Make sure that you clear any selections that you may make while explore the datasets. A lot of the tools in ArcGIS Pro will only run on the selected features if anything is selected.

Dissolve Tool – The does not require a Dissolve field, so feel free to leave this parameter empty when dissolving the wildfire perimeters into a single layer.

Unexpected Outputs from the Intersect Tool – We are working with real-world data that is imperfect for this exercise. When you intersect the dissolved wildfire perimeters with the county boundaries you may end up with some slivers or small geometries. Feel free to take a look and see if you notice any issues. By include the Summary Statistics tool in this workflow we can account for the area contained in these problematic areas.

Adding Fields to hold Area Calculations - Make sure the fields that you adding to the attribute tables have a “Double” data type to properly track the decimal point values. Make sure that all the area calculates are done in with “US Survey Acres”.

Null Values – Calculating the percentage of the county impacted by wildfires will result in some null value warnings. Why do you think this is the case? Not every null value is an error, and in some cases they null values are useful to track during an analysis.

---

### Important links

[GIS StackExchange](<http://gis.stackexchange.com/>)

[Esri's Community](https://community.esri.com/)

[Reddit GIS](http://reddit.com/r/gis)

[Public Lab](https://publiclab.org/)

[GIS Lounge](https://www.gislounge.com/)

[Digital Geography](http://www.digital-geography.com/)
