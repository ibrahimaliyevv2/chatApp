const toUser = document.querySelector(".to-user");
const loginPageContainer = document.querySelector(".login-page");

//Users

const users = [
    {
        id: 1,
        login: 'user1',
        password: '12345',
    },
    {
        id: 2,
        login: 'user2',
        password: '12345',
    },
    {
        id: 3,
        login: 'user3',
        password: '12345',
    },
    {
        id: 4,
        login: 'user4',
        password: '12345',
    },
    {
        id: 5,
        login: 'user5',
        password: '12345',
    },
    {
        id: 6,
        login: 'user6',
        password: '12345',
    },
    {
        id: 7,
        login: 'user7',
        password: '12345',
    },
    {
        id: 8,
        login: 'user8',
        password: '12345',
    },
    {
        id: 9,
        login: 'user9',
        password: '12345',
    },
    {
        id: 10,
        login: 'user10',
        password: '12345',
    },
]

//Login part

let loginTry;
let passTry;
let currentUser;

document.querySelector("#loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    login();
});

function login() {
    loginTry = document.getElementById("username").value;
    passTry = document.getElementById("password").value;
    currentUser = users.find(user => {
        return user.login === loginTry && user.password === passTry
    })


    loginPageContainer.style.display = "none";
    toUser.style.display = "block";
    generateUI();


    loginTry = "";
    passTry = "";

}


//logout part

const logOutButton = document.querySelectorAll(".logout");

logOutButton.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        logOut();
    })
})


function logOut() {
    loginPageContainer.style.display = "block";
    toUser.style.display = "none";

    loginTry = "";
    passTry = "";
}



//Messaging part

var messages = [];

class Message {
    constructor({ id, senderId, receiverId, text }) {
        this.id = id;
        this.senderId = senderId;
        this.receiverId = receiverId;
        this.text = text;
    }
    save() {
        messages.push(this);
        return this.get();
    }
    get() {
        return {
            id: this.id,
            senderId: this.senderId,
            receiverId: this.receiverId,
            text: this.text
        };
    }
}


function generateUI() {
    //contacts
    const contactList = document.querySelector(".contacts-list");
    const contactsAbove = document.querySelector("#contacts-above");

    let contacts = users.filter(user => user.id != currentUser.id);



    contacts.forEach(contact => {

        const contactListItem = document.createElement("li");
        contactListItem.classList.add("p-2");
        contactListItem.classList.add("border-bottom");
        contactListItem.style.backgroundColor = "#eee";

        contactListItem.innerHTML = `
            <a href="#!" class="d-flex justify-content-between">
                <div class="d-flex flex-row">
                    <div class="pt-1">
                        <p class="fw-bold mb-0">${contact.login}</p>
                    </div>
                </div>
            </a>
`;

        contactList.append(contactListItem);


      

});

contacts.forEach(contact=>{
    const listAbove = document.createElement("li");
    listAbove.classList.add("contact-list-above");

    listAbove.innerHTML = `
    <a href="" class="contacts-list-above">${contact.login}</a>
    `;


    contactsAbove.append(listAbove);
})


    //show current user
    document.querySelector(".current-user").textContent = currentUser.login;


}


function sendMessage(credentials){
    return (new Message(credentials)).save();
}

function receiveMessage(message){
    message.text
}

const sendBtn = document.querySelector(".send-btn");

sendBtn.addEventListener("click", function(){
    let newMessage = document.createElement("li");

})


function generateUIForMessages(){
    const messageListUnstyled = document.querySelector(".list-unstyled");

    const messageListItem = document.createElement("li");

    messageListItem.classList.add("d-flex");
    messageListItem.classList.add("justify-content-between");
    messageListItem.classList.add("mb-4");

    

}

var rooms = [];

