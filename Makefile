include .env

build-devcontainer:
	docker build  -t ${DOCKER_USERNAME}/modify-dev -f ./Docker/Dockerfile.dev .

build-container:
	docker build  -t ${DOCKER_USERNAME}/modify -f ./Docker/Dockerfile .

start-devcontainer:
	docker run -p ${PORT}:${PORT} ${DOCKER_USERNAME}/modify-dev 

# environment FORCE_COLOR=1 is for using colored output. Which is nice to see colors in terminal :)
start-container:
	docker run -p ${PORT}:${PORT} -e "FORCE_COLOR=1" ${DOCKER_USERNAME}/modify 

push:
	docker push ${DOCKER_USERNAME}/modify