Requirements

The program runs in a REPL like irb or in a browser console.

It's fine to use Ruby or JavaScript.

Your job is to return the middle letter of a word. If the word's length is odd, return the middle letter. If the word's length is even, return the middle 2 letters.

Acceptance Criteria

get_middle("test") # => "es"
get_middle("testing") # => "t"
get_middle("middle") # => "dd"
get_middle("A") # => "A"
get_middle("of") # => "of"


```
➜  src git:(main) ✗ node index.js
> getMiddle('jack')
'ac'
> getMiddle('test')
'es'
> getMiddle('testing')
't'
> getMiddle('middle')
'dd'
> getMiddle("A")
'A'
> getMiddle('of')
'of'
>
```