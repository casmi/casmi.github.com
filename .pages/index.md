# 2D/3D visualization library for Java

## Overview

casmi is a 2D/3D visualization library for Java. It can support programmers with simple and intuitive interfaces for implementation. It can work on cross platform (GNU/Linux, Mac OS X, and Windows). casmi is suitable for visualization, because it is originally designed for information visualization, especially with huge data sets.

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

## News

 - Apr. 5th, 2013: casmi version 0.3.2 is published on Maven Central Repository.
 - Mat. 26th, 2013: casmi version 0.3.2 is released.
 - Dec. 28th, 2012: casmi version 0.3.1 is released.
 - Nov. 9th, 2012: casmi version 0.3.0 is released.
 - Jul. 30th, 2012: casmi version 0.2.0 is released.
 - Jun. 5th, 2012: casmi version 0.1.3-SNAPSHOT is released.
 - May 29th, 2012: casmi version 0.1.2-SNAPSHOT is released.
 - March 30th, 2012: casmi version 0.1.1-SNAPSHOT is released.
 - February 4th, 2012: casmi version 0.1.0-SNAPSHOT is released.
 - October 14th, 2011: casmi version 0.0.4 alpha is released.
 - September 2nd, 2011: casmi version 0.0.3 alpha is released.
 - August 19th, 2011: casmi version 0.0.2 alpha is released.
 - August 2nd, 2011: casmi version 0.0.1 alpha is released.

## Getting Started

### 1. Setup casmi

**Using maven (we recommend to use maven)**

Add following settings to your pom.xml.

    <dependency>
        <groupId>com.github.casmi</groupId>
        <artifactId>casmi</artifactId>
        <version>0.3.2</version>
    </dependency>

All dependent libraries will be downloaded automatically if using maven.

**Manual setup**

You can download binary jar from [http://casmi.github.io/download/](http://casmi.github.io/download/)

### 2. Create project

**Maven Archetype**

You can use maven archetype for casmi project. Archetype catalog is [http://casmi.github.io/maven-repo/archetype-catalog.xml](http://casmi.github.io/maven-repo/archetype-catalog.xml)

    $ mvn archetype:generate -DarchetypeCatalog=http://casmi.github.io/maven-repo/archetype-catalog.xml -Dfilter=com.github.casmi.archetypes:casmi-quickstart

**Quickstart project**

    Also you can download Quickstart project template from http://casmi.github.io/download/

## FAQ

*What is casmi?*

casmi is a Java-based library for visualization, data access, and data analysis. It is designed for programmers to write their applications easily and quickly. And it is opensource.

*Why is casmi opensource software?*

Contributers want casmi to be used widely all over the world. And they hope there are many kind contributers to help casmi grow.

*What kind of license does casmi have?*
casmi has LGPL version 3 license for opensource version.

*What I do when I want to be involved in the casmi project?*
Please contact us. [https://github.io/casmi](https://github.io/casmi)

*Who had the idea of casmi?*
Members of Xcoo, Inc. thought up the idea of casmi. They are developing customized visualization software, so they thought it would be convienient if they had a good library for visualization software. Thus they started development of casmi from June 2011.

*What the difference between casmi and its precursors?*
casmi is designed for visualization and serious applications. For visualization, there are Processing development environments and OpenFrameworks. They are our precursors. Their main targets are artists and beginning programmers. Our target is the business man and programmer.

*If we want to ask someone to develop our systems using casmi, what should we do?*
Please contact Xcoo, Inc. They can help you.

*What is Xcoo, Inc. ?*

Xcoo, Inc. is a startup company for research and development of visualization and interactive systems, located in Tokyo, Japan. They began their business on April 1st, 2011. The backgrounds of members of Xcoo, Inc include virtual reality, computer science, and design. Please visit their website. http://www.xcoo.jp/

*If you want to export Mac OS X .app file, you can add following settings to pom.xml*

    <plugin>
        <groupId>org.codehaus.mojo</groupId>
        <artifactId>osxappbundle-maven-plugin</artifactId>
        <version>1.0-alpha-1</version>
        <configuration>
            <mainClass>your.application.MainClass</mainClass>
        </configuration>
        <executions>
            <execution>
                <phase>package</phase>
                <goals>
                    <goal>bundle</goal>
                </goals>
            </execution>
        </executions>
    </plugin>

*If you want to export Windows .exe file, you can add following settings to pom.xml*

    <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-shade-plugin</artifactId>>
        <version>1.4</version>
        <executions>
            <execution>
                <phase>package</phase>
                <goals>
                    <goal>shade</goal>
                </goals>
            </execution>
        </executions>
        <configuration>
            <shadedArtifactAttached>true</shadedArtifactAttached>
            <shadedClassifierName>pack</shadedClassifierName>
        </configuration>
    </plugin>

    <plugin>
        <groupId>org.bluestemsoftware.open.maven.plugin</groupId>
        <artifactId>launch4j-plugin</artifactId>
        <version>1.5.0.0</version>
        <executions>

            <!-- GUI exe -->
            <execution>
                <id>l4j-gui</id>
                <phase>package</phase>
                <goals>
                    <goal>launch4j</goal>
                </goals>
                <configuration>
                    <headerType>gui</headerType>
                    <outfile>target/${artifactId}_gui.exe</outfile>
                    <jar>target/${artifactId}-${version}-pack.jar</jar>
                    <errTitle>your application error</errTitle>
                    <classPath>
                        <mainClass>your.application.MainClass</mainClass>
                    </classPath>
                    <!-- <icon>src/main/resources/icons/exeIcon.ico</icon> -->
                    <jre>
                        <minVersion>1.5.0</minVersion>
                        <maxVersion>1.6.0</maxVersion>
                        <initialHeapSize>128</initialHeapSize>
                        <maxHeapSize>1024</maxHeapSize>
                    </jre>
                    <versionInfo>
                        <fileVersion>1.0.0.0</fileVersion>
                        <txtFileVersion>1.0.0.0</txtFileVersion>
                        <fileDescription>Description</fileDescription>
                        <copyright>your copyright</copyright>
                        <productVersion>1.0.0.0</productVersion>
                        <txtProductVersion>1.0.0.0</txtProductVersion>
                        <productName>Product</productName>
                        <internalName>Product</internalName>
                        <originalFilename>your_application.exe</originalFilename>
                    </versionInfo>
                </configuration>
            </execution>

            <!-- CUI exe -->
            <execution>
                <id>l4j-cli</id>
                <phase>package</phase>
                <goals>
                    <goal>launch4j</goal>
                </goals>
                <configuration>
                    <headerType>console</headerType>
                    <outfile>target/${artifactId}_cli.exe</outfile>
                    <jar>target/${artifactId}-${version}-pack.jar</jar>
                    <errTitle>your application error</errTitle>
                    <classPath>
                        <mainClass>your.application.MainClass</mainClass>
                    </classPath>
                    <!-- <icon>src/main/resources/icons/exeIcon.ico</icon> -->
                    <jre>
                        <minVersion>1.5.0</minVersion>
                        <maxVersion>1.6.0</maxVersion>
                        <initialHeapSize>128</initialHeapSize>
                        <maxHeapSize>1024</maxHeapSize>
                    </jre>
                </configuration>
            </execution>
        </executions>
    </plugin>
