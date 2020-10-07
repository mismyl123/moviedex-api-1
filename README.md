# MOVIEDEX-API
***by Richard Folea***
___
##### Example cURL:
```bash
curl -X GET 'http://localhost:9999/movie?genre=Drama&country=United+States&avg_vote=1' -H "Authorization: Bearer YOUR-API-KEY"
```

___
##### Example cURL response:
```json
[
    {
        "filmtv_ID": 26,
        "film_title": "At Close Range",
        "year": 1986,
        "genre": "Drama",
        "duration": 115,
        "country": "United States",
        "director": "James Foley",
        "actors": "Christopher Walken, Sean Penn, Chris Penn, Mary Stuart Masterson",
        "avg_vote": 7.5,
        "votes": 82
    },
    {
        "filmtv_ID": 32,
        "film_title": "Sleeping with the Enemy",
        "year": 1990,
        "genre": "Drama",
        "duration": 96,
        "country": "United States",
        "director": "Joseph Ruben",
        "actors": "Julia Roberts, Patrick Bergin, Kevin Anderson, Elizabeth Lawrence, Kyle Secor",
        "avg_vote": 5,
        "votes": 89
    },
    {
        "filmtv_ID": 49,
        "film_title": "Fail-Safe",
        "year": 1964,
        "genre": "Drama",
        "duration": 110,
        "country": "United States",
        "director": "Sidney Lumet",
        "actors": "Henry Fonda, Dan O'Herlihy, Walter Matthau, Dom DeLuise",
        "avg_vote": 8.3,
        "votes": 67
    },
    {
        "filmtv_ID": 62,
        "film_title": "Table for Five",
        "year": 1983,
        "genre": "Drama",
        "duration": 117,
        "country": "United States",
        "director": "Robert Lieberman",
        "actors": "Jon Voight, Richard Crenna, Marie-Christine Barrault, Kevin Costner",
        "avg_vote": 6,
        "votes": 1
    },
    {
        "filmtv_ID": 70,
        "film_title": "Can You Feel Me Dancing?",
        "year": 1986,
        "genre": "Drama",
        "duration": 120,
        "country": "United States",
        "director": "Michael Miller",
        "actors": "Justine Bateman, Jason Bateman, Max Gail, Joe Nasser",
        "avg_vote": 6,
        "votes": 1
    },
    {
        "filmtv_ID": 75,
        "film_title": "Strangers: the Story of a Mother and Daughter",
        "year": 1979,
        "genre": "Drama",
        "duration": 120,
        "country": "United States",
        "director": "Milton Katselas",
        "actors": "Bette Davis, Gena Rowlands, Ford Rainey, Donald Moffat",
        "avg_vote": 8,
        "votes": 2
    },
    {
        "filmtv_ID": 107,
        "film_title": "Ada",
        "year": 1961,
        "genre": "Drama",
        "duration": 109,
        "country": "United States",
        "director": "Daniel Mann",
        "actors": "Susan Hayward, Dean Martin, Wilfrid Hyde-White",
        "avg_vote": 6.8,
        "votes": 5
    },
    {
        "filmtv_ID": 115,
        "film_title": "Goodbye, My Lady",
        "year": 1956,
        "genre": "Drama",
        "duration": 95,
        "country": "United States",
        "director": "William A. Wellman",
        "actors": "Brandon De Wilde, Walter Brennan, Sidney Poitier",
        "avg_vote": 6,
        "votes": 3
    }
]
```