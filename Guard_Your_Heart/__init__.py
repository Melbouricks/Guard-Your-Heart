# Importing require libs
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import timedelta
import pandas as pd

# creating reuired objects for flask to run 
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
db = SQLAlchemy(app)
app.secret_key = "melbouricks"
app.permanent_session_lifetime = timedelta(minutes=30)

from Guard_Your_Heart import routes