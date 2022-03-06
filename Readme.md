# This project is created by Anushka Bajpai

# Here is how you can use and run this project
1. Frontend code folder: file-upload
2. Backend code folder: backend
3. Installations (version which it is tested on):
	a. node.js (v14.17.1)
	b. npm (6.14.13)
	c. angular-cli (~12.2.3)
	d. python (v3.7.8)
	e. pip (22.0.3)
	f. Flask (2.0.3)
	g. Werkzeug (2.0.3)
	
4. Setting Proxy
	Go To 'C:\Windows\System32\drivers\etc'
	Edit hosts file 
	Add line:
		127.0.0.1       localhost		file-upload.com

5. Run commands:
	a. Frontend: 
		ng serve --disable-host-check --proxy-config src/proxy.conf.json
	b. Backend: 
		cd backend 
		python app.py
	c. Browser url:
		http://file-upload.com:4200/

6. Upload Folder: uploads

#For any queries and issues please reach out to anushkabajpai31@gmail.com
	
	