class SupportGuys {
    name;
    role = 'support mango people';
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    startSession(){
        console.log(this.name, 'start giving support');
    }
};

const aamirKhan = new SupportGuys('Aamir Khan', 'India');
const babulKhan = new SupportGuys('Bulbul Khan', 'BD');
// console.log(aamirKhan, babulKhan);
aamirKhan.startSession();
babulKhan.startSession();