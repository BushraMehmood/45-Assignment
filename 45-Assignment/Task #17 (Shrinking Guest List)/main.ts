//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let Guest_List :string[] = ["Bushra", "Mehmood", "Khan"];
console.log("\n New List Of Invitition\n");
for (let y=0; y < Guest_List.length; y++){
    console.log(`Dear ${Guest_List[y]} : \n You are invited to Dinner!\n`);
}

console.log("we have a Announcement,Now We have arranged bigger dinner table! Our new guests are: \n");

Guest_List.unshift("Sidra");
Guest_List.splice(2,0, "Shaheen");
Guest_List.push("Yousufzai");
for (let z=0; z < Guest_List.length; z++){
    console.log(`Dear ${Guest_List[z]} : \n You are invited to Dinner!\n`);

}
console.log("Unfortunately, The new dinner table won't arrive in time,so we can invite only two people for dinner. \n")

while (Guest_List.length>2){
    let notInvited = Guest_List.pop()
    console.log(`Sorry! Due to limited space we can't invite you to dinner ${notInvited} \n`);
}
for (let z=0; z < Guest_List.length; z++){
    console.log(`Dear ${Guest_List[z]} : \n You are still invited to Dinner!\n`);
}

Guest_List.pop()
Guest_List.pop()
console.log(Guest_List);