function minmax(data) {
    return data.sort();
}

var a = ['D', 'U', 'M', 'B', 'W', 'A', 'Y', 'S',];

var hasil = minmax(a);
console.log('value terkecil adalah '+hasil[0]+ ' dan value terbesar adalah '+ hasil.pop())