## Abstract

" vistweet " is a application to visualize relations among tweets on Twitter.
First, you have to authorize Vital Atlas on Twitter and input the PIN code.
vistsweet reads and analyzes recent tweets when you click the reload button at the upper right (or every 5 minutes).
When you click the timeline at the left, a cluster consisting of your tweets and relational tweets (reply/RT) will be shown.
A red line and icon show "reply," the green shows " official retweet (RT), " and the blue shows "unofficial retweet (QT: quote tweet). "
You can change the scale by using plus/minus buttons at the upper right.

[https://github.com/casmi/vistweet](https://github.com/casmi/vistweet)

## Git Repository

https://github.com/casmi/vistweet.git

## Inside the Program

### Code

 1. vistweet reads a timeline of Twitter using the Twitter API every 5 minutes (Request.java, Twitter.java).
 2. It parse downloads JSON data and stores to JSON objects (JsonStatus.java, JsonUser.java).
 3. Then, it maps tweets on O/R mapping, and insert to a SQLite database (UserTimeline/Mention/Retweet.java).
 4. After that, it analyzes relations of tweets (reply, RT, QT), and generates a cluster (RootCluster/Cluster.java).
 5. It draws a timeline that represents a source tweet and user icons of relative tweets at left in the window.
 6. When you click a tweet in the timeline, it visualizes relations of tweets at the right space in the window.

### API

 - For Twitter authentication, it uses casmi.extension.net.OAuth
 - For reading tweets via Twitter API, it uses casmi.net.HTTP
 - For parsing downloaded data, it uses casmi.parser.JSON
 - For using a SQLite database, it uses casmi.sql.SQLite/Entity
 - For regular requests, it uses casmi.util.Cron
 - For drawing a timeline, it uses casmi.graphics.element.Rect/TextBox/Texture
 - For drawing a relation of tweets, it uses casmi.element.Line/Text/Texture
 - For grouping each components, it uses casmi.graphics.group.Group
