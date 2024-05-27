//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let Guest_List = ["Bushra", "Mehmood", "Khan"];
console.log("\n New List Of Invitition\n");
for (let y = 0; y < Guest_List.length; y++) {
    console.log(`Dear ${Guest_List[y]} : \n You are invited to Dinner!\n`);
}
console.log("we have a Announcement,Now We have arranged bigger dinner table! Our new guests are: \n");
Guest_List.unshift("Sidra");
Guest_List.splice(2, 0, "Shaheen");
Guest_List.push("Yousufzai");
for (let z = 0; z < Guest_List.length; z++) {
    console.log(`Dear ${Guest_List[z]} : \n You are invited to Dinner!\n`);
}
export {};
