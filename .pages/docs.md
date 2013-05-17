# Docs

## Tutorial

We are sorry. Not written yet :(

## API Document

 - [0.3.2 (Latest)](/apidocs/casmi-0.3.2/)
 - [0.3.1](/apidocs/casmi-0.3.1/)
 - [0.3.0](/apidocs/casmi-0.3.0/)

## FAQ

#### Which platform doest casmi support?

casmi supports GNU/Linux, Mac OS X and Microsoft Windows.


#### How can I make a executable binary for Mac OS X and Microsoft Windows?

If you want to export a Mac OS X `.app` file, add following to `pom.xml`

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

If you want to export a Microsoft Windows `.exe` file, add following to `pom.xml`

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

#### What kind of license does casmi have?

casmi has LGPL version 3 license.

#### What I do when I want to involve in the casmi project?

Pull requests are the best ways to involve in. Pull requests can be created in github.
See [https://github.com/casmi/casmi/pulls](https://github.com/casmi/casmi/pulls) for more information.

#### Where can I get help?

Submit a question or bug report on github issue: [https://github.com/casmi/casmi/issues](https://github.com/casmi/casmi/issues).
We can help you.

#### What is Xcoo, Inc. ?

Xcoo, Inc. is a startup company for research and development of visualization and interactive systems, located in Tokyo, Japan.
We began our business on April 1st, 2011.
The backgrounds of members of Xcoo, Inc include virtual reality, human interface, computer science and design.
Please visit our website [http://www.xcoo.jp/](http://www.xcoo.jp).
