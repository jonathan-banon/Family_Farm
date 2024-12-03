check: 
	compose^ check

start: 
	docker-compose up -d

stop: 
	docker-compose down

restart: stop start

update: 
	composer install