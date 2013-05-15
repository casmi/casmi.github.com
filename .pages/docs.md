# 2D/3D visualization library for Java

## Document

### Tutorial

We are sorry. not written yet :(

### API Document

 - [0.3.2 (Latest)](/apidocs/casmi-0.3.2/)
 - [0.3.1](/apidocs/casmi-0.3.1/)
 - [0.3.0](/apidocs/casmi-0.3.0/)

## FAQ

*What is casmi?*

casmi is a Java-based library for visualization, data access, and data analysis. It is designed for programmers to write their applications easily and quickly. And it is opensource.

*Why is casmi opensource software?*

Contributers want casmi to be used widely all over the world. And they hope there are many kind contributers to help casmi grow.

*What kind of license does casmi have?*

casmi has LGPL version 3 license for opensource version.

*What I do when I want to be involved in the casmi project?*

Please contact us. See [https://github.com/casmi](https://github.com/casmi)

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
