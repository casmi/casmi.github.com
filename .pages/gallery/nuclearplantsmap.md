## Abstract

"Nuclear Plants Map" is a viewer for nuclear power plants on the earth. The data was downloaded from Wikipedia. It visualize nuclear power plants position and size with color and size of cones. It is easy to understand the density of nuclear power plants on the earth. When you click a cone, you can see the name of nuclear power plants. Currently, it visualize 153 plants.

[https://github.com/casmi/nuclear-plant-map](https://github.com/casmi/nuclear-plant-map)

## Git Repository

https://github.com/casmi/nuclear-plant-map.git

## Inside of Program

### Code

 1. It read the list of nuclear power plants with geo-location information from the resources (NuclearPlantsMap.java).
 2. The csv data is read as objects (PowerPlantLoader.java).
 3. After that, the data is set to the appropriate position according to the geo-location. A nuclear power plant is visualized as a cone. The cone size indicates size of nuclear power plant. (NuclearPlantsMap.java).
 4. To manipulate the earth, it uses Trackball class (NuclearPlantsMap.java).
