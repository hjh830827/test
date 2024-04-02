export default {
    methods: {
        isNumber(data) {
            console.log('isNumber : ', data);
            const regex = new RegExp(/^[0-9]+$/);
            return regex.test(data);
        }
    },
    directives: {
        money: {
            mounted(el) {
                el.addEventListener("input", (e) => {
                    const trim = e.target.value.trim().replaceAll(',','');
                    const regex = new RegExp(/^[0-9]+$/);
                    e.target.value = regex.test(trim) ? trim.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '';
                })
            }
        },
    }
}