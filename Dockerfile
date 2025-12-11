# Use the lightweight Nginx image
FROM nginx:alpine

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy all project files to the web server root
COPY . /usr/share/nginx/html