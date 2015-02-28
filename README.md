# SE_OptionalFeatures
A userscript for the StackExchange websites to add a bunch of (optional) features.

#How to use, requirements, how it works
1. Install the script
2. Go to any SE site (eg. www.superuser.com or www.stackoverflow.com)
3. A dialog box should popup asking you to select the features you want

If you ever want to change your options, a link - `add features` - is added in your profile at the top right (*not* in the header)

**You need to have a browser compatible with Greasemonkey, or Tampermokey (or similar), because this script relies on `GM_*` features**. For example, Chrome with Tampermonkey, or Firefox with Greasemonkey.

In case you're wondering, it works by using `GM_setValue` to save your options and then calling the appropiate functions according to your options.

#What features are included?
These link to their corresponding MSE feature-request, if applicable:

- [Make the topbar fixed (stay at the top as you scroll)](http://meta.stackexchange.com/questions/101385/should-the-top-navigation-be-frozen-optional) (v0.1)
- [Unfade low score answers](http://meta.stackexchange.com/questions/129593/un-fade-low-score-answers-on-rollover-or-click) (v0.1)
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
