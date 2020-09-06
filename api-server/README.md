# Contacts API

**Contacts** is a service containing all endpoints related to storing, fetching and deleting a user's contacts.

## APIs

Route        | Method | Params | Query | Body | Headers | Description | Status Code | Reason
-------------|--------|--------|-------|------|---------|-------------|-------------|-------
/api/v1/contacts | GET  |||| Authorization - `Bearer access_token`| Fetch contacts | 200 | *n* contacts for *email*
|||||||| 500 | Error when fetching contacts
||
/api/v1/contacts/:id | DELETE  | id - id of the contact to be deleted ||| Authorization - `Bearer access_token` | Delete a contact | 200 | Contact successfully deleted
|||||||| 404 | *User* not found
|||||||| 404 | *Contact* not found
|||||||| 500 | Error when deleting contact
||


P.S The app is suppossed to fetch contacts from the Google apis, but unfortunately could not get that working, instead it user a random user generatory API [randomuser.me](https://randomuser.me/documentation) to fetch and populate contacts in the database.

Technologies used:
* MongoDB Atlas(free tier) for database
* Express for the API server
* Typescript for typechecking
* Vercel now for deployment

The API server can be found at [link](https://api-server.siddhuv93.vercel.app)

It could be started locally by running
```
    npm run build
    cd dist
    node index.js
```
