const  movies=[
    {
        id:0,
        title:"The Zoya Factor",
        numberInStock:6,
        genre:'love',
        publishedDate:'2019-08-03',
        liked:false
    },
    {
        id:1,
        title:"Love Aaj Kal",
        genre:'action and love',
        numberInStock:2,
        publishedDate:'2015-08-03',
        liked:false
    },
    {
        id:2,
        title:"The karate kid",
        genre:'action',
        numberInStock:8,
        publishedDate:'2013-08-04',
        liked:false
    },
    {
        id:3,
        title:"The Incredibles",
        genre:'comedy',
        numberInStock:5,
        publishedDate:'2016-08-03',
        liked:false
    },
    {
        id:4,
        title:"Chup Chup ke",
        genre:'comedy',
        numberInStock:1,
        publishedDate:'2020-08-03',
        liked:false
    },
    {
        id:5,
        title:"Bahubali",
        genre:'action and love',
        numberInStock:6,
        publishedDate:'2012-08-02',
        liked:false
    },
    {
        id:6,
        title:"Rockstar",
        genre:'love',
        numberInStock:9,
        publishedDate:'2014-08-13',
        liked:false
    },
    {
        id:7,
        title:"Krrish",
        genre:'action',
        numberInStock:5,
        publishedDate:'2016-08-10',
        liked:false
    }
];
const genres=[
    {
        id:1,
        names:'action'
    },
    {
        id:2,
        names:'love'
    },
    {
        id:3,
        names:'action and love'
    },
    {
        id:4,
        names:'comedy'
    },


];
export function getMovies()
{
    return movies;
} 
export function getGenres()
{
    return genres;
}