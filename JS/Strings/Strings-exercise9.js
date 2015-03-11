function extractEmails(text){
	var emails =text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi)
	return emails;
}

var text= "We will enter a few emails to solve this exercise: ana.muller@globant.com, ani.mullerr@gmail.com, ana.muller@cs.uns.edu.ar, and others like feseba@gmail.com and milcar564@hotmail.com. I included 5 emails."

console.log (extractEmails(text));