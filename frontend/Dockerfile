# Stage 1: Build the Vite/React app
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Pass backend URL as build argument
ARG REACT_APP_API_URL
ENV VITE_API_URL=$REACT_APP_API_URL

# Vite builds to /dist (not /build like CRA)
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Vite output is 'dist', not 'build'
COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
