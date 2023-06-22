### Requirements

The program runs in a REPL like irb or in a browser console.

It's fine to use Ruby or JavaScript.

Your job is to return the middle letter of a word. If the word's length is odd, return the middle letter. If the word's length is even, return the middle 2 letters.

Acceptance Criteria

get_middle("test") # => "es"
get_middle("testing") # => "t"
get_middle("middle") # => "dd"
get_middle("A") # => "A"
get_middle("of") # => "of"

### My Solution working in a REPL
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

### Feedback
From Will Davies

1. When the developer flails
None

2. Is their process clear?
Record if the developer indicates what stage of their process they're at throughout the session.
Did it stop at some point?
Did one stage last most of the session?
Were there lots of stage jumps?

3. Record other feedback you notice
Set up environment well, defined empty function according to acceptability criteria in order to set up Jest tests, readme with requirements was a great shout.
Corrected Jest syntax quickly
Identified simplest case to test drive, which I thought was great
But then moved on to ‘even string length’, which was maybe a bit contradictory?
Quickly searched for documentation on isEven(), and I liked that you chose to leave it
Was there a refactoring opportunity once ‘even string length’ was implemented?
Skipped TDD at one point, but spotted quickly
Maybe could have called your shots more?
Good switch to debugging conditional when appropriate
Could have debugged in REPL when confused about undefined return
Good explanation of your understanding when you realised what the issue was
As part of your debugging abstracted into `middle`, which you could have used as refactoring tool
Cool thing with REPL start! I’m not sure it was worth prioritising over refactoring, however. I was satisfied that it would have run as intended when imported to node. Also, being picky, was “the program launches the REPL itself” part of the requirements?
You did then move away from this solution, which I thought was good judgement
Yeah, there was a significant refactoring opportunity that you missed out on until the very end. Refactoring after each pass is better practice.
Good to see you commit (I didn’t do this!). You could have committed more frequently, after each successful testdriving loop