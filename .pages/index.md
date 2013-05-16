# 2D/3D visualization library for Java

casmi is a 2D/3D visualization library for Java.
It can support programmers with simple and intuitive interfaces for implementation.
It can work on cross platform.
casmi is suitable for visualization, because it is originally designed for information visualization, especially with huge data sets.

## Getting Started

### 1. Setup casmi

#### Using Apache Maven

We recommend to use [Apache Maven](http://maven.apache.org/).
Add following settings to your `pom.xml`.

    <dependency>
        <groupId>com.github.casmi</groupId>
        <artifactId>casmi</artifactId>
        <version>0.3.2</version>
    </dependency>

All dependent libraries will be downloaded automatically.

#### Manual setup

You can download binary jar from [download](download.html) page.

### 2. Create project

#### Maven Archetype

You can use maven archetype for casmi project. Archetype catalog is [http://casmi.github.io/maven-repo/archetype-catalog.xml](http://casmi.github.io/maven-repo/archetype-catalog.xml)

    mvn archetype:generate -DarchetypeCatalog=http://casmi.github.io/maven-repo/archetype-catalog.xml -Dfilter=com.github.casmi.archetypes:casmi-quickstart

#### Quickstart project

Also you can download Quickstart project template from [download](download.html) page or [git repository](https://github.com/casmi/casmi-quickstart).

## Features

casmi has 5 big features.

 1. Open and Free
 2. Java based using OpenGL
 3. Cross platform
 4. Simple and Intuitive
 5. Suitable for Information Visualization

### Open and Free

casmi is an opensource and free software under LGPL license. You are free to download and use it. You are free to download the source codes.

### Java based using OpenGL

casmi takes over the features of Java and OpenGL. casmi can write in Java, which is an object oriented language. It has the function of garbage collection, so you don't have to think about memory leaks. You can use extention using JNI which enables fast calculation with native machine code instead of JVM.

### Cross platform

casmi works on cross platform environments (GNU/Linux, Mac OS X and Windows). It can also has a function of binary export for app (Mac OS X) and exe (Windows). You can use any environment.

### Simple and Intuitive

casmi is designed to support programmers and developers to implement visualization systems quickly and easily. casmi has several convinient functions for supporting network, database IO, and File IO. It can support HTTP for network, SQLite for database, CSV, XML, and JSON for file IO. It has support for MySQL. It will also have functions for animations and timelines which control various scenes by time.

### Suitable for Information Visualization

casmi is designed for information visualization, especially with huge data sets. It has methods to draw OpenGL graphics which can be used for visualization. casmi has a function to support database IO and file IO, by combining these functions, you can develop systems for visualization quite easily. It will has a fuction to generate graphs. It will add simulation fuctions, for example: physical simulation.

## Recent Releases

 - Apr. 5th, 2013: casmi version 0.3.2 is published on Maven Central Repository.
 - Mar. 26th, 2013: casmi version 0.3.2 is released.
 - Dec. 28th, 2012: casmi version 0.3.1 is released.
 - Nov. 9th, 2012: casmi version 0.3.0 is released.
 - Jul. 30th, 2012: casmi version 0.2.0 is released.
