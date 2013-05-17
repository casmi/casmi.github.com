# Getting Started

## 1. Create a project

We recommend to use [Apache Maven](http://maven.apache.org/).

#### Maven Archetype

Run the following command

    mvn archetype:generate -Dfilter=com.github.casmi.archetypes:casmi-quickstart

Maven will prompt you for a archetype, a group id, an artifact id, a version number and package.

#### Quickstart project

You can download quickstart project template from [download](download.html) page or [git repository](https://github.com/casmi/casmi-quickstart).

## 2. Build

Change to the your project directory and execute:

    mvn compile

## 3. Run

To run, execute the following **(Required to specify the main class of your project)**

    mvn exec:java -Dexec.mainClass="yourPackageName.App"

## 4. What's next?

Take a [tour](tour.html).
