//Seeing the World: Think of at least five places in the world you’d like to visit.

import { Console } from "console";

//• Store the locations in a array. Make sure the array is not in alphabetical order.
let favouriteplace: string[] = ["Saudia","Iran","Turkey","Maldive","Oman"]
//• Print your array in its original order.
console.log("original order"+favouriteplace);

//• Print your array in alphabetical order without modifying the actual list.
console.log("alphabetical order "+[...favouriteplace].sort()+"\n");
//• Show that your array is still in its original order by printing it.
console.log("original order "+favouriteplace+"\n");
//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log("reverse alphabetical "+[...favouriteplace].sort().reverse()+"\n");
//• Show that your array is still in its original order by printing it again.
console.log("original order "+favouriteplace+"\n");
//• Reverse the order of your list. Print the array to show that its order has changed.
console.log("reverse the order of list "+favouriteplace.reverse()+"\n");
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("reverse the order of list "+favouriteplace.reverse()+"\n");
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("alphabetical order "+favouriteplace.sort()+"\n");
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("alphabetical order "+favouriteplace.sort().reverse()+"\n");