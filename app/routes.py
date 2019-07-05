import os
from app import app
from flask import render_template, request, redirect




from flask_pymongo import PyMongo

# name of database
app.config['MONGO_DBNAME'] = 'announcementsDB' 

# URI of database
app.config['MONGO_URI'] = 'mongodb+srv://admin:uv4U6pAPuvwVmfSA@cluster0-qezhz.mongodb.net/announcementsDB?retryWrites=true&w=majority' 

mongo = PyMongo(app)


# INDEX

@app.route('/')
@app.route('/index')

def index():
    collection = mongo.db.announcementsList
    # find data
    allAnnouncements = collection.find({})
    
    return render_template('index.html', allAnnouncements = allAnnouncements)




#New Announcement Route
@app.route('/newannouncement')

def newannouncement():
    # connect to the database
    #collection = mongo.db.announcementsList
    # insert new data
    #collection.insert({"submitter":"DanS"})
    return render_template('newannouncement.html')

#Confirmation Route
@app.route('/confirmation', methods=['GET', 'POST'])

def confirmation():
    if request.method == "GET":
        return redirect('/')
    else:
        submitterName = request.form['submitterName']
        clubOrGroup = request.form['clubOrGroup']
        startDate = request.form['startDate']
        endDate = request.form['endDate']
        myAnnouncement = request.form['myAnnouncement']
        
        collection = mongo.db.announcementsList
        collection.insert({"submitterName": submitterName, "clubOrGroup": clubOrGroup, "startDate": startDate, "endDate": endDate, "myAnnouncement": myAnnouncement })
        return redirect('/')
    return render_template('confirmation.html')

# CONNECT TO DB, ADD DATA

@app.route('/add')

def add():
    # connect to the database
    collection = mongo.db.announcementsList
    # insert new data
    collection.insert({"submitter":"DanS"})
    # return a message to the user
    return "You added a new announcement!"
