const {createApp} = Vue;

createApp(
    {
        data() {
            return {
                message: 'Hello World',
                image: 'img/city-dark.jpeg'
            };
        }
    }
).mount('#app');