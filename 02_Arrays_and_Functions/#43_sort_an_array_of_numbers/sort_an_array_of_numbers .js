let grades = [100, 50, 90, 60, 80, 70];

// sắp xếp theo giảm dần
grades = grades.sort(descendingSort)


// sắp xếp theo tăng dần
// grades = grades.sort(ascendingSort)


grades.forEach(print)


// descendingSort: sắp xếp giảm dần
function descendingSort (x, y){
    return y - x;
}

function ascendingSort (x, y) {
    return x - y
}

function print(element){
    console.log(element);
}