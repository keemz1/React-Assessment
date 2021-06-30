
async function swapiStorage(url,page=1,arrayList=[]) {

        return await fetch(`${url}${page}`)
        .then(response => response.json())
        .then(json => {
            json?.results?.map((res,index)=>(
                Object.keys(res)
                .map(async(key,i)=>{
                    console.log('test: ',json.results[index][key])
                    if (key === 'homeworld') {
                        await fetch(res[key])
                    .then(response => response.json())
                    .then((world) => {json.results[index][key]=world.name})
                    }
                    if (key === 'species') {
                        await fetch(res[key])
                    .then(response => response.json())
                    .then((world) => {json.results[index][key]=world.name})
                    }
                    if (key === 'vehicle') {
                        await fetch(res[key])
                    .then(response => response.json())
                    .then((world) => {json.results[index][key]=world.name})
                    }
                    if (key === 'starships') {
                        await fetch(res[key])
                    .then(response => response.json())
                    .then((world) => {json.results[index][key]=world.name})
                    }
                })
            ))
            const response = [...arrayList,...json.results];
            if(json.length !== 0 && json.next !== null){
                page++
                return swapiStorage(url,page,response)
            }
            return response
        });
}

export default swapiStorage