function isNumber(data) {
    const regex = new RegExp(/^[-?0-9]+S/);
    return regex.test(data);
}

function money(data) {
    const trim = data.trim().replaceAll(',','');
    return isNumber(trim) ? trim.replace(/\B(?=(\d{3})+(?!\d))/g,'','') : '';
}

const map = new Map();

map.set("money", { regex: new RegExp(), format : money});

export default {
    getValidator : function(validator) {
        return map.get(validator);
    }
}