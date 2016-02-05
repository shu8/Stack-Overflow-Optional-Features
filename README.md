# Stack Overflow Optional Features (SOOF)

A userscript for sites in the Stack Exchange Network to add a bunch of optional, user-selectable features via an easy-to-use control panel.

#How to use, requirements, how it works
1. Install [Tampermonkey](http://tampermonkey.net/) (for Chrome), or [Greasemonkey](http://www.greasespot.net/) (for Firefox) or similar. These are userscript managers that are required for this script to work, because they also provide support for `GM_*` functions, which this script relies on to save the options you set!
2. Install [the script](https://github.com/shu8/Stack-Overflow-Optional-Features/raw/master/features.user.js)
3. Go to any SE site (eg. www.superuser.com or www.stackoverflow.com)
4. A dialog box should popup asking you to select the features you want

If you ever want to change your options, a link - `add features` - is added in your profile at the top right (*not* in the header)

**You need to have a browser compatible with Greasemonkey, or Tampermokey (or similar), because this script relies on `GM_*` features**, as mentioned above.

In case you're wondering, it works by using `GM_setValue` to save your options and then calling the appropiate functions according to your options.

#What features are included?
In the latest version: (these link to their corresponding feature-request (from any site on the network), *if applicable*):

- [Make the topbar fixed (stay at the top as you scroll)](http://meta.stackexchange.com/questions/101385/should-the-top-navigation-be-frozen-optional) (v0.1)
- <s>[Unfade low score answers](http://meta.stackexchange.com/questions/129593/un-fade-low-score-answers-on-rollover-or-click) (v0.1)</s> (deprecated; implemented by Stack Exchange by default now)
- [Move `show more comments` link to top](http://meta.stackexchange.com/questions/55020/add-a-show-more-comments-button-to-the-top-of-a-list-of-comments) (v0.1)
- [Ellipsis after long names](http://meta.stackexchange.com/questions/244729/provide-an-ellipsis-after-a-long-name-instead-of-truncating-it) (v0.1)
- [Rename chat tabs](http://meta.stackexchange.com/questions/246289/change-the-browser-tab-title-on-chat-pages-to-chat-sitename-or-chat-room-name) (v0.1)
- [Move `start a bounty` to after the question (instead of after comments)](http://meta.stackexchange.com/questions/234095/can-we-move-start-a-bounty-to-a-more-intuitive-location) (v0.1)
- [Make the bounty box draggable](http://meta.stackexchange.com/questions/170125/make-bounty-custom-message-dialog-box-draggable) (v0.1)
- [Fade out vote signs on deleted answers](http://meta.stackexchange.com/a/174806/260841) (v0.1)
- [Replace `>` bullet points with more normal ones](http://meta.stackexchange.com/questions/195779/can-we-get-rid-of-the-disclosure-triangles-that-dont-disclose-anything-on-the-e) (v0.1)
- [Differentiate between employees<sup>1</sup>](http://meta.stackexchange.com/questions/246678/should-se-staff-have-a-special-character-in-their-user-name) (v0.1)
- [Remove exclamation mark on error](http://meta.stackexchange.com/questions/244375/you-can-only-undo-a-comment-vote-within-the-first-60-seconds) (v0.1)
- [Highlight only the tags for your 'favourite questions'](http://meta.stackexchange.com/questions/238591/should-favorite-tag-highlighting-in-question-lists-be-changed) (v0.3)
- [Show your username in the topbar](http://meta.stackexchange.com/questions/209992/my-username-instead-of-my-gravatar-in-the-top-bar) (v0.3)
- [Colour the answerer's names in comments](http://meta.stackexchange.com/questions/19574/highlight-comments-from-answer-author-in-addition-to-question-author) (v0.4)
- [Add KBD and Bullet options in editor toolbar](http://meta.stackexchange.com/questions/102841/key-equivalent-for-kbd-kbd) (v0.4) - <kbd>alt </kbd>+ <kbd>k</kbd> / <kbd>alt </kbd>+ <kbd>l</kbd>
- [Add pre-defined edit reason checkboxes on edit pages](http://meta.stackexchange.com/questions/190461/improve-the-editing-flow-with-predefined-options-for-edit-summary) (v0.4)
- [Change the 'share' link to show link as markdown format](http://meta.stackexchange.com/questions/126544/add-a-second-share-button-to-posts-with-comment-ready-links) (v0.5)
- [Add <kbd>Ctrl</kbd>+<kbd>i</kbd>,<kbd>b</kbd>,<kbd>k</kbd> support to comment fields](http://meta.stackexchange.com/questions/14756/formatting-keyboard-shortcuts-for-comments) (v0.5)
- [Add a button to reveal spoilers in a post](http://meta.stackexchange.com/questions/249808/add-a-way-to-reveal-all-spoiler-blocks-in-a-post-at-once) (v0.5)
- <s>[Highlight on hold/closed questions](http://meta.stackexchange.com/questions/250428/should-the-questions-put-on-hold-be-marked-on-questions-list-with-a-color) (v0.7)</s> (replaced by new feature in v1.4)
- Add shortcuts for adding pre-defined comments (v0.7)
- [Differentiate between empty blockquotes and spoilers](http://meta.stackexchange.com/questions/104085/differentiate-spoilers-from-empty-block-quotes) (v0.7)
- [Add reply links for quick replying](http://meta.stackexchange.com/questions/74778/add-reply-link-to-comment-that-pre-populates-comment-box-with-username) (v0.8)
- [Parse cross-site links to questions](http://meta.stackexchange.com/questions/251183/parse-question-links-from-other-se-sites) (v0.8)
- <s>[Show answer counts on sidebar](http://meta.stackexchange.com/questions/251771/show-number-of-answers-as-tooltip-in-the-sidebar-questions) (v0.9)</s> (deprecated)
- [Button to add author's name to hyperlinks](http://meta.stackexchange.com/questions/251722/is-there-a-way-to-automatically-mention-the-author-of-an-answer) (v0.9)
- [Confirm when navigating away if you have started writing a comment](http://meta.stackexchange.com/questions/252205/add-are-you-sure-you-want-to-navigate-away-from-this-page-when-writing-a-comm) (v1.0)
- [Allow you to sort bounties by their amout](http://meta.stackexchange.com/questions/7753/please-give-us-the-ability-to-sort-featured-tab-by-bounty-amount) (v1.0)
- [Add a label when the question you are viewing is a 'hot-network question'](http://meta.stackexchange.com/questions/245390/let-mods-and-10k-know-when-questions-go-hot) (v1.1)
- View links to imgur in comments inline (v1.2)
- [Show your comment and comment replies scores in your profile tabs](http://meta.stackexchange.com/questions/38285/display-the-number-of-comment-upvotes-in-recent-activity-pages) (v1.2)
- [Show tags for the question an answer belongs to on search pages](http://meta.stackexchange.com/questions/197874/include-tags-in-answers-entries-on-search-results) (v1.2)
- [Make the vote buttons sticky](http://meta.stackexchange.com/a/35047/260841) (v1.3)
- [Show title edit diffs separately](http://meta.stackexchange.com/questions/135710/please-show-changed-titles-separately-in-edit-diffs) (v1.4)
- [Show meta, chat and blog buttons on hover of a site under the StackExchange button](http://meta.stackexchange.com/questions/256183/show-the-meta-chat-and-blog-in-the-top-bar-for-other-sites-on-hover) (v1.4)
- [Notify you if a new question has been posted on the current site's meta](http://meta.stackexchange.com/questions/256318/can-high-rep-users-be-allowed-to-see-meta-notifications) (v1.4)
- [Add better CSS for voting buttons (as is on Android SE currenly)](http://meta.stackexchange.com/questions/252685/i-want-to-have-those-voting-animations-like-on-android-se-pretty-please) (v1.4)
- [Make it stand out that a question has been put on hold/closed/marked as a dupe/migrated](http://meta.stackexchange.com/questions/257021/proposal-to-make-duplicate-closed-and-migrated-in-the-title-more-obvious) (v1.4)
- [Add a tooltip to posts showing the latest revision's comment on 'edited [date] at [time]'](http://meta.stackexchange.com/questions/2315/show-reason-for-edit-without-clicking-through-to-diff) (v1.5)
- [Add a button the the editor toolbar to start side-by-side editing](http://meta.stackexchange.com/questions/253112/the-discourse-layout-for-side-by-side-markdown-preview) (v1.5)
- [Always show 'Link from the web' input field when uploading an image](http://meta.stackoverflow.com/q/306888/3541881) (v1.7)
- Show the flag outcome time when viewing your flag history (v1.7)
- Add Scroll To Top button to the topbar (v1.7)
- [Show Helpful Flag percentage when viewing your flag history](https://meta.stackoverflow.com/questions/310881/overall-percentage-of-helpful-flags) (v1.7)
- View content of linked posts inline (v1.7)

#Change Log
- 15/01/15 - v0.2: Switched from cookies to GM setValue (thanks for idea @BrockAdams)
- 16/01/15 - v0.3: Added more features (mentioned above)
- 25/01/15 - v0.4: Added more features (mentioned above)
- 22/02/15 - v0.5: Added more features (mentioned above), minor bug fix
- 28/02/15 - v0.6: Bug fixes (thanks @IlmariKaronen):
    - Works on Firefox now
    - `unspoil` feature updated
    - Popup now shows in centre of screen
    - Show descriptions after checkbox
    - Update checkbox values to saved settings when you open the dialog box
    - No more auto-delete settings after you open the dialog box
    - No annoying alert when you don't choose any options / save the options
    - Renamed save button to something more fitting
    - Compatibility with new (currently MSE-only) profiles
- 06/03/15 - v0.7: Added more features (mentioned above)
- 22/03/15 - v0.8: Added more features (mentioned above)
- 26/03/15 - v0.9: 
    - Added more features (mentioned above), 
    - updated `kbdAndBullets` function to make icons fit better
- 29/03/15 - v1.0: Added more features (mentioned above)
- 30/03/15 - v1.1: Added more features (mentioned above)
- 30/04/15 - v1.2 *(and 1.2.1)*: 
    - Added more features (mentioned above),
    - updated `employeeStar` function for animuson(!) *(and edited `answerTagsSearch` function)*
- 04/05/15 - v1.3: Added more features (mentioned above)
- 26/05/15 - v1.4: 
    - Added more features (mentioned above), 
    - updated dialog styles to match SE style, 
    - fixed some stuff that disappeared in a previous version that I forgot to add back (so some of the change log might be wrong :()
- 13/07/15 - v1.5: 
    - Added more features (mentioned above), 
    - fixed bug in `fixedTopbar` where topbar went over header originally (thanks [ArtOfCode](http://worldbuilding.stackexchange.com/users/2685/artofcode) for clever CSS 'hack' :), 
    - added auto-selection for [Change the share link to show link as markdown format](http://stackapps.com/a/6451/26088)
- 08/09/15 - v1.6: 
    - Removed no longer neccessary feature (implemented by SE now), 
    - fixed bug where the mod diamond and help menu would merge together, 
    - used my own [SE Helper functions](https://github.com/shu8/Stack-Overflow-Optional-Features/blob/develop/helperFunctions.js) to avoid repetitive code in getting common info like site names, reputation, usernames, etc..., 
    - removed fade effect on the `metaChatBlogStackExchangeButton` feature, 
    - [reimplemented the sticky vote buttons](https://github.com/shu8/Stack-Overflow-Optional-Features/pull/14), to fix a few bugs!
- 06/12/15 - v1.7:
    - Added more features (mentioned above),
    - Changed `addSBSBtn` function (Side-by-side editing) to use [zsego's](https://github.com/shu8/SE-Answers_scripts/pull/2) rewritten version to add more features: You can now use side-by-side editing in edits, and you can toggle it on and off! Thanks zsego! :)
    - Renamed project to `Stack Overflow Optional Features`, as suggested at https://github.com/shu8/Stack-Overflow-Optional-Features/issues/42
- DEVELOP - v1.8: (mainly a 'behind the scenes' update :)
    - Fixed a bunch of bugs that had been standing for quite a while
    - Completed the rename of the project to SOOF (in the CSS and UI elements)

---

Descriptions of features (and how to use them)
-

- Make the topbar fixed:
Make the topbar stay at the top of the screen as you scroll down

- <s> Unfade low score answers:
When you rollover posts with a score of -3 or less, ungray them out so you can read them properly</s> **This feature is now implemented by default by Stack Exchange, no longer needed in this script!**

- Move `show more comments` link to top:
The `show x more comments` link is by default shown at the bottom of the comments section. But that can be annoying if you're trying to read through a 'conversation' - this will clone the link and put it before the actual comments as well

- Ellipsis after long names:
If you have a long username that gets cut off, this will add elipses instead. eg: `very long username blah blah blah` would normally be shown like `very long username bl` but this will make it `very long username...`

- Rename chat tabs:
Prefix all tabs on the chat section of the site with `Chat - `

- Move `start a bounty` to after the question (instead of after comments):
Pretty self explanatory

- Make the bounty box draggable:
The bounty box cannot be moved around, unlike other dialogs, this makes it draggable

- Fade out vote signs on deleted answers:
Deleted answers (which have a red background) cannot be voted on - so this slighly grays out the vote signs and vote count - it makes more sense!

- Replace `>` bullet points with more normal ones:
When suggesting edits, the box on the right has some 'tips', but those tips have `>` as their bullet symbol - this makes you think you can expand it - but you can't, so this replaces it with normal symbols

- Differentiate between employees<sup>1</sup>:
Add a star after names of employees (may be wrong, which is why the toolip says `possible employee`!

- Remove exclamation mark on error:
Pretty self explanatory

- Highlight only the tags for your 'favourite questions':
The default highlighing system for favourite questions can be pretty overwhelming - this removes the colouring and replaces it with only highlighting the tags of favourite questions, to make it more easy on the eye, and simpler

- Show your username in the topbar:
Pretty self explanatory

- Colour the answerer's names in comments:
Just like the OP's name in comments are highlighted, this highlights answerer's names in comments

- Add KBD and Bullet options in editor toolbar:
Adds buttons and shortcuts to surround selected text with `kbd` tags (<kbd>alt </kbd> + <kbd>k</kbd>) and add dashes (`-`) to a list to make it a list (<kbd>alt </kbd> + <kbd>l</kbd>)

- Add pre-defined edit reason checkboxes on edit pages:
Adds checkboxes under suggested edit Edit Reason textbox for adding user-defined reasons automatically. ***To set these reasons***, go to `help` (in the topbar) > `Edit Reasons`

- Change the 'share' link to show link as markdown format:
Changes the link given in the 'share' link to one in markdown format. ie. url --> [title](url)

- Add <kbd>Ctrl</kbd>+<kbd>i</kbd>,<kbd>b</kbd>,<kbd>k</kbd> support to comment fields:
Allows you to *italicise*, **bolden**, and add `code backticks` to comments via keyboard shortcuts

- Add a button to reveal spoilers in a post:
Adds a button under a post to 'unspoil' all spoilers in that post - useful if there are loads of spoilers in a post

- Highlight on hold/closed questions:
<s>Highlights on hold/closed questions when viewing question lists</s> **This has been replaces by the better feature `Make it stand out that a question has been put on hold/closed/marked as a dupe/migrated` in v1.4**

- Add shortcuts for adding pre-defined comments:
Allows you to use keyboard shortcuts to insert user-defined shortcuts in comments. ***To change these comments***, go to any post, click `add a comments`, press <kbd>alt</kbd>+<kbd>o</kbd> to **o**pen the dialog - from here you can edit/delete/add comments

- Differentiate between empty blockquotes and spoilers:
Adds `hover to show spoiler` to spoilers

- Add reply links for quick replying:
Adds reply links to comments to auto-insert the username of the commenter

- Parse cross-site links to questions:
Parses cross-site links when viewing them. eg. meta.stackexchange.com/questions/2312231/blah-blah --> Blah Blah

- Show answer counts on sidebar:
<s>Shows the answer counts to questions shown on the Linked/Related section on the sidebar in their tooltip</s>
**I have removed this feature because I felt that it was sending to many API requests and I kept on getting throttle violations; I can only think other users would be facing this issue as well.**

- Button to add author's name to hyperlinks:
Adds a button on the editor toolbar to show a dialog to insert a hyperlink with the post's author automatically fetched an inserted

- Confirm when navigating away if you have started writing a comment:
Adds a confirmation dialog before you navigate away on pages where you have started to write a comment

- Allow you to sort bounties by their amout:
Adds a filter on pages with bounties listed to sort by bounty amount (largest first or smallest first). Note: Only sorts bounties on the current page

- Add a label when the question you are viewing is a 'hot-network question':
Adds a label next to the title ad under view count if the current question is hot (over the network)

- View links to imgur in comments inline:
Converts links to imgur in comments to actual images to avoid clicks!

- Show your comment and comment replies scores in your profile tabs:
Adds a button next to comments in your profile page activities tab to show the comment's vote count

- Show tags for the question an answer belongs to on search pages:
Adds the tags for the question that an answer belongs to underneath the post when searching (for better context whilst searching)

- Make the vote buttons sticky:
Makes the vote buttons next to a post sticky whilst scrolling on that post

- Show title edit diffs separately:
Shows any title edits as separate green and red parts - so you can actually read the edit! 

- Show meta, chat and blog buttons on hover of a site under the StackExchange button: 
Self explanatory

- Notify you if a new question has been posted on the current site's meta:
Adds a diamond to the topbar that goes red if a new question has been posted on the current site's meta

- Add better CSS for voting buttons (as is on Android SE currenly):
Pulse on click and hover of voting button. Cool animation on click

- Make it stand out that a question has been put on hold/closed/marked as a dupe/migrated:
Adds a coloured box at the end of a title (that replaces the standard `[duplicate]`, etc...) so you know instanly the state of a question

- Add a tooltip to posts showing the latest revision's comment on 'edited [date] at [time]':
Hovering over the `edited [date] at [time]` will show that post's latest revision comment

- Add a button the the editor toolbar to start side-by-side editing:
A button `SBS` is added to the editor toolbar when answering/asking a question. Clicking it will change some CSS to cause the preview and the markdown to appear side-by-side

- Always show 'Link from the web' input field when uploading an image:
Removes the annoying 'you can also provide a link from the web' button, and shows the URL input field by default! Code by Siguza <http://meta.stackoverflow.com/a/306901/3541881>! :)

- Show the flag outcome time when viewing your flag history:
Shows the time the flags were marked as helpful/declined/etc... in the flag history page (this is currently only a tooltip, so the script adds it as real text). More info [here](https://github.com/shu8/Stack-Overflow-Optional-Features/pull/32).

- Add Scroll To Top button to the topbar:
Adds a button to the topbar to scroll back to the top if the top of the page is more than 100px. **Requires 'Fixed Topbar' to be enabled!** More info [here](https://github.com/shu8/Stack-Overflow-Optional-Features/pull/34).

- Show Overall Helpful Flag Percentage when viewing your flag history:
Shows the overall helpful flag percentage when viewing your flag history, takes into concidertion pending, aged away and [disputed flags](http://meta.stackexchange.com/a/95277/307724). More info [here](https://github.com/shu8/Stack-Overflow-Optional-Features/issues/37) The percentage is displayed in 5 colors:
  * > 90% will be displayed in Green
  * > 80% will be displayed in Blue
  * > 70% will be displayed in Gold
  * > 60% will be displayed in Orange
  * < 60% will be displayed in Red

- View content of linked posts inline:
Adds arrows to expand and show the content of linked posts (works only for links on the same site!)

---

I've 'migrated' this from my Gist over [here](https://gist.github.com/shu8/daae9127fa0fe06d5e4d) because I think a proper repo is better - so I've 'edited' the script a few times in a few minutes at the start - those are the first 6 versions (0.1 up to and including 0.6).
