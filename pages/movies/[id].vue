<script setup>
    //{ "Response" : "False" , "Error" : "Incorrect IMDb ID."}
    const route = useRoute();
    const { data } = await useFetch(`http://www.omdbapi.com/?apikey=8e3f600b&i=${route.params.id}`, {
        pick : ["Plot", "Title" , "Poster"],
        key : `/movies/${route.params.id}`,
        onResponse({request , response}) {
            if(response._data.Error === "Incorrect IMDb ID.") {
                showError({statusCode : 404, statusMessage : "Page Not Found"});    
            }
        }
    }
);
    useHead({
        title : data.value.Title,
        meta : [
            {name : "description" , content : data.value.Plot},
            {property : "og:description", content : data.value.Plot},
            {property : 'og:image' , content : data.value.Poster},
            {name : "twitter:card" , content : `summary_large_image`}
        ]
    })
</script>

<template>
    <div>
        <h1>
            {{ data }}
        </h1>
    </div>
</template>