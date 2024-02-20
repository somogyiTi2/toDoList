import React from 'react'

const Time = () => {
    let date = new Date();
    let datelong = (date.getFullYear() + '.' + date.getMonth() + '.' + date.getDay());
    let todaytime = (date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());

    return { datelong, todaytime }

}

export default Time 