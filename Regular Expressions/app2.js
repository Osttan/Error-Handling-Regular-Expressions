let re;

// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i; // Must start with
re = /d$/i; // Must end with
re = /^hello$/i; //Must begin and end with
re = /h.llo/; // Matches any ONE character in the . place
re = /h*llo/; // Matches any character 0 or more times in the . place
re = /gre?a?y/i; // Optional character, pode inclusive não ser nenhum dos dois
re = /gre?a?y\?/i; // Escape character

// Brackets [] - Character Sets
re = /gr[ae]y/i; // Must be an a or e
re = /[GF]ray/; // Must be a G or F
re = /[^GF]ray/i; // Match anything except a G or F
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any lowercase letter
re = /[A-Za-z]ray/; // Match any letter
re = /[0-9]ray]/; // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i; // Must occur exactly the amount of times between the range
re = /Hel{2,}o/i; // Must occur at least {m} times

// Parenthesis () - Grouping
re = /([0-9]x){3}/;

// Shorthand Character Classes
re = /\w/; // WORD character - alphanumeric or _
re = /\w+/; // + = one or more
re = /\W/; // Non-WORD characters
re = /\d/; // Match any digit
re = /\d+/; // Match any digit 0 or more times
re = /\D/; // Match any Non-digit
re = /\s/; // Match white space char
re = /\S/; // Match non-white space char
re = /Hell\b/i; // Word boundary - matches the exact word

// Assertions
re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; // Match x only if NOT followed by y

// String to match
const str = "ydjnkjnxyoanajadsa";

//Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);
