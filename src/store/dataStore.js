import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import axios from 'axios'
import _ from 'lodash';

export const useDataStore = defineStore('dataStore', () => {
    const recalcStar = ref(false)
    const movieArr = ref([])
    const movieObj = ref({})
    const userBookmarks = ref([])
    const userRating = ref([])
    const selectedArr = ref([])

    const ratingInLocalStorage = localStorage.getItem("userRating");
    if (ratingInLocalStorage) {
        userRating.value = JSON.parse(ratingInLocalStorage)._value;
    }
    const bookmarksInLocalStorage = localStorage.getItem("userBookmarks");
    if (bookmarksInLocalStorage) {
        userBookmarks.value = JSON.parse(bookmarksInLocalStorage)._value;
    }

    const arrFilterTitle = ref([
        {
            'value': 'year',
            'body': 'по году'
        },
        {
            'value': 'rating',
            'body': 'по рейтингу'
        },
        {
            'value': 'movieLength',
            'body': 'по длинне'
        },
    ])

    const  getMovies = async () => {
        if (movieArr.value.length == 0) {
       await axios.get('http://localhost:3000/docs?_limit=100')
                .then(function (response) {
                    movieArr.value.push(...response.data)
                })
        }

    }
    const getMovie =  (id) => {
      axios.get(`http://localhost:3000/docs?id=${id}`)
            .then(function (response) {
                movieObj.value = response.data[0]
            })
    }


    const selectRatingFilm = () => {
        if(selectedArr.value.length > 0){
            selectedArr.value = []
        }
        selectedArr.value =  movieArr.value.filter(m => movieObj.value.rating.kp - 0.2 < m.rating.kp && movieObj.value.rating.kp + 0.2 > m.rating.kp && m.rating.kp != movieObj.value.rating.kp ? true : false)
    }

    const movieFilter = (value) => {
        if (value == 'rating') {
            movieArr.value.sort((movie1, movie2) => {
                return movie2[value].kp - movie1[value].kp
            })
        } else {
            movieArr.value.sort((movie1, movie2) => {
                return movie2[value] - movie1[value]
            })
        }

    }
    watch(
        () => userRating,
        (state) => {
            localStorage.setItem("userRating", JSON.stringify(state));
        },
        { deep: true }
    );
    watch(
        () => userBookmarks,
        (state) => {
            localStorage.setItem("userBookmarks", JSON.stringify(state));
        },
        { deep: true }
    );
    watch(
        () => movieObj,
        (state) => {
            recalcStar.value = !recalcStar.value;
        },
        { deep: true }
    );
    return {
        recalcStar,
        selectRatingFilm,
        movieFilter,
        selectedArr,
        getMovies,
        getMovie,
        movieArr,
        movieObj,
        arrFilterTitle,
        userRating,
        userBookmarks
    }
})
