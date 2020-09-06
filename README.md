# Contacts

Contacts is an contact management where a user can view, modify one's contacts in Google. It has a user facing Web UI and an API server to manage contacts.

A working demo can be found [here](https://elegant-elion-b7cbe4.netlify.app/)

## Services

Service 		| Description
------------|------------
[API server](./api-server/README.md) 		| _api_ end-points
[Web UI](./web-ui/README.md) 		| _web application_
[Traefik](https://containo.us/traefik/)     | Reverse-proxy

## Deployment

The WebUI is deployed using Netlify at [contacts](https://elegant-elion-b7cbe4.netlify.app/)
The API server is deployed using Vercel now at [API](https://api-server.siddhuv93.vercel.app)

The project could also be built and deployed using Docker and Docker-compose. Dockerfiles have been added for both UI and API servers which can be found [here](./api-server/Dockerfile) and [here](./web0-ui/Dockerfile) respectively.

[Traefik](https://containo.us/traefik/) has been used as a reverse proxy to handle requests to both services.
