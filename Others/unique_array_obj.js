const response = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
    },
    {
        "id": 4,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
    },

];

// # Method -1
function unique(data){
    return data.filter((item, index, self)=>{
        console.log('index: ', index);
        return index === self.findIndex((ele)=>{
            return item.name == ele.name
        })
    })
}

//console.log(unique(response))

// # Method -2
const key = 'name';

const arrayUniqueByKey = [...new Map(response.map(item => [item[key], item])).values()];

console.log(arrayUniqueByKey);

