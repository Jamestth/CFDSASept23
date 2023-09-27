docker network create -d bridge my-bridge
docker volume create my-volume
# Database
docker run -d --network my-bridge --name mydb  --mount type=volume,src=my-volume,dst=/var/lib/mysql ghcr.io/jamestth/northwind-db:v1
# MyApp
docker run -d --network my-bridge --name myapp -p 8080:3000 -e DB_USER=northwind -e DB_PASSWORD=changeit -e DB_HOST=mydb  stackupiss/northwind-app:v1 


# pinging localhost hits this however, but i think the tutorial is more about the networking and mounting of volume
# {"error":{"code":"ER_NOT_SUPPORTED_AUTH_MODE","errno":1251,"sqlMessage":"Client does not support authentication protocol requested by server; consider upgrading MySQL client","sqlState":"08004","fatal":true}}