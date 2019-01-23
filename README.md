# Smart Cities Tech Radar

## Running locally

```
docker-compose build
docker-compose up
```

Open http://0.0.0.0:3000 to view the site

## Making a production build

```
docker-compose run web yarn build
```

## Contributing to the radar

To change the radar, open a Pull Request modifying `src/radar.json` with your proposal. In order to be merged, it must be approved by at least 2 technical leads on the team.

Pull Requests for application code only need to be approved by one other person.
