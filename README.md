# jepretgrams
a simple photo sharing apps

# what is jepretgrams?
adalah sebuah web app sederhana yang nantinya berfungsi sebagai situs mini social media yang mirip seperti Instagram, dimana setiap user nantinya dapat mendaftar dan juga membagikan/mengupload sebuah photo beserta caption ke web app tersebut.

#Build set up

##Server
```
npm install
npm start /nodemon start

```
##Client

```
npm install
npm run dev

```

#Routing

**Route** | **HTTP** | **Descrition**
----------|----------|---------------
/users/signup | POST | sign up user
/users/login | GET | login user
/photo | GET | Get all photos
/photo | POST | Add new photo
/photo/:id | PUT | Edit caption
/photo/:id | DELETE | Remove a photo
/likephoto/:id | POST | Love photo





