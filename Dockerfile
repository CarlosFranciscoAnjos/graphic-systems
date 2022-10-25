# apache server image 
FROM httpd:alpine3.16

# install node
RUN apk add nodejs npm

# add server configuration
# COPY httpd.conf /usr/local/apache2/conf/httpd.conf

# variables
ARG PUBLIC=/usr/local/apache2/htdocs

# public documents path
WORKDIR $PUBLIC

# remove index.html
RUN rm index.html

# add package.json and install dependencies
COPY package.json $PUBLIC
RUN npm install

# add desired files to server (choose 1)
COPY angles-table/ $PUBLIC/angles-table
COPY clocks/ $PUBLIC/clocks
COPY pong/ $PUBLIC/pong

# give read permissions
RUN chmod 555 -R .
