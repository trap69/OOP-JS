console.log('hey');

class Person {
    constructor(name, lastname, cardId, address, phoneNumber){
        this.name = name;
        this.lastname =lastname;
        this.lastname =lastname;
        this.cardId = cardId;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }

    info(){
        return this.name + " " + this.lastname + " " + this.phoneNumber;
    }
    get Person_name (){
        return this.name;
    }
    bookfsForReading(book){
        this.book.push(book);
    }


}

// Konkretaus objekto sukurimas klases pagrindu
const client_1 = new Person('Jefas','Josefino', 1234567890, 'Laisves al., Kaunas', '+36567989123');

client_1.phoneNumber = '1232131232312';

console.log(client_1.info());

