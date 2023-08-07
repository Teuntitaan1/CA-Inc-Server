const User = {
    Username : "Teunnemans",
    Password : "TestPassword",
    UUID : "AKBIPO123HB13R42314FPIHB",

    Active_Chats : [],
    Contacts : [],

    Messages_Send : 0,
    Messages_Received : 0,
    Account_Creation_Date : Date.now(),

    Profile_Picture : "Blob of profile picture",
    Bio : "Hi my name is Teun and i love fishing"
};

const Chat = {
    Name : "C5V1 Groepsapp",
    Profile_Picture : "Blob of profile picture",
    Description : "The Best Chat Ever",
    Chat_Creation_Date : Date.now(),

    Messages : [],
    Media : ["Must be a Media_Item object"]

    // More to add?
    
};

const Message = {
    Author : "User object so in this case Teunnemans",
    Message : "Hi my name is Teun and i love fishing",
    Media : ["Must be a Media_Item object"],

    Send_Date : Date.now(),

};

const Media_Item = {
    Type : "Image",
    Extension : ".jpg",
    Contents : "Blob of Media_Item",
    Size : "150000(bytes)",
    Author : "Teunnemans",
}





// Data builders

function User(Item) {
    return {
        Username : "Teunnemans",
        Password : "TestPassword",
        UUID : "AKBIPO123HB13R42314FPIHB",
    
        Active_Chats : [],
        Contacts : [],
    
        Messages_Send : 0,
        Messages_Received : 0,
        Account_Creation_Date : Date.now(),
    
        Profile_Picture : "Blob of profile picture",
        Bio : "Hi my name is Teun and i love fishing"
    }
}

function Chat(Item) {
    return {
        Name : "C5V1 Groepsapp",
        Profile_Picture : "Blob of profile picture",
        Description : "The Best Chat Ever",
        Chat_Creation_Date : Date.now(),
    
        Messages : [],
        Media : ["Must be a Media_Item object"]
    
    }
}

function Message(Item) {
    return {
        Author : "User object so in this case Teunnemans",
        Message : "Hi my name is Teun and i love fishing",
        Media : ["Must be a Media_Item object"],

        Send_Date : Date.now(),
    }
}


function Media_Item(Item) {
    return {
        Type : "Image",
        Extension : ".jpg",
        Contents : "Blob of Media_Item",
        Size : "150000(bytes)",
        Author : "Teunnemans",
    }
}