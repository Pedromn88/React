import axios from "axios"

const API = "https://api.themoviedb.org/3/"

export const getList = (path) => {
 return axios.get(API + path, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDMyMWQwMDAzNDNhZjc4NmM3MTNlZWMwODI3ZDZiOCIsInN1YiI6IjYxYjYzMWU3ODUwMDVkMDA0MTNhMTcxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N4FO7eXoKMhA0qvF5HJhDFqWCw2FUe3BgOsnjKUVNkM",
        "Content-Type": "application/json;charset=utf-8",
}, })}