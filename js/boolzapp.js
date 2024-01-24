console.log("Vue Ok", Vue);

//creo l'app Vue
const { createApp } = Vue;
const app = createApp ({
    data: () => ({

    })
});

app.mount("#root");