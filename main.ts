// Question # 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need 
//to send out a new set of invitations. You’ll have to think of someone else to invite.
//Start with your program from Exercise 14. Add a print statement at the end of your program stating 
//the name of the guest who can’t make it.
//" Modify your list, replacing the name of the guest who can’t make it with the name of the new person 
//you are inviting.
//" Print a second set of invitation messages, one for each person who is still in your list.
let quest_list : String [] = ['Aliha' , 'Alishma' , 'Fatima' , 'Nouman' , 'Talha'];
for(let i=0; i<quest_list.length; i++){
    console.log('Respected Sir/Madam ' +  quest_list[i] + ',\n we invited you on dinner tomorrow.\nThank you\n')
}
let not_present : String = 'Talha';
let new_quest : String = 'Aysha';
quest_list[5] = new_quest;
for(let i=0; i<quest_list.length; i++){
    console.log('Respected Sir/Madam ' +  quest_list[i] + ',\n we invited you on dinner tomorrow.\nThank you\n')
}
console.log(`Mr. ${not_present} will not coming tomorrow dinner`)