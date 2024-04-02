import axios from "axios";

function HEADER_JSON() {
    return {
        headers : {
            "Content-Type" : "application/json",
        }
    }
}

// 프로젝트 API result 0 성공 / 1 실패 
// const RESULT = {
//     SUCESS : 0,
//     FAIL : 1
// }


function doResponse(res, onSuccess, onFail, param) {
    if(onSuccess) onSuccess(res, param);

    // 실제 프로젝트 구성시 프로젝트마다 방식 처리
    // if(data.result === RESULT.SUCESS) {
    //     if(onSuccess) onSuccess(data, param);
    // } else {
    //     if(onFail){
    //         const alert = {
    //             title : "서비스 에러",
    //             code : data.code,
    //             message : data.message
    //         }
    //         onFail(alert, param);
    //     }
    // }
}

function doError(onFail, param) {
    if(onFail){
        const alert = {
            title : "네트워크 에러",
            message : "API 호출 과정에 에러가 발생하였습니다."
        } 
        onFail(alert, param);
    }
}

/**
 * test reponse 구조
 * {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
   }
 */
export default {
    // api url / request data / success callBack / fail callBack
    get : function(path, param, onSuccess, onFail) {
        let url = path;
        if(param) url += "?" + Object.keys(param).map(key => key + '=' + param[key]).join('&');
        axios
            .get(url, HEADER_JSON())
            .then((res) => doResponse(res, onSuccess, onFail, param))
            .catch(() => doError(onFail, param))
    }
} 