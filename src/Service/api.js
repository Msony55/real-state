
const fakedata =
    [
      {
        "name": "MS Dhoni",
        "builder": "dhoni",
        "price": "msdhoni@gmail.com",
        "phone": "4563214530",
        "desc":"First one",
        "id": 1
      },
      {
        "name": "Mohd Shami",
        "builder": "mohdshami",
        "price": "shami@gmail.com",
        "phone": "7896547896",
        "desc":"Second One",
        "id": 4
      },
      {
        "name": "KL Rahul",
        "builder": "klrahul",
        "price": "rahul@gmail.com",
        "phone": "7458965874",
        "desc":"Third one",
        "id": 5
      },
      {
        "name": "Shikhar Dhawan",
        "builder": "dhawansikhar",
        "price": "dhawan@gmail.com",
        "phone": "4569874563",
        "desc": "Fourth one",
        "id": 6
      }
    ];

   
export const getProps = async (id) => {
    id = id || '';
    return fakedata;
 }

export const addProp = async (id) => {
    return fakedata[id] ;
}

export const deleteProp = async (id) => {
    return fakedata[id];
}

export const editProp = async (id) => {
    return fakedata[id];
}