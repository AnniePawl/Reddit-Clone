## Game Plan
- Focus on "user-centered" development
- Develop simple template, then it's actual backend logic

## Learning Outcomes
- Implement large scale app using Express, Handlebars, and MongoDB
- Implement an authentication flow through JWTs that allows users to signup, login, and logout
- Learn how to use the populate method in Mongoose for advanced associations
- Implement more intricate CRUD tests

## Technical Planning
1. *Create a post*
    - Make post route(`/posts/new`) and templates(`posts-new.handlebars`)
    - Add form to `posts-new` template
    - Make `create` posts route, check that form data sends
    - Add `Post` model w/ Mongoose
    - Confirm posts save to database
2. Show all posts
3. Comment on posts
4. Create subreddit
5. Create a post on a subreddit
6. Show all subreddits
7. Sign up
8. Login
9. Associate posts, comments, and votes with their author
10. Make comments on posts
11. Vote a post up or down
12. Search
