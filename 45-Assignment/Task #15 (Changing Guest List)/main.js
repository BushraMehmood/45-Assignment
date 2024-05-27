"use strict";
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
let Guest_List = ["Bushra", "Mehmood", "Khan"];
for (let x = 0; x < Guest_List.length; x++) {
    console.log(`Dear ${Guest_List[x]} : \n You are invited to Dinner!\n`);
}
console.log(`"Unfortunately ${Guest_List[1]}, can't come to dinner."`);
Guest_List[1] = "Sidra";
console.log("\n New List Of Invitition\n");
for (let y = 0; y < Guest_List.length; y++) {
    console.log(`Dear ${Guest_List[y]} : \n You are invited to Dinner!\n`);
}
