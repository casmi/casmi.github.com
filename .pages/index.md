# Getting Started

## 1. Create a project

We recommend to use [Apache Maven](http://maven.apache.org/).

#### Maven Archetype

Run the following command

    mvn archetype:generate -Dfilter=com.github.casmi.archetypes:casmi-quickstart

#### Quickstart project

You can download quickstart project template from [download](download.html) page or [git repository](https://github.com/casmi/casmi-quickstart).

## 2. Run

    cd path/to/your/project
    mvn exec:java -Dexec.mainClass="path.to.MainClass"
