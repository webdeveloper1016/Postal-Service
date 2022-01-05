# git-gen

## Guide
1. Create a new repo as public.
2. Plz download contribute.py file in your local machine.
3. Change the contribute.py code default values in parser.add_argument(...)
4. Run downloaded file with below command
```bash
python contribute.py --repository=https://github.com/created_repo_name.git
```
5. Push commits into github using gitbash or github desktop

## There are some customizations with command

```bash
-da or --days_ago
-nw or --no_weekends
-md or --max_commits
-fr or --frequency
-r or --repository
-un or --user_name
-ue or --user_email
```

## Troubleshooting
["Help, I keep getting a 'Permission Denied (publickey)' error when I push!"](https://gist.github.com/adamjohnson/5682757)

This means, on your local machine, you haven't made any SSH keys. Not to worry. Here's how to fix:

Open git bash (Use the Windows search. To find it, type "git bash") or the Mac Terminal. Pro Tip: You can use any *nix based command prompt (but not the default Windows Command Prompt!)
Type cd ~/.ssh. This will take you to the root directory for Git (Likely C:\Users\[YOUR-USER-NAME]\.ssh\ on Windows)
Within the .ssh folder, there should be these two files: id_rsa and id_rsa.pub. These are the files that tell your computer how to communicate with GitHub, BitBucket, or any other Git based service. Type ls to see a directory listing. If those two files don't show up, proceed to the next step. NOTE: Your SSH keys must be named id_rsa and id_rsa.pub in order for Git, GitHub, and BitBucket to recognize them by default.
To create the SSH keys, type ssh-keygen -t rsa -C "your_email@example.com". This will create both id_rsa and id_rsa.pub files.
Now, go and open id_rsa.pub in your favorite text editor (you can do this via Windows Explorer or the OSX Finder if you like, typing open . will open the folder).
Copy the contents--exactly as it appears, with no extra spaces or lines--of id_rsa.pub and paste it into GitHub and/or BitBucket under the Account Settings > SSH Keys. NOTE: I like to give the SSH key a descriptive name, usually with the name of the workstation I'm on along with the date.
Now that you've added your public key to Github and/or BitBucket, try to git push again and see if it works. It should!
More help available from GitHub on creating SSH Keys and BitBucket Help.