const formatDate = date => {
    const splitDate = date.split("T")[0];
    const year = splitDate.split("-")[0];
    const month = splitDate.split("-")[1];
    const day = splitDate.split("-")[2];

    const dateString = `${day}/${month}/${year}`;
    
    const time = date.split("T")[1];
    const hour = time.split(":")[0];
    const minutes = time.split(":")[1];

    const timeString = `${hour}:${minutes}`;
        

    return (`${dateString} - ${timeString}`);
}

export default formatDate;